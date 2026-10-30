// REST API Controllers for Statewide Harvester & Dashboard

const express = require('express');
const router = express.Router();
const { db } = require('../lib/db');
const { INDIA_STATES, ALL_INDIA_STATES_LIST, BUSINESS_CATEGORIES, getStateData, isIndianLocation } = require('../lib/geoData');
const queueManager = require('../lib/queueManager');
const { streamCSV, streamJSON, streamExcel, getExportQuery, generateCSV, generateExcel } = require('../lib/exportService');

// System Health & Uptime
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Indian States & Union Territories Registry (Strictly India Only)
router.get('/states', (req, res) => {
  const states = ALL_INDIA_STATES_LIST.map(name => {
    const detailed = INDIA_STATES[name];
    return {
      name,
      code: detailed ? detailed.code : name.slice(0, 2).toUpperCase(),
      hasDetailedGeo: !!detailed,
      citiesCount: detailed ? detailed.cities.length : 5
    };
  });

  const popularCities = [
    'Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
    'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Surat', 'Noida', 'Gurugram',
    'Gurgaon', 'Kochi', 'Indore', 'Patna', 'Bhopal', 'Visakhapatnam', 'Vadodara',
    'Coimbatore', 'Nagpur', 'Goa', 'Dehradun', 'Amritsar', 'Bhubaneswar'
  ];

  res.json({ states, popularCities });
});

// Categories Taxonomy
router.get('/categories', (req, res) => {
  res.json({ categories: BUSINESS_CATEGORIES });
});

// Live Metrics Snapshot
router.get('/metrics', (req, res) => {
  const state = queueManager.getCurrentState();
  res.json(state);
});

// Paginated Businesses with Live Filters
router.get('/businesses', (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 25));
    const offset = (page - 1) * limit;

    const { state, category, search, noWebsiteOnly, sortBy = 'id', sortOrder = 'DESC' } = req.query;

    let whereClause = 'WHERE 1=1';
    const params = [];

    if (noWebsiteOnly === 'true' || noWebsiteOnly === '1' || noWebsiteOnly === true) {
      whereClause += ' AND has_website = 0';
    }

    if (state && state.trim()) {
      whereClause += ' AND LOWER(state) = LOWER(?)';
      params.push(state.trim());
    }

    if (category && category.trim()) {
      whereClause += ' AND category = ?';
      params.push(category.trim());
    }

    if (search && search.trim()) {
      whereClause += ' AND (name LIKE ? OR city LIKE ? OR address LIKE ? OR phone LIKE ?)';
      const term = `%${search.trim()}%`;
      params.push(term, term, term, term);
    }

    // Allowed sort columns
    const allowedSortCols = ['id', 'name', 'category', 'city', 'state', 'has_website', 'rating', 'created_at'];
    const safeSortCol = allowedSortCols.includes(sortBy) ? sortBy : 'id';
    const safeSortOrder = sortOrder.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    // Count total matching
    const countSql = `SELECT count(*) as total FROM businesses ${whereClause}`;
    const totalCount = db.prepare(countSql).get(...params).total;

    // Fetch page rows
    const dataSql = `
      SELECT * FROM businesses 
      ${whereClause} 
      ORDER BY ${safeSortCol} ${safeSortOrder} 
      LIMIT ? OFFSET ?
    `;
    const rows = db.prepare(dataSql).all(...params, limit, offset);

    // Compute stats for current filter efficiently
    let noWebsiteCount = 0;
    if (noWebsiteOnly === 'true' || noWebsiteOnly === '1' || noWebsiteOnly === true) {
      noWebsiteCount = totalCount;
    } else if (whereClause === 'WHERE 1=1') {
      noWebsiteCount = db.prepare('SELECT count(*) as count FROM businesses WHERE has_website = 0').get().count;
    } else {
      const statsSql = `SELECT count(*) as count FROM businesses ${whereClause} AND has_website = 0`;
      noWebsiteCount = db.prepare(statsSql).get(...params).count;
    }

    res.json({
      page,
      limit,
      totalCount,
      totalPages: Math.ceil(totalCount / limit) || 1,
      filterStats: {
        total: totalCount,
        noWebsite: noWebsiteCount
      },
      data: rows
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Statewide Harvesting (Strictly India Only)
router.post('/harvest/start', async (req, res) => {
  try {
    const { state, concurrency, delayMs, categories, specificNiche, targetLimit, googleApiKey, yelpApiKey } = req.body;
    if (!state || !state.trim()) {
      return res.status(400).json({ error: 'Target Indian State or City is required.' });
    }

    // Strict validation: Reject any out-of-India geography
    const geoValidation = isIndianLocation(state.trim());
    if (!geoValidation.valid) {
      return res.status(400).json({ error: geoValidation.reason });
    }

    const job = await queueManager.startStatewideHarvest(state.trim(), {
      concurrency: parseInt(concurrency) || 3,
      delayMs: parseInt(delayMs) || 250,
      categories: categories || null,
      specificNiche: specificNiche || '',
      targetLimit: parseInt(targetLimit) || 1000,
      googleApiKey,
      yelpApiKey
    });

    res.json({
      message: `Statewide harvesting started for ${job.state}`,
      job
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Pause Active Harvesting
router.post('/harvest/pause', (req, res) => {
  const success = queueManager.pause();
  res.json({ success, message: success ? 'Harvesting paused.' : 'No active session to pause.' });
});

// Resume Paused Harvesting
router.post('/harvest/resume', (req, res) => {
  const success = queueManager.resume();
  res.json({ success, message: success ? 'Harvesting resumed.' : 'No active session to resume.' });
});

// Stop Harvesting
router.post('/harvest/stop', (req, res) => {
  const success = queueManager.stop();
  res.json({ success, message: success ? 'Harvesting stopped.' : 'No active session.' });
});

// Server-Sent Events (SSE) Live Feed
router.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  queueManager.registerClient(res);
});

// Export Dataset (Streamed CSV, JSON, Excel)
router.get('/export', async (req, res) => {
  try {
    const { format = 'csv', noWebsiteOnly, state, category, search, limit } = req.query;
    const timestamp = new Date().toISOString().slice(0, 10);
    const filterTag = (noWebsiteOnly === 'true' || noWebsiteOnly === '1') ? '_no_website_leads' : '_full_directory';
    const stateTag = state ? `_${state.replace(/\s+/g, '_')}` : '';

    if (format === 'json') {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="business_leads${stateTag}${filterTag}_${timestamp}.json"`);
      return await streamJSON({ noWebsiteOnly, state, category, search, limit }, res);
    }

    if (format === 'xlsx') {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="business_leads${stateTag}${filterTag}_${timestamp}.xlsx"`);
      return await streamExcel({ noWebsiteOnly, state, category, search, limit }, res);
    }

    // Default: CSV
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="business_leads${stateTag}${filterTag}_${timestamp}.csv"`);
    return await streamCSV({ noWebsiteOnly, state, category, search, limit }, res);
  } catch (err) {
    console.error('Export error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: `Export failed: ${err.message}` });
    }
  }
});

// Reset Crawler Queue & Records
router.post('/reset', (req, res) => {
  try {
    queueManager.stop();
    const clearAll = req.body && req.body.clearAllRecords;
    if (clearAll) {
      db.exec("DELETE FROM businesses; DELETE FROM queue_tasks; DELETE FROM jobs; DELETE FROM system_logs; VACUUM;");
    } else {
      db.exec("DELETE FROM queue_tasks; UPDATE jobs SET status = 'stopped' WHERE status = 'running'; DELETE FROM system_logs;");
    }
    queueManager.currentJobId = null;
    queueManager.broadcastMetrics();
    res.json({
      message: clearAll ? 'All harvested records and queue reset successfully.' : 'Crawler queue cleared.'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
