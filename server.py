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
    prompt = (
        f"Ты опытный астролог и отвечаешь на вопросы, используя астрологические знания."
        f"\nВот данные пользователя:\n"
        f"- Дата рождения: {data.get('dob')}\n"
        f"- Место рождения: {data.get('place')}\n"
        f"- Пол: {data.get('gender')}\n"
        f"- Время рождения: {data.get('time') or 'не указано'}\n"
        f"Вопрос пользователя: {data.get('question')}\n"
        f"Дай подробный астрологический ответ, основанный именно на этих данных и вопросе пользователя. Не отвечай общими фразами, не проси дополнительных данных, не объясняй что такое астрология."
    )

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=450,
        temperature=0.8
    )
    return jsonify({"response": response.choices[0].message.content})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
