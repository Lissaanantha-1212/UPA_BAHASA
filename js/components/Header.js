export class Header {
  constructor(onViewSwitch) {
    this.onViewSwitch = onViewSwitch;
  }

  render() {
    return `
      <header class="bg-[#0a8a40] text-white py-3.5 px-8 shadow-md flex justify-between items-center sticky top-0 z-50 no-print">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center bg-white/10 p-1 rounded-lg border border-white/20 shadow-sm overflow-hidden">
            <img src="logo-removebg-preview.png" alt="POLNES" class="w-full h-full object-contain">
          </div>
          <div>
            <h1 class="text-base font-bold leading-tight tracking-wide uppercase">PANEL OPERASIONAL STAFF</h1>
            <p class="text-[11px] text-green-100/90">UPA Bahasa Politeknik Negeri Samarinda</p>
          </div>
        </div>

        <div class="flex items-center gap-4 text-xs">
          <div class="hidden sm:block text-right">
            <span class="text-slate-200">Petugas:</span>
            <span class="font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-400/40">Staff UPA</span>
          </div>
          
          <button id="btnSwitchView" class="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5">
            <span id="labelSwitchView">Lihat Web Utama</span> &nearr;
          </button>
        </div>
      </header>
    `;
  }
}