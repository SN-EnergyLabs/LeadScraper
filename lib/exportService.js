// Multi-format Dataset Streaming Export Engine (CSV, JSON, Excel XLSX)
// Optimized for millions of records using cursor streaming to prevent memory spikes (OOM).

const ExcelJS = require('exceljs');
const { db } = require('./db');

function getExportStatement(options = {}) {
  let sql = 'SELECT id, name, category, city, state, zip, address, phone, email, website, has_website, rating, reviews_count, source, created_at FROM businesses WHERE 1=1';
  const params = [];

  if (options.noWebsiteOnly === true || options.noWebsiteOnly === 'true' || options.noWebsiteOnly === 1 || options.noWebsiteOnly === '1') {
    sql += ' AND has_website = 0';
  }

  if (options.state && options.state.trim()) {
    sql += ' AND LOWER(state) = LOWER(?)';
    params.push(options.state.trim());
  }

  if (options.category && options.category.trim()) {
    sql += ' AND category = ?';
    params.push(options.category.trim());
  }

  if (options.search && options.search.trim()) {
    sql += ' AND (name LIKE ? OR city LIKE ? OR address LIKE ? OR phone LIKE ?)';
    const term = `%${options.search.trim()}%`;
    params.push(term, term, term, term);
  }

  sql += ' ORDER BY id DESC';

  if (options.limit && parseInt(options.limit) > 0) {
    sql += ' LIMIT ?';
    params.push(parseInt(options.limit));
  }

  const stmt = db.prepare(sql);
  return { stmt, params };
}

function escapeCSV(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// Stream CSV directly to HTTP response with backpressure control
async function streamCSV(options, res) {
  const headers = [
    'ID', 'Business Name', 'Category', 'City', 'State', 'PIN Code',
    'Street Address', 'Phone Number', 'Email', 'Website URL', 'Has Website',
    'Rating', 'Reviews Count', 'Data Source', 'Created At'
  ];

  res.write(headers.join(',') + '\n');

  const { stmt, params } = getExportStatement(options);

  let clientClosed = false;
  res.on('close', () => { clientClosed = true; });

  let buffer = '';
  let count = 0;

  for (const r of stmt.iterate(...params)) {
    if (clientClosed) break;

    const line = [
      r.id,
      escapeCSV(r.name),
      escapeCSV(r.category),
      escapeCSV(r.city),
      escapeCSV(r.state),
      escapeCSV(r.zip),
      escapeCSV(r.address),
      escapeCSV(r.phone),
      escapeCSV(r.email),
      escapeCSV(r.website),
      r.has_website === 1 ? 'Yes' : 'No',
      r.rating !== null ? r.rating : '',
      r.reviews_count !== null ? r.reviews_count : '',
      escapeCSV(r.source),
      escapeCSV(r.created_at)
    ].join(',');

    buffer += line + '\n';
    count++;

    // Flush in chunks of 2,000 lines
    if (count % 2000 === 0) {
      const canWrite = res.write(buffer);
      buffer = '';
      if (!canWrite && !clientClosed) {
        await new Promise(resolve => res.once('drain', resolve));
      }
    }
  }

  if (!clientClosed && buffer.length > 0) {
    res.write(buffer);
  }

  if (!clientClosed) {
    res.end();
  }
}

// Stream JSON array directly to HTTP response
async function streamJSON(options, res) {
  res.write('[\n');

  const { stmt, params } = getExportStatement(options);

  let clientClosed = false;
  res.on('close', () => { clientClosed = true; });

  let isFirst = true;
  let buffer = '';
  let count = 0;

  for (const r of stmt.iterate(...params)) {
    if (clientClosed) break;

    const prefix = isFirst ? '  ' : ',\n  ';
    isFirst = false;
    buffer += prefix + JSON.stringify(r);
    count++;

    if (count % 1000 === 0) {
      const canWrite = res.write(buffer);
      buffer = '';
      if (!canWrite && !clientClosed) {
        await new Promise(resolve => res.once('drain', resolve));
      }
    }
  }

  if (!clientClosed && buffer.length > 0) {
    res.write(buffer);
  }

  if (!clientClosed) {
    res.write('\n]\n');
    res.end();
  }
}

// Stream Excel (.xlsx) using ExcelJS streaming WorkbookWriter
async function streamExcel(options, res) {
  const workbook = new ExcelJS.stream.xlsx.WorkbookWriter({
    stream: res,
    useStyles: true
  });

  const sheet = workbook.addWorksheet('Business Directory', {
    views: [{ state: 'frozen', ySplit: 1 }]
  });

  sheet.columns = [
    { header: 'ID', key: 'id', width: 8 },
    { header: 'Business Name', key: 'name', width: 32 },
    { header: 'Category', key: 'category', width: 24 },
    { header: 'City', key: 'city', width: 18 },
    { header: 'State', key: 'state', width: 14 },
    { header: 'PIN Code', key: 'zip', width: 12 },
    { header: 'Street Address', key: 'address', width: 36 },
    { header: 'Phone Number', key: 'phone', width: 18 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Website URL', key: 'website', width: 32 },
    { header: 'Website Status', key: 'website_status', width: 22 },
    { header: 'Rating', key: 'rating', width: 10 },
    { header: 'Reviews', key: 'reviews_count', width: 10 },
    { header: 'Source', key: 'source', width: 22 }
  ];

  // Header row formatting
  const headerRow = sheet.getRow(1);
  headerRow.height = 24;
  headerRow.eachCell(cell => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1E293B' }
    };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });

  const { stmt, params } = getExportStatement(options);
  // Cap Excel export to 100,000 rows max (XLSX worksheet limit is 1,048,576 rows)
  const maxExcelRows = Math.min(parseInt(options.limit) || 100000, 1000000);

  let clientClosed = false;
  res.on('close', () => { clientClosed = true; });

  let count = 0;
  for (const r of stmt.iterate(...params)) {
    if (clientClosed) break;
    if (count >= maxExcelRows) break;
    count++;

    const row = sheet.addRow({
      id: r.id,
      name: r.name,
      category: r.category,
      city: r.city,
      state: r.state,
      zip: r.zip,
      address: r.address,
      phone: r.phone,
      email: r.email,
      website: r.website || '(None)',
      website_status: r.has_website === 1 ? 'HAS WEBSITE' : 'NO WEBSITE (LEAD OPPORTUNITY)',
      rating: r.rating,
      reviews_count: r.reviews_count,
      source: r.source
    });

    if (r.has_website === 0) {
      const statusCell = row.getCell('website_status');
      statusCell.font = { color: { argb: 'FFB45309' }, bold: true };
    }

    row.commit();
  }

  sheet.commit();
  await workbook.commit();
}

// Fallback for smaller memory operations
function getExportQuery(options = {}) {
  const { stmt, params } = getExportStatement({ ...options, limit: options.limit || 50000 });
  return stmt.all(...params);
}

function generateCSV(rows) {
  const headers = [
    'ID', 'Business Name', 'Category', 'City', 'State', 'PIN Code',
    'Street Address', 'Phone Number', 'Email', 'Website URL', 'Has Website',
    'Rating', 'Reviews Count', 'Data Source', 'Created At'
  ];

  const lines = [headers.join(',')];
  for (const r of rows) {
    lines.push([
      r.id,
      escapeCSV(r.name),
      escapeCSV(r.category),
      escapeCSV(r.city),
      escapeCSV(r.state),
      escapeCSV(r.zip),
      escapeCSV(r.address),
      escapeCSV(r.phone),
      escapeCSV(r.email),
      escapeCSV(r.website),
      r.has_website === 1 ? 'Yes' : 'No',
      r.rating || '',
      r.reviews_count || '',
      escapeCSV(r.source),
      escapeCSV(r.created_at)
    ].join(','));
  }
  return lines.join('\n');
}

async function generateExcel(rows) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Business Directory');
  sheet.columns = [
    { header: 'ID', key: 'id', width: 8 },
    { header: 'Business Name', key: 'name', width: 32 },
    { header: 'Category', key: 'category', width: 24 },
    { header: 'City', key: 'city', width: 18 },
    { header: 'State', key: 'state', width: 14 },
    { header: 'PIN Code', key: 'zip', width: 12 },
    { header: 'Street Address', key: 'address', width: 36 },
    { header: 'Phone Number', key: 'phone', width: 18 },
    { header: 'Email', key: 'email', width: 26 },
    { header: 'Website URL', key: 'website', width: 32 },
    { header: 'Website Status', key: 'website_status', width: 18 },
    { header: 'Rating', key: 'rating', width: 10 },
    { header: 'Reviews', key: 'reviews_count', width: 10 },
    { header: 'Source', key: 'source', width: 22 }
  ];
  for (const r of rows) {
    sheet.addRow(r);
  }
  return await workbook.xlsx.writeBuffer();
}

module.exports = {
  getExportStatement,
  streamCSV,
  streamJSON,
  streamExcel,
  getExportQuery,
  generateCSV,
  generateExcel
};
