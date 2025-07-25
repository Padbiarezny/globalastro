// --- Локализация и UI-текст ---
const UI_TEXT = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой ваш вопрос астрологу?",
    placeh: "Покупать мне BMW X5 на следующей неделе?",
    me: "Мои данные",
    partner: "Данные партнера",
    options: "Дополнительные опции",
    save: "Сохранить",
    cancel: "Отмена",
    name: "Имя",
    dob: "Дата рождения",
    place: "Место рождения",
    gender: "Пол",
    time: "Время рождения",
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
    save: "Save",
    cancel: "Cancel",
    name: "Name",
    dob: "Date of birth",
    place: "Place of birth",
    gender: "Gender",
    time: "Time of birth",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!"
  }
};
let curLang = localStorage.getItem("astro_lang") || "ru";
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
}
setLang(curLang);
document.getElementById('lang-select').value = curLang;
document.getElementById('lang-select').addEventListener('change', function() {
  setLang(this.value);
});

// --- Карточки с данными ---
function updateCards() {
  // Мои данные
  const me = JSON.parse(localStorage.getItem("meData") || '{}');
  let filledMe = me.dob || me.place || me.gender || me.time;
  document.getElementById('me-btn').className = "card-btn" + (filledMe ? " filled" : " empty");
  document.getElementById('me-content').innerHTML = filledMe
    ? `${me.dob || '—'}<br>${me.place || '—'}<br>${me.gender || '—'}<br>${me.time || '—'}`
    : "—<br>—<br>
