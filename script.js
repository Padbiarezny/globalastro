function submitData() {
    const dob = document.getElementById("dob").value;
    const place = document.getElementById("place").value;
    const gender = document.getElementById("gender").value;
    const time = document.getElementById("time").value;

    const data = {
        dob: dob,
        place: place,
        gender: gender,
        time: time,
        question: "Дай мне гороскоп на ближайшую неделю"
    };

    document.getElementById("result").innerText = "Запрос отправлен... ждём ответ :)";

    fetch("https://globalastro-backend.replit.app/horoscope", { // если backend на этом же replit
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.response) {
            document.getElementById("result").innerText = result.response;
        } else if (result.error) {
            document.getElementById("result").innerText = "Ошибка: " + result.error;
        } else {
            document.getElementById("result").innerText = "Что-то пошло не так!";
        }
    })
    .catch(error => {
        document.getElementById("result").innerText = "Ошибка соединения: " + error;
    });
}