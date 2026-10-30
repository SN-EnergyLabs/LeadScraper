// Universal Statewide Business Harvester & Dashboard Server

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRouter = require('./routes/api');
const queueManager = require('./lib/queueManager');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend dashboard
app.use(express.static(path.join(__dirname, 'public')));

// Mount API routes
app.use('/api', apiRouter);

// Catch-all fallback route to serve dashboard in Express 5
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🌐 Universal Statewide Business Scraper Dashboard`);
  console.log(`⚡ Server running at: http://localhost:${PORT}`);
  console.log(`📡 Real-time SSE Telemetry active at: http://localhost:${PORT}/api/events`);
  console.log(`=======================================================`);
});

// Graceful Shutdown
function handleShutdown(signal) {
  console.log(`\nReceived ${signal}. Gracefully stopping scraper queue and persisting state...`);
  queueManager.pause();
  server.close(() => {
    console.log('Server shut down cleanly.');
    process.exit(0);
  });
}

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));

module.exports = { app, server };
