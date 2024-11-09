import os
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()

from flask import Flask, request, jsonify

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

history = []

#history.append({"role": "user", "parts": [{"current_user":{"name":"Jane Doe","level":61,"achievements":["First Tier Rewards Unlocked"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":300,"yearly_saved":1200,"monthly_shortfall":100,"yearly_shortfall":3600}},"users":[{"user_id":"user123","email":"user123@example.com","username":"JohnDoe","level":18,"achievements":["Thrifty Thinker"],"monthly_saving_goal":500,"yearly_saving_goal":6000,"savings_progress":{"monthly_saved":250,"yearly_saved":2500},"financial_status":{"current_status":"Employed","average_monthly_income":"3,500 EUR","main_goals":["Saving for an emergency fund","Investing for the future","Managing day-to-day expenses"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"No debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":50.00,"description":"Weekly grocery shopping"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":20.00,"description":"Occasional coffee with friends"},{"date":"2024-11-03","category":"Transportation","amount":15.00,"description":"Gas for car, well-planned routes"},{"date":"2024-11-04","category":"Savings","amount":200.00,"description":"Monthly transfer to savings account"},{"date":"2024-11-05","category":"Investments","amount":150.00,"description":"Investment in diversified index fund"},{"date":"2024-11-06","category":"Subscriptions","amount":9.99,"description":"Necessary subscription service"},{"date":"2024-11-07","category":"Utilities","amount":60.00,"description":"Electricity bill"},{"date":"2024-11-08","category":"Health","amount":20.00,"description":"Pharmacy purchase, health is a priority"}]},{"user_id":"user456","email":"user456@example.com","username":"JaneSmith","level":25,"achievements":["Budget Buster","Investment Guru","Goal Achiever"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":150,"yearly_saved":1200},"financial_status":{"current_status":"Self-Employed","average_monthly_income":"2,800 EUR","main_goals":["Paying off debt","Saving for a major purchase","Investing for the future"],"expense_pattern":"Very tight","potential_saving_areas":["Dining and entertainment","Shopping","Transportation"],"risk_attitude":"Very risk-averse","current_debt":"5,000 EUR in credit card debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":45.00,"description":"Weekly shopping, some non-essentials included"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":25.00,"description":"Dinner out, occasional treat"},{"date":"2024-11-03","category":"Transportation","amount":12.00,"description":"Bus fare, prefers public transport"},{"date":"2024-11-04","category":"Investments","amount":50.00,"description":"Small investment in a mutual fund"},{"date":"2024-11-05","category":"Shopping","amount":40.00,"description":"Unplanned clothing purchase"},{"date":"2024-11-06","category":"Subscriptions","amount":12.99,"description":"Multiple streaming services"},{"date":"2024-11-07","category":"Utilities","amount":55.00,"description":"Water and internet bill"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":30.00,"description":"Evening drinks with friends"}]},{"user_id":"user999","email":"user999@example.com","username":"SophiaGrace","level":42,"achievements":["Goal Achiever","Savings Wizard"],"monthly_saving_goal":600,"yearly_saving_goal":7200,"savings_progress":{"monthly_saved":400,"yearly_saved":3500},"financial_status":{"current_status":"Employed","average_monthly_income":"5,000 EUR","main_goals":["Investing for the future","Saving for an emergency fund","Goal-based savings"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"Mortgage"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":65.00,"description":"Healthy and organic groceries"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":40.00,"description":"Dinner with friends"},{"date":"2024-11-03","category":"Transportation","amount":25.00,"description":"Gas for weekend trip"},{"date":"2024-11-04","category":"Investments","amount":300.00,"description":"Investment in tech stocks"},{"date":"2024-11-05","category":"Subscriptions","amount":15.99,"description":"Premium streaming service"},{"date":"2024-11-06","category":"Health","amount":60.00,"description":"Yoga and wellness classes"},{"date":"2024-11-07","category":"Utilities","amount":70.00,"description":"Monthly utility bills"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":50.00,"description":"Brunch at a fancy cafe"}]}]}]})
#history.append({"role": "model", "parts": [{"current_user":{"name":"Jane Doe","level":61,"achievements":["First Tier Rewards Unlocked"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":300,"yearly_saved":1200,"monthly_shortfall":100,"yearly_shortfall":3600}},"users":[{"user_id":"user123","email":"user123@example.com","username":"JohnDoe","level":18,"achievements":["Thrifty Thinker"],"monthly_saving_goal":500,"yearly_saving_goal":6000,"savings_progress":{"monthly_saved":250,"yearly_saved":2500},"financial_status":{"current_status":"Employed","average_monthly_income":"3,500 EUR","main_goals":["Saving for an emergency fund","Investing for the future","Managing day-to-day expenses"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"No debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":50.00,"description":"Weekly grocery shopping"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":20.00,"description":"Occasional coffee with friends"},{"date":"2024-11-03","category":"Transportation","amount":15.00,"description":"Gas for car, well-planned routes"},{"date":"2024-11-04","category":"Savings","amount":200.00,"description":"Monthly transfer to savings account"},{"date":"2024-11-05","category":"Investments","amount":150.00,"description":"Investment in diversified index fund"},{"date":"2024-11-06","category":"Subscriptions","amount":9.99,"description":"Necessary subscription service"},{"date":"2024-11-07","category":"Utilities","amount":60.00,"description":"Electricity bill"},{"date":"2024-11-08","category":"Health","amount":20.00,"description":"Pharmacy purchase, health is a priority"}]},{"user_id":"user456","email":"user456@example.com","username":"JaneSmith","level":25,"achievements":["Budget Buster","Investment Guru","Goal Achiever"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":150,"yearly_saved":1200},"financial_status":{"current_status":"Self-Employed","average_monthly_income":"2,800 EUR","main_goals":["Paying off debt","Saving for a major purchase","Investing for the future"],"expense_pattern":"Very tight","potential_saving_areas":["Dining and entertainment","Shopping","Transportation"],"risk_attitude":"Very risk-averse","current_debt":"5,000 EUR in credit card debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":45.00,"description":"Weekly shopping, some non-essentials included"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":25.00,"description":"Dinner out, occasional treat"},{"date":"2024-11-03","category":"Transportation","amount":12.00,"description":"Bus fare, prefers public transport"},{"date":"2024-11-04","category":"Investments","amount":50.00,"description":"Small investment in a mutual fund"},{"date":"2024-11-05","category":"Shopping","amount":40.00,"description":"Unplanned clothing purchase"},{"date":"2024-11-06","category":"Subscriptions","amount":12.99,"description":"Multiple streaming services"},{"date":"2024-11-07","category":"Utilities","amount":55.00,"description":"Water and internet bill"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":30.00,"description":"Evening drinks with friends"}]},{"user_id":"user999","email":"user999@example.com","username":"SophiaGrace","level":42,"achievements":["Goal Achiever","Savings Wizard"],"monthly_saving_goal":600,"yearly_saving_goal":7200,"savings_progress":{"monthly_saved":400,"yearly_saved":3500},"financial_status":{"current_status":"Employed","average_monthly_income":"5,000 EUR","main_goals":["Investing for the future","Saving for an emergency fund","Goal-based savings"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"Mortgage"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":65.00,"description":"Healthy and organic groceries"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":40.00,"description":"Dinner with friends"},{"date":"2024-11-03","category":"Transportation","amount":25.00,"description":"Gas for weekend trip"},{"date":"2024-11-04","category":"Investments","amount":300.00,"description":"Investment in tech stocks"},{"date":"2024-11-05","category":"Subscriptions","amount":15.99,"description":"Premium streaming service"},{"date":"2024-11-06","category":"Health","amount":60.00,"description":"Yoga and wellness classes"},{"date":"2024-11-07","category":"Utilities","amount":70.00,"description":"Monthly utility bills"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":50.00,"description":"Brunch at a fancy cafe"}]}]}]})


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
<<<<<<< HEAD
        "You only know about finance related topics so if anyone asks you about anything else, you will remind them that you are a financial expert and can only provide advice on finance related topics,but you can also answear questions about financial status of your friends from database. Make the advice concise and actionable. Dont write too much not to overwhelm the user."
        + user_input 
=======
        "You only know about finance related topics so if anyone asks you about anything else, you will remind them that you are a financial expert and can only provide advice on finance related topics. Make the advice concise and actionable. Dont write too much not to overwhelm the user."
        + user_input
>>>>>>> e4f9a91c4cd79b9515d851d74932d3d0e80ba39b
    )
    

    model_response = response.text
    
    response = chat_session.send_message(
        "If for answering the last question you dont need user data, just ignore this message and give the same answer as before. If user data is needed, here is the data: "
        +'{"role": "user", "parts": [{"current_user":{"name":"Jane Doe","level":61,"achievements":["First Tier Rewards Unlocked"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":300,"yearly_saved":1200,"monthly_shortfall":100,"yearly_shortfall":3600}},"users":[{"user_id":"user123","email":"user123@example.com","username":"JohnDoe","level":18,"achievements":["Thrifty Thinker"],"monthly_saving_goal":500,"yearly_saving_goal":6000,"savings_progress":{"monthly_saved":250,"yearly_saved":2500},"financial_status":{"current_status":"Employed","average_monthly_income":"3,500 EUR","main_goals":["Saving for an emergency fund","Investing for the future","Managing day-to-day expenses"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"No debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":50.00,"description":"Weekly grocery shopping"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":20.00,"description":"Occasional coffee with friends"},{"date":"2024-11-03","category":"Transportation","amount":15.00,"description":"Gas for car, well-planned routes"},{"date":"2024-11-04","category":"Savings","amount":200.00,"description":"Monthly transfer to savings account"},{"date":"2024-11-05","category":"Investments","amount":150.00,"description":"Investment in diversified index fund"},{"date":"2024-11-06","category":"Subscriptions","amount":9.99,"description":"Necessary subscription service"},{"date":"2024-11-07","category":"Utilities","amount":60.00,"description":"Electricity bill"},{"date":"2024-11-08","category":"Health","amount":20.00,"description":"Pharmacy purchase, health is a priority"}]},{"user_id":"user456","email":"user456@example.com","username":"JaneSmith","level":25,"achievements":["Budget Buster","Investment Guru","Goal Achiever"],"monthly_saving_goal":400,"yearly_saving_goal":4800,"savings_progress":{"monthly_saved":150,"yearly_saved":1200},"financial_status":{"current_status":"Self-Employed","average_monthly_income":"2,800 EUR","main_goals":["Paying off debt","Saving for a major purchase","Investing for the future"],"expense_pattern":"Very tight","potential_saving_areas":["Dining and entertainment","Shopping","Transportation"],"risk_attitude":"Very risk-averse","current_debt":"5,000 EUR in credit card debt"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":45.00,"description":"Weekly shopping, some non-essentials included"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":25.00,"description":"Dinner out, occasional treat"},{"date":"2024-11-03","category":"Transportation","amount":12.00,"description":"Bus fare, prefers public transport"},{"date":"2024-11-04","category":"Investments","amount":50.00,"description":"Small investment in a mutual fund"},{"date":"2024-11-05","category":"Shopping","amount":40.00,"description":"Unplanned clothing purchase"},{"date":"2024-11-06","category":"Subscriptions","amount":12.99,"description":"Multiple streaming services"},{"date":"2024-11-07","category":"Utilities","amount":55.00,"description":"Water and internet bill"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":30.00,"description":"Evening drinks with friends"}]},{"user_id":"user999","email":"user999@example.com","username":"SophiaGrace","level":42,"achievements":["Goal Achiever","Savings Wizard"],"monthly_saving_goal":600,"yearly_saving_goal":7200,"savings_progress":{"monthly_saved":400,"yearly_saved":3500},"financial_status":{"current_status":"Employed","average_monthly_income":"5,000 EUR","main_goals":["Investing for the future","Saving for an emergency fund","Goal-based savings"],"expense_pattern":"Balanced","potential_saving_areas":["Dining and entertainment","Subscriptions","Utilities"],"risk_attitude":"Moderate","current_debt":"Mortgage"},"transactions":[{"date":"2024-11-01","category":"Groceries","amount":65.00,"description":"Healthy and organic groceries"},{"date":"2024-11-02","category":"Dining and Entertainment","amount":40.00,"description":"Dinner with friends"},{"date":"2024-11-03","category":"Transportation","amount":25.00,"description":"Gas for weekend trip"},{"date":"2024-11-04","category":"Investments","amount":300.00,"description":"Investment in tech stocks"},{"date":"2024-11-05","category":"Subscriptions","amount":15.99,"description":"Premium streaming service"},{"date":"2024-11-06","category":"Health","amount":60.00,"description":"Yoga and wellness classes"},{"date":"2024-11-07","category":"Utilities","amount":70.00,"description":"Monthly utility bills"},{"date":"2024-11-08","category":"Dining and Entertainment","amount":50.00,"description":"Brunch at a fancy cafe"}]}]}]}'
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
    