import { Header } from './components/Header.js';
import { Modul1Penjadwalan } from './components/Modul1Penjadwalan.js';
import { Modul2AutoMapping } from './components/Modul2AutoMapping.js';
import { Modul3Kalkulasi } from './components/Modul3Kalkulasi.js';
import { Modul4Approval } from './components/Modul4Approval.js';
import { Portalpublik } from './components/Portalpublik.js';
import { Sertifikat } from './components/Sertifikat.js';

class App {
  constructor() {
    this.currentView = 'STAF';
    this.currentTab = 'modul1';
    this.init();
  }

  init() {
    this.renderLayout();
  }

  renderLayout() {
    const root = document.getElementById('app');
    if (!root) return;
    
    const header = new Header((view) => this.switchView(view));
    const m1 = new Modul1Penjadwalan();
    const m2 = new Modul2AutoMapping();
    const m3 = new Modul3Kalkulasi();
    const m4 = new Modul4Approval();
    const publik = new Portalpublik();

    root.innerHTML = `
      ${header.render()}
      <main class="max-w-7xl mx-auto py-6 px-4">
        <div id="viewStaf" class="${this.currentView === 'STAF' ? '' : 'hidden'} space-y-6">
          <div class="flex gap-2 border-b pb-1 text-xs font-bold no-print">
            <button onclick="window.upaApp.switchTab('modul1')" id="btn-tab-modul1" class="px-4 py-2 bg-[#10C35D] text-white rounded-lg shadow-sm">📊 Penjadwalan & Plotting</button>
            <button onclick="window.upaApp.switchTab('modul2')" id="btn-tab-modul2" class="px-4 py-2 bg-white text-slate-600 border rounded-lg hover:bg-slate-50">📁 Upload Excel</button>
            <button onclick="window.upaApp.switchTab('modul3')" id="btn-tab-modul3" class="px-4 py-2 bg-white text-slate-600 border rounded-lg hover:bg-slate-50">📜 Kalkulasi Skor</button>
            <button onclick="window.upaApp.switchTab('modul4')" id="btn-tab-modul4" class="px-4 py-2 bg-white text-slate-600 border rounded-lg hover:bg-slate-50">🛠 ACC & Approval</button>
          </div>

          <div id="modul1-container" class="tab-modul">${m1.render()}</div>
          <div id="modul2-container" class="tab-modul hidden">${m2.render()}</div>
          <div id="modul3-container" class="tab-modul hidden">${m3.render()}</div>
          <div id="modul4-container" class="tab-modul hidden">${m4.render()}</div>
        </div>

        <div id="viewPublik" class="${this.currentView === 'PUBLIK' ? '' : 'hidden'}">
          ${publik.render()}
        </div>
      </main>
    `;
  }

  switchView(view) {
    this.currentView = view;
    this.renderLayout();
  }

  switchTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.tab-modul').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`${tab}-container`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('[id^="btn-tab-"]').forEach(btn => {
      btn.className = 'px-4 py-2 bg-white text-slate-600 border rounded-lg hover:bg-slate-50';
    });
    const activeBtn = document.getElementById(`btn-tab-${tab}`);
    if (activeBtn) activeBtn.className = 'px-4 py-2 bg-[#10C35D] text-white rounded-lg shadow-sm';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.upaApp = new App();
});