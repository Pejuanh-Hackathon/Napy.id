from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
import os

app = Flask(__name__)
CORS(app)  # Enable CORS

api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise EnvironmentError("GROQ_API_KEY is not set in environment variables")
client = Groq(api_key=api_key)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data['message']
    chat_history = data['chat_history']
    chat_history.append({"role": "user", "content": user_input})

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=chat_history,
        max_tokens=1000,
        temperature=1.2
    )
    
    # Append the response to the chat history
    chat_history.append({
        "role": "assistant",
        "content": response.choices[0].message.content
    })

    # Send response back to frontend
    return jsonify({"response": response.choices[0].message.content, "chat_history": chat_history})

if __name__ == '__main__':
    app.run(debug=True)
