import { Header } from './components/Header.js';
import { Modul1Penjadwalan } from './components/Modul1Penjadwalan.js';
import { Modul2AutoMapping } from './components/Modul2AutoMapping.js';
import { Modul3Kalkulasi } from './components/Modul3Kalkulasi.js';
import { Modul4Approval } from './components/Modul4Approval.js';
import { PortalPublik } from './components/PortalPublik.js';
import { Sertifikat } from './components/Sertifikat.js';
import { databaseServices } from './services/databaseServices.js';

class App {
  constructor() {
    this.currentView = 'STAF'; // 'STAF' atau 'PUBLIK'
    this.currentTab = 'modul1';
    
    // Global State Terpusat
    this.state = {
      masterMahasiswa: [],
      selectedPlotting: [],
      parsedHasilUjian: [],
      globalScheduleLogs: [],
      remedialRegistrations: []
    };

    this.components = {};
    this.init();
  }

  async init() {
    // Sinkronisasi data awal dari database/local cache
    await this.loadInitialData();
    
    // Inisialisasi Instance Komponen
    this.initComponents();

    // Render Layout Utama
    this.renderLayout();

    // Pasang Event Listener Global
    this.attachGlobalEvents();
  }

  async loadInitialData() {
    try {
      this.state.masterMahasiswa = await databaseServices.fetchMasterMahasiswa();
      this.state.globalScheduleLogs = await databaseServices.fetchScheduleLogs();
      this.state.remedialRegistrations = await databaseServices.fetchRemedialRegistrations();
    } catch (err) {
      console.warn('Gagal memuat data awal dari Supabase, menggunakan cache lokal:', err);
    }
  }

  initComponents() {
    this.components.header = new Header((view) => this.switchView(view));
    this.components.modul1 = new Modul1Penjadwalan(this.state, (newState) => this.updateState(newState));
    this.components.modul2 = new Modul2AutoMapping(this.state, (newState) => this.updateState(newState));
    this.components.modul3 = new Modul3Kalkulasi(this.state, (newState) => this.updateState(newState));
    this.components.modul4 = new Modul4Approval(this.state, (newState) => this.updateState(newState));
    this.components.portalPublik = new PortalPublik(this.state, (newState) => this.updateState(newState));
    this.components.sertifikat = new Sertifikat();
  }

  renderLayout() {
    const root = document.getElementById('app');
    if (!root) return;

    root.innerHTML = `
      ${this.components.header.render()}

      <main class="max-w-7xl mx-auto py-6 px-4">
        <!-- 1. DASHBOARD STAFF -->
        <div id="viewStaf" class="${this.currentView === 'STAF' ? '' : 'hidden'} space-y-6">
          
          <!-- NAVIGATION PILL TABS MODUL -->
          <div class="flex gap-2 border-b border-slate-200 pb-2 text-xs font-bold no-print overflow-x-auto">
            <button onclick="window.upaApp.switchTab('modul1')" id="btn-tab-modul1" class="px-4 py-2.5 bg-[#10C35D] text-white rounded-xl shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <span>📊</span> Penjadwalan & Plotting Sesi
            </button>
            <button onclick="window.upaApp.switchTab('modul2')" id="btn-tab-modul2" class="px-4 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap">
              <span>📁</span> Upload Excel S1, S2, S3 & Mapping
            </button>
            <button onclick="window.upaApp.switchTab('modul3')" id="btn-tab-modul3" class="px-4 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap">
              <span>📜</span> Kalkulasi Skor (Tabel C)
            </button>
            <button onclick="window.upaApp.switchTab('modul4')" id="btn-tab-modul4" class="px-4 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap">
              <span>🛠</span> ACC & Approval Kepala UPA
            </button>
          </div>

          <!-- KONTEN MODUL OPERASIONAL STAFF -->
          <div id="modul1-container" class="tab-modul">${this.components.modul1.render()}</div>
          <div id="modul2-container" class="tab-modul hidden">${this.components.modul2.render()}</div>
          <div id="modul3-container" class="tab-modul hidden">${this.components.modul3.render()}</div>
          <div id="modul4-container" class="tab-modul hidden">${this.components.modul4.render()}</div>
        </div>

        <!-- 2. PORTAL UTAMA PUBLIK -->
        <div id="viewPublik" class="${this.currentView === 'PUBLIK' ? '' : 'hidden'}">
          ${this.components.portalPublik.render()}
        </div>

        <!-- CONTAINER HIDDEN SERTIFIKAT DOKUMEN CETAK A4 PAS -->
        <div id="certContainerWrapper" class="hidden">
          ${this.components.sertifikat.render()}
        </div>
      </main>
    `;

    // Pasang Event Listener spesifik dari komponen setelah DOM terpasang
    this.attachComponentEvents();
  }

  attachComponentEvents() {
    if (this.currentView === 'PUBLIK') {
      this.components.portalPublik.attachEvents();
    }
  }

  attachGlobalEvents() {
    const btnSwitch = document.getElementById('btnSwitchView');
    if (btnSwitch) {
      btnSwitch.addEventListener('click', () => {
        const nextView = this.currentView === 'STAF' ? 'PUBLIK' : 'STAF';
        this.switchView(nextView);
      });
    }
  }

  switchView(view) {
    this.currentView = view;
    this.renderLayout();

    const labelSwitch = document.getElementById('labelSwitchView');
    if (labelSwitch) {
      labelSwitch.innerText = view === 'STAF' ? 'Lihat Web Utama' : 'Akses Panel Staff';
    }
  }

  switchTab(tab) {
    this.currentTab = tab;

    // Sembunyikan semua tab modul
    document.querySelectorAll('.tab-modul').forEach(el => el.classList.add('hidden'));
    
    // Tampilkan modul terpilih
    const target = document.getElementById(`${tab}-container`);
    if (target) target.classList.remove('hidden');

    // Update style pill button active
    document.querySelectorAll('[id^="btn-tab-"]').forEach(btn => {
      btn.className = 'px-4 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 flex items-center gap-1.5 whitespace-nowrap';
    });

    const activeBtn = document.getElementById(`btn-tab-${tab}`);
    if (activeBtn) {
      activeBtn.className = 'px-4 py-2.5 bg-[#10C35D] text-white rounded-xl shadow-sm flex items-center gap-1.5 whitespace-nowrap';
    }
  }

  updateState(newState) {
    this.state = { ...this.state, ...newState };
  }
}

// Inisialisasi Aplikasi Utama saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
  window.upaApp = new App();
});