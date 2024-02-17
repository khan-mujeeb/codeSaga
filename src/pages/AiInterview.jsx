import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyCMSiM8R_AHR07LPctBpB8Wi9j2FJsLTDk"

const AiInterview = () => {
    var history = [
        {
            role: "user",
            parts: "i want you to take my mock interview for the role of software engineering",
        },
    
        {
            role: "model",
            parts: "Hello, thank you for joining todays Interview for role of web developer.",
        },
        {
            role: "user",
            parts: "thank you so much sir for this opportunity.",
        }
        ,
        {
            role: "model",
            parts: "Can you please start by introducing yourself?.",
        },
    ]

    
    const [userMessage, setUserMessage] = useState("");
    const [responseText, setResponseText] = useState("");
    const genAI = new GoogleGenerativeAI(API_KEY);

    async function run() {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        if (userMessage) {
            console.log("user: " + userMessage)
            history.push({ role: "user", parts: userMessage });
            
            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();
            console.log("ai intervier: " + text);
            setUserMessage("")
            history.push({ role: "model", parts: text })
            setResponseText(text);
        }
    }
    // Hello, my name is [Candidate's Name]. I recently completed my Bachelor's degree in Computer Science. During my studies, I developed a strong foundation in computer science fundamentals and gained practical experience through various projects
    return (
        <div className="max-w-md mx-auto p-4 border rounded-lg bg-gray-100">
            <input
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Enter your text"
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={run}
            >
                Send
            </button>
            <p className="mt-4">{responseText}</p>
        </div>
    );
};

export default AiInterview;
