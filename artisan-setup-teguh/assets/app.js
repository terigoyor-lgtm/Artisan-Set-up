const tasks = [...document.querySelectorAll('.task')];
const progressNumber = document.getElementById('progressNumber');
const progressBar = document.getElementById('progressBar');
function updateProgress(){
  const done = tasks.filter(t => t.checked).length;
  const pct = tasks.length ? Math.round(done/tasks.length*100) : 0;
  progressNumber.textContent = pct + '%';
  progressBar.style.width = pct + '%';
}
tasks.forEach(t => t.addEventListener('change', updateProgress));
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
document.getElementById('makeSummary').addEventListener('click', () => {
  const checked = tasks.filter(t => t.checked).length;
  const com = document.getElementById('comResult').value || 'Belum diisi';
  const temp = document.getElementById('tempResult').value || 'Belum diisi';
  const led = document.getElementById('ledResult').value || 'Belum diisi';
  const text = `Setup Artisan Scope — Roasting Teguh 60 KG\nChecklist selesai: ${checked}/${tasks.length}\nPort COM: ${com}\nPembacaan suhu: ${temp}\nIndikator TXD/RXD: ${led}\nKontroler: HYUNYOUNG VX4 / UMMA-A1C\nAdaptor: USB-RS485 WJZHIT H485\nCatatan: Protokol komunikasi belum terkonfirmasi. Jangan menebak parameter serial; konfirmasikan melalui manual/pemasok.`;
  document.getElementById('summaryText').textContent = text;
  document.getElementById('summary').classList.remove('hidden');
});
document.getElementById('copySummary').addEventListener('click', async () => {
  const text = document.getElementById('summaryText').textContent;
  try { await navigator.clipboard.writeText(text); document.getElementById('copySummary').textContent = 'Tersalin ✓'; }
  catch(e) { const r=document.createRange(); r.selectNodeContents(document.getElementById('summaryText')); const s=window.getSelection(); s.removeAllRanges(); s.addRange(r); document.getElementById('copySummary').textContent='Pilih teks lalu salin'; }
});
