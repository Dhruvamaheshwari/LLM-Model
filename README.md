<!-- @format -->

# Simple Gemini CLI Chatbot

A simple command-line chat interface built with Node.js using the official `@google/genai` library. The application allows you to have a continuous conversation with Google's Gemini AI directly from your terminal, maintaining conversation history along the way.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- A Google Gemini API Key

## Installation

1. Clone or download this project to your local machine.
2. Open your terminal and navigate to the project directory.
3. Install the required dependencies:

```bash
npm install
```

## Configuration

1. Create a file named `.env` in the root of your project directory.
2. Add your Gemini API key to the `.env` file like this:

```env
GEMINI_API_KEY=your_api_key_here
```

## Usage

To start the chatbot, run the following command in your terminal:

```bash
node llm.js
```

You will see a prompt: `Ask me any thing --> `. Type your question and press Enter to chat with Gemini. The script maintains conversational history, allowing for follow-up questions.

## Dependencies

- `@google/genai` - Official Google Gen AI SDK
- `dotenv` - For loading environment variables from a `.env` file
- `readline-sync` - For synchronously reading user input from the command line
