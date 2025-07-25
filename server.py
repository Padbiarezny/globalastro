from flask import Flask, request, jsonify, send_from_directory
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

UI_PROMPTS = {
    "ru": "Ты опытный астролог и отвечаешь на вопросы, используя астрологические знания. Вот данные пользователя: Дата рождения: {dob}, Место рождения: {place}, Пол: {gender}, Время рождения: {time}, Данные партнера: {partner}, Доп. опции: {opts}. Вопрос пользователя: {question}. Дай подробный астрологический ответ на том языке, на котором был вопрос. Не отвечай общими фразами, не проси дополнительных данных, не объясняй что такое астрология.",
    "en": "You are an experienced astrologer. Use astrology to answer the question. User's data: Date of birth: {dob}, Place of birth: {place}, Gender: {gender}, Time of birth: {time}, Partner's data: {partner}, Extra options: {opts}. User's question: {question}. Give a detailed astrology-based answer in the language of the question. Do not reply with general phrases or request more data, and do not explain what astrology is.",
    # ... добавь по аналогии для других языков
}

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
    lang = data.get("lang", "ru")
    prompt_template = UI_PROMPTS.get(lang, UI_PROMPTS["ru"])

    me = data.get("me", {})
    partner = data.get("partner", {})
    opts = data.get("opts", {})
    prompt = prompt_template.format(
        dob=me.get("dob", "—"),
        place=me.get("place", "—"),
        gender=me.get("gender", "—"),
        time=me.get("time", "—"),
        partner=partner,
        opts=opts,
        question=data.get("question", "")
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
