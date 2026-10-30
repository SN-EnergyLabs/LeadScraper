// Universal Statewide Business Harvester & Intelligence Dashboard Controller (Light Theme Edition)

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentPage: 1,
    limit: 25,
    search: '',
    category: '',
    filterState: '',
    sortBy: 'id',
    sortOrder: 'DESC',
    noWebsiteOnly: false,
    selectedExportFormat: 'csv',
    harvestStatus: 'idle',
    currentBusinessesMap: {},
    settings: {
      googleKey: localStorage.getItem('apex_google_key') || '',
      yelpKey: localStorage.getItem('apex_yelp_key') || '',
      delayMs: parseInt(localStorage.getItem('apex_delay_ms')) || 350
    }
  };

  // DOM Elements
  const el = {
    targetState: document.getElementById('targetState'),
    targetNiche: document.getElementById('targetNiche'),
    badgeAutoMode: document.getElementById('badgeAutoMode'),
    btnClearNiche: document.getElementById('btnClearNiche'),
    pillAllKeywords: document.getElementById('pillAllKeywords'),
    targetLimitSelect: document.getElementById('targetLimitSelect'),
    btnToggleManualGoal: document.getElementById('btnToggleManualGoal'),
    goalToggleLabel: document.getElementById('goalToggleLabel'),
    goalSelectWrapper: document.getElementById('goalSelectWrapper'),
    goalManualWrapper: document.getElementById('goalManualWrapper'),
    targetLimitCustom: document.getElementById('targetLimitCustom'),
    btnPresetGoal: document.getElementById('btnPresetGoal'),
    statesDatalist: document.getElementById('statesDatalist'),
    categorySelect: document.getElementById('categorySelect'),
    workerConcurrency: document.getElementById('workerConcurrency'),
    concurrencyValue: document.getElementById('concurrencyValue'),
    btnStart: document.getElementById('btnStart'),
    btnPause: document.getElementById('btnPause'),
    btnResume: document.getElementById('btnResume'),
    btnStop: document.getElementById('btnStop'),
    btnExport: document.getElementById('btnExport'),
    btnSettings: document.getElementById('btnSettings'),
    btnResetDB: document.getElementById('btnResetDB'),
    btnRefreshTable: document.getElementById('btnRefreshTable'),
    btnClearLogs: document.getElementById('btnClearLogs'),
    toggleNoWebsite: document.getElementById('toggleNoWebsite'),
    btnQuickExcelFromFilter: document.getElementById('btnQuickExcelFromFilter'),
    btnQuickExcelLeads: document.getElementById('btnQuickExcelLeads'),
    btnDownloadExcelTable: document.getElementById('btnDownloadExcelTable'),
    btnDownloadCSVTable: document.getElementById('btnDownloadCSVTable'),
    btnExcelLabel: document.getElementById('btnExcelLabel'),
    tableSearch: document.getElementById('tableSearch'),
    filterCategory: document.getElementById('filterCategory'),
    filterState: document.getElementById('filterState'),
    filterSort: document.getElementById('filterSort'),
    tableBody: document.getElementById('tableBody'),
    dataCountBadge: document.getElementById('dataCountBadge'),
    filterStatusPill: document.getElementById('filterStatusPill'),
    showingStart: document.getElementById('showingStart'),
    showingEnd: document.getElementById('showingEnd'),
    showingTotal: document.getElementById('showingTotal'),
    pageSizeSelect: document.getElementById('pageSizeSelect'),
    btnPrevPage: document.getElementById('btnPrevPage'),
    btnNextPage: document.getElementById('btnNextPage'),
    pageCurrentDisplay: document.getElementById('pageCurrentDisplay'),
    consoleLogBox: document.getElementById('consoleLogBox'),
    engineStatusText: document.getElementById('engineStatusText'),
    // Metrics Elements
    metricTotalRecords: document.getElementById('metricTotalRecords'),
    metricMissingWebsites: document.getElementById('metricMissingWebsites'),
    metricMissingPct: document.getElementById('metricMissingPct'),
    metricCompletionPct: document.getElementById('metricCompletionPct'),
    metricActiveCity: document.getElementById('metricActiveCity'),
    metricTaskCount: document.getElementById('metricTaskCount'),
    metricCurrentState: document.getElementById('metricCurrentState'),
    progressFill: document.getElementById('progressFill'),
    metricActiveWorkers: document.getElementById('metricActiveWorkers'),
    metricQueueStatus: document.getElementById('metricQueueStatus'),
    metricPendingTasks: document.getElementById('metricPendingTasks'),
    metricCompletedTasks: document.getElementById('metricCompletedTasks'),
    // Modals
    exportModal: document.getElementById('exportModal'),
    settingsModal: document.getElementById('settingsModal'),
    detailModal: document.getElementById('detailModal'),
    btnConfirmExport: document.getElementById('btnConfirmExport'),
    exportOnlyNoWebsite: document.getElementById('exportOnlyNoWebsite'),
    btnSaveSettings: document.getElementById('btnSaveSettings'),
    cfgGoogleKey: document.getElementById('cfgGoogleKey'),
    cfgYelpKey: document.getElementById('cfgYelpKey'),
    cfgDelay: document.getElementById('cfgDelay'),
    toastContainer: document.getElementById('toastContainer')
  };

  // Initialize
  init();

  async function init() {
    setupEventListeners();
    await loadStatesAndCategories();
    await fetchMetrics();
    await fetchBusinesses();
    connectSSE();

    // Populate settings inputs
    el.cfgGoogleKey.value = state.settings.googleKey;
    el.cfgYelpKey.value = state.settings.yelpKey;
    el.cfgDelay.value = state.settings.delayMs;
  }

  // Event Listeners
  function setupEventListeners() {
    // Clear niche input button (Resets back to Auto-Scrape Every Keyword)
    if (el.btnClearNiche) {
      el.btnClearNiche.addEventListener('click', () => {
        if (el.targetNiche) el.targetNiche.value = '';
        el.btnClearNiche.style.display = 'none';
        if (el.badgeAutoMode) {
          el.badgeAutoMode.textContent = '⚡ Auto-Scraping Every Keyword';
          el.badgeAutoMode.classList.remove('specific');
        }
        if (el.targetNiche) el.targetNiche.focus();
      });
    }

    // React dynamically when user types in targetNiche input
    // If empty: automatically sets to auto-scrape every keyword!
    if (el.targetNiche) {
      el.targetNiche.addEventListener('input', () => {
        const val = el.targetNiche.value.trim();
        if (!val || val.toLowerCase() === 'all') {
          if (el.btnClearNiche) el.btnClearNiche.style.display = 'none';
          if (el.badgeAutoMode) {
            el.badgeAutoMode.textContent = '⚡ Auto-Scraping Every Keyword';
            el.badgeAutoMode.classList.remove('specific');
          }
        } else {
          if (el.btnClearNiche) el.btnClearNiche.style.display = 'flex';
          if (el.badgeAutoMode) {
            el.badgeAutoMode.textContent = `Target: ${val}`;
            el.badgeAutoMode.classList.add('specific');
          }
        }
      });
    }

    // Concurrency selector
    el.workerConcurrency.addEventListener('change', (e) => {
      el.concurrencyValue.textContent = e.target.value;
    });

    // Leads Goal: Handle dropdown "Custom Number..." selection
    if (el.targetLimitSelect) {
      el.targetLimitSelect.addEventListener('change', () => {
        if (el.targetLimitSelect.value === 'custom') {
          showManualGoalInput();
        }
      });
    }

    // Toggle button on Leads Goal label (Manual <-> Presets)
    if (el.btnToggleManualGoal) {
      el.btnToggleManualGoal.addEventListener('click', () => {
        const isCurrentlyManual = el.goalManualWrapper && el.goalManualWrapper.style.display !== 'none';
        if (isCurrentlyManual) {
          showPresetGoalSelect();
        } else {
          showManualGoalInput();
        }
      });
    }

    // Switch back to presets button inside manual input
    if (el.btnPresetGoal) {
      el.btnPresetGoal.addEventListener('click', () => {
        showPresetGoalSelect();
      });
    }

    function showManualGoalInput() {
      if (el.goalSelectWrapper) el.goalSelectWrapper.style.display = 'none';
      if (el.goalManualWrapper) el.goalManualWrapper.style.display = 'block';
      if (el.goalToggleLabel) el.goalToggleLabel.textContent = 'Presets';
      if (el.targetLimitCustom) {
        if (el.targetLimitSelect && el.targetLimitSelect.value !== 'custom') {
          el.targetLimitCustom.value = el.targetLimitSelect.value;
        }
        el.targetLimitCustom.focus();
        el.targetLimitCustom.select();
      }
    }

    function showPresetGoalSelect() {
      if (el.goalManualWrapper) el.goalManualWrapper.style.display = 'none';
      if (el.goalSelectWrapper) el.goalSelectWrapper.style.display = 'block';
      if (el.goalToggleLabel) el.goalToggleLabel.textContent = 'Manual';
      if (el.targetLimitSelect && el.targetLimitCustom) {
        const customVal = el.targetLimitCustom.value;
        const exists = Array.from(el.targetLimitSelect.options).some(o => o.value === customVal);
        if (exists) {
          el.targetLimitSelect.value = customVal;
        } else {
          el.targetLimitSelect.value = '1000';
        }
      }
    }

    // Crawling Action Buttons (Only starts when Start button clicked)
    el.btnStart.addEventListener('click', startHarvest);
    el.btnPause.addEventListener('click', pauseHarvest);
    el.btnResume.addEventListener('click', resumeHarvest);
    el.btnStop.addEventListener('click', stopHarvest);

    // Businesses Without a Website Toggle (if present)
    if (el.toggleNoWebsite) {
      el.toggleNoWebsite.addEventListener('click', () => {
        state.noWebsiteOnly = !state.noWebsiteOnly;
        el.toggleNoWebsite.classList.toggle('active', state.noWebsiteOnly);
        if (el.filterStatusPill) el.filterStatusPill.style.display = state.noWebsiteOnly ? 'inline-block' : 'none';

        // Show/hide direct 1-click Download Excel Leads button on filter card
        const excelBtnDisplay = state.noWebsiteOnly ? 'inline-flex' : 'none';
        if (el.btnQuickExcelFromFilter) el.btnQuickExcelFromFilter.style.display = excelBtnDisplay;
        
        // Update label on table header Excel button
        if (el.btnExcelLabel) {
          el.btnExcelLabel.textContent = state.noWebsiteOnly ? 'Download Filtered Excel (.xlsx)' : 'Download Excel (.xlsx)';
        }
        lucide.createIcons();

        state.currentPage = 1;
        fetchBusinesses();
        showToast(
          state.noWebsiteOnly ? 'Lead Filter Active: Showing Businesses Without a Website' : 'Lead Filter Cleared: Showing All Businesses',
          state.noWebsiteOnly ? 'warning' : 'info'
        );
      });
    }

    // Universal Download Handler (Excel / CSV)
    // Allows downloading ALL data or filtered data without requiring the filter to be turned on!
    function downloadDataset(format = 'xlsx') {
      const onlyNoWeb = state.noWebsiteOnly ? 'true' : 'false';
      const stateParam = state.filterState ? encodeURIComponent(state.filterState) : '';
      const categoryParam = state.category ? encodeURIComponent(state.category) : '';
      const searchParam = state.search ? encodeURIComponent(state.search) : '';

      const downloadUrl = `/api/export?format=${format}&noWebsiteOnly=${onlyNoWeb}&state=${stateParam}&category=${categoryParam}&search=${searchParam}`;
      window.location.href = downloadUrl;

      const filterMsg = state.noWebsiteOnly ? 'filtered missing-website leads' : 'all harvested businesses';
      showToast(`Generating ${format.toUpperCase()} download for ${filterMsg}...`, 'success');
    }

    if (el.btnDownloadExcelTable) {
      el.btnDownloadExcelTable.addEventListener('click', () => downloadDataset('xlsx'));
    }
    if (el.btnDownloadCSVTable) {
      el.btnDownloadCSVTable.addEventListener('click', () => downloadDataset('csv'));
    }
    if (el.btnQuickExcelFromFilter) {
      el.btnQuickExcelFromFilter.addEventListener('click', () => downloadDataset('xlsx'));
    }
    if (el.btnQuickExcelLeads) {
      el.btnQuickExcelLeads.addEventListener('click', () => downloadDataset('xlsx'));
    }

    // Table Search with Debounce
    let searchTimer;
    el.tableSearch.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.search = e.target.value.trim();
        state.currentPage = 1;
        fetchBusinesses();
      }, 250);
    });

    // Table Filters
    el.filterCategory.addEventListener('change', (e) => {
      state.category = e.target.value;
      state.currentPage = 1;
      fetchBusinesses();
    });

    el.filterState.addEventListener('change', (e) => {
      state.filterState = e.target.value;
      state.currentPage = 1;
      fetchBusinesses();
    });

    el.filterSort.addEventListener('change', (e) => {
      const [col, order] = e.target.value.split('_');
      state.sortBy = col;
      state.sortOrder = order;
      state.currentPage = 1;
      fetchBusinesses();
    });

    // Column Sorting
    document.querySelectorAll('.business-table thead th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const sortCol = th.dataset.sort;
        if (state.sortBy === sortCol) {
          state.sortOrder = state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        } else {
          state.sortBy = sortCol;
          state.sortOrder = 'ASC';
        }
        fetchBusinesses();
      });
    });

    // Pagination
    el.btnPrevPage.addEventListener('click', () => {
      if (state.currentPage > 1) {
        state.currentPage--;
        fetchBusinesses();
      }
    });

    el.btnNextPage.addEventListener('click', () => {
      state.currentPage++;
      fetchBusinesses();
    });

    el.pageSizeSelect.addEventListener('change', (e) => {
      state.limit = parseInt(e.target.value);
      state.currentPage = 1;
      fetchBusinesses();
    });

    el.btnRefreshTable.addEventListener('click', () => {
      fetchBusinesses();
      showToast('Table refreshed', 'info');
    });

    // Clear logs (if console is present)
    if (el.btnClearLogs) {
      el.btnClearLogs.addEventListener('click', () => {
        if (el.consoleLogBox) el.consoleLogBox.innerHTML = '';
        addLogEntry({ timestamp: new Date().toISOString(), level: 'info', message: 'Log buffer cleared.' });
      });
    }

    // Reset Crawler Queue & Records
    el.btnResetDB.addEventListener('click', async () => {
      const choice = confirm('Reset database and clear all records to start fresh as a brand-new tool?\n\n• Click OK to clear all harvested leads.\n• Click Cancel to keep current state.');
      if (choice) {
        try {
          const res = await fetch('/api/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clearAllRecords: true })
          });
          if (res.ok) {
            showToast('Database reset. System ready as brand new tool!', 'success');
            setButtonState('idle');
            await fetchMetrics();
            await fetchBusinesses();
          }
        } catch (e) {
          showToast('Failed to reset: ' + e.message, 'error');
        }
      }
    });

    // Modals
    el.btnExport.addEventListener('click', () => {
      // Sync checkbox with current filter state: unchecked if filter is off!
      if (el.exportOnlyNoWebsite) {
        el.exportOnlyNoWebsite.checked = state.noWebsiteOnly;
      }
      openModal(el.exportModal);
    });
    el.btnSettings.addEventListener('click', () => openModal(el.settingsModal));

    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.close;
        closeModal(document.getElementById(modalId));
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
      });
    });

    // Export Format Selector in Modal
    document.querySelectorAll('.export-card-btn').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.export-card-btn').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.selectedExportFormat = card.dataset.format;
      });
    });

    // Confirm Download Export
    el.btnConfirmExport.addEventListener('click', () => {
      const format = state.selectedExportFormat || 'csv';
      const onlyNoWeb = el.exportOnlyNoWebsite.checked ? 'true' : 'false';
      const stateParam = state.filterState ? encodeURIComponent(state.filterState) : '';
      const categoryParam = state.category ? encodeURIComponent(state.category) : '';

      const downloadUrl = `/api/export?format=${format}&noWebsiteOnly=${onlyNoWeb}&state=${stateParam}&category=${categoryParam}`;
      window.location.href = downloadUrl;
      closeModal(el.exportModal);
      showToast(`Generating ${format.toUpperCase()} export...`, 'success');
    });

    // Save Settings
    el.btnSaveSettings.addEventListener('click', () => {
      state.settings.googleKey = el.cfgGoogleKey.value.trim();
      state.settings.yelpKey = el.cfgYelpKey.value.trim();
      state.settings.delayMs = parseInt(el.cfgDelay.value) || 350;

      localStorage.setItem('apex_google_key', state.settings.googleKey);
      localStorage.setItem('apex_yelp_key', state.settings.yelpKey);
      localStorage.setItem('apex_delay_ms', state.settings.delayMs);

      closeModal(el.settingsModal);
      showToast('Crawler settings saved', 'success');
    });

    // Global Keyboard Shortcuts (Press '/' to search, 'Esc' to close modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
      }
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'SELECT') {
        e.preventDefault();
        if (el.tableSearch) {
          el.tableSearch.focus();
          el.tableSearch.select();
        }
      }
    });
  }

  // Load States and Categories from API
  async function loadStatesAndCategories() {
    try {
      const [statesRes, catRes] = await Promise.all([
        fetch('/api/states'),
        fetch('/api/categories')
      ]);

      if (statesRes.ok) {
        const { states, popularCities = [] } = await statesRes.json();
        const stateOptions = states.map(s => `<option value="${s.name}">${s.name} (State / UT)</option>`).join('');
        const cityOptions = popularCities.map(c => `<option value="${c}">${c} (City)</option>`).join('');
        el.statesDatalist.innerHTML = stateOptions + cityOptions;
      }

      if (catRes.ok) {
        const { categories } = await catRes.json();
        const optionsHtml = categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
        if (el.categorySelect) {
          el.categorySelect.innerHTML = `<option value="">All Industry Sectors (Full Spectrum)</option>` + optionsHtml;
        }
        if (el.filterCategory) {
          el.filterCategory.innerHTML = `<option value="">All Categories</option>` + optionsHtml;
        }
      }
    } catch (e) {
      console.error('Error loading metadata:', e);
    }
  }

  // Start Crawling (Triggered ONLY on user button click)
  async function startHarvest() {
    const targetState = el.targetState.value.trim();
    if (!targetState) {
      showToast('Please enter an Indian State or City first (e.g. Delhi, Maharashtra, Bengaluru...)', 'warning');
      el.targetState.focus();
      return;
    }

    const concurrency = parseInt(el.workerConcurrency.value) || 3;
    const selectedCategory = el.categorySelect ? el.categorySelect.value : '';
    const categories = selectedCategory ? [selectedCategory] : null;
    const specificNiche = el.targetNiche ? el.targetNiche.value.trim() : '';
    
    // Read Leads Goal (from manual input or preset select)
    let targetLimit = 1000;
    const isManualGoalActive = el.goalManualWrapper && el.goalManualWrapper.style.display !== 'none';
    if (isManualGoalActive && el.targetLimitCustom) {
      targetLimit = parseInt(el.targetLimitCustom.value) || 1000;
    } else if (el.targetLimitSelect) {
      if (el.targetLimitSelect.value === 'custom' && el.targetLimitCustom) {
        targetLimit = parseInt(el.targetLimitCustom.value) || 1000;
      } else {
        targetLimit = parseInt(el.targetLimitSelect.value) || 1000;
      }
    }
    if (targetLimit < 1) targetLimit = 100;

    try {
      el.btnStart.disabled = true;
      const res = await fetch('/api/harvest/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state: targetState,
          concurrency,
          delayMs: state.settings.delayMs,
          categories,
          specificNiche,
          targetLimit,
          googleApiKey: state.settings.googleKey,
          yelpApiKey: state.settings.yelpKey
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to start harvest');

      setButtonState('running');
      const isAuto = !specificNiche || specificNiche.toLowerCase() === 'all';
      const nicheMsg = isAuto 
        ? 'across EVERY business keyword in ' 
        : `for "${specificNiche}" in `;
      showToast(`Statewide crawling initiated ${nicheMsg}${targetState} (Target: ${targetLimit.toLocaleString()} leads)`, 'success');
      await fetchMetrics();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      el.btnStart.disabled = false;
    }
  }

  // Pause Crawling
  async function pauseHarvest() {
    try {
      const res = await fetch('/api/harvest/pause', { method: 'POST' });
      if (res.ok) {
        setButtonState('paused');
        showToast('Crawling queue paused', 'warning');
      }
    } catch (err) {
      showToast('Failed to pause: ' + err.message, 'error');
    }
  }

  // Resume Crawling
  async function resumeHarvest() {
    try {
      const res = await fetch('/api/harvest/resume', { method: 'POST' });
      if (res.ok) {
        setButtonState('running');
        showToast('Crawling resumed', 'success');
      }
    } catch (err) {
      showToast('Failed to resume: ' + err.message, 'error');
    }
  }

  // Stop Crawling
  async function stopHarvest() {
    try {
      setButtonState('idle');
      state.harvestStatus = 'idle';
      showToast('Stopping crawling engine...', 'info');

      const res = await fetch('/api/harvest/stop', { method: 'POST' });
      if (res.ok) {
        setButtonState('idle');
        showToast('Harvesting stopped successfully', 'warning');
        await fetchMetrics();
      }
    } catch (err) {
      showToast('Failed to stop: ' + err.message, 'error');
    }
  }

  // Set Button UI State
  function setButtonState(status) {
    state.harvestStatus = status;
    const indicator = el.engineStatusText ? el.engineStatusText.parentElement : null;

    if (status === 'running') {
      el.btnStart.style.display = 'none';
      el.btnPause.style.display = 'inline-flex';
      el.btnResume.style.display = 'none';
      el.btnStop.style.display = 'inline-flex';
      el.engineStatusText.textContent = 'Active';
      if (indicator) {
        indicator.classList.add('active');
        indicator.style.color = 'var(--accent-emerald)';
        indicator.style.background = 'var(--accent-emerald-light)';
        indicator.style.borderColor = 'var(--accent-emerald-border)';
      }
    } else if (status === 'paused') {
      el.btnStart.style.display = 'none';
      el.btnPause.style.display = 'none';
      el.btnResume.style.display = 'inline-flex';
      el.btnStop.style.display = 'inline-flex';
      el.engineStatusText.textContent = 'Paused';
      if (indicator) {
        indicator.classList.remove('active');
        indicator.style.color = '#B45309';
        indicator.style.background = '#FEF3C7';
        indicator.style.borderColor = '#FCD34D';
      }
    } else {
      el.btnStart.style.display = 'inline-flex';
      el.btnPause.style.display = 'none';
      el.btnResume.style.display = 'none';
      el.btnStop.style.display = 'none';
      el.engineStatusText.textContent = 'Ready';
      if (indicator) {
        indicator.classList.remove('active');
        indicator.style.color = 'var(--text-muted)';
        indicator.style.background = 'var(--bg-subtle)';
        indicator.style.borderColor = 'var(--border-subtle)';
      }
    }
    lucide.createIcons();
  }

  // Fetch Businesses Table
  async function fetchBusinesses() {
    try {
      const params = new URLSearchParams({
        page: state.currentPage,
        limit: state.limit,
        search: state.search,
        category: state.category,
        state: state.filterState,
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        noWebsiteOnly: state.noWebsiteOnly ? 'true' : 'false'
      });

      const res = await fetch(`/api/businesses?${params.toString()}`);
      if (!res.ok) return;

      const result = await res.json();
      renderTable(result);
    } catch (err) {
      console.error('Error fetching businesses:', err);
    }
  }

  // Render Table
  function renderTable(result) {
    const { data, totalCount, page, limit, totalPages } = result;

    el.dataCountBadge.textContent = `${totalCount.toLocaleString()} Records`;

    // Clear and re-populate object lookup to avoid inline quote injection bugs
    state.currentBusinessesMap = {};

    if (!data || data.length === 0) {
      el.tableBody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 48px; color: var(--text-muted);">
            <i data-lucide="inbox" style="width: 36px; height: 36px; margin-bottom: 8px; opacity: 0.5;"></i>
            <p style="font-weight: 600; color: #334155;">${state.noWebsiteOnly ? 'No matching businesses without a website found.' : 'No business records found.'}</p>
            <p style="font-size: 0.85rem; margin-top: 4px;">${state.noWebsiteOnly ? 'Try switching the toggle or clearing filters.' : 'Enter a state name above and click "Start Data Fetching".'}</p>
          </td>
        </tr>
      `;
      el.showingStart.textContent = '0';
      el.showingEnd.textContent = '0';
      el.showingTotal.textContent = '0';
      el.btnPrevPage.disabled = true;
      el.btnNextPage.disabled = true;
      el.pageCurrentDisplay.textContent = 'Page 1 of 1';
      lucide.createIcons();
      return;
    }

    const startIdx = (page - 1) * limit + 1;
    const endIdx = Math.min(startIdx + data.length - 1, totalCount);

    el.showingStart.textContent = startIdx.toLocaleString();
    el.showingEnd.textContent = endIdx.toLocaleString();
    el.showingTotal.textContent = totalCount.toLocaleString();
    el.pageCurrentDisplay.textContent = `Page ${page} of ${totalPages}`;
    el.btnPrevPage.disabled = page <= 1;
    el.btnNextPage.disabled = page >= totalPages;

    el.tableBody.innerHTML = data.map(b => {
      state.currentBusinessesMap[b.id] = b;

      const hasWeb = b.has_website === 1 && b.website && b.website.length > 0;
      const webBadge = hasWeb
        ? `<a href="${escapeHtml(b.website)}" target="_blank" rel="noopener noreferrer" class="website-badge-has" title="${escapeHtml(b.website)}">
            <i data-lucide="external-link" style="width: 13px; height: 13px;"></i>
            ${escapeHtml(truncateUrl(b.website))}
          </a>`
        : `<span class="website-badge-none" title="Missing Website - Lead Prospect">
            <i data-lucide="alert-circle" style="width: 13px; height: 13px;"></i>
            NO WEBSITE
          </span>`;

      return `
        <tr data-id="${b.id}">
          <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">#${b.id}</td>
          <td>
            <div class="biz-name-cell">
              <span>${escapeHtml(b.name)}</span>
              <div class="biz-rating">
                <i data-lucide="star" style="width: 12px; height: 12px; fill: currentColor;"></i>
                <span>${b.rating || '4.0'}</span>
                <span style="color: var(--text-muted); font-size: 0.75rem;">(${b.reviews_count || 12})</span>
              </div>
            </div>
          </td>
          <td>
            <span class="category-tag">${escapeHtml(b.category || 'General')}</span>
          </td>
          <td>
            <span style="font-weight: 600; color: var(--text-primary);">${escapeHtml(b.city)}</span>, 
            <span style="color: var(--text-muted);">${escapeHtml(b.state)}</span>
          </td>
          <td style="max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(b.address)}">
            ${escapeHtml(b.address)}
          </td>
          <td>
            <span class="phone-badge" onclick="window.copyPhone(${b.id})">
              <i data-lucide="phone" style="width: 12px; height: 12px;"></i>
              ${escapeHtml(b.phone || '-')}
            </span>
          </td>
          <td>${webBadge}</td>
          <td style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${escapeHtml(b.source || 'Public Directory')}</td>
          <td style="text-align: right;">
            <button class="btn-table-action" onclick="window.inspectBusiness(${b.id})">
              Inspect
            </button>
          </td>
        </tr>
      `;
    }).join('');

    lucide.createIcons();
  }

  // Safe phone copy function
  window.copyPhone = function(id) {
    const b = state.currentBusinessesMap[id];
    if (b && b.phone) {
      navigator.clipboard.writeText(b.phone);
      showToast(`Copied phone: ${b.phone}`, 'info');
    }
  };

  // Real-time Metrics Snapshot
  async function fetchMetrics() {
    try {
      const res = await fetch('/api/metrics');
      if (!res.ok) return;
      const data = await res.json();
      updateMetricsUI(data);
    } catch (e) {}
  }

  function updateMetricsUI(data) {
    const job = data.job;
    const totalRecords = data.totalOverall || 0;
    const missingWebsites = data.totalNoWebsite || 0;

    // Numbers display
    if (el.metricTotalRecords) el.metricTotalRecords.textContent = totalRecords.toLocaleString();
    if (el.metricMissingWebsites) el.metricMissingWebsites.textContent = missingWebsites.toLocaleString();

    // Percentage of dataset without website
    if (el.metricMissingPct) {
      const missingPct = totalRecords > 0 ? ((missingWebsites / totalRecords) * 100).toFixed(1) : 0;
      el.metricMissingPct.textContent = `${missingPct}% of Total`;
    }

    // Active Job Telemetry
    if (job && job.total_tasks > 0) {
      const pct = Math.min(100, ((job.completed_tasks / job.total_tasks) * 100).toFixed(1));
      el.metricCompletionPct.textContent = `${pct}%`;
      el.progressFill.style.width = `${pct}%`;
      el.metricTaskCount.textContent = `${job.completed_tasks} / ${job.total_tasks} Batches`;
      el.metricCurrentState.textContent = job.state;

      if (job.current_city) {
        el.metricActiveCity.textContent = job.current_city;
      }

      if (data.isStopped || (job && job.status === 'stopped') || state.harvestStatus === 'idle') {
        setButtonState('idle');
      } else if (data.isPaused || (job && job.status === 'paused')) {
        setButtonState('paused');
      } else if (job && job.status === 'completed') {
        setButtonState('idle');
        el.metricActiveCity.textContent = 'Completed (100%)';
      } else if (data.activeWorkers > 0 && !data.isStopped && job && job.status === 'running') {
        setButtonState('running');
      } else {
        setButtonState('idle');
      }
    } else {
      setButtonState('idle');
    }

    // Queue & Workers
    el.metricActiveWorkers.textContent = data.activeWorkers;
    el.metricQueueStatus.textContent = data.activeWorkers > 0 ? `${data.activeWorkers} active` : 'Idle';

    if (data.queueStats) {
      el.metricPendingTasks.textContent = `${data.queueStats.pending} in Queue`;
      el.metricCompletedTasks.textContent = `${data.queueStats.completed} Completed`;
    }
  }

  // Server-Sent Events (SSE) Live Feed
  function connectSSE() {
    const evtSource = new EventSource('/api/events');

    evtSource.addEventListener('metrics_update', (e) => {
      const data = JSON.parse(e.data);
      updateMetricsUI(data);
    });

    evtSource.addEventListener('records_harvested', (e) => {
      if (state.currentPage === 1) {
        fetchBusinesses();
      }
    });

    evtSource.addEventListener('log', (e) => {
      const logData = JSON.parse(e.data);
      addLogEntry(logData);
    });

    evtSource.onerror = () => {
      // Browser EventSource automatically reconnects
    };
  }

  // Add Terminal Log Entry
  function addLogEntry({ timestamp, level, message }) {
    if (!el.consoleLogBox) return;
    const timeStr = timestamp ? timestamp.slice(11, 19) : new Date().toTimeString().slice(0, 8);
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
      <span class="log-time">[${timeStr}]</span>
      <span class="log-level ${level}">${level}</span>
      <span class="log-msg">${escapeHtml(message)}</span>
    `;
    el.consoleLogBox.appendChild(entry);
    el.consoleLogBox.scrollTop = el.consoleLogBox.scrollHeight;
  }

  // Business Inspector Modal (Safe lookup by ID)
  window.inspectBusiness = function(id) {
    const b = state.currentBusinessesMap[id];
    if (!b) return;

    document.getElementById('modalBizName').textContent = b.name;
    document.getElementById('modalBizCategory').textContent = b.category || 'General';
    document.getElementById('modalBizAddress').textContent = b.address;
    document.getElementById('modalBizPhone').textContent = b.phone || 'None listed';

    const webBox = document.getElementById('modalWebsiteBox');
    const hasWeb = b.has_website === 1 && b.website && b.website.length > 0;

    if (hasWeb) {
      webBox.style.background = 'var(--accent-blue-light)';
      webBox.style.border = '1px solid var(--accent-blue-border)';
      webBox.innerHTML = `
        <span style="font-size: 0.75rem; color: var(--accent-blue); text-transform: uppercase; font-weight: 700;">Active Website Verified</span>
        <p style="margin-top: 4px; font-size: 0.95rem; font-weight: 700;">
          <a href="${escapeHtml(b.website)}" target="_blank" style="color: var(--accent-blue); text-decoration: underline;">${escapeHtml(b.website)}</a>
        </p>
      `;
    } else {
      webBox.style.background = '#FFFBEB';
      webBox.style.border = '1.5px solid #FCD34D';
      webBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <i data-lucide="alert-triangle" style="width: 18px; height: 18px; color: #D97706;"></i>
          <span style="font-size: 0.85rem; color: #B45309; text-transform: uppercase; font-weight: 800;">
            NO WEBSITE DETECTED — HIGH-VALUE LEAD OPPORTUNITY
          </span>
        </div>
        <p style="margin-top: 6px; font-size: 0.85rem; color: #78350F; line-height: 1.5;">
          This business does not have an established website domain in public registries. Prime prospect for web development, SEO, and local marketing outreach.
        </p>
      `;
    }

    // Google search & Call button links
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(b.name + ' ' + b.city + ' ' + b.state)}`;
    document.getElementById('modalSearchGoogleBtn').href = searchUrl;

    const callBtn = document.getElementById('modalCallBtn');
    if (b.phone && b.phone !== '(Public Listing)') {
      callBtn.href = `tel:${b.phone.replace(/[^0-9]/g, '')}`;
      callBtn.style.display = 'inline-flex';
    } else {
      callBtn.style.display = 'none';
    }

    openModal(el.detailModal);
    lucide.createIcons();
  };

  // Modal helpers
  function openModal(modal) {
    modal.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  // Toast Notification Helper
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const iconName = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-circle' : type === 'error' ? 'alert-triangle' : 'info';
    toast.innerHTML = `<i data-lucide="${iconName}" style="width: 16px; height: 16px;"></i><span>${escapeHtml(message)}</span>`;
    el.toastContainer.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Utility functions
  function truncateUrl(url, max = 28) {
    const clean = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
    return clean.length > max ? clean.slice(0, max) + '...' : clean;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
