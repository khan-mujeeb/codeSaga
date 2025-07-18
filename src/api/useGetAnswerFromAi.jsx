import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


\

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const useGetAnswerFromAi = () => {
  
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getHelpFromAi = async (msg) =>{
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: "The Officer table have the following coloumns officer_id, first_name, last_name, rank, department",
                },
                {
                    role: "model",
                    parts: "Great to meet you. What would you like to know?",
                },
                {
                    role: "user",
                    parts: "I want you to explain all the possible solution for the given sql query, at max 3 solutions",
                },
                {
                    role: "model",
                    parts: "Okay, may i know what your sql query",
                },
            ],
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        try {
            setLoading(true);

            const result = await chat.sendMessage(msg);
            const response = await result.response;
            const text = response.text();
            console.log("ai intervier: " + text);
            setResult(text);
            setLoading(false);
            
        } catch (err) {
            setError(err);
            setLoading(false);
        }
        

    }
    return { result, loading, error, getHelpFromAi };
}

export default useGetAnswerFromAi
