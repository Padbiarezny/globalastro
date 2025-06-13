// --- Модальные окна ---
document.getElementById('open-me').onclick = () => openModal('me');
document.getElementById('open-partner').onclick = () => openModal('partner');
document.getElementById('open-options').onclick = () => openModal('options');

function openModal(which) {
  document.getElementById('modal-bg').style.display = "flex";
  document.getElementById('modal-me').style.display = (which === 'me') ? "block" : "none";
  document.getElementById('modal-partner').style.display = (which === 'partner') ? "block" : "none";
  document.getElementById('modal-options').style.display = (which === 'options') ? "block" : "none";
  // Восстанавливаем значения
  if (which === 'me') {
    ["dob","place","gender","time"].forEach(k => {
      if (localStorage.getItem("astro_me_"+k)) document.getElementById("me-"+k).value = localStorage.getItem("astro_me_"+k);
    });
  }
  if (which === 'partner') {
    ["name","dob","place","gender","time"].forEach(k => {
      if (localStorage.getItem("astro_p_"+k)) document.getElementById("p-"+k).value = localStorage.getItem("astro_p_"+k);
    });
  }
  if (which === 'options') {
    ["num","taro","china","more"].forEach(k => {
      document.getElementById("opt-"+k).checked = !!localStorage.getItem("astro_opt_"+k);
    });
  }
}
function closeModal() {
  document.getElementById('modal-bg').style.display = "none";
  ["modal-me","modal-partner","modal-options"].forEach(id => document.getElementById(id).style.display="none");
}
function saveMe() {
  ["dob","place","gender","time"].forEach(k => localStorage.setItem("astro_me_"+k, document.getElementById("me-"+k).value));
  closeModal();
}
function savePartner() {
  ["name","dob","place","gender","time"].forEach(k => localStorage.setItem("astro_p_"+k, document.getElementById("p-"+k).value));
  closeModal();
}
function saveOptions() {
  ["num","taro","china","more"].forEach(k => {
    let id = "opt-"+k;
    if (document.getElementById(id).checked)
      localStorage.setItem("astro_opt_"+k, "1");
    else
      localStorage.removeItem("astro_opt_"+k);
  });
  closeModal();
}

// --- Получить ответ от сервера ---
document.getElementById('ask-btn').onclick = getAstroResult;
function getAstroResult() {
  // Собрать данные из localStorage
  let me = {};
  ["dob","place","gender","time"].forEach(k => me[k] = localStorage.getItem("astro_me_"+k) || "");
  let partner = {};
  ["name","dob","place","gender","time"].forEach(k => partner[k] = localStorage.getItem("astro_p_"+k) || "");
  let options = [];
  if (localStorage.getItem("astro_opt_num")) options.push("нумерология");
  if (localStorage.getItem("astro_opt_taro")) options.push("таро");
  if (localStorage.getItem("astro_opt_china")) options.push("китайский гороскоп");
  if (localStorage.getItem("astro_opt_more")) options.push("ещё что-нибудь");
  let question = document.getElementById("question").value.trim();

  // Валидация
  if (!me.dob || !me.place || !me.gender || !question) {
    document.getElementById("result").innerText = "Пожалуйста, заполните минимум ваши данные и сам вопрос!";
    return;
  }

  document.getElementById("result").innerText = "⏳ Запрос отправлен...";
  document.getElementById("ask-btn").disabled = true;

  fetch("/horoscope", { // если нужен внешний адрес, замени тут!
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ me, partner, options, question })
  })
  .then(res => res.json())
  .then(res => {
    if (res.response) {
      document.getElementById("result").innerText = res.response;
    } else if (res.error) {
      document.getElementById("result").innerText = "Ошибка: " + res.error;
    } else {
      document.getElementById("result").innerText = "Нет ответа от сервера.";
    }
  })
  .catch(err => {
    document.getElementById("result").innerText = "Ошибка соединения: " + err;
  })
  .finally(() => {
    document.getElementById("ask-btn").disabled = false;
  });
}

// --- Модальное управление: ESC и клик вне модалки ---
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});
document.getElementById('modal-bg').onclick = function(e) {
  if (e.target === this) closeModal();
};
