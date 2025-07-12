// ---------- Локализация -----------
const langs = [
  {code:"ru", label:"🇷🇺 Русский"},
  {code:"en", label:"🇬🇧 English"},
  {code:"es", label:"🇪🇸 Español"},
  {code:"pt", label:"🇵🇹 Português"},
  {code:"de", label:"🇩🇪 Deutsch"},
  {code:"fr", label:"🇫🇷 Français"},
  {code:"sr", label:"🇷🇸 Српски"},
  {code:"pl", label:"🇵🇱 Polski"},
  {code:"ar", label:"🇸🇦 العربية"},
  {code:"zh", label:"🇨🇳 中文"}
];

// Оставляю только два языка как пример — добавь по аналогии!
const labels = {
  ru: {
    qLbl: "Какой Ваш вопрос астрологу?",
    me: "Мои данные",
    partner: "Данные партнёра",
    opts: "Дополнительные опции",
    ask: "Получить ответ",
    ex: [
      "Покупать мне BMW X5 на следующей неделе?",
      "Что ждёт меня в отношениях с новым партнёром?",
      "Как будет складываться моя карьера в этом году?",
      "Когда лучше начинать новое дело?",
      "Стоит ли соглашаться на переезд?",
      "Какие энергии месяца для меня наиболее важны?",
      "В какой сфере меня ждёт успех в ближайшее время?",
      "Как будут складываться отношения с детьми?",
      "Есть ли вероятность встретить любовь в этом месяце?",
      "Подходит ли мне выбранная профессия?",
      "Когда ждать повышения на работе?",
      "Стоит ли инвестировать в недвижимость сейчас?",
      "Что скажет гороскоп о моём здоровье?",
      "Появятся ли новые друзья в этом году?",
      "Нужно ли мне менять сферу деятельности?",
      "Есть ли опасность крупных трат в этом месяце?",
      "Когда лучше планировать отпуск?",
      "Смогу ли я реализовать творческий проект?",
      "Какая дата удачна для подписания договора?",
      "Какова совместимость с моим партнёром?"
    ]
  },
  en: {
    qLbl: "What is your question to the astrologer?",
    me: "My Data",
    partner: "Partner's Data",
    opts: "Additional Options",
    ask: "Get Answer",
    ex: [
      "Should I buy a BMW X5 next week?",
      "What awaits me in my relationship with a new partner?",
      "How will my career develop this year?",
      "When is the best time to start a new project?",
      "Should I accept the relocation offer?",
      "Which monthly energies are most important for me?",
      "Which area will bring me success soon?",
      "How will relationships with children go?",
      "Will I find love this month?",
      "Is my career path the right one for me?",
      "When can I expect a promotion at work?",
      "Is it a good time to invest in real estate?",
      "What does my horoscope say about my health?",
      "Will I make new friends this year?",
      "Should I change my professional field?",
      "Are large expenses a risk this month?",
      "When is the best time to plan a vacation?",
      "Will I succeed with my creative project?",
      "What is a lucky date to sign a contract?",
      "How compatible am I with my partner?"
    ]
  }
  // ... добавь остальные языки по образцу выше
};

// ----------- Переключатель языков (UI) -----------
function renderLangSwitch(current) {
  document.getElementById('lang-switch').innerHTML = langs.map(
    l => `<button class="lang-btn${l.code === current ? ' active' : ''}" data-lang="${l.code}">${l.label}</button>`
  ).join(' ');
  Array.from(document.querySelectorAll('.lang-btn')).forEach(btn => {
    btn.onclick = () => setLang(btn.dataset.lang);
  });
}

// ----------- Логика смены языка -----------
function setLang(code) {
  localStorage.setItem('astro_lang', code);
  const l = labels[code] || labels.ru;
  document.getElementById('lbl-q').innerText = l.qLbl;
  document.getElementById('lbl-me').innerText = l.me;
  document.getElementById('lbl-partner').innerText = l.partner;
  document.getElementById('lbl-options').innerText = l.opts;
  document.getElementById('ask-btn').innerText = l.ask;
  renderLangSwitch(code);
  // Запускаем новые примеры
  exList = l.ex;
  exIdx = 0;
  rotatePlaceholder();
}
let exList = labels.ru.ex, exIdx = 0, exTimer = null;
function rotatePlaceholder() {
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", exList[exIdx]);
  exIdx = (exIdx + 1) % exList.length;
  if (exTimer) clearTimeout(exTimer);
  exTimer = setTimeout(rotatePlaceholder, 3000);
}

// ---------- Остальной твой рабочий код ниже (без изменений) ----------

// ------ LocalStorage работа ------
function getData(type) {
  const fields = (type === 'me') ? ['dob', 'place', 'gender', 'time'] : ['name', 'dob', 'place', 'gender', 'time'];
  let data = {};
  fields.forEach(f => data[f] = localStorage.getItem(`astro_${type}_${f}`) || '');
  return data;
}
function setData(type, data) {
  Object.keys(data).forEach(key => localStorage.setItem(`astro_${type}_${key}`, data[key] || ''));
}
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
function updateOptionsSummary() {
  let enabled = [];
  if (localStorage.getItem('astro_opt_num') === '1') enabled.push('Нумерология');
  if (localStorage.getItem('astro_opt_taro') === '1') enabled.push('Таро');
  if (localStorage.getItem('astro_opt_china') === '1') enabled.push('Китайский гороскоп');
  if (localStorage.getItem('astro_opt_more') === '1') enabled.push('Ещё');
  document.getElementById('options-summary').innerHTML = enabled.length ? enabled.join(', ') : '—';
}

// ------ Модалки ------
function closeModal() {
  document.getElementById('modal-bg').classList.remove('active');
  document.getElementById('modal-me').style.display = 'none';
  document.getElementById('modal-partner').style.display = 'none';
  document.getElementById('modal-options').style.display = 'none';
}

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
  ['num','taro','china','more'].forEach(opt => {
    document.getElementById('opt-' + opt).checked = localStorage.getItem('astro_opt_' + opt) === '1';
  });
  document.getElementById('modal-bg').classList.add('active');
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-partner').style.display = 'none';
  document.getElementById('modal-me').style.display = 'none';
};
document.getElementById('modal-bg').onclick = function(e) {
  if (e.target === this) closeModal();
};
function saveMe() {
  setData('me', {
    dob: document.getElementById('me-dob').value,
    place: document.getElementById('me-place').value,
    gender: document.getElementById('me-gender').value,
    time: document.getElementById('me-time').value
  });
  updateSummary(); closeModal();
}
function savePartner() {
  setData('partner', {
    name: document.getElementById('p-name').value,
    dob: document.getElementById('p-dob').value,
    place: document.getElementById('p-place').value,
    gender: document.getElementById('p-gender').value,
    time: document.getElementById('p-time').value
  });
  updateSummary(); closeModal();
}
function saveOptions() {
  ['num','taro','china','more'].forEach(opt => {
    localStorage.setItem('astro_opt_' + opt, document.getElementById('opt-' + opt).checked ? '1' : '');
  });
  updateOptionsSummary(); closeModal();
}
updateSummary();
updateOptionsSummary();

// ------ Запрос к серверу ------
document.getElementById('ask-btn').onclick = function() {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    document.getElementById('result').innerText = "Введите свой вопрос!";
    return;
  }
  const me = getData('me');
  const partner = getData('partner');
  const opts = {
    num: localStorage.getItem('astro_opt_num') === '1',
    taro: localStorage.getItem('astro_opt_taro') === '1',
    china: localStorage.getItem('astro_opt
