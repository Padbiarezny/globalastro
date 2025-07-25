// ---- Языки интерфейса ----
const LANGS = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой Ваш вопрос астрологу?",
    me: "Мои данные",
    partner: "Данные партнёра",
    options: "Дополнительные опции",
    resError: "Ошибка соединения: ",
    wait: "⏳ Запрос отправлен... ждём ответ от звёзд :)",
    enterQ: "Введите свой вопрос!",
    partnerName: "Имя",
    dob: "Дата рождения",
    place: "Место рождения",
    gender: "Пол",
    time: "Время рождения (необязательно)",
    save: "Сохранить",
    cancel: "Отмена",
    optNum: "Нумерология",
    optTaro: "Таро",
    optChina: "Китайский гороскоп",
    optMore: "Ещё",
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
    ]
  },
  en: {
    astro: "GlobalAstro",
    ask: "Get Answer",
    qLabel: "What is your question for the astrologer?",
    me: "My Data",
    partner: "Partner's Data",
    options: "Extra options",
    resError: "Connection error: ",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!",
    partnerName: "Name",
    dob: "Date of birth",
    place: "Place of birth",
    gender: "Gender",
    time: "Time of birth (optional)",
    save: "Save",
    cancel: "Cancel",
    optNum: "Numerology",
    optTaro: "Tarot",
    optChina: "Chinese horoscope",
    optMore: "More",
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
    ]
  }
  // ... добавь другие языки по аналогии, если нужно
};

function getLang() {
  let code = localStorage.getItem('astro_lang') || 'ru';
  return code;
}
function setLang(code) {
  localStorage.setItem('astro_lang', code);
  updateLang();
}
function updateLang() {
  const code = getLang();
  const L = LANGS[code] || LANGS['ru'];
  document.querySelector(".brand-title").innerText = L.astro;
  document.querySelector(".ask-btn").innerText = L.ask;
  document.getElementById("qLabel").innerText = L.qLabel;
  document.getElementById("me-title").innerText = L.me;
  document.getElementById("partner-title").innerText = L.partner;
  document.getElementById("options-title").innerText = L.options;
  // модалки
  document.querySelectorAll("#modal-me label")[0].innerText = L.dob;
  document.querySelectorAll("#modal-me label")[1].innerText = L.place;
  document.querySelectorAll("#modal-me label")[2].innerText = L.gender;
  document.querySelectorAll("#modal-me label")[3].innerText = L.time;
  document.querySelectorAll("#modal-me .modal-btn")[0].innerText = L.save;
  document.querySelectorAll("#modal-me .modal-btn")[1].innerText = L.cancel;
  // partner
  document.querySelectorAll("#modal-partner label")[0].innerText = L.partnerName;
  document.querySelectorAll("#modal-partner label")[1].innerText = L.dob;
  document.querySelectorAll("#modal-partner label")[2].innerText = L.place;
  document.querySelectorAll("#modal-partner label")[3].innerText = L.gender;
  document.querySelectorAll("#modal-partner label")[4].innerText = L.time;
  document.querySelectorAll("#modal-partner .modal-btn")[0].innerText = L.save;
  document.querySelectorAll("#modal-partner .modal-btn")[1].innerText = L.cancel;
  // options
  document.querySelectorAll("#modal-options label")[0].innerText = L.optNum;
  document.querySelectorAll("#modal-options label")[1].innerText = L.optTaro;
  document.querySelectorAll("#modal-options label")[2].innerText = L.optChina;
  document.querySelectorAll("#modal-options label")[3].innerText = L.optMore;
  document.querySelectorAll("#modal-options .modal-btn")[0].innerText = L.save;
  document.querySelectorAll("#modal-options .modal-btn")[1].innerText = L.cancel;
}
document.getElementById("lang-select").onchange = function() {
  setLang(this.value);
  updateLang();
};
updateLang();

// ----------- Плейсхолдеры для textarea --------
let qIndex = 0;
function rotatePlaceholder() {
  const code = getLang();
  const L = LANGS[code] || LANGS['ru'];
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", L.qPlaceholder[qIndex]);
  qIndex = (qIndex + 1) % L.qPlaceholder.length;
}
setInterval(rotatePlaceholder, 3000);
rotatePlaceholder();

// ---- (Дальше не менялось, оставьте ваши функции getData, setData, updateSummary, updateOptionsSummary, модалки, saveMe/savePartner/saveOptions, send-запросы к серверу — все как было) ----
// Просто вставьте вашу актуальную логику после этого блока, она совместима!
