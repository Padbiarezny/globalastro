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
    document.getElementById("result").innerText = "Пожалуйста, заполните все обязательные поля.";
    return;
  }

  document.getElementById("result").innerText = "⏳ Запрос отправлен... ждём ответ от звёзд :)";
  document.getElementById("ask-btn").disabled = true;

  fetch("https://globalastro.onrender.com/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dob, place, gender, time, question })
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
});
