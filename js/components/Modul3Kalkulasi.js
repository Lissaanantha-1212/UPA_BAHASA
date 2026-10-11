export class Modul3Kalkulasi {
  render() {
    return `
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-base font-bold text-slate-800">Modul 3: Conversion Lookup Table Engine (Tabel C Baku Resmi)</h2>
          <button id="btnProsesKalkulasi" class="bg-[#10C35D] hover:bg-[#0a8a40] text-white text-xs px-4 py-2 rounded-xl font-bold">
            Jalankan Perhitungan Otomatis
          </button>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 font-bold">
              <tr>
                <th class="p-3">NIM & Nama</th>
                <th class="p-3 text-center">Listening</th>
                <th class="p-3 text-center">Structure</th>
                <th class="p-3 text-center">Reading</th>
                <th class="p-3 text-center">Skor Akhir TOEFL</th>
              </tr>
            </thead>
            <tbody id="tableKalkulasiBody">
              <tr><td colspan="5" class="p-6 text-center text-slate-400">Klik 'Jalankan Perhitungan' untuk mengkalkulasi.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}