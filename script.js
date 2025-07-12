// ------ Словари языков (пример — дополни свои тексты, если хочешь) ------
const langLabels = {
  ru: {
    question: "Какой Ваш вопрос астрологу?",
    myData: "Мои данные",
    partnerData: "Данные партнёра",
    options: "Дополнительные опции",
    ask: "Получить ответ",
    placeholder: [
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
    ],
    // Добавь сюда свои поля для модалок/опций если нужно
  },
  en: {
    question: "What is your question to the astrologer?",
    myData: "My Data",
    partnerData: "Partner's Data",
    options: "Additional Options",
    ask: "Get Answer",
    placeholder: [
      "Should I buy a BMW X5 next week?",
      "What awaits me in my relationship with a new partner?",
      "How will my career develop this year?",
      "When is the best time to start a new project?",
      "Should I accept the relocation offer?",
      "Which monthly energies are most important for me?",
      "Which area will bring me success soon?",
      "How will relationships with children go?",
      "Will I find love this month?",
      "Is my career path the right one for me?",
      "When can I expect a promotion at work?",
      "Is it a good time to invest in real estate?",
      "What does my horoscope say about my health?",
      "Will I make new friends this year?",
      "Should I change my professional field?",
      "Are large expenses a risk this month?",
      "When is the best time to plan a vacation?",
      "Will I succeed with my creative project?",
      "What is a lucky date to sign a contract?",
      "How compatible am I with my partner?"
    ],
  },
  // ...добавь еще языки (копируй по аналогии)
};

// ------ Получение языка Telegram Mini App или браузера ------
function detectLang() {
  // 1. Пробуем из Telegram WebApp
  try {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user && window.Telegram.WebApp.initDataUnsafe.user.language_code) {
      return window.Telegram.WebApp.initDataUnsafe.user.language_code.slice(0,2);
    }
  } catch (e) {}
  // 2. Пробуем из url (tgWebAppLanguage=xx)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('tgWebAppLanguage')) {
    return urlParams.get('tgWebAppLanguage').slice(0,2);
  }
  // 3. Браузер
  if (navigator.language) return navigator.language.slice(0,2);
  return "ru"; // fallback
}

// ------ Применить язык ко всем элементам ------
function applyLang(lang) {
  const L = langLabels[lang] || langLabels['ru'];
  document.getElementById('lbl-q').innerText = L.question;
  document.getElementById('lbl-me').innerText = L.myData;
  document.getElementById('lbl-partner').innerText = L.partnerData;
  document.getElementById('lbl-options').innerText = L.options;
  document.getElementById('ask-btn').innerText = L.ask;
  // Подписи/label'ы для модалок — по аналогии, если нужно!
  // Обновить плейсхолдеры
  placeholders = L.placeholder;
  currentPlaceholderIndex = 0;
  rotatePlaceholder();
}

// ------ Плейсхолдеры для textarea ------
let placeholders = langLabels['ru'].placeholder, currentPlaceholderIndex = 0, phTimer;
function rotatePlaceholder() {
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", placeholders[currentPlaceholderIndex]);
  currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
  clearTimeout(phTimer);
  phTimer = setTimeout(rotatePlaceholder, 3000);
}

// ---- Автоинициализация ----
document.addEventListener("DOMContentLoaded", function() {
  const lang = detectLang();
  applyLang(lang);
  // ...весь остальной твой код ниже...
  
  // ------ LocalStorage работа ------
  function getData(type) {
    const fields = (type === 'me') ? ['dob', 'place', 'gender', 'time'] : ['name', 'dob', 'place', 'gender', 'time'];
    let data = {};
    fields.forEach(f => data[f] = localStorage.getItem(`astro_${type}_${f}`) || '');
    return data;
  }
  function setData(type, data) {
    Object.keys(data).forEach(key => localStorage.setItem(`astro_${type}_${key}`, data[key] || ''));
  }

  function updateSummary() {
    const me = getData('me');
    let meFields = [
      me.dob ? me.dob : '—',
      me.place ? me.place : '—',
      me.gender ? (me.gender === 'мужской' ? 'М' : 'Ж') : '—',
      me.time ? me.time : '—'
    ];
    let meFilled = me.dob && me.place && me.gender;
    document.getElementById('me-summary').innerHTML = meFields.join('<br>');
    document.getElementById('open-me').className = 'card-btn ' + (meFilled ? 'filled' : 'empty');
    // Партнёр
    const partner = getData('partner');
    let partnerFields = [
      partner.name ? partner.name : '—',
      partner.dob ? partner.dob : '—',
      partner.place ? partner.place : '—',
      partner.gender ? (partner.gender === 'мужской' ? 'М' : (partner.gender === 'женский' ? 'Ж' : '—')) : '—',
      partner.time ? partner.time : '—'
    ];
    let partnerFilled = partner.name && partner.dob && partner.place && partner.gender;
    document.getElementById('partner-summary').innerHTML = partnerFields.join('<br>');
    document.getElementById('open-partner').className = 'card-btn ' + (partnerFilled ? 'filled' : 'empty');
  }
  function updateOptionsSummary() {
    let enabled = [];
    if (localStorage.getItem('astro_opt_num') === '1') enabled.push('Нумерология');
    if (localStorage.getItem('astro_opt_taro') === '1') enabled.push('Таро');
    if (localStorage.getItem('astro_opt_china') === '1') enabled.push('Китайский гороскоп');
    if (localStorage.getItem('astro_opt_more') === '1') enabled.push('Ещё');
    document.getElementById('options-summary').innerHTML = enabled.length ? enabled.join(', ') : '—';
  }
  function closeModal() {
    document.getElementById('modal-bg').classList.remove('active');
    document.getElementById('modal-me').style.display = 'none';
    document.getElementById('modal-partner').style.display = 'none';
    document.getElementById('modal-options').style.display = 'none';
  }
  document.getElementById('open-me').onclick = function() {
    const me = getData('me');
    document.getElementById('me-dob').value = me.dob || '';
    document.getElementById('me-place').value = me.place || '';
    document.getElementById('me-gender').value = me.gender || 'мужской';
    document.getElementById('me-time').value = me.time || '';
    document.getElementById('modal-bg').classList.add('active');
    document.getElementById('modal-me').style.display = 'block';
    document.getElementById('modal-partner').style.display = 'none';
    document.getElementById('modal-options').style.display = 'none';
  };
  document.getElementById('open-partner').onclick = function() {
    const partner = getData('partner');
    document.getElementById('p-name').value = partner.name || '';
    document.getElementById('p-dob').value = partner.dob || '';
    document.getElementById('p-place').value = partner.place || '';
    document.getElementById('p-gender').value = partner.gender || '';
    document.getElementById('p-time').value = partner.time || '';
    document.getElementById('modal-bg').classList.add('active');
    document.getElementById('modal-partner').style.display = 'block';
    document.getElementById('modal-me').style.display = 'none';
    document.getElementById('modal-options').style.display = 'none';
  };
  document.getElementById('open-options').onclick = function() {
    ['num','taro','china','more'].forEach(opt => {
      document.getElementById('opt-' + opt).checked = localStorage.getItem('astro_opt_' + opt) === '1';
    });
    document.getElementById('modal-bg').classList.add('active');
    document.getElementById('modal-options').style.display = 'block';
    document.getElementById('modal-partner').style.display = 'none';
    document.getElementById('modal-me').style.display = 'none';
  };
  document.getElementById('modal-bg').onclick = function(e) {
    if (e.target === this) closeModal();
  };
  function saveMe() {
    setData('me', {
      dob: document.getElementById('me-dob').value,
      place: document.getElementById('me-place').value,
      gender: document.getElementById('me-gender').value,
      time: document.getElementById('me-time').value
    });
    updateSummary(); closeModal();
  }
  function savePartner() {
    setData('partner', {
      name: document.getElementById('p-name').value,
      dob: document.getElementById('p-dob').value,
      place: document.getElementById('p-place').value,
      gender: document.getElementById('p-gender').value,
      time: document.getElementById('p-time').value
    });
    updateSummary(); closeModal();
  }
  function saveOptions() {
    ['num','taro','china','more'].forEach(opt => {
      localStorage.setItem('astro_opt_' + opt, document.getElementById('opt-' + opt).checked ? '1' : '');
    });
    updateOptionsSummary(); closeModal();
  }
  updateSummary();
  updateOptionsSummary();

  document.getElementById('ask-btn').onclick = function() {
    const question = document.getElementById('question').value.trim();
    if (!question) {
      document.getElementById('result').innerText = langLabels[detectLang()].ask || "Введите свой вопрос!";
      return;
    }
    const me = getData('me');
    const partner = getData('partner');
    const opts = {
      num: localStorage.getItem('astro_opt_num') === '1',
      taro: localStorage.getItem('astro_opt_taro') === '1',
      china: localStorage.getItem('astro_opt_china') === '1',
      more: localStorage.getItem('astro_opt_more') === '1'
    };
    document.getElementById('result').innerText = "⏳ Запрос отправлен... ждём ответ от звёзд :)";
    document.getElementById('ask-btn').disabled = true;
    fetch("https://globalastro.onrender.com/horoscope", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question, me, partner, opts
      })
    })
      .then(r => r.json())
      .then(res => {
        if (res.response) document.getElementById('result').innerText = res.response;
        else if (res.error) document.getElementById('result').innerText = "Ошибка: " + res.error;
        else document.getElementById('result').innerText = "Нет ответа от сервера.";
      })
      .catch(err => {
        document.getElementById('result').innerText = "Ошибка соединения: " + err;
      })
      .finally(() => {
        document.getElementById('ask-btn').disabled = false;
      });
  };
});
