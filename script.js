// ——— Работа с localStorage ———
function getData(type) {
  // type: 'me' или 'partner'
  const fields = (type === 'me') ? ['dob', 'place', 'gender', 'time'] : ['name', 'dob', 'place', 'gender', 'time'];
  let data = {};
  fields.forEach(f => {
    data[f] = localStorage.getItem(`astro_${type}_${f}`) || '';
  });
  return data;
}
function setData(type, data) {
  Object.keys(data).forEach(key => {
    localStorage.setItem(`astro_${type}_${key}`, data[key] || '');
  });
}

// ——— Обновление кнопок с данными ———
function updateSummary() {
  // Мои данные
  const me = getData('me');
  let meFields = [
    me.dob ? me.dob : '—',
    me.place ? me.place : '—',
    me.gender ? (me.gender === 'мужской' ? 'М' : 'Ж') : '—',
    me.time ? me.time : '—'
  ];
  let meFilled = me.dob && me.place && me.gender;
  document.getElementById('me-summary').innerHTML = meFields.join('<br>');
  document.getElementById('open-me').className = 'card-btn ' + (meFilled ? 'filled' : 'empty');

  // Партнёр
  const partner = getData('partner');
  let partnerFields = [
    partner.name ? partner.name : '—',
    partner.dob ? partner.dob : '—',
    partner.place ? partner.place : '—',
    partner.gender ? (partner.gender === 'мужской' ? 'М' : (partner.gender === 'женский' ? 'Ж' : '—')) : '—',
    partner.time ? partner.time : '—'
  ];
  let partnerFilled = partner.name && partner.dob && partner.place && partner.gender;
  document.getElementById('partner-summary').innerHTML = partnerFields.join('<br>');
  document.getElementById('open-partner').className = 'card-btn ' + (partnerFilled ? 'filled' : 'empty');
}

// ——— Модальные окна ———
function closeModal() {
  document.getElementById('modal-bg').classList.remove('active');
  document.getElementById('modal-me').style.display = 'none';
  document.getElementById('modal-partner').style.display = 'none';
  document.getElementById('modal-options').style.display = 'none';
}

// Открытие модалок
document.getElementById('open-me').onclick = function() {
  const me = getData('me');
  document.getElementById('me-dob').value = me.dob || '';
  document.getElementById('me-place').value = me.place || '';
  document.getElementById('me-gender').value = me.gender || 'мужской';
  document.getElementById('me-time').value = me.time || '';
  document.getElementById('modal-bg').classList.add('active');
  document.getElementById('modal-me').style.display = 'block';
  document.getElementById('modal-partner').style.display = 'none';
  document.getElementById('modal-options').style.display = 'none';
};
document.getElementById('open-partner').onclick = function() {
  const partner = getData('partner');
  document.getElementById('p-name').value = partner.name || '';
  document.getElementById('p-dob').value = partner.dob || '';
  document.getElementById('p-place').value = partner.place || '';
  document.getElementById('p-gender').value = partner.gender || '';
  document.getElementById('p-time').value = partner.time || '';
  document.getElementById('modal-bg').classList.add('active');
  document.getElementById('modal-partner').style.display = 'block';
  document.getElementById('modal-me').style.display = 'none';
  document.getElementById('modal-options').style.display = 'none';
};
document.getElementById('open-options').onclick = function() {
  document.getElementById('modal-bg').classList.add('active');
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-me').style.display = 'none';
  document.getElementById('modal-partner').style.display = 'none';
};
window.onclick = function(event) {
  if (event.target === document.getElementById('modal-bg')) closeModal();
};

// Сохранение "Мои данные"
function saveMe() {
  const data = {
    dob: document.getElementById('me-dob').value,
    place: document.getElementById('me-place').value,
    gender: document.getElementById('me-gender').value,
    time: document.getElementById('me-time').value
  };
  setData('me', data);
  updateSummary();
  closeModal();
}

// Сохранение "Партнёр"
function savePartner() {
  const data = {
    name: document.getElementById('p-name').value,
    dob: document.getElementById('p-dob').value,
    place: document.getElementById('p-place').value,
    gender: document.getElementById('p-gender').value,
    time: document.getElementById('p-time').value
  };
 
