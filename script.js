const LANGS = {
  ru: { astro: "GlobalAstro", ask: "Получить ответ", qLabel: "Какой Ваш вопрос астрологу?", /* ... */ },
  en: { astro: "GlobalAstro", ask: "Get Answer", qLabel: "What is your question for the astrologer?", /* ... */ },
  es: { astro: "GlobalAstro", ask: "Obtener respuesta", qLabel: "¿Cuál es tu pregunta para el astrólogo?", /* ... */ },
  pt: { astro: "GlobalAstro", ask: "Obter resposta", qLabel: "Qual é a sua pergunta para o astrólogo?", /* ... */ },
  de: { astro: "GlobalAstro", ask: "Antwort erhalten", qLabel: "Was ist deine Frage an den Astrologen?", /* ... */ },
  fr: { astro: "GlobalAstro", ask: "Obtenir une réponse", qLabel: "Quelle est votre question pour l'astrologue ?", /* ... */ },
  sr: { astro: "GlobalAstro", ask: "Dobij odgovor", qLabel: "Koje je tvoje pitanje za astrologa?", /* ... */ },
  pl: { astro: "GlobalAstro", ask: "Uzyskaj odpowiedź", qLabel: "Jakie jest twoje pytanie do astrologa?", /* ... */ },
  ar: { astro: "جلوبال أسترو", ask: "احصل على الإجابة", qLabel: "ما هو سؤالك للفلكي؟", /* ... */ },
  zh: { astro: "GlobalAstro", ask: "获取答案", qLabel: "你想问占星师什么问题？", /* ... */ }
};
// (Вставь остальные переводы как из предыдущего поста — все ключи и массивы!)

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
document.getElementById("open-me").querySelector(".card-title").innerText = L.me || "Мои данные";
document.getElementById("open-partner").querySelector(".card-title").innerText = L.partner || "Данные партнёра";
document.getElementById("open-options").querySelector(".card-title").innerText = L.options || "Дополнительные опции";

// --- Примеры вопросов ---
let qIndex = 0;
const questions = L.qPlaceholder || ["Ваш вопрос"];
function rotatePlaceholder() {
  const textarea = document.getElementById('question');
  textarea.setAttribute("placeholder", questions[qIndex]);
  qIndex = (qIndex + 1) % questions.length;
}
setInterval(rotatePlaceholder, 3000);
rotatePlaceholder();

// --- Основная логика отправки (оставь свой рабочий fetch/post код тут) ---
document.getElementById('ask-btn').onclick = function() {
  const question = document.getElementById('question').value.trim();
  if (!question) {
    document.getElementById('result').innerText = L.enterQ || "Введите вопрос!";
    return;
  }
  document.getElementById('result').innerText = L.wait || "Запрос отправлен...";
  // добавь получение данных пользователя и fetch/post (оставь свою рабочую логику)
};
