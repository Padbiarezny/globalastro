function submitData() {
    const dob = document.getElementById("dob").value;
    const place = document.getElementById("place").value;
    const gender = document.getElementById("gender").value;
    const time = document.getElementById("time").value;
    const question = document.getElementById("question").value || "Дай мне гороскоп на ближайшую неделю";

    const data = {
        dob: dob,
        place: place,
        gender: gender,
        time: time,
        question: question
    };

    // Открываем новое окно заранее (чтобы не блокировалось браузером)
    const win = window.open('', '_blank');
    win.document.write('<h2 style="font-family:sans-serif;">⏳ Ждём ответ...</h2>');

    fetch("https://globalastro.onrender.com/horoscope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.response) {
            win.document.body.innerHTML = `
                <div style="font-family:sans-serif;padding:24px;">
                    <h2>🔮 Результат:</h2>
                    <div>${result.response.replace(/\n/g, "<br>")}</div>
                    <br>
                    <button onclick="window.close()" style="margin-top:24px;padding:10px 20px;font-size:18px;border:none;border-radius:5px;background:#007bff;color:#fff;cursor:pointer;">Закрыть</button>
                </div>`;
        } else if (result.error) {
            win.document.body.innerHTML = "<b>Ошибка:</b> " + result.error;
        } else {
            win.document.body.innerHTML = "Что-то пошло не так!";
        }
    })
    .catch(error => {
        win.document.body.innerHTML = "Ошибка соединения: " + error;
    });
}
