// accordion
document.querySelectorAll('.accordion-btn').forEach((btn, idx) => {
  btn.addEventListener('click', function () {
    const all = document.querySelectorAll('.accordion-content');
    all.forEach((el, i) => { if (i !== idx) el.style.display = 'none'; });
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
// при загрузке все свернуты
document.querySelectorAll('.accordion-content').forEach(el => el.style.display = 'none');

// ----------- Старый код для обработки вопроса (пример) ----------- //
document.getElementById('ask-btn').onclick = () => {
  const question = document.getElementById('question').value.trim();

  // Собираем выбранные опции
  let accData = {};
  ['prognoz_time', 'school', 'technique', 'rare'].forEach(group => {
    accData[group] = Array.from(document.querySelectorAll(`input[name="${group}"]:checked`))
      .map(cb => cb.value);
  });

  // Здесь можно добавить в fetch эти опции
  fetch("/horoscope", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question,
      accordion: accData
      // сюда можешь добавить свои остальные данные
    })
  })
    .then(res => res.json())
    .then(res => {
      document.getElementById('result').innerText = res.response || (res.error ? "Ошибка: " + res.error : "Нет ответа");
    })
    .catch(e => {
      document.getElementById('result').innerText = "Ошибка соединения: " + e;
    });
};
