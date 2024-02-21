

const API_KEY = "AIzaSyDFbNSCADhC5Etd8DuZdSht4uPkqvy416c";

import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useChatWithGPT3 = (history) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chatWithGPT3 = async (userInput) => {
        try {
            setLoading(true);

            const chat = model.startChat({
                history: history,
                generationConfig: {
                    maxOutputTokens: 500,
                },
            });

            if (userInput) {
                console.log("user: " + userInput);
                history.push({ role: "user", parts: userInput });
                const result = await chat.sendMessage(userInput);
                const response = await result.response;
                const text = response.text();
                console.log("ai intervier: " + text);
                history.push({ role: "model", parts: text });

                setResult(text);
                setLoading(false);
                console.log(history)
            }
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    return { result, loading, error, chatWithGPT3 };
};

export default useChatWithGPT3;

