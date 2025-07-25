// --- Локализация, данные и интерфейс ---
const accordionData = [
  {
    header: "🕰️ Время прогноза",
    groups: [
      {title: "Долгосрочные", options: [
        "Натальный прогноз на жизнь",
        "Прогноз на год (соляр)",
        "Прогноз на месяц (лунар, ингрессии)",
        "Прогноз на неделю",
        "Прогноз на день",
        "Прогноз по жизненным периодам (Фирдарии, дирекции, прогрессии, Вимшоттари Даша)"
      ]},
      {title: "Краткосрочные", options: [
        "Ежедневный прогноз (по транзитам Луны и аспектам)",
        "Прогноз на час (часовая астрология / хорар)"
      ]}
    ]
  },
  {
    header: "🧭 Школа/традиция астрологии",
    groups: [
      {title: "Западная астрология", options: [
        "Классическая",
        "Психологическая",
        "Эзотерическая",
        "Эволюционная",
        "Ураническая",
        "Гелиоцентрическая"
      ]},
      {title: "Индийская (Ведическая / Джйотиш)", options: [
        "Сидерическая система",
        "Даша-системы (Вимшоттари и др.)",
        "Навамша и варги",
        "Панчанга-прогноз",
        "Мухурта"
      ]},
      {title: "Китайская астрология", options: [
        "Ба Цзы (4 столпа судьбы)",
        "Цзы Вэй Доу Шу",
        "Фэн-шуй с натальной привязкой",
        "12 животных + стихии"
      ]},
      {title: "Другое", options: [
        "Тибетская астрология",
        "Арабская традиция (арабские части, лунные дома)",
        "Майянская (Тцолкин, Кин)",
        "Кармическая астрология",
        "Оккультная (Каббала, Таро)"
      ]}
    ]
  },
  {
    header: "🔧 Техника прогноза",
    groups: [
      {title: null, options: [
        "Транзиты (текущие планеты к наталу)",
        "Прогрессии (1 день = 1 год жизни)",
        "Дирекции (смещение точек карты)",
        "Соляр (год от дня рождения)",
        "Лунар (месяц от лунного цикла)",
        "Ингрессии (вход планет в знаки)",
        "Астрокартография (планеты на карте мира)",
        "Хорар (ответ по моменту вопроса)",
        "Электив (поиск лучшего времени)"
      ]}
    ]
  },
  {
    header: "🌌 Редкие и нестандартные прогнозы",
    groups: [
      {title: null, options: [
        "Гороскоп страны (мунда́нная астрология)",
        "Гороскоп по Таро",
        "Сакральная геометрия",
        "Астрология фиксированных звёзд",
        "Космограмма (без точного времени)",
        "Нумерологическая астрология",
        "Астро-психотипирование (MBTI + зодиак)"
      ]}
    ]
  }
];

// --- Рендер аккордеонов ---
function renderAccordions() {
  const wrap = document.getElementById('accordion-wrapper');
  wrap.innerHTML = '';
  accordionData.forEach((block, i) => {
    const acc = document.createElement('div');
    acc.className = 'accordion-block';
    acc.innerHTML = `
      <div class="accordion" id="accordion${i}">
        <div class="accordion-header">${block.header}<span class="accordion-arrow">&#9654;</span></div>
        <div class="accordion-content">
          ${block.groups.map(gr =>
            `<div class="checkbox-group">
              ${gr.title ? `<div class="accordion-group-title">${gr.title}</div>` : ''}
              ${gr.options.map((opt, j) =>
                `<label><input type="checkbox" name="accordion${i}" value="${opt.replace(/"/g,'&quot;')}"> ${opt}</label>`
              ).join('')}
            </div>`
          ).join('')}
        </div>
      </div>
    `;
    wrap.appendChild(acc);
  });

  // --- Логика открытия/закрытия аккордеонов ---
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.onclick = function() {
      const acc = this.parentNode;
      acc.classList.toggle('open');
    };
  });
}
renderAccordions();

// --- Получить все выбранные значения чекбоксов ---
function getAccordionSelections() {
  const result = {};
  accordionData.forEach((block, i) => {
    const checked = Array.from(document.querySelectorAll(`input[name="accordion${i}"]:checked`)).map(x => x.value);
    if (checked.length) result[block.header] = checked;
  });
  return result;
}

// --- Всё остальное как раньше: язык, модалки, данные, вопрос, отправка ---

// ... (ДАЛЕЕ ВСТАВЬ СВОЙ РАБОЧИЙ КОД script.js кроме блока, который рендерил старую кнопку "дополнительные опции")
// Например — сохранение и отображение "моих данных", "данных партнера", языки, и т.д.

// --- Пример: обработка отправки вопроса с учётом выбранных опций ---
document.getElementById('ask
