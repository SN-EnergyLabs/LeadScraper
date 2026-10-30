const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');

// Ensure data directory exists
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'scraper.db');
const db = new DatabaseSync(dbPath);

// Enable WAL mode for high concurrency
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA synchronous = NORMAL;');
db.exec('PRAGMA foreign_keys = ON;');

// Initialize tables
function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      state TEXT NOT NULL,
      status TEXT DEFAULT 'idle', -- 'idle', 'running', 'paused', 'completed', 'stopped'
      data_source TEXT DEFAULT 'hybrid',
      total_tasks INTEGER DEFAULT 0,
      completed_tasks INTEGER DEFAULT 0,
      total_records INTEGER DEFAULT 0,
      missing_websites INTEGER DEFAULT 0,
      current_city TEXT DEFAULT '',
      current_category TEXT DEFAULT '',
      started_at TEXT,
      updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS queue_tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id INTEGER,
      state TEXT NOT NULL,
      city TEXT NOT NULL,
      county TEXT,
      zip TEXT,
      category TEXT NOT NULL,
      page INTEGER DEFAULT 1,
      status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
      retry_count INTEGER DEFAULT 0,
      error_message TEXT,
      created_at TEXT,
      updated_at TEXT,
      FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS businesses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      job_id INTEGER,
      name TEXT NOT NULL,
      category TEXT,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      zip TEXT,
      address TEXT,
      phone TEXT,
      email TEXT,
      website TEXT,
      has_website INTEGER DEFAULT 0,
      rating REAL,
      reviews_count INTEGER DEFAULT 0,
      latitude REAL,
      longitude REAL,
      source TEXT,
      created_at TEXT,
      UNIQUE(name, address, city, state) ON CONFLICT REPLACE
    );

    CREATE TABLE IF NOT EXISTS system_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      level TEXT DEFAULT 'info',
      message TEXT NOT NULL,
      created_at TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_businesses_state ON businesses(state);
    CREATE INDEX IF NOT EXISTS idx_businesses_has_website ON businesses(has_website);
    CREATE INDEX IF NOT EXISTS idx_businesses_city ON businesses(city);
    CREATE INDEX IF NOT EXISTS idx_businesses_category ON businesses(category);
    CREATE INDEX IF NOT EXISTS idx_businesses_job_id ON businesses(job_id);
    CREATE INDEX IF NOT EXISTS idx_queue_status ON queue_tasks(status, job_id);
    CREATE INDEX IF NOT EXISTS idx_queue_job_status ON queue_tasks(job_id, status, id);
  `);

  // Migrate existing table if schema had older UNIQUE(name, city, state)
  try {
    const tableInfo = db.prepare('SELECT sql FROM sqlite_master WHERE type = ? AND name = ?').get('table', 'businesses');
    if (tableInfo && tableInfo.sql && tableInfo.sql.includes('UNIQUE(name, city, state)')) {
      db.exec(`
        CREATE TABLE businesses_new (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          job_id INTEGER,
          name TEXT NOT NULL,
          category TEXT,
          city TEXT NOT NULL,
          state TEXT NOT NULL,
          zip TEXT,
          address TEXT,
          phone TEXT,
          email TEXT,
          website TEXT,
          has_website INTEGER DEFAULT 0,
          rating REAL,
          reviews_count INTEGER DEFAULT 0,
          latitude REAL,
          longitude REAL,
          source TEXT,
          created_at TEXT,
          UNIQUE(name, address, city, state) ON CONFLICT REPLACE
        );
        INSERT OR IGNORE INTO businesses_new SELECT * FROM businesses;
        DROP TABLE businesses;
        ALTER TABLE businesses_new RENAME TO businesses;
        CREATE INDEX IF NOT EXISTS idx_businesses_state ON businesses(state);
        CREATE INDEX IF NOT EXISTS idx_businesses_has_website ON businesses(has_website);
        CREATE INDEX IF NOT EXISTS idx_businesses_city ON businesses(city);
        CREATE INDEX IF NOT EXISTS idx_businesses_category ON businesses(category);
      `);
    }
  } catch (err) {
    console.error('Migration note:', err.message);
  }
}

initSchema();

module.exports = {
  db,
  initSchema
};
