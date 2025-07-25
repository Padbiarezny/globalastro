const LANGS = {
  ru: {
    astro: "GlobalAstro",
    ask: "Получить ответ",
    qLabel: "Какой Ваш вопрос астрологу?",
    qPlaceholder: [
      "Покупать мне BMW X5 на следующей неделе?",
      "Что ждёт меня в отношениях с новым партнёром?",
      "Как будет складываться моя карьера в этом году?",
      "Когда лучше начинать новое дело?",
      "Стоит ли соглашаться на переезд?",
      "Какие энергии месяца для меня наиболее важны?",
      "В какой сфере меня ждёт успех в ближайшее время?",
      "Как будут складываться отношения с детьми?",
      "Есть ли вероятность встретить любовь в этом месяце?",
      "Подходит ли мне выбранная профессия?",
      "Когда ждать повышения на работе?",
      "Стоит ли инвестировать в недвижимость сейчас?",
      "Что скажет гороскоп о моём здоровье?",
      "Появятся ли новые друзья в этом году?",
      "Нужно ли мне менять сферу деятельности?",
      "Есть ли опасность крупных трат в этом месяце?",
      "Когда лучше планировать отпуск?",
      "Смогу ли я реализовать творческий проект?",
      "Какая дата удачна для подписания договора?",
      "Какова совместимость с моим партнёром?"
    ],
    me: "Мои данные",
    partner: "Данные партнёра",
    options: "Дополнительные опции",
    resError: "Ошибка соединения: ",
    wait: "⏳ Запрос отправлен... ждём ответ от звёзд :)",
    enterQ: "Введите свой вопрос!"
  },
  en: {
    astro: "GlobalAstro",
    ask: "Get Answer",
    qLabel: "What is your question for the astrologer?",
    qPlaceholder: [
      "Should I buy a BMW X5 next week?",
      "What awaits me in a new relationship?",
      "How will my career unfold this year?",
      "When is the best time to start something new?",
      "Should I agree to move?",
      "What are the most important energies of the month for me?",
      "Which field will bring me success soon?",
      "How will my relationship with children develop?",
      "Will I meet love this month?",
      "Is my chosen profession right for me?",
      "When to expect a promotion?",
      "Should I invest in real estate now?",
      "What does my horoscope say about health?",
      "Will I find new friends this year?",
      "Should I change my field?",
      "Are there risks of big expenses this month?",
      "When is the best time to plan a vacation?",
      "Will I realize my creative project?",
      "What date is lucky for signing a contract?",
      "How compatible am I with my partner?"
    ],
    me: "My Data",
    partner: "Partner's Data",
    options: "Extra options",
    resError: "Connection error: ",
    wait: "⏳ Request sent... waiting for an answer from the stars :)",
    enterQ: "Please enter your question!"
  },
  es: {
    astro: "GlobalAstro",
    ask: "Obtener respuesta",
    qLabel: "¿Cuál es tu pregunta para el astrólogo?",
    qPlaceholder: [
      "¿Debo comprar un BMW X5 la próxima semana?",
      "¿Qué me espera en una nueva relación?",
      "¿Cómo se desarrollará mi carrera este año?",
      "¿Cuándo es el mejor momento para empezar algo nuevo?",
      "¿Debería aceptar mudarme?",
      "¿Cuáles son las energías más importantes del mes para mí?",
      "¿En qué campo tendré éxito pronto?",
      "¿Cómo se desarrollará mi relación con los hijos?",
      "¿Encontraré el amor este mes?",
      "¿Es adecuada mi profesión elegida?",
      "¿Cuándo esperar un ascenso?",
      "¿Debería invertir en bienes raíces ahora?",
      "¿Qué dice mi horóscopo sobre la salud?",
      "¿Haré nuevos amigos este año?",
      "¿Debería cambiar de campo laboral?",
      "¿Hay riesgos de grandes gastos este mes?",
      "¿Cuándo es el mejor momento para planear vacaciones?",
      "¿Realizaré mi proyecto creativo?",
      "¿Qué fecha es afortunada para firmar un contrato?",
      "¿Qué tan compatible soy con mi pareja?"
    ],
    me: "Mis datos",
    partner: "Datos de la pareja",
    options: "Opciones adicionales",
    resError: "Error de conexión: ",
    wait: "⏳ Pregunta enviada... esperando respuesta de las estrellas :)",
    enterQ: "¡Introduce tu pregunta!"
  },
  pt: {
    astro: "GlobalAstro",
    ask: "Obter resposta",
    qLabel: "Qual é a sua pergunta para o astrólogo?",
    qPlaceholder: [
      "Devo comprar um BMW X5 na próxima semana?",
      "O que me espera em um novo relacionamento?",
      "Como será minha carreira este ano?",
      "Qual o melhor momento para começar algo novo?",
      "Devo aceitar a mudança?",
      "Quais são as energias mais importantes do mês para mim?",
      "Em qual área terei sucesso em breve?",
      "Como será minha relação com os filhos?",
      "Vou encontrar o amor este mês?",
      "Minha profissão escolhida é adequada?",
      "Quando esperar uma promoção?",
      "Devo investir em imóveis agora?",
      "O que diz meu horóscopo sobre saúde?",
      "Vou fazer novos amigos este ano?",
      "Devo mudar de área?",
      "Há risco de grandes gastos este mês?",
      "Quando é melhor planejar as férias?",
      "Vou realizar meu projeto criativo?",
      "Qual data é favorável para assinar contrato?",
      "Qual minha compatibilidade com o parceiro?"
    ],
    me: "Meus dados",
    partner: "Dados do parceiro",
    options: "Opções adicionais",
    resError: "Erro de conexão: ",
    wait: "⏳ Pedido enviado... aguardando resposta das estrelas :)",
    enterQ: "Digite sua pergunta!"
  },
  de: {
    astro: "GlobalAstro",
    ask: "Antwort erhalten",
    qLabel: "Was ist deine Frage an den Astrologen?",
    qPlaceholder: [
      "Soll ich mir nächste Woche einen BMW X5 kaufen?",
      "Was erwartet mich in einer neuen Beziehung?",
      "Wie wird sich meine Karriere dieses Jahr entwickeln?",
      "Wann ist der beste Zeitpunkt, etwas Neues zu starten?",
      "Soll ich dem Umzug zustimmen?",
      "Welche Energien des Monats sind für mich am wichtigsten?",
      "In welchem Bereich werde ich bald Erfolg haben?",
      "Wie entwickelt sich meine Beziehung zu den Kindern?",
      "Werde ich diesen Monat die Liebe treffen?",
      "Ist mein gewählter Beruf der richtige für mich?",
      "Wann kann ich mit einer Beförderung rechnen?",
      "Soll ich jetzt in Immobilien investieren?",
      "Was sagt mein Horoskop über meine Gesundheit?",
      "Werde ich dieses Jahr neue Freunde finden?",
      "Soll ich das Berufsfeld wechseln?",
      "Gibt es Risiken für große Ausgaben diesen Monat?",
      "Wann ist der beste Zeitpunkt für Urlaub?",
      "Werde ich mein kreatives Projekt verwirklichen?",
      "Welches Datum ist günstig für einen Vertragsabschluss?",
      "Wie kompatibel bin ich mit meinem Partner?"
    ],
    me: "Meine Daten",
    partner: "Partnerdaten",
    options: "Weitere Optionen",
    resError: "Verbindungsfehler: ",
    wait: "⏳ Anfrage gesendet... warte auf Antwort von den Sternen :)",
    enterQ: "Gib deine Frage ein!"
  },
  fr: {
    astro: "GlobalAstro",
    ask: "Obtenir une réponse",
    qLabel: "Quelle est votre question pour l'astrologue ?",
    qPlaceholder: [
      "Dois-je acheter une BMW X5 la semaine prochaine ?",
      "Que m'attend dans une nouvelle relation ?",
      "Comment va évoluer ma carrière cette année ?",
      "Quel est le meilleur moment pour commencer quelque chose de nouveau ?",
      "Dois-je accepter de déménager ?",
      "Quelles sont les énergies les plus importantes du mois pour moi ?",
      "Dans quel domaine vais-je réussir bientôt ?",
      "Comment va se développer ma relation avec les enfants ?",
      "Vais-je rencontrer l'amour ce mois-ci ?",
      "Le métier que j'ai choisi me convient-il ?",
      "Quand attendre une promotion ?",
      "Dois-je investir dans l'immobilier maintenant ?",
      "Que dit mon horoscope sur la santé ?",
      "Vais-je me faire de nouveaux amis cette année ?",
      "Dois-je changer de domaine ?",
      "Y a-t-il des risques de grosses dépenses ce mois-ci ?",
      "Quel est le meilleur moment pour prévoir des vacances ?",
      "Vais-je réaliser mon projet créatif ?",
      "Quelle date est favorable pour signer un contrat ?",
      "Quelle est ma compatibilité avec mon partenaire ?"
    ],
    me: "Mes données",
    partner: "Données du partenaire",
    options: "Options supplémentaires",
    resError: "Erreur de connexion : ",
    wait: "⏳ Demande envoyée... en attente de la réponse des étoiles :)",
    enterQ: "Saisissez votre question !"
  },
  sr: {
    astro: "GlobalAstro",
    ask: "Dobij odgovor",
    qLabel: "Koje je tvoje pitanje za astrologa?",
    qPlaceholder: [
      "Da li da kupim BMW X5 sledeće nedelje?",
      "Šta me čeka u novoj vezi?",
      "Kako će se razvijati moja karijera ove godine?",
      "Kada je najbolje vreme za novi početak?",
      "Da li da prihvatim selidbu?",
      "Koje energije meseca su za mene najvažnije?",
      "U kojoj oblasti me uskoro čeka uspeh?",
      "Kako će se razvijati odnos sa decom?",
      "Da li ću upoznati ljubav ovog meseca?",
      "Da li je moj izabrani posao pravi za mene?",
      "Kada očekivati unapređenje?",
      "Da li sada treba ulagati u nekretnine?",
      "Šta horoskop kaže o zdravlju?",
      "Da li ću steći nove prijatelje ove godine?",
      "Da li treba da menjam profesiju?",
      "Ima li rizika od velikih troškova ovog meseca?",
      "Kada je najbolje planirati odmor?",
      "Da li ću realizovati svoj kreativni projekat?",
      "Koji datum je povoljan za potpisivanje ugovora?",
      "Koliko sam kompatibilan sa partnerom?"
    ],
    me: "Moji podaci",
    partner: "Partnerovi podaci",
    options: "Dodatne opcije",
    resError: "Greška povezivanja: ",
    wait: "⏳ Zahtev poslat... čekam odgovor zvezda :)",
    enterQ: "Unesi svoje pitanje!"
  },
  pl: {
    astro: "GlobalAstro",
    ask: "Uzyskaj odpowiedź",
    qLabel: "Jakie jest twoje pytanie do astrologa?",
    qPlaceholder: [
      "Czy powinienem kupić BMW X5 w przyszłym tygodniu?",
      "Co mnie czeka w nowym związku?",
      "Jak potoczy się moja kariera w tym roku?",
      "Kiedy najlepiej zacząć coś nowego?",
      "Czy powinienem zgodzić się na przeprowadzkę?",
      "Jakie są najważniejsze energie miesiąca dla mnie?",
      "W jakiej dziedzinie czeka mnie wkrótce sukces?",
      "Jak będą się układać relacje z dziećmi?",
      "Czy w tym miesiącu spotkam miłość?",
      "Czy wybrany zawód jest dla mnie odpowiedni?",
      "Kiedy spodziewać się awansu?",
      "Czy powinienem inwestować w nieruchomości teraz?",
      "Co mówi horoskop o moim zdrowiu?",
      "Czy w tym roku poznam nowych przyjaciół?",
      "Czy powinienem zmienić branżę?",
      "Czy istnieje ryzyko dużych wydatków w tym miesiącu?",
      "Kiedy najlepiej planować urlop?",
      "Czy zrealizuję swój projekt kreatywny?",
      "Jaka data jest korzystna do podpisania umowy?",
      "Jak bardzo jestem kompatybilny z partnerem?"
    ],
    me: "Moje dane",
    partner: "Dane partnera",
    options: "Dodatkowe opcje",
    resError: "Błąd połączenia: ",
    wait: "⏳ Zapytanie wysłane... czekam na odpowiedź od gwiazd :)",
    enterQ: "Wpisz swoje pytanie!"
  },
  ar: {
    astro: "جلوبال أسترو",
    ask: "احصل على الإجابة",
    qLabel: "ما هو سؤالك للفلكي؟",
    qPlaceholder: [
      "هل أشتري سيارة BMW X5 الأسبوع القادم؟",
      "ما الذي ينتظرني في علاقة جديدة؟",
      "كيف ستسير مسيرتي المهنية هذا العام؟",
      "متى الوقت المناسب للبدء بشيء جديد؟",
      "هل يجب أن أوافق على الانتقال؟",
      "ما هي أهم الطاقات هذا الشهر بالنسبة لي؟",
      "في أي مجال سيأتي النجاح قريبًا؟",
      "كيف ستتطور علاقتي مع الأطفال؟",
      "هل سألتقي الحب هذا الشهر؟",
      "هل مهنتي المختارة مناسبة لي؟",
      "متى أتوقع ترقية؟",
      "هل يجب أن أستثمر في العقارات الآن؟",
      "ماذا يقول برجي عن الصحة؟",
      "هل سألتقي أصدقاء جدد هذا العام؟",
      "هل يجب أن أغير مجالي؟",
      "هل هناك خطر من مصاريف كبيرة هذا الشهر؟",
      "متى أفضل وقت للتخطيط لإجازة؟",
      "هل سأحقق مشروعي الإبداعي؟",
      "ما هو التاريخ المناسب لتوقيع العقد؟",
      "ما مدى التوافق مع شريكي؟"
    ],
    me: "بياناتي",
    partner: "بيانات الشريك",
    options: "خيارات إضافية",
    resError: "خطأ في الاتصال: ",
    wait: "⏳ تم إرسال الطلب... في انتظار إجابة من النجوم :)",
    enterQ: "ادخل سؤالك!"
  },
  zh: {
    astro: "GlobalAstro",
    ask: "获取答案",
    qLabel: "你想问占星师什么问题？",
    qPlaceholder: [
      "我下周应该买宝马X5吗？",
      "新恋情会有什么进展？",
      "今年我的事业会如何发展？",
      "什么时候适合开始新事物？",
      "我应该同意搬家吗？",
      "本月对我最重要的能量是什么？",
      "近期在哪个领域会有成就？",
      "和孩子的关系会怎样？",
      "本月有可能遇到爱情吗？",
      "我选择的职业适合我吗？",
      "什么时候会有晋升？",
      "现在适合买房投资吗？",
      "我的健康运势如何？",
      "今年会有新朋友吗？",
      "是否要换行业？",
      "本月有大额开支的风险吗？",
      "什么时候适合休假？",
      "能否实现我的创意项目？",
      "签约的幸运日期是什么？",
      "我与伴侣的契合度如何？"
    ],
    me: "我的信息",
    partner: "伴侣信息",
    options: "更多选项",
    resError: "连接错误：",
    wait: "⏳ 请求已发送……等待星星的回答 :)",
    enterQ: "请输入你的问题！"
  }
};

function detectLang() {
  let code = "ru";
  try {
    if (
      window.Telegram &&
      Telegram.WebApp &&
      Telegram.WebApp.initDataUnsafe &&
      Telegram.WebApp.initDataUnsafe.user &&
      Telegram.WebApp.initDataUnsafe.user.language_code
    ) {
      code = Telegram.WebApp.initDataUnsafe.user.language_code.toLowerCase();
      if (code in LANGS) return code;
      code = code.split('-')[0];
      if (code in LANGS) return code;
    }
    code = navigator.language ? navigator.language.toLowerCase().split('-')[0] : "ru";
    if (code in LANGS) return code;
  } catch (e) {}
  return "ru";
}
const CUR_LANG = detectLang();
const L = LANGS[CUR_LANG] || LANGS["ru"];

document.querySelector(".brand-title").innerText = L.astro;
document.querySelector(".ask-btn").innerText = L.ask;
document.querySelector(".label-title").innerText = L.qLabel;
document.getElementById("open-me").querySelector(".card-title").innerText = L.me;
document.getElementById("open-partner").querySelector(".card-title").innerText = L.partner;
document.getElementById("open-options").querySelector(".card-title").innerText = L.options;

let qIndex = 0;
function rotatePlaceholder() {
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", L.qPlaceholder[qIndex]);
  qIndex = (qIndex + 1) % L.qPlaceholder.length;
}
setInterval(rotatePlaceholder, 3000);
rotatePlaceholder();

// --------- LocalStorage, обработка данных, модальные окна (оставь свой рабочий код, не трогай!) --------

// ----------- КНОПКА ОТПРАВКИ -------------
document.getElementById('ask-btn').onclick = function() {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    document.getElementById('result').innerText = L.enterQ;
    return;
  }
  // Данные пользователя и партнёра, опции (здесь подставь свою логику из рабочей версии!)
  const me = {}; // получи свои данные
  const partner = {}; //
