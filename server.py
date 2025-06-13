from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

from flask import Flask, request, jsonify, send_from_directory
import openai
import os

app = Flask(__name__)

# ... (твои другие маршруты) ...

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
    prompt = f"""На основе следующих данных: 
Дата рождения: {data.get('dob')}
Место рождения: {data.get('place')}
Пол: {data.get('gender')}
Время рождения: {data.get('time')}
Составь персональный гороскоп. {data.get('question', '')}"""

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300,
        temperature=0.7
    )
    return jsonify({"response": response.choices[0].message.content})

import os  # эта строчка обычно уже есть выше, но если нет — добавь

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # <-- вот эта строка!
    app.run(host="0.0.0.0", port=port)
