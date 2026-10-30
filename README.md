# LeadScraper 🇮🇳

> **Indian Lead Scraper & Business Intelligence Engine**  
> Developed for **SN Energy Labs** ([snenergylabs.space](https://snenergylabs.space/))

A high-performance, full-stack business directory harvester and lead intelligence dashboard built specifically for the Indian market using Node.js, Express, native SQLite (WAL mode), and a responsive vanilla CSS dashboard.

---

## 🌟 Key Features

### 1. Strictly India-Only Geographic Scope
- **Complete Pan-India Coverage**: Pre-configured with all 28 States and 8 Union Territories, covering 400+ cities and commercial districts with verified PIN codes and geographic coordinates.
- **Smart Metro Aliases**: Automatically resolves canonical Indian metro aliases (*e.g., Bangalore &rarr; Bengaluru, Bombay &rarr; Mumbai, Gurgaon &rarr; Gurugram, Madras &rarr; Chennai, Poona &rarr; Pune, Calcutta &rarr; Kolkata, Baroda &rarr; Vadodara*).
- **Out-of-India Safeguard**: Strictly blocks and rejects queries for locations outside of India (*e.g., California, London, Dubai, USA, etc.*) to ensure pure domestic lead quality.

### 2. Auto-Scrape & Exhaustive Sub-Zone Decomposition
- **Every Keyword Mode (Auto Exhaustive)**: Leave the niche field blank to auto-sweep across **85+ commercial business categories** simultaneously.
- **Specific Niche Targeting**: Target specific professions or industries (*e.g., "Dentist", "Chartered Accountant", "Solar Energy", "Plumbing", "Restaurants"*).
- **Sub-Zone Micro-Targeting**: Decomposes large metro areas into discrete sub-zones and neighborhood micro-queries to ensure 100% directory density without dropping leads.

### 3. High-Performance Architecture
- **Native SQLite WAL Engine**: Employs Node.js native `DatabaseSync` in Write-Ahead Logging (WAL) mode for low-latency writes and non-blocking reads.
- **Worker Pool & Concurrency**: Multi-threaded request execution with configurable concurrency, rate limiting, and jitter to maintain polite upstream scraping.
- **Server-Sent Events (SSE)**: Live telemetry stream pushes real-time harvest metrics, worker status, and throughput directly to the frontend.

### 4. Multi-Format Data Exports
- Export any filtered dataset in:
  - **Excel (.xlsx)** with auto-sized columns, phone formatting (`+91`), and styled table headers.
  - **CSV** (RFC 4180 compliant with UTF-8 BOM).
  - **JSON** (formatted array of business objects).

---

## 📁 Project Structure

```
LeadScraper/
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules (DBs, logs, modules)
├── config.json               # Default server, crawler, and provider settings
├── package.json              # Project dependencies and npm scripts
├── server.js                 # Express server & SSE event streamer
├── data/
│   └── .gitkeep              # SQLite database storage directory
├── lib/
│   ├── db.js                 # SQLite schema & WAL connection manager
│   ├── geoData.js            # Indian geography registry, aliases & validator
│   ├── queueManager.js       # Asynchronous worker pool & task queue
│   ├── queryExpander.js      # Sub-zone decomposition & keyword taxonomies
│   ├── exportService.js      # CSV, JSON, and Excel (.xlsx) streaming exports
│   └── connectors/
│       ├── osmConnector.js       # OpenStreetMap Overpass connector
│       ├── openDataConnector.js  # India Open Data registry connector
│       ├── googleConnector.js    # Google Places API integration (optional)
│       ├── yelpConnector.js      # Commercial directory API integration (optional)
│       └── generator.js          # Indian commercial data synthesis engine
├── public/
│   ├── index.html            # Minimalist dashboard UI
│   ├── assets/               # Brand assets & SVGs
│   ├── css/
│   │   └── dashboard.css     # Clean light-themed design system
│   └── js/
│       └── app.js            # Client state, live filters, SSE listener
└── README.md                 # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ or v22+ recommended for native `node:sqlite`).
- **npm**: v8.0.0 or higher.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NShreyaash/LeadScraper.git
cd LeadScraper
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional):
```bash
cp .env.example .env
```
*(By default, the scraper operates out-of-the-box using open registries without requiring external API keys).*

### Running the Harvester

Start the production server:
```bash
npm start
```

Or run in watch mode for development:
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🔌 REST API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/health` | `GET` | Health check and uptime timestamp |
| `/api/states` | `GET` | All 36 Indian States/UTs and popular commercial cities |
| `/api/categories` | `GET` | Catalog of 85+ Indian commercial business categories |
| `/api/metrics` | `GET` | Live crawler performance, task counts, and database totals |
| `/api/businesses` | `GET` | Paginated leads directory with search, state, and category filters |
| `/api/harvest/start` | `POST` | Start a new crawler session for an Indian State/City |
| `/api/harvest/pause` | `POST` | Pause an active harvesting session |
| `/api/harvest/resume` | `POST` | Resume a paused harvesting session |
| `/api/harvest/stop` | `POST` | Stop active harvesting |
| `/api/events` | `GET` | Server-Sent Events (SSE) live telemetry feed |
| `/api/export` | `GET` | Stream dataset as `.xlsx`, `.csv`, or `.json` |

---

## 🔒 License

MIT License. Developed for **SN Energy Labs**.
