// ======= Локализация =======
const UI = {
  ru: {
    qLabel: "Какой Ваш вопрос астрологу?",
    me: "Мои данные",
    partner: "Данные партнёра",
    options: "Дополнительные опции",
    result: "Получить ответ",
    modalMe: "Мои данные",
    modalPartner: "Данные партнёра",
    modalOptions: "Дополнительные опции",
    name: "Имя",
    dob: "Дата рождения",
    place: "Место рождения",
    gender: "Пол",
    male: "Мужской",
    female: "Женский",
    time: "Время рождения (необязательно)",
    save: "Сохранить",
    cancel: "Отмена",
    numer: "Нумерология",
    taro: "Таро",
    china: "Китайский гороскоп",
    more: "Ещё"
  },
  en: {
    qLabel: "What's your question for the astrologer?",
    me: "My data",
    partner: "Partner's data",
    options: "Additional options",
    result: "Get answer",
    modalMe: "My data",
    modalPartner: "Partner's data",
    modalOptions: "Additional options",
    name: "Name",
    dob: "Date of birth",
    place: "Place of birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    time: "Time of birth (optional)",
    save: "Save",
    cancel: "Cancel",
    numer: "Numerology",
    taro: "Tarot",
    china: "Chinese horoscope",
    more: "More"
  }
  // Можешь добавить остальные языки аналогично
};

// ======= Локализация =======
let currentLang = localStorage.getItem('astro_lang') || "ru";
function updateUI(lang) {
  const T = UI[lang] || UI["ru"];
  document.getElementById("qLabel").innerText = T.qLabel;
  document.getElementById("me-title").innerText = T.me;
  document.getElementById("partner-title").innerText = T.partner;
  document.getElementById("options-title").innerText = T.options;
  document.getElementById("ask-btn").innerText = T.result;
  // Модалки
  document.getElementById("modal-me").querySelector("h3").innerText = T.modalMe;
  document.getElementById("modal-partner").querySelector("h3").innerText = T.modalPartner;
  document.getElementById("modal-options").querySelector("h3").innerText = T.modalOptions;
  let lbls = document.querySelectorAll("#modal-me label, #modal-partner label, #modal-options label");
  let idx = 0;
  [
    T.dob, T.place, T.gender, T.time, // me
    T.name, T.dob, T.place, T.gender, T.time // partner
  ].forEach(txt => { if (lbls[idx]) lbls[idx++].innerText = txt; });
  document.getElementById("me-gender").options[0].text = T.male;
  document.getElementById("me-gender").options[1].text = T.female;
  document.getElementById("p-gender").options[0].text = T.male;
  document.getElementById("p-gender").options[1].text = T.female;
  let optLabels = document.querySelectorAll("#modal-options label");
  if(optLabels[0]) optLabels[0].lastChild.textContent = " " + T.numer;
  if(optLabels[1]) optLabels[1].lastChild.textContent = " " + T.taro;
  if(optLabels[2]) optLabels[2].lastChild.textContent = " " + T.china;
  if(optLabels[3]) optLabels[3].lastChild.textContent = " " + T.more;
  document.querySelectorAll(".modal-btn")[0].innerText = T.save;
  document.querySelectorAll(".modal-btn.cancel")[0].innerText = T.cancel;
  document.querySelectorAll(".modal-btn")[1].innerText = T.save;
  document.querySelectorAll(".modal-btn.cancel")[1].innerText = T.cancel;
  document.querySelectorAll(".modal-btn")[2].innerText = T.save;
  document.querySelectorAll(".modal-btn.cancel")[2].innerText = T.cancel;
}

// ======= Язык =======
document.getElementById("lang-select").value = currentLang;
document.getElementById("lang-select").addEventListener("change", function() {
  currentLang = this.value;
  localStorage.setItem('astro_lang', currentLang);
  updateUI(currentLang);
});

// ======= Модальные окна =======
function openModal(id) {
  document.getElementById("modal-bg").style.display = "flex";
  document.querySelectorAll(".modal").forEach(x=>x.style.display="none");
  document.getElementById(id).style.display = "block";
}
function closeModal() {
  document.getElementById("modal-bg").style.display = "none";
}
window.closeModal = closeModal;

// Мои данные
document.getElementById("open-me").onclick = () => {
  openModal("modal-me");
  document.getElementById("me-dob").value = localStorage.getItem("me-dob") || "";
  document.getElementById("me-place").value = localStorage.getItem("me-place") || "";
  document.getElementById("me-gender").value = localStorage.getItem("me-gender") || "мужской";
  document.getElementById("me-time").value = localStorage.getItem("me-time") || "";
};
// Сохранить мои данные
window.saveMe = function() {
  localStorage.setItem("me-dob", document.getElementById("me-dob").value);
  localStorage.setItem("me-place", document.getElementById("me-place").value);
  localStorage.setItem("me-gender", document.getElementById("me-gender").value);
  localStorage.setItem("me-time", document.getElementById("me-time").value);
  showSummary();
  closeModal();
}

// Партнёр
document.getElementById("open-partner").onclick = () => {
  openModal("modal-partner");
  document.getElementById("p-name").value = localStorage.getItem("p-name") || "";
  document.getElementById("p-dob").value = localStorage.getItem("p-dob") || "";
  document.getElementById("p-place").value = localStorage.getItem("p-place") || "";
  document.getElementById("p-gender").value = localStorage.getItem("p-gender") || "мужской";
  document.getElementById("p-time").value = localStorage.getItem("p-time") || "";
};
window.savePartner = function() {
  localStorage.setItem("p-name", document.getElementById("p-name").value);
  localStorage.setItem("p-dob", document.getElementById("p-dob").value);
  localStorage.setItem("p-place", document.getElementById("p-place").value);
  localStorage.setItem("p-gender", document.getElementById("p-gender").value);
  localStorage.setItem("p-time", document.getElementById("p-time").value);
  showSummary();
  closeModal();
}
// Опции
document.getElementById("open-options").onclick = () => {
  openModal("modal-options");
  document.getElementById("opt-num").checked = localStorage.getItem("opt-num")==="1";
  document.getElementById("opt-taro").checked = localStorage.getItem("opt-taro")==="1";
  document.getElementById("opt-china").checked = localStorage.getItem("opt-china")==="1";
  document.getElementById("opt-more").checked = localStorage.getItem("opt-more")==="1";
};
window.saveOptions = function() {
  localStorage.setItem("opt-num", document.getElementById("opt-num").checked ? "1":"0");
  localStorage.setItem("opt-taro", document.getElementById("opt-taro").checked ? "1":"0");
  localStorage.setItem("opt-china", document.getElementById("opt-china").checked ? "1":"0");
  localStorage.setItem("opt-more", document.getElementById("opt-more").checked ? "1":"0");
  closeModal();
}

// ======= Краткая инфа на кнопках =======
function showSummary() {
  // Мои данные
  let s = [];
  if(localStorage.getItem("me-dob")) s.push(localStorage.getItem("me-dob"));
  if(localStorage.getItem("me-place")) s.push(localStorage.getItem("me-place"));
  if(localStorage.getItem("me-gender")) s.push(localStorage.getItem("me-gender"));
  if(localStorage.getItem("me-time")) s.push(localStorage.getItem("me-time"));
  document.getElementById("me-summary").innerHTML = s.length ? s.join("<br>") : "<span style='color:#ccc;'>–</span>";
  // Партнёр
  let ps = [];
  if(localStorage.getItem("p-name")) ps.push(localStorage.getItem("p-name"));
  if(localStorage.getItem("p-dob")) ps.push(localStorage.getItem("p-dob"));
  if(localStorage.getItem("p-place")) ps.push(localStorage.getItem("p-place"));
  if(localStorage.getItem("p-gender")) ps.push(localStorage.getItem("p-gender"));
  if(localStorage.getItem("p-time")) ps.push(localStorage.getItem("p-time"));
  document.getElementById("partner-summary").innerHTML = ps.length ? ps.join("<br>") : "<span style='color:#ccc;'>–</span>";
  // Опции
  let opts = [];
  if(localStorage.getItem("opt-num")==="1") opts.push("Нумерология");
  if(localStorage.getItem("opt-taro")==="1") opts.push("Таро");
  if(localStorage.getItem("opt-china")==="1") opts.push("Кит. гороскоп");
  if(localStorage.getItem("opt-more")==="1") opts.push("Ещё");
  document.getElementById("options-summary").innerHTML = opts.length ? opts.join(", ") : "";
}
showSummary();

// ======= Запрос =======
document.getElementById("ask-btn").onclick = function() {
  const question = document.getElementById("question").value;
  if(!question.trim()) {
    document.getElementById("result").innerText = "Введите вопрос!";
    return;
  }
  document.getElementById("result").innerText = "⏳ Запрос отправлен...";
  // Собираем данные
  let data = {
    me: {
      dob: localStorage.getItem("me-dob")||"",
      place: localStorage.getItem("me-place")||"",
      gender: localStorage.getItem("me-gender")||"",
      time: localStorage.getItem("me-time")||""
    },
    partner: {
      name: localStorage.getItem("p-name")||"",
      dob: localStorage.getItem("p-dob")||"",
      place: localStorage.getItem("p-place")||"",
      gender: localStorage.getItem("p-gender")||"",
      time: localStorage.getItem("p-time")||""
    },
    options: {
      numer: localStorage.getItem("opt-num")==="1",
      taro: localStorage.getItem("opt-taro")==="1",
      china: localStorage.getItem("opt-china")==="1",
      more: localStorage.getItem("opt-more")==="1"
    },
    question,
    lang: currentLang
  };
  fetch("/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(res => {
      document.getElementById("result").innerText = res.response || "Нет ответа от сервера";
    })
    .catch(()=>document.getElementById("result").innerText = "Ошибка соединения");
}

// ==== init ====
updateUI(currentLang);
