from flask import Flask, request, jsonify
import openai, os

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

PROMPTS = {
    "ru": "Ты опытный астролог. Ответь на вопрос, используя только данные: {data}. Вопрос: {question}. Дай подробный астрологический ответ именно для этого человека. Не объясняй астрологию и не проси больше данных.",
    "en": "You are an experienced astrologer. Answer the question using ONLY this person's data: {data}. Question: {question}. Give a detailed, personalized astrological answer. Do not explain astrology or ask for more data.",
    "es": "Eres un astrólogo experimentado. Responde usando SOLO estos datos: {data}. Pregunta: {question}. Da una respuesta astrológica detallada y personalizada. No expliques la astrología ni pidas más datos.",
    # ... и так далее для всех языков!
}

@app.route("/horoscope", methods=["POST"])
def horoscope():
    data = request.get_json(force=True)
    lang = data.get("lang", "ru")
    user_data = f"Date of Birth: {data.get('dob')}, Place: {data.get('place')}, Gender: {data.get('gender')}, Time: {data.get('time') or 'not specified'}"
    prompt = PROMPTS.get(lang, PROMPTS["ru"]).format(data=user_data, question=data.get("question", ""))
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=450, temperature=0.8
    )
    return jsonify({"response": response.choices[0].message.content})
