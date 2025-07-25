// --- ТЕКСТЫ ДЛЯ РАЗНЫХ ЯЗЫКОВ ---
const UI_TEXTS = {
  ru: {
    questionLabel: "Какой ваш вопрос астрологу?",
    questionPH: "Покупать мне BMW X5 на следующей неделе?",
    btnMe: "Мои данные",
    btnPartner: "Данные партнера",
    btnOptions: "Дополнительные опции",
    askBtn: "Получить ответ",
    modalMe: "Мои данные",
    modalPartner: "Данные партнера",
    modalOptions: "Дополнительные опции",
    labelDob: "Дата рождения",
    labelPlace: "Место рождения",
    labelGender: "Пол",
    labelTime: "Время рождения",
    labelName: "Имя",
    optNum: "Нумерология",
    optTaro: "Таро",
    optChina: "Китайский гороскоп",
    optMore: "Ещё",
    cancel: "Отмена",
    ok: "OK"
  },
  en: {
    questionLabel: "What is your question for the astrologer?",
    questionPH: "Should I buy a BMW X5 next week?",
    btnMe: "My Data",
    btnPartner: "Partner's Data",
    btnOptions: "Additional Options",
    askBtn: "Get Answer",
    modalMe: "My Data",
    modalPartner: "Partner's Data",
    modalOptions: "Additional Options",
    labelDob: "Date of Birth",
    labelPlace: "Place of Birth",
    labelGender: "Gender",
    labelTime: "Time of Birth",
    labelName: "Name",
    optNum: "Numerology",
    optTaro: "Tarot",
    optChina: "Chinese Horoscope",
    optMore: "Other",
    cancel: "Cancel",
    ok: "OK"
  }
  // ... добавь остальные языки!
};

// --- ЛОКАЛИЗАЦИЯ ---
function setLangUI(lang) {
  const t = UI_TEXTS[lang] || UI_TEXTS['ru'];
  document.getElementById('label-question').innerText = t.questionLabel;
  document.getElementById('question').placeholder = t.questionPH;
  document.getElementById('btn-me-title').innerText = t.btnMe;
  document.getElementById('btn-partner-title').innerText = t.btnPartner;
  document.getElementById('btn-options-title').innerText = t.btnOptions;
  document.getElementById('ask-btn').innerText = t.askBtn;

  // Модалки
  document.getElementById('modal-me-title').innerText = t.modalMe;
  document.getElementById('label-me-dob').innerText = t.labelDob;
  document.getElementById('label-me-place').innerText = t.labelPlace;
  document.getElementById('label-me-gender').innerText = t.labelGender;
  document.getElementById('label-me-time').innerText = t.labelTime;
  document.getElementById('btn-save-me').innerText = t.ok;
  document.getElementById('btn-cancel-me').innerText = t.cancel;

  document.getElementById('modal-partner-title').innerText = t.modalPartner;
  document.getElementById('label-p-name').innerText = t.labelName;
  document.getElementById('label-p-dob').innerText = t.labelDob;
  document.getElementById('label-p-place').innerText = t.labelPlace;
  document.getElementById('label-p-gender').innerText = t.labelGender;
  document.getElementById('label-p-time').innerText = t.labelTime;
  document.getElementById('btn-save-partner').innerText = t.ok;
  document.getElementById('btn-cancel-partner').innerText = t.cancel;

  document.getElementById('modal-options-title').innerText = t.modalOptions;
  document.getElementById('label-opt-num').innerText = t.optNum;
  document.getElementById('label-opt-taro').innerText = t.optTaro;
  document.getElementById('label-opt-china').innerText = t.optChina;
  document.getElementById('label-opt-more').innerText = t.optMore;
  document.getElementById('btn-save-options').innerText = t.ok;
  document.getElementById('btn-cancel-options').innerText = t.cancel;
}

// --- ОБРАБОТЧИК ЯЗЫКА ---
document.getElementById('lang-select').addEventListener('change', function() {
  setLangUI(this.value);
});

// --- ВОССТАНОВЛЕНИЕ ДАННЫХ (аналогично твоей старой логике, если нужно, можешь расширить) ---
// ...твои функции для заполнения/открытия модалок и отправки данных...

// Ниже вставь старый код JS для кнопок и открытия модалок (он никак не конфликтует со сменой языка).
