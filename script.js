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
