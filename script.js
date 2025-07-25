const locales = {
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
    "question-placeholder": "Покупать мне BMW X5 на следующей неделе?",
    "options-cancel-btn": "Отмена"
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
    "question-placeholder": "Should I buy a BMW X5 next week?",
    "options-cancel-btn": "Cancel"
  }
};

// --- Языки
const langSelector = document.getElementById('language-selector');
let currentLang = langSelector.value || 'ru';

function applyLocale(lang) {
  currentLang = lang;
  const t = locales[lang] || locales['ru'];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT
