export class Modul2AutoMapping {
  render() {
    return `
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-6">
        <div class="flex justify-between items-center border-b pb-3">
          <div>
            <h2 class="text-base font-bold text-slate-800">Modul 2: Upload Excel Hasil Ujian Lab & Auto-Mapping Engine</h2>
            <p class="text-xs text-slate-500">Menampilkan seluruh data meja komputer hasil ujian secara real-time.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-2">
            <span class="text-xs font-bold text-slate-700 block">1. Section 1 (Listening)</span>
            <input type="file" id="fileS1" accept=".xlsx, .xls" class="text-xs">
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-2">
            <span class="text-xs font-bold text-slate-700 block">2. Section 2 (Structure)</span>
            <input type="file" id="fileS2" accept=".xlsx, .xls" class="text-xs">
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-2">
            <span class="text-xs font-bold text-slate-700 block">3. Section 3 (Reading)</span>
            <input type="file" id="fileS3" accept=".xlsx, .xls" class="text-xs">
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-100 font-bold">
              <tr>
                <th class="p-3">Meja PC</th>
                <th class="p-3">Hasil Jawaban (S1 | S2 | S3)</th>
                <th class="p-3">Status Auto-Mapping</th>
                <th class="p-3">Mahasiswa Terikat</th>
              </tr>
            </thead>
            <tbody id="tableMappingBody">
              <tr><td colspan="4" class="p-6 text-center text-slate-400">Belum ada file Excel diunggah.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}