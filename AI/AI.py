import os
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, request, jsonify

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

history = []

app = Flask(__name__)

# Create the model
generation_config = {
  "temperature": 0.25,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 250,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  #model_name="gemini-1.5-pro",
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  system_instruction="You are an expert in finance, banking, financial instruments, and financial literacy. You possess extensive knowledge of global financial markets, conservative investment strategies, personal finance management, economic principles, and the latest financial technologies. Your primary goal is to provide tailored, high-value, and actionable financial advice to users, with a focus on capital preservation, risk management, and sustainable growth, ensuring clarity, relevance, and practicality.",
)


""" while True:
    
    user_input = input("User: ")
    
    chat_session = model.start_chat(
        history=history
    )

    response = chat_session.send_message("You only know about finance related topics so if anyone asks you about anything else, you will remind them that you are a financial expert and can only provide advice on finance related topics." + user_input)
    
    model_response = response.text

    print(model_response)
    
    history.append({"role": "user", "parts": [user_input]})
    history.append({"role": "model", "parts": [model_response]}) """
    
    
    
@app.route("/generate", methods=["POST"])
def generate_response():
    user_input = request.json.get("prompt")
    
    if not user_input:
        return jsonify({"error": "Prompt is required"}), 400

    # Create a chat session
    chat_session = model.start_chat(history=history)

    # Send the user input to the model with a reminder message
    response = chat_session.send_message(
        "You only know about finance related topics so if anyone asks you about anything else, "
        "you will remind them that you are a financial expert and can only provide advice on finance related topics. "
        + user_input
    )

    model_response = response.text

    # Append the conversation history
    history.append({"role": "user", "parts": [user_input]})
    history.append({"role": "model", "parts": [model_response]})

    # Return the model's response as JSON
    return jsonify({"response": model_response})

# Run the Flask app
if __name__ == "__main__":
    app.run(host="localhost", port=5000)