/** @format */

const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// to take the input
const readline = require('readline-sync')


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history:[],
  });


async function main()
{
    // take the input
    const userProblem =  readline.question("Ask me any thing --> ")
    const response = await chat.sendMessage({message:userProblem })
    console.log(response.text)

    main()
}

main();
