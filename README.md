# GHacks_5.0-Solution
This repository houses the solution for Garuda Hacks 5.0

# Napi Chatbot Application

Napy.id is a comprehensive platform designed to assist ex-convicts in reintegrating into society by providing job finding and skill training services. Our mission is to offer a second chance to individuals who have served their time and are looking to rebuild their lives. By equipping them with necessary skills and connecting them with potential employers, we aim to reduce recidivism and promote a more inclusive society.

## Project Structure

### 1. Login Functionality
- **Files Involved**:
  - `login.html`: HTML structure for the login page.
  - `login.css`: Styling for the login page.
  - `login.js`: JavaScript code to handle user interactions and form submissions on the login page.

### 2. Main Interface
- **Files Involved**:
  - `index.html`: The main HTML page that serves as the landing page after login.
  - `index.css`: CSS for styling the main interface.
  - `index.js`: JavaScript that enhances the main page functionality.

### 3. Database Interaction
- **File Involved**:
  - `dblogin.py`: Python script for handling database interactions, particularly for login processes.

### 4. Chatbot Functionality
- **Files Involved**:
  - `chatbotmain.py`: The Flask backend script that manages chatbot interactions and API communications.
  - `MessageChatbot.html`: The frontend HTML page where users can interact directly with the Napi chatbot.

## Installation and Setup

To get this project running locally, you'll need Python installed on your machine, along with Flask for the backend.

1. **Clone the Repository**
   Clone the project to your local machine:
   ```bash
   git clone https://yourrepository.com/napi-chatbot.git
   cd napi-chatbot
   ```
2. **Create and Activate a Python Virtual Environment**
   It's recommended to use a virtual environment for Python projects:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Unix or MacOS
   venv\Scripts\activate  # On Windows
   ```
3. **Install Required Python Packages**
   Install Flask and any other necessary packages using pip:
   ```bash
   pip install flask flask-cors
   ```
4. **Set Environment Variables**
   Set the GROQ_API_KEY and any other required environment variables:
   ```bash
   export GROQ_API_KEY='your_groq_api_key_here'  # Unix/MacOS
   set GROQ_API_KEY=your_groq_api_key_here  # Windows
   ```
## Running the Application
1. **Start the Flask Server**
   Navigate to the directory containing chatbotmain.py and run:
   ```bash
   python chatbotmain.py
   ```
2. **Access the Frontend**
   Open the login.html file in a browser to begin the login process. Once authenticated, you will be directed to the main interface at index.html.

## Usage
Users can log in through the provided login page.
Post-login, users can navigate to the chat interface to interact with the Napi chatbot.

## Support
If you encounter any issues or have questions, feel free to contact support@napichatbot.com.

## Contributing
We welcome contributions! Please feel free to fork the repository, make changes, and submit a pull request.
