document.addEventListener('DOMContentLoaded', function () {
  // --- Язык (сохраняется в localStorage)
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    const userLang = localStorage.getItem('astro_lang') || 'ru';
    langSelect.value = userLang;
    langSelect.onchange = function () {
      localStorage.setItem('astro_lang', langSelect.value);
      location.reload();
    };
  }

  // --- Мои данные/партнер (модалки)
  function restoreCard(card) {
    let data = {};
    try { data = JSON.parse(localStorage.getItem('astro_'+card)||'{}'); } catch {}
    let lines = [];
    if (data.n) lines.push(data.n);
    if (data.dob) lines.push(data.dob);
    if (data.place) lines.push(data.place);
    if (data.gender) lines.push(data.gender);
    if (data.time) lines.push(data.time);
    document.getElementById(card+"-content").innerHTML = lines.length ? lines.map(x=>"<div>"+x+"</div>").join("") : "<div>—</div><div>—</div><div>—</div><div>—</div>";
    document.getElementById(card+"-btn").classList.toggle("empty", !lines.length);
  }
  function openModal(card) {
    document.getElementById(card+"-modal-bg").style.display = 'flex';
    let d = {};
    try { d = JSON.parse(localStorage.getItem('astro_'+card)||'{}'); } catch {}
    document.getElementById(card+"-n").value = d.n||"";
    document.getElementById(card+"-dob").value = d.dob||"";
    document.getElementById(card+"-place").value = d.place||"";
    document.getElementById(card+"-gender").value = d.gender||"";
    document.getElementById(card+"-time").value = d.time||"";
  }
  function closeModal(card) {
    document.getElementById(card+"-modal-bg").style.display = 'none';
  }
  function saveModal(card) {
    const d = {
      n: document.getElementById(card+"-n").value.trim(),
      dob: document.getElementById(card+"-dob").value.trim(),
      place: document.getElementById(card+"-place").value.trim(),
      gender: document.getElementById(card+"-gender").value,
      time: document.getElementById(card+"-time").value.trim()
    };
    localStorage.setItem('astro_'+card, JSON.stringify(d));
    closeModal(card);
    restoreCard(card);
  }
  // --- Кнопки для открытия/закрытия модалок
  document.getElementById('me-btn').onclick = ()=>openModal('me');
  document.getElementById('partner-btn').onclick = ()=>openModal('partner');
  document.getElementById('me-save').onclick = ()=>saveModal('me');
  document.getElementById('partner-save').onclick = ()=>saveModal('partner');
  document.getElementById('me-cancel').onclick = ()=>closeModal('me');
  document.getElementById('partner-cancel').onclick = ()=>closeModal('partner');

  restoreCard('me');
  restoreCard('partner');

  // --- Аккордеоны
  document.querySelectorAll('.accordion-header').forEach(header=>{
    header.onclick = function() {
      const card = this.parentNode;
      const wasOpen = card.classList.contains('open');
      document.querySelectorAll('.accordion-card').forEach(c=>c.classList.remove('open'));
      if (!wasOpen) card.classList.add('open');
    }
  });

  // --- Кнопка "Получить ответ"
  document.getElementById('ask-btn').onclick = function() {
    const question = document.getElementById('question').value.trim();
    if (!question) { alert("Введите вопрос!"); return; }
    this.disabled = true;
    document.getElementById('result').innerText = "⏳ Генерируем ответ...";
    // Собираем данные
    let meData = {}; let partnerData = {};
    try { meData = JSON.parse(localStorage.getItem('astro_me')||'{}'); } catch {}
    try { partnerData = JSON.parse(localStorage.getItem('astro_partner')||'{}'); } catch {}
    // Чекбоксы опций
    const options = [];
    document.querySelectorAll('.accordion-body input[type=checkbox]:checked').forEach(cb=>{
      options.push(cb.value);
    });
    // Язык
    const lang = document.getElementById('lang-select') ? document.getElementById('lang-select').value : 'ru';

    fetch("/horoscope", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        me: meData,
        partner: partnerData,
        question,
        options,
        lang
      })
    })
      .then(res=>res.json())
      .then(res=>{
        document.getElementById('result').innerText = res.response || "Нет ответа";
      })
      .catch(()=>document.getElementById('result').innerText = "Ошибка соединения")
      .finally(()=>{ this.disabled = false; });
  };
});
