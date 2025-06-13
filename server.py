from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)