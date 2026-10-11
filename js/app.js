import { Header } from './components/Header.js';
import { Modul1Penjadwalan } from './components/Modul1Penjadwalan.js';
import { Modul2AutoMapping } from './components/Modul2AutoMapping.js';
import { Modul3Kalkulasi } from './components/Modul3Kalkulasi.js';
import { Modul4Approval } from './components/Modul4Approval.js';
import { Portalpublik } from './components/Portalpublik.js';
import { Sertifikat } from './components/Sertifikat.js';

class App {
  constructor() {
    this.currentView = 'STAF'; // 'STAF' atau 'PUBLIK'
    this.currentTab = 'modul1';
    this.init();
  }

  init() {
    this.renderLayout();
  }

  renderLayout() {
    const root = document.getElementById('app');
    
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
          <div class="flex gap-2 border-b pb-1 text-xs font-bold">
            <button onclick="window.upaApp.switchTab('modul1')" class="px-4 py-2 bg-[#10C35D] text-white rounded-lg">📊 Penjadwalan</button>
            <button onclick="window.upaApp.switchTab('modul2')" class="px-4 py-2 bg-white border rounded-lg">📁 Upload Excel</button>
            <button onclick="window.upaApp.switchTab('modul3')" class="px-4 py-2 bg-white border rounded-lg">📜 Kalkulasi</button>
            <button onclick="window.upaApp.switchTab('modul4')" class="px-4 py-2 bg-white border rounded-lg">🛠 Approval</button>
          </div>

          <div id="tabContent">
            ${m1.render()}
          </div>
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.upaApp = new App();
});