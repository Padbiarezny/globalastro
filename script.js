// --------- Мультиязычность и автоопределение языка Telegram --------
const LANGS = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой Ваш вопрос астрологу?",
    qPlaceholder: [
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
    ],
    me: "Мои данные",
    partner: "Данные партнёра",
    options: "Дополнительные опции",
    resError: "Ошибка соединения: ",
    wait: "⏳ Запрос отправлен... ждём ответ от звёзд :)",
    enterQ: "Введите свой вопрос!"
  },
  en: {
    astro: "GlobalAstro",
    ask: "Get Answer",
    qLabel: "What is your question for the astrologer?",
    qPlaceholder: [
      "Should I buy a BMW X5 next week?",
      "What awaits me in a new relationship?",
      "How will my career unfold this year?",
      "When is the best time to start something new?",
      "Should I agree to move?",
      "What are the most important energies of the month for me?",
      "Which field will bring me success soon?",
      "How will my relationship with children develop?",
      "Will I meet love this month?",
      "Is my chosen profession right for me?",
      "When to expect a promotion?",
      "Should I invest in real estate now?",
      "What does my horoscope say about health?",
      "Will I find new friends this year?",
      "Should I change my field?",
      "Are there risks of big expenses this month?",
      "When is the best time to plan a vacation?",
      "Will I realize my creative project?",
      "What date is lucky for signing a contract?",
      "How compatible am I with my partner?"
    ],
    me: "My Data",
    partner: "Partner's Data",
    options: "Extra options",
    resError: "Connection error: ",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!"
  }
  // ... добавь другие языки по аналогии
};

// --- Детектор языка Telegram MiniApp или браузера ---
function detectLang() {
  let code = "ru";
  try {
    if (
      window.Telegram &&
      Telegram.WebApp &&
      Telegram.WebApp.initDataUnsafe &&
      Telegram.WebApp.initDataUnsafe.user &&
      Telegram.WebApp.initDataUnsafe.user.language_code
    ) {
      code = Telegram.WebApp.initDataUnsafe.user.language_code.toLowerCase();
      if (code in LANGS) return code;
    }
    // если не из Telegram, пробуем по браузеру
    code = navigator.language ? navigator.language.toLowerCase().split('-')[0] : "ru";
    if (code in LANGS) return code;
  } catch (e) {}
  return "ru";
}
const CUR_LANG = detectLang();
const L = LANGS[CUR_LANG] || LANGS["ru"];

// ----------- Плейсхолдеры для textarea --------
let qIndex = 0;
function rotatePlaceholder() {
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", L.qPlaceholder[qIndex]);
  qIndex = (qIndex + 1) % L.qPlaceholder.length;
}
setInterval(rotatePlaceholder, 3000);
rotatePlaceholder();

// --------- LocalStorage ----------
function getData(type) {
  const fields = (type === 'me') ? ['dob', 'place', 'gender', 'time'] : ['name', 'dob', 'place', 'gender', 'time'];
  let data = {};
  fields.forEach(f => data[f] = localStorage.getItem(`astro_${type}_${f}`) || '');
  return data;
}
function setData(type, data) {
  Object.keys(data).forEach(key => localStorage.setItem(`astro_${type}_${key}`, data[key] || ''));
}

// -------- Обновление кнопок ----------
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

// -------- Модалки ----------
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
// Закрытие по фону
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

// --------- Обновление текста по языку ----------
document.querySelector(".brand-title").innerText = L.astro;
document.querySelector(".ask-btn").innerText = L.ask;
document.querySelector(".label-title").innerText = L.qLabel;

// -------- Запрос к серверу ----------
document.getElementById('ask-btn').onclick = function() {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    document.getElementById('result').innerText = L.enterQ;
    return;
  }
  const me = getData('me');
  const partner = getData('partner');
  const opts = {
    num: localStorage.getItem('astro_opt_num') === '1',
    taro: localStorage.getItem('astro_opt_taro') === '1',
    china: localStorage.getItem('astro_opt_china') === '1',
    more: localStorage.getItem('astro_opt_more') === '1'
  };
  document.getElementById('result').innerText = L.wait;
  document.getElementById('ask-btn').disabled = true;
  fetch("https://globalastro.onrender.com/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question, me, partner, opts, lang: CUR_LANG
    })
  })
    .then(r => r.json())
    .then(res => {
      if (res.response) document.getElementById('result').innerText = res.response;
      else if (res.error) document.getElementById('result').innerText = L.resError + res.error;
      else document.getElementById('result').innerText = "Нет ответа от сервера.";
    })
    .catch(err => {
      document.getElementById('result').innerText = L.resError + err;
    })
    .finally(() => {
      document.getElementById('ask-btn').disabled = false;
    });
};
