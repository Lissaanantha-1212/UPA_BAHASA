import { databaseServices } from '../services/databaseServices.js';

export class Portalpublik {
  render() {
    return `
      <div class="max-w-3xl mx-auto space-y-6">
        <div class="bg-gradient-to-r from-[#0a8a40] to-emerald-800 text-white rounded-2xl p-8 text-center shadow-md">
          <h2 class="text-2xl font-extrabold mb-1">Portal Hasil TOEFL & Remedial</h2>
          <p class="text-xs text-emerald-100">Layanan Mandiri Mahasiswa UPA Bahasa POLNES</p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-2">
          <input type="text" id="cekNimInput" placeholder="Ketik NIM Anda (contoh: 246151048)..." class="flex-1 px-4 py-2 border rounded-xl text-xs font-mono outline-none">
          <button id="btnCariSkor" class="bg-[#0a8a40] text-white text-xs font-bold px-6 py-2 rounded-xl shadow-sm">
            Cari Nilai
          </button>
        </div>

        <div id="resultCard" class="hidden bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
          <h3 id="resNama" class="text-base font-bold text-slate-800">-</h3>
          <p id="resNim" class="text-xs text-slate-500 font-mono">-</p>

          <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center">
            <span class="text-xs font-bold text-emerald-800 block uppercase">Total Skor TOEFL</span>
            <span id="resSkorTotal" class="text-3xl font-black text-emerald-900">0</span>
          </div>

          <div id="remedialBox" class="hidden bg-rose-50 border border-rose-200 p-4 rounded-xl text-center space-y-2">
            <p class="text-xs text-rose-800 font-semibold">Skor Anda belum memenuhi syarat kelulusan (400).</p>
            <button id="btnActionRemedial" class="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl">
              📝 Klik Untuk Mendaftar Remedial Test
            </button>
          </div>
        </div>
      </div>
    `;
  }
}