// --- Языковой селектор (реализация переключения UI — потом дополним!) ---
document.getElementById('lang-select').onchange = function () {
  // Здесь можно реализовать смену языков через словарь, если потребуется
  // location.reload() — временное решение
  location.reload();
};

// --- Данные пользователя и партнера ---
let myData = JSON.parse(localStorage.getItem("astro_mydata") || "{}");
let partnerData = JSON.parse(localStorage.getItem("astro_partnerdata") || "{}");

// --- Карточки пользователя и партнера ---
function updateMyDataCard() {
    const el = document.getElementById("my-data-card");
    el.innerHTML = `<div class="card-title">Мои данные</div>
        <div class="card-content">
          ${myData.date || "—"}<br>
          ${myData.place || "—"}<br>
          ${myData.gender || "—"}<br>
          ${myData.time || "—"}
        </div>`;
}
function updatePartnerDataCard() {
    const el = document.getElementById("partner-data-card");
    el.innerHTML = `<div class="card-title">Данные партнера</div>
        <div class="card-content">
          ${partnerData.name || "—"}<br>
          ${partnerData.date || "—"}<br>
          ${partnerData.place || "—"}<br>
          ${partnerData.gender || "—"}<br>
          ${partnerData.time || "—"}
        </div>`;
}

// --- Открытие форм данных ---
document.getElementById("my-data-card").onclick = function() {
    alert("Окно ввода 'Мои данные' (реализуй модальное окно как ранее)");
};
document.getElementById("partner-data-card").onclick = function() {
    alert("Окно ввода 'Данные партнера' (реализуй модальное окно как ранее)");
};
window.onload = function() {
    updateMyDataCard();
    updatePartnerDataCard();
};

// --- Accordion (раскрывающиеся блоки) ---
document.querySelectorAll('.accordion').forEach(acc => {
    acc.querySelector('.accordion-header').onclick = function() {
        acc.classList.toggle('active');
    };
});

// --- Сбор и отправка данных с чекбоксов ---
document.getElementById("ask-btn").onclick = function() {
    // собираем выбранные опции
    const selectedOptions = [];
    document.querySelectorAll('.accordion-body input[type=checkbox]:checked').forEach(chk => {
        selectedOptions.push(chk.value);
    });
    // формируем payload
    const question = document.getElementById("question").value.trim();
    const payload = {
        myData, partnerData, question,
        options: selectedOptions
    };
    document.getElementById("result").innerText = "⏳ Отправляю запрос...";
    fetch("/horoscope", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    }).then(r => r.json())
      .then(res => {
          document.getElementById("result").innerText = res.response || "Нет ответа от сервера.";
      })
      .catch(() => {
          document.getElementById("result").innerText = "Ошибка соединения";
      });
};

// --- Пример смены placeholder ---
const exampleQs = [
    "Покупать мне BMW X5 на следующей неделе?",
    "Какие перемены ждать в работе в августе?",
    "Будет ли гармония в отношениях с партнером?",
    "Когда лучше планировать переезд?",
    "Стоит ли открывать бизнес в этом году?"
];
let qIndex = 0;
setInterval(() => {
    qIndex = (qIndex + 1) % exampleQs.length;
    document.getElementById("question").placeholder = exampleQs[qIndex];
}, 3000);
