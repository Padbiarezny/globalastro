// -------- Локализации --------
const locales = {
  ru: {
    "brand-title": "GlobalAstro",
    "question-label": "Какой ваш вопрос астрологу?",
    "ask-btn": "Получить ответ",
    "me-title": "Мои данные",
    "partner-title": "Данные партнёра",
    "options-title": "Дополнительные опции",
    "options-summary": "",
    "result-default": "",
    "modal-me-title": "Мои данные",
    "me-dob-label": "Дата рождения",
    "me-place-label": "Место рождения",
    "me-gender-label": "Пол",
    "me-time-label": "Время рождения",
    "me-save-btn": "Сохранить",
    "me-cancel-btn": "Отмена",
    "modal-partner-title": "Данные партнёра",
    "p-name-label": "Имя",
    "p-dob-label": "Дата рождения",
    "p-place-label": "Место рождения",
    "p-gender-label": "Пол",
    "p-time-label": "Время рождения",
    "partner-save-btn": "Сохранить",
    "partner-cancel-btn": "Отмена",
    "modal-options-title": "Дополнительные опции",
    "opt-num-label": "Нумерология",
    "opt-taro-label": "Таро",
    "opt-china-label": "Китайский гороскоп",
    "opt-more-label": "Ещё",
    "options-save-btn": "Сохранить",
    "options-cancel-btn": "Отмена",
    "me-gender-male": "Мужской",
    "me-gender-female": "Женский",
    "p-gender-male": "Мужской",
    "p-gender-female": "Женский",
    "partner-summary-empty": "—",
    "me-summary-empty": "—",
    "question-placeholder": [
      "Покупать мне BMW X5 на следующей неделе?",
      "Ждать ли повышения в этом месяце?",
      "Встретится ли любовь в этом году?",
      "Стоит ли менять работу сейчас?",
      "Как улучшить отношения с партнёром?",
      "Куда поехать в отпуск летом?",
      "Что ожидает в финансовой сфере?",
      "Нужен ли мне переезд в другой город?",
      "Получится ли сдать экзамен?",
      "Чего ждать от нового проекта?",
      "Будет ли успешна сделка?",
      "Стоит ли начинать бизнес?",
      "Когда лучше выходить замуж?",
      "Какие риски в ближайшее время?",
      "Чего избегать в следующем месяце?",
      "Какой знак зодиака мне подходит?",
      "Чего ждать от партнёра?",
      "Переезжать ли мне за границу?",
      "Стоит ли доверять новому знакомому?",
      "Как пройдут ближайшие недели?"
    ]
  },
  en: {
    "brand-title": "GlobalAstro",
    "question-label": "What is your question to the astrologer?",
    "ask-btn": "Get answer",
    "me-title": "My data",
    "partner-title": "Partner data",
    "options-title": "Additional options",
    "options-summary": "",
    "result-default": "",
    "modal-me-title": "My data",
    "me-dob-label": "Date of birth",
    "me-place-label": "Place of birth",
    "me-gender-label": "Gender",
    "me-time-label": "Time of birth",
    "me-save-btn": "Save",
    "me-cancel-btn": "Cancel",
    "modal-partner-title": "Partner data",
    "p-name-label": "Name",
    "p-dob-label": "Date of birth",
    "p-place-label": "Place of birth",
    "p-gender-label": "Gender",
    "p-time-label": "Time of birth",
    "partner-save-btn": "Save",
    "partner-cancel-btn": "Cancel",
    "modal-options-title": "Additional options",
    "opt-num-label": "Numerology",
    "opt-taro-label": "Tarot",
    "opt-china-label": "Chinese horoscope",
    "opt-more-label": "Other",
    "options-save-btn": "Save",
    "options-cancel-btn": "Cancel",
    "me-gender-male": "Male",
    "me-gender-female": "Female",
    "p-gender-male": "Male",
    "p-gender-female": "Female",
    "partner-summary-empty": "—",
    "me-summary-empty": "—",
    "question-placeholder": [
      "Should I buy a BMW X5 next week?",
      "Will I get a promotion this month?",
      "Will I meet love this year?",
      "Is it time to change my job?",
      "How to improve my relationship?",
      "Where to travel this summer?",
      "What about my finances soon?",
      "Should I move to another city?",
      "Will I pass my exams?",
      "What to expect from my new project?",
      "Will the deal be successful?",
      "Should I start a business?",
      "When is best for marriage?",
      "What are the risks now?",
      "What to avoid next month?",
      "Which zodiac matches me?",
      "What to expect from my partner?",
      "Should I move abroad?",
      "Can I trust a new acquaintance?",
      "How will the coming weeks go?"
    ]
  },
  // Можно добавить остальные языки по аналогии!
};

// -------- Список языков --------
const langList = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" },
  // ...добавь сюда остальные языки по аналогии (если переведёшь)
];

// -------- Глобальная переменная --------
let currentLang = "ru";

// -------- UI-обновление --------
function updateUI() {
  const t = locales[currentLang] || locales["ru"];
  document.getElementById("brand-title").innerText = t["brand-title"];
  document.getElementById("question-label").innerText = t["question-label"];
  document.getElementById("ask-btn").innerText = t["ask-btn"];
  document.getElementById("me-title").innerText = t["me-title"];
  document.getElementById("partner-title").innerText = t["partner-title"];
  document.getElementById("options-title").innerText = t["options-title"];
  document.getElementById("modal-me-title").innerText = t["modal-me-title"];
  document.getElementById("me-dob-label").innerText = t["me-dob-label"];
  document.getElementById("me-place-label").innerText = t["me-place-label"];
  document.getElementById("me-gender-label").innerText = t["me-gender-label"];
  document.getElementById("me-time-label").innerText = t["me-time-label"];
  document.getElementById("me-save-btn").innerText = t["me-save-btn"];
  document.getElementById("me-cancel-btn").innerText = t["me-cancel-btn"];
  document.getElementById("modal-partner-title").innerText = t["modal-partner-title"];
  document.getElementById("p-name-label").innerText = t["p-name-label"];
  document.getElementById("p-dob-label").innerText = t["p-dob-label"];
  document.getElementById("p-place-label").innerText = t["p-place-label"];
  document.getElementById("p-gender-label").innerText = t["p-gender-label"];
  document.getElementById("p-time-label").innerText = t["p-time-label"];
  document.getElementById("partner-save-btn").innerText = t["partner-save-btn"];
  document.getElementById("partner-cancel-btn").innerText = t["partner-cancel-btn"];
  document.getElementById("modal-options-title").innerText = t["modal-options-title"];
  document.getElementById("opt-num-label").innerText = t["opt-num-label"];
  document.getElementById("opt-taro-label").innerText = t["opt-taro-label"];
  document.getElementById("opt-china-label").innerText = t["opt-china-label"];
  document.getElementById("opt-more-label").innerText = t["opt-more-label"];
  document.getElementById("options-save-btn").innerText = t["options-save-btn"];
  document.getElementById("options-cancel-btn").innerText = t["options-cancel-btn"];
  // Gender selects
  document.getElementById("me-gender").options[0].text = t["me-gender-male"];
  document.getElementById("me-gender").options[1].text = t["me-gender-female"];
  document.getElementById("p-gender").options[0].text = t["p-gender-male"];
  document.getElementById("p-gender").options[1].text = t["p-gender-female"];
  // Placeholder вопроса
  placeholderStart();
}

// --------- Placeholder rotation ---------
let phIndex = 0, phTimer = null;
function placeholderStart() {
  const arr = (locales[currentLang] && locales[currentLang]["question-placeholder"]) || locales["ru"]["question-placeholder"];
  const area = document.getElementById("question");
  phIndex = 0;
  area.placeholder = arr[0];
  if (phTimer) clearInterval(phTimer);
  phTimer = setInterval(() => {
    phIndex = (phIndex + 1) % arr.length;
    area.placeholder = arr[phIndex];
  }, 3000);
}

// --------- Language selector ---------
function renderLangSelect() {
  const select = document.getElementById("language-selector");
  select.innerHTML = "";
  langList.forEach(({code, name}) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.innerText = name;
    select.appendChild(opt);
  });
  select.value = currentLang;
  select.onchange = function() {
    currentLang = select.value;
    updateUI();
  };
}

// --------- Инициализация ---------
window.addEventListener("DOMContentLoaded", function() {
  // autodetect
  let tgLang = null;
  try {
    if (window.Telegram && Telegram.WebApp && Telegram.WebApp.initDataUnsafe && Telegram.WebApp.initDataUnsafe.user) {
      tgLang = Telegram.WebApp.initDataUnsafe.user.language_code;
    }
  } catch {}
  if (!tgLang) tgLang = navigator.language.slice(0,2).toLowerCase();
  currentLang = langList.map(l=>l.code).includes(tgLang) ? tgLang : "ru";

  renderLangSelect();
  updateUI();
  // далее весь твой старый функционал!
  // ... (оставь код логики приложения: модалки, отправка, сохранение и т.д.)
});
