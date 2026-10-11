export class Modul4Approval {
  render() {
    return `
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="text-base font-bold text-slate-800">Modul 4: Panel Verifikasi & Approval Kepala UPA Bahasa</h2>
          <button id="btnPublishAll" class="bg-[#10C35D] hover:bg-[#0a8a40] text-white text-xs px-4 py-2 rounded-xl font-bold">
            Publish Semua Skor ke Supabase
          </button>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 font-bold">
              <tr>
                <th class="p-3">NIM & Nama</th>
                <th class="p-3">Prodi</th>
                <th class="p-3 text-center">Skor TOEFL</th>
                <th class="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody id="tableApprovalBody">
              <tr><td colspan="4" class="p-6 text-center text-slate-400">Belum ada data siap disetujui.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}