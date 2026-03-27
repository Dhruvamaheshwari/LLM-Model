/** @format */

const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// to take the input
const readline = require('readline-sync')


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: 
    [
      {
        role: "user",
        parts: [{ text: "hey i am Dhruva Maheshari" }],
      },
      {
        role: "model",
        parts: [{text: "Hello Dhruva Maheshwari! It's nice to meet you. How can I help you today?",},],
      },
      {
        role: "user",
        parts: [{ text: "what is my name" }],
      },
    ],
  });
  console.log(response.text);
}

main();
