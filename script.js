document.addEventListener('DOMContentLoaded', function () {
  // Язык
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = localStorage.getItem('astro_lang') || 'ru';
    langSelect.addEventListener('change', function () {
      localStorage.setItem('astro_lang', langSelect.value);
      location.reload();
    });
  }

  // Восстановление данных пользователя и партнёра
  restoreCard('my', 'my-data');
  restoreCard('partner', 'partner-data');

  // Мои данные/Партнёр — открытие модалок
  document.getElementById('my-data-btn').onclick = () => openModal('my');
  document.getElementById('partner-data-btn').onclick = () => openModal('partner');

  // Закрытие модалок
  document.querySelectorAll('.modal-btn.cancel').forEach(btn => {
    btn.onclick = function () {
      this.closest('.modal-bg').style.display = 'none';
    }
  });

  // Сохранение данных пользователя/партнёра
  document.getElementById('save-my').onclick = () => saveCard('my', 'my-data');
  document.getElementById('save-partner').onclick = () => saveCard('partner', 'partner-data');

  // Accordion функционал
  document.querySelectorAll('.accordion-header').forEach(head => {
    head.onclick = function () {
      const parent = this.parentNode;
      parent.classList.toggle('open');
      document.querySelectorAll('.accordion-card').forEach(card => {
        if (card !== parent) card.classList.remove('open');
      });
    }
  });

  // Отправка формы
  document.getElementById('ask-btn').onclick = async function () {
    const question = document.getElementById('user-question').value.trim();
    if (!question) return alert('Введите ваш вопрос!');
    this.disabled = true;
    document.getElementById('result').innerText = "⏳ Генерируем ответ...";
    // Собираем данные пользователя/партнёра
    let userData = loadCardData('my');
    let partnerData = loadCardData('partner');
    // Собираем чекбоксы из аккордеонов
    let options = [];
    document.querySelectorAll('.accordion-body input[type=checkbox]:checked').forEach(cb => {
      options.push(cb.value);
    });
    // Данные для сервера
    const body = {
      user: userData,
      partner: partnerData,
      question: question,
      options: options,
      lang: (langSelect ? langSelect.value : "ru")
    };
    fetch('/horoscope', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(res => {
        document.getElementById('result').innerText = res.response || "Нет ответа";
      })
      .catch(() => document.getElementById('result').innerText = "Ошибка соединения")
      .finally(() => this.disabled = false);
  };

  // ------- helpers -------
  function openModal(type) {
    document.getElementById(`${type}-modal-bg`).style.display = 'flex';
  }
  function saveCard(type, cardId) {
    let data = {};
    ['name', 'dob', 'place', 'gender', 'time'].forEach(f => {
      let field = document.getElementById(`${type}-${f}`);
      if (field) data[f] = field.value.trim();
    });
    localStorage.setItem(`astro_${type}`, JSON.stringify(data));
    restoreCard(type, cardId);
    document.getElementById(`${type}-modal-bg`).style.display = 'none';
  }
  function restoreCard(type, cardId) {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(`astro_${type}`) || '{}'); } catch { }
    let lines = [];
    if (d.name) lines.push(d.name);
    if (d.dob) lines.push(d.dob);
    if (d.place) lines.push(d.place);
    if (d.gender) lines.push(d.gender);
    if (d.time) lines.push(d.time);
    const card = document.getElementById(cardId);
    card.innerHTML = lines.length ? lines.map(s => `<div>${s}</div>`).join('') : "<div>—</div><div>—</div><div>—</div>";
    card.parentNode.classList.toggle('empty', !lines.length);
  }
  function loadCardData(type) {
    try { return JSON.parse(localStorage.getItem(`astro_${type}`) || '{}'); } catch { return {}; }
  }
});
