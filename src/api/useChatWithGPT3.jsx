import { GoogleGenerativeAI } from "@google/generative-ai";
import getAudio from "./useGetAudio";

const useChatWithGPT3 = (history, setAudio, setShouldAutoPlay) => {
    const API_KEY = "AIzaSyDFbNSCADhC5Etd8DuZdSht4uPkqvy416c";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chatWithGPT3 = async (userInput) => {
        try {
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
                getAudio(text, setAudio, setShouldAutoPlay);

                return text;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return chatWithGPT3;
};

export default useChatWithGPT3;
