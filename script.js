// --- Локализация: основные языки ---
const UI_TEXT = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой Ваш вопрос астрологу?",
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
    time: "Время рождения (необязательно)",
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
    time: "Time of birth (optional)",
    question: "Question",
    result: "Result",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!"
  }
  // Добавь другие языки по аналогии!
};

// --- Установка языка по выбору ---
let curLang = localStorage.getItem("astro_lang") || "ru";
function setLang(lang) {
  curLang = lang;
  localStorage.setItem("astro_lang", lang);
  const T = UI_TEXT[lang] || UI_TEXT["ru"];
  document.querySelector('.brand-title').innerText = T.astro;
  document.querySelector('.ask-btn').innerText = T.ask;
  document.querySelector('.label-title').innerText = T.qLabel;
  document.getElementById('question').setAttribute("placeholder", T.placeh);
  document.getElementById('open-me').querySelector(".card-title").innerText = T.me;
  document.getElementById('open-partner').querySelector(".card-title").innerText = T.partner;
  document.getElementById('open-options').querySelector(".card-title").innerText = T.options;

  // Модальные окна (если открыты — обновлять тоже)
  document.querySelectorAll('.modal').forEach(modal => {
    if (modal.id === 'modal-me') {
      modal.querySelector('h3').innerText = T.me;
      modal.querySelectorAll('label')[0].innerText = T.dob;
      modal.querySelectorAll('label')[1].innerText = T.place;
      modal.querySelectorAll('label')[2].innerText = T.gender;
      modal.querySelectorAll('label')[3].innerText = T.time;
      modal.querySelectorAll('.modal-btn')[0].innerText = T.save;
      modal.querySelectorAll('.modal-btn')[1].innerText = T.cancel;
    }
    if (modal.id === 'modal-partner') {
      modal.querySelector('h3').innerText = T.partner;
      modal.querySelectorAll('label')[0].innerText = T.name;
      modal.querySelectorAll('label')[1].innerText = T.dob;
      modal.querySelectorAll('label')[2].innerText = T.place;
      modal.querySelectorAll('label')[3].innerText = T.gender;
      modal.querySelectorAll('label')[4].innerText = T.time;
      modal.querySelectorAll('.modal-btn')[0].innerText = T.save;
      modal.querySelectorAll('.modal-btn')[1].innerText = T.cancel;
    }
    if (modal.id === 'modal-options') {
      modal.querySelector('h3').innerText = T.options;
      modal.querySelectorAll('label')[0].innerHTML = `<input type="checkbox" id="opt-num"> ${T.num}`;
      modal.querySelectorAll('label')[1].innerHTML = `<input type="checkbox" id="opt-taro"> ${T.taro}`;
      modal.querySelectorAll('label')[2].innerHTML = `<input type="checkbox" id="opt-china"> ${T.china}`;
      modal.querySelectorAll('label')[3].innerHTML = `<input type="checkbox" id="opt-more"> ${T.more}`;
      modal.querySelectorAll('.modal-btn')[0].innerText = T.save;
      modal.querySelectorAll('.modal-btn')[1].innerText = T.cancel;
    }
  });
}
document.getElementById('lang-select').value = curLang;
setLang(curLang);
document.getElementById('lang-select').addEventListener('change', function() {
  setLang(this.value);
});
const translations = {
  ru: {
    "brand-title": "GlobalAstro",
    "question-label": "Какой ваш вопрос астрологу?",
    "ask-btn": "Получить ответ",
    "me-title": "Мои данные",
    "partner-title": "Данные партнёра",
    "options-title": "Дополнительные опции",
    "modal-me-title": "Мои данные",
    "me-dob-label": "Дата рождения",
    "me-place-label": "Место рождения",
    "me-gender-label": "Пол",
    "me-time-label": "Время рождения",
    "me-save-btn": "Сохранить",
    "modal-partner-title": "Данные партнёра",
    "p-name-label": "Имя",
    "p-dob-label": "Дата рождения",
    "p-place-label": "Место рождения",
    "p-gender-label": "Пол",
    "p-time-label": "Время рождения",
    "partner-save-btn": "Сохранить",
    "modal-options-title": "Дополнительные опции",
    "opt-num-label": "Нумерология",
    "opt-taro-label": "Таро",
    "opt-china-label": "Китайский гороскоп",
    "opt-more-label": "Ещё",
    "options-save-btn": "Сохранить",
    "question-placeholder": "Покупать мне BMW X5 на следующей неделе?"
  },
  en: {
    "brand-title": "GlobalAstro",
    "question-label": "What is your question to the astrologer?",
    "ask-btn": "Get answer",
    "me-title": "My data",
    "partner-title": "Partner data",
    "options-title": "Additional options",
    "modal-me-title": "My data",
    "me-dob-label": "Date of birth",
    "me-place-label": "Place of birth",
    "me-gender-label": "Gender",
    "me-time-label": "Time of birth",
    "me-save-btn": "Save",
    "modal-partner-title": "Partner data",
    "p-name-label": "Name",
    "p-dob-label": "Date of birth",
    "p-place-label": "Place of birth",
    "p-gender-label": "Gender",
    "p-time-label": "Time of birth",
    "partner-save-btn": "Save",
    "modal-options-title": "Additional options",
    "opt-num-label": "Numerology",
    "opt-taro-label": "Tarot",
    "opt-china-label": "Chinese horoscope",
    "opt-more-label": "More",
    "options-save-btn": "Save",
    "question-placeholder": "Should I buy a BMW X5 next week?"
  }
};

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  Object.entries(t).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.innerText = text;
      }
    }
  });
}
document.getElementById('language-selector').addEventListener('change', function() {
  applyLang(this.value);
});

window.addEventListener('DOMContentLoaded', function() {
  applyLang(document.getElementById('language-selector').value);

  // --- Кнопки модалок ---
  document.getElementById('me-btn').onclick = () => {
    document.getElementById('modal-me').classList.add('active');
  };
  document.getElementById('partner-btn').onclick = () => {
    document.getElementById('modal-partner').classList.add('active');
  };
  document.getElementById('options-btn').onclick = () => {
    document.getElementById('modal-options').classList.add('active');
  };

  document.querySelectorAll('.modal-cancel').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.modal-bg').classList.remove('active');
    };
  });
  // --- Сохраняем и закрываем модалки (можешь доработать свою логику ниже)
  document.getElementById('me-save-btn').onclick = function() {
    document.getElementById('modal-me').classList.remove('active');
  };
  document.getElementById('partner-save-btn').onclick = function() {
    document.getElementById('modal-partner').classList.remove('active');
  };
  document.getElementById('options-save-btn').onclick = function() {
    document.getElementById('modal-options').classList.remove('active');
  };
});
