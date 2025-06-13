// ---- Восстанавливаем данные из localStorage ----
window.addEventListener("DOMContentLoaded", () => {
  ["dob", "place", "gender", "time"].forEach(key => {
    if (localStorage.getItem("astro_" + key)) {
      document.getElementById(key).value = localStorage.getItem("astro_" + key);
    }
  });
});

// ---- Сохраняем данные при вводе ----
["dob", "place", "gender", "time"].forEach(key => {
  document.getElementById(key).addEventListener("input", e => {
    localStorage.setItem("astro_" + key, e.target.value);
  });
});

// ---- Основная логика ----
document.getElementById("astro-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const dob = document.getElementById("dob").value;
  const place = document.getElementById("place").value;
  const gender = document.getElementById("gender").value;
  const time = document.getElementById("time").value;
  const question = document.getElementById("question").value.trim();

  if (!dob || !place || !gender || !question) {
    showResult("Пожалуйста, заполните все обязательные поля.");
    return;
  }

  showResult("⏳ Запрос отправлен... ждём ответ от звёзд :)");

  fetch("https://globalastro.onrender.com/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dob, place, gender, time, question })
  })
  .then(res => res.json())
  .then(res => {
    if (res.response) {
      showResult(res.response);
    } else if (res.error) {
      showResult("Ошибка: " + res.error);
    } else {
      showResult("Нет ответа от сервера.");
    }
  })
  .catch(err => {
    showResult("Ошибка соединения: " + err);
  });
});

// ---- Показать результат вместо формы ----
function showResult(text) {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("result").innerText = text;
}

// ---- Кнопка "Назад к форме" ----
function backToForm() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("form-container").style.display = "block";
}
