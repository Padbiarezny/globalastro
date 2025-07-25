// --- Глобальные переменные для хранения данных ---
let myData = JSON.parse(localStorage.getItem("astro_mydata") || "{}");
let partnerData = JSON.parse(localStorage.getItem("astro_partnerdata") || "{}");

// --- Модальные окна ---
const modalBg = document.createElement("div");
modalBg.className = "modal-bg";
document.body.appendChild(modalBg);

// --- Открытие/закрытие модальных окон ---
function showModal(contentHTML) {
    modalBg.innerHTML = `<div class="modal">${contentHTML}</div>`;
    modalBg.classList.add("active");
    modalBg.onclick = (e) => {
        if (e.target === modalBg) closeModal();
    };
}
function closeModal() {
    modalBg.classList.remove("active");
    modalBg.innerHTML = "";
}

// --- Форма "Мои данные" ---
function openMyDataForm() {
    showModal(`
    <h3>Мои данные</h3>
    <label>Дата рождения</label>
    <input id="my-date" type="date" value="${myData.date || ""}">
    <label>Место рождения</label>
    <input id="my-place" type="text" value="${myData.place || ""}">
    <label>Пол</label>
    <select id="my-gender">
      <option value="">-</option>
      <option value="Мужской"${myData.gender === "Мужской" ? " selected" : ""}>Мужской</option>
      <option value="Женский"${myData.gender === "Женский" ? " selected" : ""}>Женский</option>
    </select>
    <label>Время рождения (необязательно)</label>
    <input id="my-time" type="time" value="${myData.time || ""}">
    <div class="modal-btn-row">
      <button class="modal-btn" onclick="saveMyData()">Сохранить</button>
      <button class="modal-btn cancel" onclick="closeModal()">Отмена</button>
    </div>`);
}
window.openMyDataForm = openMyDataForm;
window.closeModal = closeModal;

// --- Форма "Данные партнера" ---
function openPartnerDataForm() {
    showModal(`
    <h3>Данные партнера</h3>
    <label>Имя</label>
    <input id="p-name" type="text" value="${partnerData.name || ""}">
    <label>Дата рождения</label>
    <input id="p-date" type="date" value="${partnerData.date || ""}">
    <label>Место рождения</label>
    <input id="p-place" type="text" value="${partnerData.place || ""}">
    <label>Пол</label>
    <select id="p-gender">
      <option value="">-</option>
      <option value="Мужской"${partnerData.gender === "Мужской" ? " selected" : ""}>Мужской</option>
      <option value="Женский"${partnerData.gender === "Женский" ? " selected" : ""}>Женский</option>
    </select>
    <label>Время рождения (необязательно)</label>
    <input id="p-time" type="time" value="${partnerData.time || ""}">
    <div class="modal-btn-row">
      <button class="modal-btn" onclick="savePartnerData()">Сохранить</button>
      <button class="modal-btn cancel" onclick="closeModal()">Отмена</button>
    </div>`);
}
window.openPartnerDataForm = openPartnerDataForm;

// --- Сохранение данных ---
window.saveMyData = function() {
    myData = {
        date: document.getElementById('my-date').value,
        place: document.getElementById('my-place').value,
        gender: document.getElementById('my-gender').value,
        time: document.getElementById('my-time').value
    };
    localStorage.setItem("astro_mydata", JSON.stringify(myData));
    closeModal();
    updateMyDataCard();
};
window.savePartnerData = function() {
    partnerData = {
        name: document.getElementById('p-name').value,
        date: document.getElementById('p-date').value,
        place: document.getElementById('p-place').value,
        gender: document.getElementById('p-gender').value,
        time: document.getElementById('p-time').value
    };
    localStorage.setItem("astro_partnerdata", JSON.stringify(partnerData));
    closeModal();
    updatePartnerDataCard();
};

// --- Вывод данных в кнопки ---
function updateMyDataCard() {
    const el = document.getElementById("my-data-card");
    if (myData.date || myData.place || myData.gender || myData.time) {
        el.innerHTML = `<div class="card-title">Мои данные</div>
            <div class="card-content">
              ${myData.date ? myData.date : "-"}<br>
              ${myData.place ? myData.place : "-"}<br>
              ${myData.gender ? myData.gender : "-"}<br>
              ${myData.time ? myData.time : "-"}
            </div>`;
    } else {
        el.innerHTML = `<div class="card-title">Мои данные</div>
            <div class="card-content">—<br>—<br>—<br>—</div>`;
    }
}
function updatePartnerDataCard() {
    const el = document.getElementById("partner-data-card");
    if (partnerData.name || partnerData.date || partnerData.place || partnerData.gender || partnerData.time) {
        el.innerHTML = `<div class="card-title">Данные партнера</div>
            <div class="card-content">
              ${partnerData.name ? partnerData.name : "-"}<br>
              ${partnerData.date ? partnerData.date : "-"}<br>
              ${partnerData.place ? partnerData.place : "-"}<br>
              ${partnerData.gender ? partnerData.gender : "-"}<br>
              ${partnerData.time ? partnerData.time : "-"}
            </div>`;
    } else {
        el.innerHTML = `<div class="card-title">Данные партнера</div>
            <div class="card-content">—<br>—<br>—<br>—<br>—</div>`;
    }
}

// --- Сброс отображения при загрузке ---
window.onload = function() {
    updateMyDataCard();
    updatePartnerDataCard();
};

// --- Клик по кнопкам ---
document.getElementById("my-data-card").onclick = openMyDataForm;
document.getElementById("partner-data-card").onclick = openPartnerDataForm;

// --- Обработка отправки формы ---
document.getElementById("ask-btn").onclick = function() {
    const question = document.getElementById("question").value.trim();
    if (!question || !(myData.date && myData.place && myData.gender)) {
        document.getElementById("result").innerText = "Пожалуйста, заполните свои данные и напишите вопрос.";
        return;
    }
    document.getElementById("result").innerText = "⏳ Отправляю запрос...";
    // Собираем всё
    const payload = {
        myData, partnerData, question
    };
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

// --- Placeholder cycling (примеров вопросов) ---
const exampleQs = [
    "Покупать мне BMW X5 на следующей неделе?",
    "Какие перемены ждать в работе в августе?",
    "Будет ли гармония в отношениях с партнером?",
    "Когда лучше планировать переезд?",
    "Стоит ли открывать бизнес в этом году?",
    "Как пройдут мои ближайшие путешествия?",
    "Есть ли шанс встретить свою любовь этим летом?",
    "Какая моя главная жизненная задача?",
    "Как усилить здоровье в ближайший месяц?",
    "Подходит ли мне смена профессии?",
    "Как сложится общение с родителями?",
    "Чего опасаться в ближайшие полгода?",
    "Как использовать свой потенциал на максимум?",
    "Перееду ли я в другой город?",
    "Стоит ли инвестировать в недвижимость?",
    "Какие таланты во мне скрыты?",
    "Что мешает моему финансовому росту?",
    "Что ждёт моего ребенка в учебе?",
    "Когда лучше начинать новые отношения?",
    "Как развить интуицию?"
];
let qIndex = 0;
setInterval(() => {
    qIndex = (qIndex + 1) % exampleQs.length;
    document.getElementById("question").placeholder = exampleQs[qIndex];
}, 3000);
