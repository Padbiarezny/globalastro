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
  },
  // ... Добавь сюда остальные языки по желанию!
};

function setLangUI(lang) {
  const t = UI_TEXTS[lang] || UI_TEXTS['
