// --- Локализация ---
const UI_TEXT = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой ваш вопрос астрологу?",
    placeh: "Покупать мне BMW X5 на следующей неделе?",
    me: "Мои данные",
    partner: "Данные партнера",
    wait: "⏳ Запрос отправлен... ждём ответ от звёзд :)",
    enterQ: "Введите свой вопрос!",
    result: "Ответ появится здесь",
  },
  en: {
    astro: "GlobalAstro",
    ask: "Get Answer",
    qLabel: "What is your question for the astrologer?",
    placeh: "Should I buy a BMW X5 next week?",
    me: "My Data",
    partner: "Partner's Data",
    wait: "⏳ Request sent... waiting for the stars :)",
    enterQ: "Enter your question!",
    result: "The answer will appear here",
  }
};

// --- Определение языка ---
function getLang() {
  let saved = localStorage.getItem('astro_lang');
  if (saved) return saved;
  let tgLang = navigator.language || navigator.userLanguage;
  if (tgLang.startsWith("ru")) return "ru";
  return "en";
}
function applyLang() {
  const lang = getLang();
  const txt = UI_TEXT[lang];
  document.getElementById('brand-title').innerText = txt.astro;
  document.getElementById('label-title').innerText = txt.qLabel;
  document.getElementById('question').placeholder = txt.placeh;
  document.getElementById('ask-btn').innerText = txt.ask;
  document.getElementById('me-title').innerText = txt.me;
  document.getElementById('partner-title').innerText = txt.partner;
  document.getElementById('result').innerText = txt.result;
  document.getElementById('lang-select').value = lang;
}

// --- Смена языка по select ---
document.addEventListener('DOMContentLoaded', function() {
  applyLang();
  document.getElementById('lang-select').addEventListener('change', function () {
    localStorage.setItem('astro_lang', this.value);
    location.reload();
  });

  // --- Аккордеон функционал ---
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const card = this.parentNode;
      card.classList.toggle('open');
      document.querySelectorAll('.accordion-card').forEach(other => {
        if (other !== card) other.classList.remove('open');
      });
    });
  });

  // --- "Мои данные" и "Данные партнера" ---
  loadCard('me');
  loadCard('partner');

  document.getElementById('me-btn').addEventListener('click', () => editCard('me'));
  document.getElementById('partner-btn').addEventListener('click', () => editCard('partner'));

  // --- Запрос ---
  document.getElementById('ask-btn').addEventListener('click', function() {
    const question = document.getElementById('question').value.trim();
    if (!question) return alert(UI_TEXT[getLang()].enterQ);
    this.disabled = true;
    document.getElementById('result').innerText = UI_TEXT[getLang()].wait;

    // Чтение чекбоксов
    const checked = Array.from(document.querySelectorAll('.accordion-body input[type=checkbox]:checked')).map(cb => cb.value);

    // Чтение данных пользователя и партнера
    const me = getCardData('me');
    const partner = getCardData('partner');

    fetch("/horoscope", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        me,
        partner,
        options: checked
      })
    })
      .then(r => r.json())
      .then(res => {
        document.getElementById('result').innerText = res.response || "Нет ответа";
      })
      .catch(() => document.getElementById('result').innerText = "Ошибка соединения")
      .finally(() => { this.disabled = false; });
  });
});

// --- helpers для "Мои данные" и "Данные партнера" ---
function editCard(type) {
  let name = prompt(type === 'me' ? "Введите ваши имя, дату, место, пол, время рождения через запятую (например: Иван, 20.01.1990, Минск, мужской, 3:00)" :
    "Введите имя, дату, место, пол, время рождения партнера через запятую");
  if (name === null) return;
  let [n, dob, place, gender, time] = (name || "").split(',').map(x => x ? x.trim() : "");
  let data = { n, dob, place, gender, time };
  localStorage.setItem("astro_" + type, JSON.stringify(data));
  loadCard(type);
}
function loadCard(type) {
  let d = {};
  try { d = JSON.parse(localStorage.getItem("astro_" + type) || '{}'); } catch {}
  let content = [d.n, d.dob, d.place, d.gender, d.time].filter(Boolean).join('<br>');
  let btn = document.getElementById(type + "-btn");
  let cdiv = document.getElementById(type + "-content");
  cdiv.innerHTML = content ? content : '—<br>—<br>—<br>—';
  btn.classList.toggle('empty', !content);
}
function getCardData(type) {
  try { return JSON.parse(localStorage.getItem("astro_" + type) || '{}'); } catch { return {}; }
}
