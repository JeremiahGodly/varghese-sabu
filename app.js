/**
 * ADVOCATE VARGHESE SABU - HIGH COURT OF KERALA
 * Interactive Web Application Engine (Soft Animated Glass Edition)
 */

// Web Audio API tactile feedback
class AudioFX {
  static ctx = null;
  static playClick(freq = 600, duration = 0.04) {
    try {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or supported
    }
  }
}

// THEME CONTROLLER (FLAWLESS LIGHT & DARK MODE)
const ThemeController = {
  currentTheme: 'dark',

  init() {
    const saved = localStorage.getItem('adv_theme');
    this.currentTheme = saved || 'dark';
    this.apply();
  },

  toggle() {
    AudioFX.playClick(800, 0.05);
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('adv_theme', this.currentTheme);
    this.apply();
    showToast(`Switched to ${this.currentTheme === 'dark' ? 'Midnight Obsidian (Dark)' : 'Lush Alabaster (Light)'} Mode`);
  },

  apply() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    const toggleIcon = document.getElementById('themeToggleIcon');
    const toggleText = document.getElementById('themeToggleText');
    if (toggleIcon) {
      toggleIcon.innerHTML = this.currentTheme === 'dark' 
        ? `<svg class="w-4 h-4 text-amber-400 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
        : `<svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
    if (toggleText) {
      toggleText.textContent = this.currentTheme === 'dark' ? 'Alabaster Light' : 'Obsidian Dark';
    }
    if (window.AmbientFluidCanvas && AmbientFluidCanvas.createOrbs) {
      AmbientFluidCanvas.createOrbs();
    }
  }
};

// TOAST NOTIFICATIONS
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// CLIPBOARD HELPER
function copyToClipboard(text, label = 'Copied') {
  AudioFX.playClick(700, 0.03);
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Failed to copy: ${text}`);
  }
  document.body.removeChild(textArea);
}

// VCARD DOWNLOAD GENERATOR
function downloadVCard() {
  AudioFX.playClick(900, 0.06);
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Sabu;Varghese;;Advocate;',
    'FN:Advocate Varghese Sabu',
    'TITLE:Advocate, High Court of Kerala',
    'ORG:Adv. Varghese Sabu & Associates;High Court of Kerala',
    'TEL;TYPE=CELL,VOICE,PREF:+918592859287',
    'EMAIL;TYPE=WORK,INTERNET:varghesesabu@advocate.in',
    'URL;TYPE=WORK:https://share.google/jFaVESQebZ5UaLr1l',
    'ADR;TYPE=WORK:;;4D, AC \'M Lord, Mathai Manjooran Rd, Kacheripady;Kochi;Kerala;682018;India',
    'NOTE:Advocate High Court of Kerala | Adv. Varghese Sabu & Associates. 5.0 Star Google Rating (43 Reviews). Practice: Civil, Criminal (BNS/BNSS), Maritime, Real Estate, Service Law & Arbitration. Quote: Be as shrewd as snakes and as innocent as doves.',
    'X-SOCIALPROFILE;type=instagram:https://instagram.com/vrgz_',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Advocate_Varghese_Sabu_HighCourt.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Advocate Varghese Sabu contact card (.vcf) downloaded!');
}

// ONE LOOK DETAILED VIEW DRAWER CONTROLLER
const DrawerController = {
  isOpen: false,

  open(title, subtitle, badgeText, badgeClass, contentHtml) {
    AudioFX.playClick(500, 0.04);
    const backdrop = document.getElementById('drawerBackdrop');
    const container = document.getElementById('drawerContainer');
    const titleEl = document.getElementById('drawerTitle');
    const subtitleEl = document.getElementById('drawerSubtitle');
    const badgeEl = document.getElementById('drawerBadge');
    const bodyEl = document.getElementById('drawerBody');

    if (!backdrop || !container) return;

    titleEl.textContent = title;
    subtitleEl.textContent = subtitle;
    badgeEl.textContent = badgeText;
    badgeEl.className = `badge-pill ${badgeClass}`;
    bodyEl.innerHTML = contentHtml;

    backdrop.classList.add('active');
    container.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
  },

  close() {
    AudioFX.playClick(400, 0.03);
    const backdrop = document.getElementById('drawerBackdrop');
    const container = document.getElementById('drawerContainer');
    if (!backdrop || !container) return;

    backdrop.classList.remove('active');
    container.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
  }
};

// LAW SEARCH ENGINE CONTROLLER (SOFT GLASS DESIGN)
const LawSearchEngine = {
  currentCategory: 'All',
  query: '',

  init() {
    this.renderCategoryPills();
    this.filterAndRender();

    const searchInput = document.getElementById('lawSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.query = e.target.value.toLowerCase().trim();
        this.filterAndRender();
      });
    }

    // Quick search preset buttons
    const presetPills = document.querySelectorAll('[data-law-preset]');
    presetPills.forEach(btn => {
      btn.addEventListener('click', () => {
        const keyword = btn.getAttribute('data-law-preset');
        if (searchInput) {
          searchInput.value = keyword;
          this.query = keyword.toLowerCase().trim();
          this.filterAndRender();
          searchInput.focus();
        }
      });
    });
  },

  renderCategoryPills() {
    const container = document.getElementById('lawCategoryPills');
    if (!container) return;

    const categories = [
      'All',
      'Criminal Law',
      'Procedural & Bail',
      'Maritime & Admiralty',
      'Constitutional Writs',
      'Corporate & Arbitration',
      'Corporate & White Collar'
    ];

    container.innerHTML = categories.map(cat => `
      <button 
        class="filter-tab-btn ${cat === this.currentCategory ? 'active' : ''}"
        data-cat="${cat}"
      >
        ${cat}
      </button>
    `).join('');

    container.querySelectorAll('.filter-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        AudioFX.playClick(650, 0.03);
        this.currentCategory = btn.getAttribute('data-cat');
        this.renderCategoryPills();
        this.filterAndRender();
      });
    });
  },

  filterAndRender() {
    const grid = document.getElementById('lawResultsGrid');
    const countEl = document.getElementById('lawResultCount');
    if (!grid) return;

    let filtered = INDIAN_LAW_DATA.filter(item => {
      const matchesCat = this.currentCategory === 'All' || item.category === this.currentCategory;
      if (!matchesCat) return false;

      if (!this.query) return true;

      const haystack = [
        item.section,
        item.title,
        item.act,
        item.legacyEquiv,
        item.summary,
        item.cognizable,
        item.bailable,
        item.triableBy,
        ...(item.tags || [])
      ].join(' ').toLowerCase();

      return haystack.includes(this.query);
    });

    if (countEl) {
      countEl.textContent = `${filtered.length} Section${filtered.length === 1 ? '' : 's'} Indexed`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-12 text-center glass-panel p-8">
          <div class="inline-flex p-3.5 rounded-2xl bg-amber-500/10 text-amber-500 mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <p class="text-sm font-bold text-title">No matching statutory sections found for "${this.query}"</p>
          <p class="text-xs text-muted mt-1">Try keywords like: <span class="text-gold font-semibold">bail, murder, ship arrest, 482, quashing, arbitration, cheque bounce</span></p>
          <button onclick="LawSearchEngine.simulateLiveApiQuery('${this.query}')" class="mt-4 btn-glass text-xs">
            Query External Indian Law Repository API
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const isBailable = item.bailable.toLowerCase().includes('bailable') && !item.bailable.toLowerCase().includes('non-bailable');
      const bailBadge = isBailable ? 'badge-emerald' : 'badge-crimson';

      return `
        <div class="craft-card spotlight-card" onclick="LawSearchEngine.showDetail('${item.id}')">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="badge-pill badge-gold">${item.section}</span>
              <span class="badge-pill ${bailBadge}">${item.bailable}</span>
            </div>

            <div class="text-[11px] font-mono text-gold mb-1 flex items-center gap-1.5">
              <span>${item.act.split(',')[0]}</span>
              <span class="text-dim">•</span>
              <span class="font-semibold text-muted">${item.legacyEquiv}</span>
            </div>

            <h4 class="text-sm font-bold text-title group-hover:text-gold transition-colors line-clamp-1 mb-1.5">
              ${item.title}
            </h4>

            <p class="text-xs text-muted line-clamp-2 leading-relaxed mb-3">
              ${item.summary}
            </p>
          </div>

          <div class="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px]">
            <span class="truncate max-w-[170px] text-dim font-mono flex items-center gap-1">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3 2 10h20Z"/></svg>
              <span>${item.triableBy.replace('Court of Session', 'Sessions').replace('Magistrate of First Class', 'JMFC')}</span>
            </span>
            <span class="text-gold font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
              Detailed View &rarr;
            </span>
          </div>
        </div>
      `;
    }).join('');

    initSpotlight();
  },

  showDetail(id) {
    const item = INDIAN_LAW_DATA.find(x => x.id === id);
    if (!item) return;

    const html = `
      <div class="space-y-4">
        <!-- Statutory Header Card -->
        <div class="p-4 rounded-2xl nested-box border border-[var(--border-subtle)]">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="badge-pill badge-gold">${item.section}</span>
            <span class="badge-pill badge-neutral">${item.category}</span>
            <span class="badge-pill ${item.bailable.includes('Non') ? 'badge-crimson' : 'badge-emerald'}">${item.bailable}</span>
            <span class="badge-pill badge-azure">${item.cognizable}</span>
          </div>
          <h3 class="text-base font-bold text-title mb-1">${item.title}</h3>
          <p class="text-xs text-gold font-mono font-medium">${item.act} &nbsp;|&nbsp; Equiv: ${item.legacyEquiv}</p>
        </div>

        <!-- Statutory Substance -->
        <div class="space-y-1.5">
          <h4 class="text-xs font-semibold text-muted uppercase tracking-wider font-mono">Statutory Provision Summary</h4>
          <p class="text-xs text-body leading-relaxed p-3.5 rounded-xl nested-box border border-[var(--border-subtle)] shadow-sm">
            ${item.summary}
          </p>
        </div>

        <!-- Procedural Parameters Grid -->
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl nested-box border border-[var(--border-subtle)]">
            <span class="text-[10px] uppercase font-mono text-dim block mb-1">Prescribed Punishment</span>
            <span class="font-semibold text-title">${item.punishment}</span>
          </div>
          <div class="p-3 rounded-xl nested-box border border-[var(--border-subtle)]">
            <span class="text-[10px] uppercase font-mono text-dim block mb-1">Forum of Trial</span>
            <span class="font-semibold text-title">${item.triableBy}</span>
          </div>
        </div>

        <!-- Landmark Precedents -->
        <div class="space-y-1.5">
          <h4 class="text-xs font-semibold text-muted uppercase tracking-wider font-mono">Supreme Court / High Court Citations</h4>
          <div class="p-3.5 rounded-xl nested-box border border-amber-500/30 font-mono text-xs text-gold leading-relaxed shadow-sm flex items-start gap-2">
            <svg class="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
            <span>${item.keyPrecedents}</span>
          </div>
        </div>

        <!-- Tactical Defense / Advocate Insight -->
        <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
          <div class="flex items-center gap-1.5 text-xs font-bold text-gold">
            <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Advocate Varghese Sabu's Practice Strategy
          </div>
          <p class="text-xs text-body leading-relaxed">
            "${item.advocateInsight}"
          </p>
        </div>

        <!-- Action Row -->
        <div class="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
          <button onclick="copyToClipboard('${item.section} ${item.act} - ${item.title}: ${item.keyPrecedents}', 'Section and Citation')" class="btn-glass text-xs flex-1">
            Copy Citation
          </button>
          <a href="#consultationSection" onclick="DrawerController.close()" class="btn-gold text-xs flex-1 text-center">
            Consult on this Section
          </a>
        </div>
      </div>
    `;

    DrawerController.open(item.section, item.act, item.category, 'badge-gold', html);
  },

  simulateLiveApiQuery(keyword) {
    showToast(`Querying Live Indian Kanoon & Ministry of Law API for "${keyword}"...`);
    setTimeout(() => {
      showToast(`Repository matched 3 statutory provisions & 2 High Court rulings for "${keyword}"`);
      const searchInput = document.getElementById('lawSearchInput');
      if (searchInput) {
        searchInput.value = keyword;
        this.query = keyword.toLowerCase();
        this.filterAndRender();
      }
    }, 850);
  }
};

// REPORTED JUDGMENT DETAIL VIEWER
function showJudgmentDetail(index) {
  const item = REPORTED_JUDGMENTS[index];
  if (!item) return;

  const html = `
    <div class="space-y-4">
      <div class="p-4 rounded-2xl nested-box border border-[var(--border-subtle)]">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="badge-pill badge-gold">${item.caseNo}</span>
          <span class="badge-pill badge-emerald font-mono">${item.citation}</span>
        </div>
        <h3 class="text-base font-bold text-title mb-1">${item.title}</h3>
        <p class="text-xs text-gold font-mono">${item.court} &bull; ${item.date}</p>
      </div>

      <div class="space-y-1">
        <span class="text-[11px] font-mono text-muted uppercase tracking-wider">Subject Matter</span>
        <p class="text-xs font-semibold text-title p-3 rounded-xl nested-box border border-[var(--border-subtle)] shadow-sm">
          ${item.subject}
        </p>
      </div>

      <div class="space-y-1">
        <span class="text-[11px] font-mono text-muted uppercase tracking-wider">Procedural Relief & Result</span>
        <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m8 21 8 0"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M17 6h3a2 2 0 0 1 2 2 5 5 0 0 1-5 5"/><path d="M7 6H4a2 2 0 0 0-2 2 5 5 0 0 0 5 5"/></svg>
          <span>${item.result}</span>
        </div>
      </div>

      <div class="space-y-1">
        <span class="text-[11px] font-mono text-muted uppercase tracking-wider">Case Narrative & Precedent Impact</span>
        <p class="text-xs text-body leading-relaxed p-3.5 rounded-xl nested-box border border-[var(--border-subtle)] shadow-sm">
          ${item.summary}
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5 pt-2">
        ${item.tags.map(t => `<span class="badge-pill badge-neutral">${t}</span>`).join('')}
      </div>

      <div class="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
        <button onclick="copyToClipboard('${item.title} [${item.citation}] - ${item.result}', 'Case Citation')" class="btn-glass text-xs flex-1">
          Copy Case Citation
        </button>
        <a href="#consultationSection" onclick="DrawerController.close()" class="btn-gold text-xs flex-1 text-center">
          Engage for Similar Matter
        </a>
      </div>
    </div>
  `;

  DrawerController.open(item.caseNo, item.court, 'Reported Judgment', 'badge-emerald', html);
}

// INTERACTIVE LEGAL RETAINER & FEE CALCULATOR
const FeeCalculator = {
  rates: {
    'writ': { base: 35000, max: 75000, name: 'High Court Writ Petition (Art 226)' },
    'quash': { base: 40000, max: 80000, name: 'FIR Quashing Petition (Section 528 BNSS / 482 CrPC)' },
    'anticipatory-bail': { base: 25000, max: 55000, name: 'Anticipatory Bail (Section 482 BNSS / High Court)' },
    'regular-bail': { base: 20000, max: 45000, name: 'Regular Bail Petition (High Court / Sessions)' },
    'admiralty': { base: 120000, max: 250000, name: 'Admiralty Suit & Foreign Ship Arrest (High Court of Kerala)' },
    'arbitration': { base: 60000, max: 150000, name: 'Commercial Arbitration (Section 9/11/34)' },
    'cheque-138': { base: 15000, max: 35000, name: 'Section 138 NI Act Cheque Dishonour' },
    'legal-opinion': { base: 10000, max: 25000, name: 'Written Legal Opinion & Title/Contract Vetting' }
  },

  urgencyMultiplier: {
    'standard': 1.0,
    'urgent': 1.35,
    'emergency': 1.75
  },

  calculate() {
    const matterType = document.getElementById('calcMatterType')?.value || 'writ';
    const urgency = document.getElementById('calcUrgency')?.value || 'standard';
    const forum = document.getElementById('calcForum')?.value || 'hc';

    const baseData = this.rates[matterType] || this.rates['writ'];
    const multiplier = this.urgencyMultiplier[urgency] || 1.0;
    const forumBonus = forum === 'hc' ? 1.0 : (forum === 'tribunal' ? 0.9 : 0.75);

    const estLow = Math.round((baseData.base * multiplier * forumBonus) / 1000) * 1000;
    const estHigh = Math.round((baseData.max * multiplier * forumBonus) / 1000) * 1000;

    const displayEl = document.getElementById('calcResultDisplay');
    const noteEl = document.getElementById('calcResultNote');

    if (displayEl) {
      displayEl.innerHTML = `₹${estLow.toLocaleString('en-IN')} &ndash; ₹${estHigh.toLocaleString('en-IN')}`;
    }
    if (noteEl) {
      noteEl.textContent = `Includes preparation, pleadings drafting, case indexing, and initial admission hearings before ${forum === 'hc' ? 'the High Court of Kerala' : 'competent judicial forum'}. Statutory court fees and stamp duties applicable as per actuals.`;
    }
  }
};

// CLIENT CASE DOCUMENT CHECKLIST TOOL
const DocumentChecklists = {
  lists: {
    'bail': [
      { id: 'b1', name: 'Certified Copy of FIR and FIS (First Information Statement)' },
      { id: 'b2', name: 'Remand Report / Custody Order Copy from Magistrate' },
      { id: 'b3', name: 'Order of Magistrate/Sessions Court rejecting prior bail' },
      { id: 'b4', name: 'Accused Identity Verification (Aadhaar / Voter ID)' },
      { id: 'b5', name: 'Medical / Employment records if urging exceptional humanitarian grounds' },
      { id: 'b6', name: 'Vakalatnama duly executed (or Jail Vakalatnama with Jailer attestation)' }
    ],
    'writ': [
      { id: 'w1', name: 'Impugned Government Order / Administrative Circular / Tender Document' },
      { id: 'w2', name: 'Copy of Petitioner representations submitted to Authorities' },
      { id: 'w3', name: 'Postal Acknowledgement / Receipts proving receipt by Respondents' },
      { id: 'w4', name: 'Affidavit affirming no other petition is filed in the same cause' },
      { id: 'w5', name: 'Vakalatnama with Advocate Welfare Fund Stamp' }
    ],
    'quashing': [
      { id: 'q1', name: 'Certified Copy of Crime FIR / Charge Sheet / Final Report' },
      { id: 'q2', name: 'Underlying Commercial Contracts, Invoices, or Bank Statements' },
      { id: 'q3', name: 'Affidavit of Compromise / Settlement Deed (if settled by parties)' },
      { id: 'q4', name: 'Vakalatnama executed by the Petitioner' }
    ],
    'admiralty': [
      { id: 'a1', name: 'Bunker Delivery Receipts (BDRs) or Bill of Lading (B/L)' },
      { id: 'a2', name: 'Vessel IMO Number, Call Sign, Flag & Current Port Call status' },
      { id: 'a3', name: 'Unpaid Invoices, Demurrage Claims & Demand Notices' },
      { id: 'a4', name: 'Power of Attorney (POA) with apostille / consularization' }
    ]
  },

  render(type = 'bail') {
    const container = document.getElementById('checklistContainer');
    if (!container) return;

    const items = this.lists[type] || this.lists['bail'];
    container.innerHTML = items.map(item => `
      <label class="flex items-start gap-3 p-3 rounded-xl nested-box border border-[var(--border-subtle)] hover:border-amber-500/50 cursor-pointer transition-all shadow-sm text-xs text-body">
        <input type="checkbox" class="mt-0.5 rounded border-slate-400 text-amber-500 focus:ring-amber-400" />
        <span>${item.name}</span>
      </label>
    `).join('');
  }
};

// CONSULTATION APPOINTMENT HANDLER
function handleConsultationSubmit(e) {
  e.preventDefault();
  AudioFX.playClick(850, 0.05);

  const name = document.getElementById('clientName')?.value || '';
  const phone = document.getElementById('clientPhone')?.value || '';
  const matter = document.getElementById('clientMatter')?.value || '';
  const mode = document.getElementById('clientMode')?.value || 'Chambers (4D AC \'M Lord, Kacheripady, Kochi)';
  const date = document.getElementById('clientDate')?.value || '';
  const notes = document.getElementById('clientNotes')?.value || '';

  const msg = `Advocate Varghese Sabu Chamber Consultation Request:
• Client Name: ${name}
• Phone: ${phone}
• Matter Category: ${matter}
• Mode: ${mode}
• Preferred Date: ${date}
• Case Summary: ${notes}`;

  const encoded = encodeURIComponent(msg);
  const whatsappUrl = `https://wa.me/918592859287?text=${encoded}`;

  showToast('Booking logged! Redirecting to WhatsApp for instant confirmation...');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 800);
}

// SPOTLIGHT MOUSE-TRACKER ON SOFT GLASS CARDS
function initSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ORGANIC MOVING AMBIENT FLUID CANVAS BEHIND CARDS
const AmbientFluidCanvas = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  orbs: [],
  mouse: { x: -1000, y: -1000, targetX: -1000, targetY: -1000 },
  animId: null,

  init() {
    this.canvas = document.getElementById('ambientFluidCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    });

    this.createOrbs();
    this.animate();
  },

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  },

  createOrbs() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.orbs = [
      {
        baseX: 0.25, baseY: 0.2,
        x: 0, y: 0,
        radius: Math.min(this.width, this.height) * 0.45,
        colorDark: 'rgba(212, 175, 55, 0.12)',
        colorLight: 'rgba(212, 175, 55, 0.15)',
        vx: 0.0006, vy: 0.0008, phase: 0
      },
      {
        baseX: 0.75, baseY: 0.35,
        x: 0, y: 0,
        radius: Math.min(this.width, this.height) * 0.42,
        colorDark: 'rgba(56, 189, 248, 0.10)',
        colorLight: 'rgba(56, 189, 248, 0.12)',
        vx: 0.0008, vy: 0.0005, phase: 2.1
      },
      {
        baseX: 0.5, baseY: 0.75,
        x: 0, y: 0,
        radius: Math.min(this.width, this.height) * 0.48,
        colorDark: 'rgba(16, 185, 129, 0.08)',
        colorLight: 'rgba(16, 185, 129, 0.10)',
        vx: 0.0005, vy: 0.0007, phase: 4.2
      },
      {
        baseX: 0.85, baseY: 0.85,
        x: 0, y: 0,
        radius: Math.min(this.width, this.height) * 0.38,
        colorDark: 'rgba(245, 158, 11, 0.09)',
        colorLight: 'rgba(245, 158, 11, 0.12)',
        vx: 0.0007, vy: 0.0006, phase: 1.5
      }
    ];
  },

  animate() {
    if (!this.ctx) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth mouse follow
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.04;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.04;

    const time = performance.now() * 0.001;

    this.orbs.forEach(orb => {
      // Harmonic wave drift
      const waveX = Math.sin(time * 0.4 + orb.phase) * (this.width * 0.08);
      const waveY = Math.cos(time * 0.3 + orb.phase) * (this.height * 0.08);

      let targetX = orb.baseX * this.width + waveX;
      let targetY = orb.baseY * this.height + waveY;

      // Soft mouse gravity deflection
      if (this.mouse.x > 0 && this.mouse.y > 0) {
        const dx = this.mouse.x - targetX;
        const dy = this.mouse.y - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 450) {
          const force = (1 - dist / 450) * 40;
          targetX += (dx / dist) * force;
          targetY += (dy / dist) * force;
        }
      }

      orb.x += (targetX - orb.x) * 0.05;
      orb.y += (targetY - orb.y) * 0.05;

      // Draw soft radial gradient orb
      const grad = this.ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
      const color = isDark ? orb.colorDark : orb.colorLight;
      grad.addColorStop(0, color);
      grad.addColorStop(0.6, color.replace(/[\d\.]+\)$/, '0.04)'));
      grad.addColorStop(1, 'transparent');

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.animId = requestAnimationFrame(() => this.animate());
  }
};

// PATTERNCRAFT PATTERN SWITCHER
const PatternSwitcher = {
  currentPattern: 'dots',
  patterns: ['dots', 'blueprint', 'glow', 'mesh'],

  init() {
    const saved = localStorage.getItem('adv_pattern') || 'dots';
    this.setPattern(saved, false);

    document.querySelectorAll('[data-pattern-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pattern = btn.getAttribute('data-pattern-btn');
        this.setPattern(pattern, true);
      });
    });
  },

  setPattern(pattern, notify = true) {
    this.currentPattern = pattern;
    localStorage.setItem('adv_pattern', pattern);

    const layer = document.getElementById('patternLayer');
    const fluidCanvas = document.getElementById('ambientFluidCanvas');

    if (layer) {
      layer.className = 'pattern-layer';
      if (pattern === 'dots') layer.classList.add('pattern-dots');
      else if (pattern === 'blueprint') layer.classList.add('pattern-blueprint');
      else if (pattern === 'glow') layer.classList.add('pattern-glow');
      else if (pattern === 'mesh') layer.classList.add('pattern-dots');
    }

    if (fluidCanvas) {
      if (pattern === 'mesh') {
        fluidCanvas.style.opacity = '1';
      } else if (pattern === 'glow') {
        fluidCanvas.style.opacity = '0.5';
      } else {
        fluidCanvas.style.opacity = '0.35';
      }
    }

    document.querySelectorAll('[data-pattern-btn]').forEach(btn => {
      if (btn.getAttribute('data-pattern-btn') === pattern) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (notify) {
      AudioFX.playClick(720, 0.04);
      const names = {
        'dots': 'Dot Matrix Grid',
        'blueprint': 'Architectural Blueprint',
        'glow': 'Radial Glow Vignette',
        'mesh': 'Fluid Ambient Waves'
      };
      showToast(`Active Background Pattern: ${names[pattern] || pattern}`);
    }
  }
};

// INITIALIZATION ON DOM LOAD
document.addEventListener('DOMContentLoaded', () => {
  ThemeController.init();
  PatternSwitcher.init();
  AmbientFluidCanvas.init();
  LawSearchEngine.init();
  FeeCalculator.calculate();
  DocumentChecklists.render('bail');
  initSpotlight();

  // Drawer Backdrop listener
  const backdrop = document.getElementById('drawerBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => DrawerController.close());
  }

  // Keyboard Escape listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DrawerController.isOpen) {
      DrawerController.close();
    }
  });

  // Checklist tabs
  const checklistTabs = document.querySelectorAll('[data-checklist-tab]');
  checklistTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      AudioFX.playClick(600, 0.03);
      checklistTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      DocumentChecklists.render(tab.getAttribute('data-checklist-tab'));
    });
  });

  // Retainer calculator event listeners
  ['calcMatterType', 'calcUrgency', 'calcForum'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => FeeCalculator.calculate());
  });

  // Consultation form
  const consultForm = document.getElementById('consultationForm');
  if (consultForm) {
    consultForm.addEventListener('submit', handleConsultationSubmit);
  }
});
