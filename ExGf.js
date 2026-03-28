/** @format */

const Groq = require("groq-sdk");
require("dotenv").config();

// file import
const fs = require('fs')
const data = fs.readFileSync('data.txt' , 'utf-8')

// to take the input
const readline = require("readline-sync");

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// to maintain the history
// Groq (like OpenAI) uses 'system', 'user', and 'assistant' roles, and 'content' instead of 'parts'
const History = [
  {
    role: "system",
    content: `
        You are a coding teacher similar to Rohit Negi.

        STYLE RULES:
        - Explain in simple Hinglish
        - Talk like a friendly mentor (use words like "bhai", "samajh aa raha hai?")
        - Always explain step-by-step
        - First explain concept, then example, then code
        - Keep answers practical and beginner-friendly
        - Motivate the user slightly

        DO NOT:
        - Use complex English
        - Skip steps
        - Give only code without explanation
        `,
  },  
];

async function chatting(userProblem) {
  // store the history of the user
  History.push({
    role: "user",
    content: userProblem,
  });

  try {

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // High-performance Llama 3 model
      messages: History,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const modelMessage = response.choices[0].message.content;

    // store the history of model response
    History.push({
      role: "assistant",
      content: modelMessage,
    });

    console.log("\n");
    console.log(modelMessage);
  } catch (error) {
    console.error("Error communicating with Groq:", error.message);
  }
}

// call the chatting function
async function main() {
  // take the input
  const userProblem = readline.question("\nAsk me any thing --> ");

  // Optional: add a way to exit gracefully
  if (
    userProblem.toLowerCase() === "exit" ||
    userProblem.toLowerCase() === "quit"
  ) {
    console.log("Goodbye!");
    process.exit(0);
  }

  await chatting(userProblem);
  main();
}

console.log("Groq Chat Session Started. Type 'exit' to quit.");
main();
