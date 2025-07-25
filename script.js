// --- Локализация: основные языки ---
const UI_TEXT = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой ваш вопрос астрологу?",
    placeh: "Покупать мне BMW X5 на следующей неделе?",
    me: "Мои данные",
    partner: "Данные партнера",
    options: "Дополнительные опции",
    num: "Нумерология",
    taro: "Таро",
    china: "Китайский гороскоп",
    more: "Ещё",
    save: "Сохранить",
    cancel: "Отмена",
    name: "Имя",
    dob: "Дата рождения",
    place: "Место рождения",
    gender: "Пол",
    time: "Время рождения",
    question: "Вопрос",
    result: "Результат",
    wait: "⏳ Запрос отправлен... ждём ответ от звёзд :)",
    enterQ: "Введите свой вопрос!"
  },
  en: {
    astro: "GlobalAstro",
    ask: "Get Answer",
    qLabel: "What is your question for the astrologer?",
    placeh: "Should I buy a BMW X5 next week?",
    me: "My Data",
    partner: "Partner's Data",
    options: "Extra options",
    num: "Numerology",
    taro: "Tarot",
    china: "Chinese horoscope",
    more: "More",
    save: "Save",
    cancel: "Cancel",
    name: "Name",
    dob: "Date of birth",
    place: "Place of birth",
    gender: "Gender",
    time: "Time of birth",
    question: "Question",
    result: "Result",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!"
  }
  // Добавь свои языки аналогично
};

// --- Переменные с данными ---
let curLang = localStorage.getItem("astro_lang") || "ru";
let meData = JSON.parse(localStorage.getItem("meData") || '{}');
let partnerData = JSON.parse(localStorage.getItem("partnerData") || '{}');
let optionsData = JSON.parse(localStorage.getItem("optionsData") || '{}');

// --- Локализация интерфейса ---
function setLang(lang) {
  curLang = lang;
  localStorage.setItem("astro_lang", lang);
  const T = UI_TEXT[lang] || UI_TEXT["ru"];
  document.getElementById('brand-title').innerText = T.astro;
  document.getElementById('ask-btn').innerText = T.ask;
  document.getElementById('label-title').innerText = T.qLabel;
  document.getElementById('question').placeholder = T.placeh;
  document.getElementById('me-title').innerText = T.me;
  document.getElementById('partner-title').innerText = T.partner;
  document.getElementById('options-title').innerText = T.options;

  // Модальные окна
  document.getElementById('modal-me-title').innerText = T.me;
  document.getElementById('me-dob-label').innerText = T.dob;
  document.getElementById('me-place-label').innerText = T.place;
  document.getElementById('me-gender-label').innerText = T.gender;
  document.getElementById('me-time-label').innerText = T.time;
  document.getElementById('me-save-btn').innerText = T.save;
  document.getElementById('me-cancel-btn').innerText = T.cancel;
  document.getElementById('modal-partner-title').innerText = T.partner;
  document.getElementById('p-name-label').innerText = T.name;
  document.getElementById('p-dob-label').innerText = T.dob;
  document.getElementById('p-place-label').innerText = T.place;
  document.getElementById('p-gender-label').innerText = T.gender;
  document.getElementById('p-time-label').innerText = T.time;
  document.getElementById('partner-save-btn').innerText = T.save;
  document.getElementById('partner-cancel-btn').innerText = T.cancel;
  document.getElementById('modal-options-title').innerText = T.options;
  document.getElementById('options-save-btn').innerText = T.save;
  document.getElementById('options-cancel-btn').innerText = T.cancel;
  document.querySelectorAll('#modal-options label')[0].innerHTML = `<input type="checkbox" id="opt-num"> ${T.num}`;
  document.querySelectorAll('#modal-options label')[1].innerHTML = `<input type="checkbox" id="opt-taro"> ${T.taro}`;
  document.querySelectorAll('#modal-options label')[2].innerHTML = `<input type="checkbox" id="opt-china"> ${T.china}`;
  document.querySelectorAll('#modal-options label')[3].innerHTML = `<input type="checkbox" id="opt-more"> ${T.more}`;
}
setLang(curLang);
document.getElementById('lang-select').value = curLang;
document.getElementById('lang-select').addEventListener('change', function() {
  setLang(this.value);
});

// --- Восстанавливаем данные и отображаем их ---
function updateCards() {
  // Мои данные
  const me = JSON.parse(localStorage.getItem("meData") || '{}');
  let filledMe = me.dob || me.place || me.gender || me.time;
  document.getElementById('me-btn').className = "card-btn" + (filledMe ? " filled" : " empty");
  document.getElementById('me-content').innerHTML = filledMe
    ? `${me.dob || '—'}<br>${me.place || '—'}<br>${me.gender || '—'}<br>${me.time || '—'}`
    : "—<br>—<br>—<br>—";

  // Данные партнера
  const p = JSON.parse(localStorage.getItem("partnerData") || '{}');
  let filledP = p.name || p.dob || p.place || p.gender || p.time;
  document.getElementById('partner-btn').className = "card-btn" + (filledP ? " filled" : " empty");
  document.getElementById('partner-content').innerHTML = filledP
    ? `${p.name || '—'}<br>${p.dob || '—'}<br>${p.place || '—'}<br>${p.gender || '—'}<br>${p.time || '—'}`
    : "—<br>—<br>—<br>—<br>—";

  // Опции
  const opts = JSON.parse(localStorage.getItem("optionsData") || '{}');
  let optsTxt = [];
  if (opts.num) optsTxt.push(UI_TEXT[curLang].num);
  if (opts.taro) optsTxt.push(UI_TEXT[curLang].taro);
  if (opts.china) optsTxt.push(UI_TEXT[curLang].china);
  if (opts.more) optsTxt.push(UI_TEXT[curLang].more);
  document.getElementById('options-btn').className = "card-btn full-btn" + (optsTxt.length ? " filled" : " empty");
  document.getElementById('options-content').innerHTML = optsTxt.length ? optsTxt.join(", ") : "—";
}
updateCards();

// --- Модалки (открытие/закрытие) ---
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
function openModal(id) { document.getElementById(id).classList.add('active'); }

document.getElementById('me-btn').onclick = () => {
  const me = JSON.parse(localStorage.getItem("meData") || '{}');
  document.getElementById('me-dob').value = me.dob || '';
  document.getElementById('me-place').value = me.place || '';
  document.getElementById('me-gender').value = me.gender || '';
  document.getElementById('me-time').value = me.time || '';
  openModal('modal-me');
};
document.getElementById('partner-btn').onclick = () => {
  const p = JSON.parse(localStorage.getItem("partnerData") || '{}');
  document.getElementById('p-name').value = p.name || '';
  document.getElementById('p-dob').value = p.dob || '';
  document.getElementById('p-place').value = p.place || '';
  document.getElementById('p-gender').value = p.gender || '';
  document.getElementById('p-time').value = p.time || '';
  openModal('modal-partner');
};
document.getElementById('options-btn').onclick = () => {
  const opts = JSON.parse(localStorage.getItem("optionsData") || '{}');
  document.getElementById('opt-num').checked = !!opts.num;
  document.getElementById('opt-taro').checked = !!opts.taro;
  document.getElementById('opt-china').checked = !!opts.china;
  document.getElementById('opt-more').checked = !!opts.more;
  openModal('modal-options');
};

document.getElementById('me-cancel-btn').onclick = () => closeModal('modal-me');
document.getElementById('partner-cancel-btn').onclick = () => closeModal('modal-partner');
document.getElementById('options-cancel-btn').onclick = () => closeModal('modal-options');

document.getElementById('me-save-btn').onclick = () => {
  const me = {
    dob: document.getElementById('me-dob').value,
    place: document.getElementById('me-place').value,
    gender: document.getElementById('me-gender').value,
    time: document.getElementById('me-time').value
  };
  localStorage.setItem("meData", JSON.stringify(me));
  updateCards();
  closeModal('modal-me');
};
document.getElementById('partner-save-btn').onclick = () => {
  const p = {
    name: document.getElementById('p-name').value,
    dob: document.getElementById('p-dob').value,
    place: document.getElementById('p-place').value,
    gender: document.getElementById('p-gender').value,
    time: document.getElementById('p-time').value
  };
  localStorage.setItem("partnerData", JSON.stringify(p));
  updateCards();
  closeModal('modal-partner');
};
document.getElementById('options-save-btn').onclick = () => {
  const opts = {
    num: document.getElementById('opt-num').checked,
    taro: document.getElementById('opt-taro').checked,
    china: document.getElementById('opt-china').checked,
    more: document.getElementById('opt-more').checked
  };
  localStorage.setItem("optionsData", JSON.stringify(opts));
  updateCards();
  closeModal('modal-options');
};

// --- Отправка вопроса ---
document.getElementById('ask-btn').onclick = () => {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    document.getElementById('result').innerText = UI_TEXT[curLang].enterQ;
    return;
  }
  document.getElementById('result').innerText = UI_TEXT[curLang].wait;
  const me = JSON.parse(localStorage.getItem("meData") || '{}');
  const p = JSON.parse(localStorage.getItem("partnerData") || '{}');
  const opts = JSON.parse(localStorage.getItem("optionsData") || '{}');
  fetch("/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lang: curLang,
      question,
      me,
      partner: p,
      options: opts
    })
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById('result').innerText = res.response || (res.error ? "Ошибка: " + res.error : "Нет ответа");
  })
  .catch(e => {
    document.getElementById('result').innerText = "Ошибка соединения: " + e;
  });
};

window.addEventListener('storage', updateCards);
