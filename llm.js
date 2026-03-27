/** @format */

const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// to take the input
const readline = require('readline-sync')


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// to maintain the history
const History = []

async function chatting(userProblem) {

    // store the history of the user
    History.push({
        role:'user',
        parts:[{text:userProblem}]
    })


  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: History
  });

  // store the history of model response
    History.push({
        role:'model',
        parts:[{text:response.text}]
    })

    console.log('\n');
    console.log(response.text);
}

// call the chatting fuction
async function main()
{
    // take the input
    const userProblem =  readline.question("Ask me any thing --> ")
    await chatting(userProblem)
    main()
}

main();
