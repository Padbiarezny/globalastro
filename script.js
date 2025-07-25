// --- ЯЗЫКИ (переводы названий для интерфейса — сделаем позже по кнопке) ---

// --- Сохранение данных ---
function saveMyData() {
  localStorage.setItem('myName', document.getElementById('myName').value);
  localStorage.setItem('myDob', document.getElementById('myDob').value);
  localStorage.setItem('myPlace', document.getElementById('myPlace').value);
  localStorage.setItem('myTime', document.getElementById('myTime').value);
  localStorage.setItem('myGender', document.getElementById('myGender').value);
  closeModal('myDataModal');
}
function savePartnerData() {
  localStorage.setItem('partnerName', document.getElementById('partnerName').value);
  localStorage.setItem('partnerDob', document.getElementById('partnerDob').value);
  localStorage.setItem('partnerPlace', document.getElementById('partnerPlace').value);
  localStorage.setItem('partnerTime', document.getElementById('partnerTime').value);
  localStorage.setItem('partnerGender', document.getElementById('partnerGender').value);
  closeModal('partnerDataModal');
}
function openMyDataModal() {
  document.getElementById('myName').value = localStorage.getItem('myName') || '';
  document.getElementById('myDob').value = localStorage.getItem('myDob') || '';
  document.getElementById('myPlace').value = localStorage.getItem('myPlace') || '';
  document.getElementById('myTime').value = localStorage.getItem('myTime') || '';
  document.getElementById('myGender').value = localStorage.getItem('myGender') || 'мужской';
  document.getElementById('myDataModal').classList.add('active');
}
function openPartnerDataModal() {
  document.getElementById('partnerName').value = localStorage.getItem('partnerName') || '';
  document.getElementById('partnerDob').value = localStorage.getItem('partnerDob') || '';
  document.getElementById('partnerPlace').value = localStorage.getItem('partnerPlace') || '';
  document.getElementById('partnerTime').value = localStorage.getItem('partnerTime') || '';
  document.getElementById('partnerGender').value = localStorage.getItem('partnerGender') || 'мужской';
  document.getElementById('partnerDataModal').classList.add('active');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
window.onclick = e => {
  if (e.target.classList.contains('modal-bg')) e.target.classList.remove('active');
};

// --- Accordion blocks (добавляем HTML по шаблону) ---
const accordionBlocks = [
  {
    title: "🕰️ Время прогноза",
    content: `
      <div class="accordion-group-title">Долгосрочные</div>
      <div class="checkbox-group">
        <label><input type="checkbox" name="time_long" value="Натальный прогноз на жизнь"> Натальный прогноз на жизнь</label>
        <label><input type="checkbox" name="time_long" value="Прогноз на год (соляр)"> Прогноз на год (соляр)</label>
        <label><input type="checkbox" name="time_long" value="Прогноз на месяц (лунар, ингрессии)"> Прогноз на месяц (лунар, ингрессии)</label>
        <label><input type="checkbox" name="time_long" value="Прогноз на неделю"> Прогноз на неделю</label>
        <label><input type="checkbox" name="time_long" value="Прогноз на день"> Прогноз на день</label>
        <label><input type="checkbox" name="time_long" value="Прогноз по жизненным периодам"> Прогноз по жизненным периодам (Фирдарии, дирекции, прогрессии, Вимшоттари Даша)</label>
      </div>
      <div class="accordion-group-title">Краткосрочные</div>
      <div class="checkbox-group">
        <label><input type="checkbox" name="time_short" value="Ежедневный прогноз"> Ежедневный прогноз (по транзитам Луны и аспектам)</label>
        <label><input type="checkbox" name="time_short" value="Прогноз на час"> Прогноз на час (часовая астрология / хорар)</label>
      </div>
    `
  },
  {
    title: "🧭 Школа/традиция астрологии",
    content: `
      <div class="accordion-group-title">Западная астрология</div>
      <div class="checkbox-group">
        <label><input type="checkbox" name="school_west" value="Классическая"> Классическая</label>
        <label><input type="checkbox" name="school_west" value="Психологическая"> Психологическая</label>
        <label><input type="checkbox" name="school_west" value="Эзотерическая"> Эзотерическая</label>
        <label><input type="checkbox" name="school_west" value="Эволюционная"> Эволюционная</label>
        <label><input type="checkbox" name="school_west" value="Ураническая"> Ураническая</label>
        <label><input type="checkbox" name="school_west" value="Гелиоцентрическая"> Гелиоцентрическая</label>
      </div>
      <div class="accordion-group-title">Индийская (Ведическая / Джйотиш)</div>
      <div class="checkbox-group">
        <label><input type="checkbox" name="school_indian" value="Сидерическая система"> Сидерическая система</label>
        <label><input type="checkbox" name="school_indian" value="Даша-системы"> Даша-системы (Вимшоттари и др.)</label>
        <label><input type="checkbox" name="school_indian" value="Навамша и варги"> Навамша и варги</label>
        <label><input type="checkbox" name="school_indian" value="Панчанга-прогноз"> Панчанга-прогноз</label>
        <label><input type="checkbox" name="school_indian" value="Мухурта"> Мухурта</label>
      </div>
      <div class="accordion-group-title">Китайская астрология</div>
      <div class="checkbox-group">
        <label><input type="checkbox" name="school_china" value="Ба Цзы"> Ба Цзы (4 столпа судьбы)</label>
        <label><input
