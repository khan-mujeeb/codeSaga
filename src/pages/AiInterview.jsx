import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { useSpeechRecognition } from "react-speech-kit";
import "../styles/aiInterview.css";
const API_KEY = "AIzaSyDFbNSCADhC5Etd8DuZdSht4uPkqvy416c";

const genAI = new GoogleGenerativeAI(API_KEY);

var history = [
  {
    role: "user",
    parts: "i want you to take my mock interview for the role of web developer",
  },

  {
    role: "model",
    parts:
      "Hello, thank you for joining todays Interview for role of web developer",
  },

  {
    role: "user",
    parts: "thank you so much sir for this opportunity.",
  },

  {
    role: "model",
    parts: "Can you please start by introducing yourself?.",
  },
];

const AiInterview = () => {
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);
  const [audio, setAudio] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleAudioEnd = (index) => {
    if (index === messages.length - 1) {
      setShouldAutoPlay(false);
    }
  };

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setInput(result);
    },
  });
  console.log(listening);
  const getAudio = (inputText) => {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/audio/text_to_speech",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOWU5MGZiZmEtYWQ0Yy00MDg1LWE5ODctMWU1MzRjN2Q4YTRiIiwidHlwZSI6ImFwaV90b2tlbiJ9.4U97JPe6qQWUs5T_s5Kfp2gPQqRmrVDhEM71Lflewpk",
      },
      data: {
        providers: "openai",
        language: "en",
        text: inputText,
        option: "FEMALE",
        fallback_providers: "",
      },
    };
    try {
      axios
        .request(options)
        .then(function (response) {
          setAudio(response.data.openai.audio_resource_url);
          setShouldAutoPlay(true);

          console.log(response.data.openai.audio_resource_url);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const chatWithGPT3 = async (userInput) => {
    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
        getAudio(text);

        return text;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Scroll to the end of messages whenever they change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Don't send an empty message
    if (!input.trim()) return;
    // Add the message to the list of messages
    const userInput = { text: input, user: true };
    // setMessages([...messages, userInput]);
    setMessages((prevMessages) => [...prevMessages, userInput]);
    // Clear the input field
    const aiMessage = { text: "...", user: false };
    //
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await chatWithGPT3(input);

    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput("");
  };

  return (
    <div
      className=" w-[100vw] h-[100vh] overflow-hidden p-[25px] gap-4 mainAiInterviewContainer  "
      style={{
        boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      {/* Heading */}
      <div className=" text-center flex items-center justify-center flex-col heading_container  gap-3 ">
        <h2 className="font-semibold text-3xl mock__AI__title tracking-tight">
          MOCK-AI
        </h2>
        <p className="text-xl text-[#6b7280] leading-3">
          Master your interviews with AI-guided practice
        </p>
      </div>

      {/* Chat Container */}
      <div className=" border border-[#e5e7eb] chat__container grid grid-cols-[70%_30%] m-[40%  ]   ">
        {/* user chat  */}
        <div className="  overflow-y scrollbar-none w-[100%] h-[100%] p-3">
          {" "}
          <div
            className="  overflow-y-scroll scrollbar-none w-[100%] h-[100%]"
            style={{
              minWidth: "100%",
              WebkitScrollbarWidth: "thin",
              scrollbarWidth: "thin",
            }}
          >
            {" "}
            {messages.map((message, index) =>
              message.user ? (
                <div
                  key={index}
                  className="flex justify-end  gap-3 my-2 text-gray-600 text-sm flex-1"
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <div className="rounded-full bg-gray-100 border p-1">
                      <svg
                        stroke="none"
                        fill="green"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                      </svg>
                    </div>
                  </span>
                  <p className="leading-relaxed">
                    <span className="block font-bold text--700">You </span>
                    {message.text}
                  </p>
                </div>
              ) : (
                // ai model chat
                <div
                  key={index}
                  className="flex gap-3 my-4 text-green-700 text-sm flex-1"
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                    <div className="rounded-full bg-gray-100 border p-1">
                      <svg
                        stroke="none"
                        fill="Orange"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        ></path>
                      </svg>
                    </div>
                  </span>
                  <p className="leading-relaxed">
                    <span className="block font-bold text-gray-700">
                      AI Interviewer{" "}
                    </span>{" "}
                    {message.text}
                    <audio
                      className="mt-3"
                      autoPlay={shouldAutoPlay && index === messages.length - 1}
                      controls
                      src={audio}
                      onEnded={() => handleAudioEnd(index)}
                    />
                  </p>
                </div>
              )
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>

        <div className=" h-[100%] p-4   w-[100%]  border-l-2 ">
          <form onSubmit={handleSubmit} className="w-[100%] h-[100%]">
            <div className="grid  grid-rows-[80%_20%] gap-2  w-[100%] h-[100%]  ">
              <textarea
                disabled={true}
                className="  h-[100%] w-full  resize-none   rounded-md border border-[#e5e7eb] text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                className="  rounded-3xl items-center  text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-lime-600 hover:bg-[#111827E6] h-[80%]"
                onMouseDown={listen}
                onMouseUp={stop}
              >
                🎤
              </button>
              {listening && <div>{"Go ahead I'm listening"}</div>}
            </div>
          </form>
        </div>
      </div>

      {/* Input box */}
    </div>
  );
};

export default AiInterview;

// Hello, my name is Pravin Kale. I recently completed my Bachelor's degree in Computer Science. During my studies, I developed a strong foundation in computer science fundamentals and gained practical experience through various projects
