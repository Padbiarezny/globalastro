// ---------- Локализации ----------
const locales = {
  ru: {
    "brand-title": "GlobalAstro",
    "question-label": "Какой ваш вопрос астрологу?",
    "ask-btn": "Получить ответ",
    "me-title": "Мои данные",
    "partner-title": "Данные партнёра",
    "options-title": "Дополнительные опции",
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
  }
};
const langList = [
  { code: "ru", name: "Русский" },
  { code: "en", name: "English" }
];
let currentLang = "ru";

// -------------- UI обновление ---------------
function updateUI() {
  const t = locales[currentLang] || locales["ru"];
  document.getElementById("brand-title").innerText = t["brand-title"];
  document.getElementById("question-label").innerText = t["question-label"];
  document.getElementById("ask-btn").innerText = t["ask-btn"];
  document.getElementById("me-title").innerText = t["me-title"];
  document.getElementById("partner-title").innerText = t["partner-title"];
  document.getElementById("options-title").innerText = t["options-title"];
  document.getElementById("me-gender").options[0].text = t["me-gender-male"];
  document.getElementById("me-gender").options[1].text = t["me-gender-female"];
  document.getElementById("p-gender").options[0].text = t["p-gender-male"];
  document.getElementById("p-gender").options[1].text = t["p-gender-female"];
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

// ---------- Language selector ---------
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

// --------------- Modal logic & saving ----------------
// ...твой старый рабочий код для модальных окон, кнопок, открытия/закрытия/сохранения здесь!
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

  // ----------- ДАЛЕЕ вставь сюда весь твой рабочий код ниже -----------
  // --- Ниже пример базовой логики (добавь свою если отличается):
  // 1. Открытие/закрытие модальных окон
  document.getElementById('me-title').onclick = function() {
    document.getElementById('modal-me').classList.add('show');
  };
  document.getElementById('partner-title').onclick = function() {
    document.getElementById('modal-partner').classList.add('show');
  };
  document.getElementById('options-title').onclick = function() {
    document.getElementById('modal-options').classList.add('show');
  };
  document.querySelectorAll('.modal-cancel').forEach(btn => btn.onclick = function() {
    btn.closest('.modal').classList.remove('show');
  });
  document.getElementById('me-save-btn').onclick = function() {
    // сохранить мои данные
    localStorage.setItem("me-dob", document.getElementById("me-dob").value);
    localStorage.setItem("me-place", document.getElementById("me-place").value);
    localStorage.setItem("me-gender", document.getElementById("me-gender").value);
    localStorage.setItem("me-time", document.getElementById("me-time").value);
    document.getElementById('modal-me').classList.remove('show');
  };
  document.getElementById('partner-save-btn').onclick = function() {
    localStorage.setItem("p-name", document.getElementById("p-name").value);
    localStorage.setItem("p-dob", document.getElementById("p-dob").value);
    localStorage.setItem("p-place", document.getElementById("p-place").value);
    localStorage.setItem("p-gender", document.getElementById("p-gender").value);
    localStorage.setItem("p-time", document.getElementById("p-time").value);
    document.getElementById('modal-partner').classList.remove('show');
  };
  document.getElementById('options-save-btn').onclick = function() {
    // Сохрани опции если они есть
    document.getElementById('modal-options').classList.remove('show');
  };

  // 2. Восстановление полей
  document.getElementById("me-dob").value = localStorage.getItem("me-dob") || "";
  document.getElementById("me-place").value = localStorage.getItem("me-place") || "";
  document.getElementById("me-gender").value = localStorage.getItem("me-gender") || "мужской";
  document.getElementById("me-time").value = localStorage.getItem("me-time") || "";

  document.getElementById("p-name").value = localStorage.getItem("p-name") || "";
  document.getElementById("p-dob").value = localStorage.getItem("p-dob") || "";
  document.getElementById("p-place").value = localStorage.getItem("p-place") || "";
  document.getElementById("p-gender").value = localStorage.getItem("p-gender") || "мужской";
  document.getElementById("p-time").value = localStorage.getItem("p-time") || "";

  // 3. Отправка формы
  document.getElementById("ask-btn").onclick = function() {
    const question = document.getElementById("question").value;
    const me = {
      dob: localStorage.getItem("me-dob") || "",
      place: localStorage.getItem("me-place") || "",
      gender: localStorage.getItem("me-gender") || "",
      time: localStorage.getItem("me-time") || ""
    };
    const partner = {
      name: localStorage.getItem("p-name") || "",
      dob: localStorage.getItem("p-dob") || "",
      place: localStorage.getItem("p-place") || "",
      gender: localStorage.getItem("p-gender") || "",
      time: localStorage.getItem("p-time") || ""
    };
    document.getElementById("result").innerText = "⏳ " + (currentLang === "en" ? "Sending..." : "Запрос отправлен... ждём ответ :)");
    fetch("/horoscope", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, me, partner, lang: currentLang })
    })
      .then(r=>r.json())
      .then(r=>{
        document.getElementById("result").innerText = r.response || (currentLang === "en" ? "No answer" : "Нет ответа от сервера");
      })
      .catch(()=>{
        document.getElementById("result").innerText = currentLang === "en" ? "Error" : "Ошибка соединения";
      });
  };

});
