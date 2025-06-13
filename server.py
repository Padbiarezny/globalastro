from flask import Flask, request, jsonify, send_from_directory
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def home():
    return send_from_directory('.', 'index.html')

@app.route("/script.js")
def script():
    return send_from_directory('.', 'script.js')

@app.route("/style.css")
def style():
    return send_from_directory('.', 'style.css')

@app.route("/horoscope", methods=["POST"])
def horoscope():
    data = request.get_json(force=True)

    # Получаем все данные по новой структуре
    me = data.get("me", {})
    partner = data.get("partner", {})
    options = data.get("options", [])
    question = data.get("question", "")

    prompt = (
        "Ты опытный астролог и отвечаешь на вопросы пользователя по астрологическим данным. "
        "Используй ВСЮ информацию ниже для анализа, добавляй выбранные опции (нумерология, таро, китайский гороскоп и др), если они указаны. "
        "Дай развернутый, уникальный астрологический ответ на вопрос пользователя, без воды и повторов.\n\n"
        "Данные пользователя:\n"
        f"- Дата рождения: {me.get('dob','')}\n"
        f"- Место рождения: {me.get('place','')}\n"
        f"- Пол: {me.get('gender','')}\n"
        f"- Время рождения: {me.get('time','')}\n"
        + (
            f"Данные партнёра:\n"
            f"- Имя: {partner.get('name','')}\n"
            f"- Дата рождения: {partner.get('dob','')}\n"
            f"- Место рождения: {partner.get('place','')}\n"
            f"- Пол: {partner.get('gender','')}\n"
            f"- Время рождения: {partner.get('time','')}\n"
            if partner else ""
        ) +
        (f"Выбранные опции: {', '.join(options)}\n" if options else "") +
        f"\nВопрос пользователя: {question}\n"
        "Ответ должен быть подробным, конкретным и учитывать все вышеуказанные детали."
    )

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=600,
        temperature=0.8
    )
    return jsonify({"response": response.choices[0].message.content})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
