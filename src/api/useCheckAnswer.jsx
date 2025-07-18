import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useCheckAnswer = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


   

    async function getAnswerFromAi(ans, query, setCorrect, setIsExploding) {
        
        try {
            setLoading(true);

            const result = await ansModel.generateContent(
                `this is coorect answer for the given query ${ans} and this is given answer ${query} if the given answer is correct then reply with yes otherwise no`
            );
    
            const response = await result?.response;
    
            const text = response?.text();
            setResult(text);
            
            console.log("ans " + text);
            setLoading(false);
            if(text.toLowerCase() === "yes") {
                setCorrect(true);
                setIsExploding(true);
            } else {
                setCorrect(false);
                setIsExploding(false);
            }
        } catch (err) {
            setError(err);
            setLoading(false);
        }
        
    }

    return { result, loading, error, getAnswerFromAi };
};

export default useCheckAnswer;
