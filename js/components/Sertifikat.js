export class Sertifikat {
  render() {
    return `
      <div id="certificatePrintArea" class="bg-white border-8 border-double border-slate-300 p-6 shadow-2xl relative font-serif my-2 text-slate-900">
        <div class="text-center space-y-2">
          <h2 class="text-base font-bold tracking-widest uppercase underline">CERTIFICATE OF ACHIEVEMENT</h2>
          <p class="text-xs italic">This is presented to</p>
          <h3 id="certStudentName" class="text-lg font-bold uppercase border-b border-dashed inline-block px-4 py-1">-</h3>
        </div>
      </div>
    `;
  }
}