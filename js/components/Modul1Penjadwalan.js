import { MAX_PLOTTING_CAPACITY } from '../config/constants.js';

export class Modul1Penjadwalan {
  constructor(state, onStateChange) {
    this.state = state;
    this.onStateChange = onStateChange;
  }

  render() {
    return `
      <div id="printableJadwalArea" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        
        <!-- HEADER KOP CETAK BERITA ACARA -->
        <div id="printHeaderTemplate" class="hidden mb-6 text-center pt-2">
          <div class="flex items-center justify-between pb-1">
            <div class="w-24 h-24 flex items-center justify-start overflow-hidden">
              <img src="logo-removebg-preview.png" class="w-full h-full object-contain">
            </div>
            
            <div class="text-center flex-1 px-2">
              <h3 class="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-800 leading-snug">KEMENTERIAN PENDIDIKAN TINGGI, SAINS DAN TEKNOLOGI</h3>
              <h1 class="text-base font-extrabold uppercase tracking-[0.25em] text-slate-900 mt-1">POLITEKNIK NEGERI SAMARINDA</h1>
              <h2 class="text-sm font-extrabold uppercase tracking-[0.3em] text-slate-900 mt-0.5">UPA BAHASA</h2>
            </div>
            <div class="w-24 h-24 opacity-0"></div>
          </div>
          <div class="w-full border-t-[2.5px] border-b border-slate-900 my-1 h-[3px]"></div>
          <h2 class="text-xs font-extrabold uppercase text-slate-900 tracking-wider mt-4 underline decoration-1 underline-offset-2">DAFTAR HADIR & JADWAL RESMI TES TOEFL PREDICTION</h2>
        </div>

        <!-- HEADER MODUL -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center pb-3 border-b border-slate-100 gap-4 no-print">
          <div>
            <h2 class="text-base font-bold text-slate-800">Modul 1: Penjadwalan & Penguncian Sesi Ujian</h2>
            <p class="text-xs text-slate-500">Kapasitas Maksimal: <b>${MAX_PLOTTING_CAPACITY} PC</b> Per Sesi Ujian.</p>
          </div>

          <div class="flex items-center gap-2">
            <button id="btnResetMaster" class="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-all shadow-sm">
              Reset Database
            </button>

            <label class="bg-[#10C35D] hover:bg-[#0a8a40] text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer shadow-sm transition-all flex items-center gap-2">
              <span>Upload Master Mhs Baru</span>
              <input type="file" id="excelMasterInput" accept=".xlsx, .xls, .csv" class="hidden">
            </label>

            <div class="bg-[#eafbf0] border border-green-200 px-3.5 py-1.5 rounded-xl text-right">
              <span id="selectedCount" class="text-xl font-extrabold text-[#0a8a40]">0</span>
              <span class="text-slate-400 text-xs"> / ${MAX_PLOTTING_CAPACITY} Terplot</span>
            </div>
          </div>
        </div>

        <!-- SUB TAB REGULER VS REMEDIAL -->
        <div class="no-print flex justify-between items-center bg-slate-100 p-1.5 rounded-xl text-xs font-bold">
          <div class="flex gap-2">
            <button id="subtabReguler" class="px-4 py-2 rounded-lg bg-white text-[#0a8a40] shadow-sm transition-all">
              📚 Ujian Reguler (Per Kelas / Prodi)
            </button>
            <button id="subtabRemedial" class="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1.5">
              <span>🔄 Antrean Pendaftar Remedial</span>
              <span id="badgeCountRemedial" class="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full font-mono">0</span>
            </button>
          </div>
        </div>

        <!-- FORM INPUT TANGGAL & SESI -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80 no-print">
          <div>
            <label class="text-[11px] font-bold text-slate-700 mb-1 block uppercase">Tanggal Pelaksanaan:</label>
            <input type="date" id="inputTanggalUjian" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs outline-none bg-white font-semibold">
          </div>

          <div>
            <label class="text-[11px] font-bold text-slate-700 mb-1 block uppercase">Sesi & Jam Ujian:</label>
            <select id="selectJamSesi" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs outline-none bg-white font-semibold">
              <option value="Sesi 1 (Pagi) | 08.00 - 10.00 WITA">Sesi 1 (Pagi) - 08.00 s/d 10.00 WITA</option>
              <option value="Sesi 2 (Siang) | 11.00 - 13.00 WITA">Sesi 2 (Siang) - 11.00 s/d 13.00 WITA</option>
              <option value="Sesi 3 (Sore) | 14.00 - 16.00 WITA">Sesi 3 (Sore) - 14.00 s/d 16.00 WITA</option>
            </select>
          </div>

          <div>
            <label class="text-[11px] font-bold text-slate-700 mb-1 block uppercase">Lokasi Lab:</label>
            <select id="labSelect" class="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs outline-none bg-white font-semibold">
              <option value="Lab Komputer Bahasa A">Lab Komputer Bahasa A (30 Unit)</option>
              <option value="Lab Komputer Bahasa B">Lab Komputer Bahasa B (30 Unit)</option>
            </select>
          </div>

          <div class="flex items-end">
            <button id="btnKunciSesi" class="w-full bg-[#0a8a40] hover:bg-emerald-950 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-sm">
              Kunci Plotting Sesi
            </button>
          </div>
        </div>

        <!-- TABEL DATA -->
        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-3 text-center no-print w-20">Pilih All</th>
                <th class="p-3">NIM & Status</th>
                <th class="p-3">Nama Mahasiswa</th>
                <th class="p-3">Program Studi</th>
                <th class="p-3 text-center">Meja PC</th>
              </tr>
            </thead>
            <tbody id="tableMahasiswaBody" class="divide-y divide-slate-100">
              <tr><td colspan="5" class="p-6 text-center text-slate-400">Memuat data...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}