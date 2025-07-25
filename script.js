// ================== МОДАЛКИ ДАННЫХ ===================
function openModal(type) {
  document.getElementById(type + "-modal-bg").style.display = "flex";
  // Автозаполняем если уже были
  const saved = JSON.parse(localStorage.getItem('astro_' + type) || '{}');
  ['name','dob','place','gender','time'].forEach(f => {
    if (saved && saved[f]) document.getElementById(type + '-' + f).value = saved[f];
    else document.getElementById(type + '-' + f).value = '';
  });
}
function closeModal(type) {
  document.getElementById(type + "-modal-bg").style.display = "none";
}
function saveModal(type) {
  const obj = {};
  ['name','dob','place','gender','time'].forEach(f => {
    obj[f] = document.getElementById(type + '-' + f).value.trim();
  });
  localStorage.setItem('astro_' + type, JSON.stringify(obj));
  updateButton(type);
  closeModal(type);
}
function updateButton(type) {
  const saved = JSON.parse(localStorage.getItem('astro_' + type) || '{}');
  let lines = [];
  if (saved.name) lines.push(saved.name);
  if (saved.dob) lines.push(saved.dob);
  if (saved.place) lines.push(saved.place);
  if (saved.gender) lines.push(saved.gender);
  if (saved.time) lines.push(saved.time);
  const card = document.getElementById(type + '-data');
  card.innerHTML = lines.length
    ? lines.map(s=>`<div>${s}</div>`).join('')
    : "<div>—</div><div>—</div><div>—</div>";
  card.parentNode.classList.toggle('empty', !lines.length);
}

// ================== ИНИЦИАЛИЗАЦИЯ ===================
window.addEventListener("DOMContentLoaded", () => {
  updateButton('my');
  updateButton('partner');
  document.getElementById('my-data-btn').onclick = ()=>openModal('my');
  document.getElementById('partner-data-btn').onclick = ()=>openModal('partner');
  document.getElementById('close-my').onclick = ()=>closeModal('my');
  document.getElementById('close-partner').onclick = ()=>closeModal('partner');
  document.getElementById('save-my').onclick = ()=>saveModal('my');
  document.getElementById('save-partner').onclick = ()=>saveModal('partner');
});
