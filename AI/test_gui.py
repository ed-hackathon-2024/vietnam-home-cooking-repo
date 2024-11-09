import tkinter as tk
from tkinter import scrolledtext
import requests

# Function to send a request to the Flask API
def send_request():
    user_input = prompt_entry.get("1.0", tk.END).strip()  # Get the prompt from the text area
    if not user_input:
        response_text.insert(tk.END, "Please enter a prompt.\n")
        return

    try:
        # Send POST request to the Flask API
        response = requests.post(
            "http://localhost:5000/generate",
            json={"prompt": user_input}
        )

        if response.status_code == 200:
            # Display the response from the API
            model_response = response.json().get("response", "No response from model.")
            response_text.insert(tk.END, f"Response: {model_response}\n\n")
        else:
            response_text.insert(tk.END, f"Error: {response.json().get('error', 'Unknown error')}\n\n")

    except Exception as e:
        response_text.insert(tk.END, f"Error: {str(e)}\n\n")

# Create the main window
root = tk.Tk()
root.title("Finance Expert Chat")

# Create a text area for the prompt
tk.Label(root, text="Enter your prompt:").pack()
prompt_entry = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=60, height=10)
prompt_entry.pack()

# Create a button to send the request
send_button = tk.Button(root, text="Send", command=send_request)
send_button.pack()

# Create a text area to display the response
tk.Label(root, text="Response:").pack()
response_text = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=60, height=10)
response_text.pack()

# Run the main event loop
root.mainloop()
