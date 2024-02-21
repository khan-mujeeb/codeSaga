import { useState, useRef, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import "../styles/aiInterview.css";
import useChatWithGPT3 from "../api/useChatWithGPT3";
import user from "../assets/img/user.svg";
import model from "../assets/img/ailogo.svg";
import welcomeAudio from "../assets/audio/welcome.wav";
import introductionAudio from "../assets/audio/introduction.wav";
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
  const [hearing, sethearing] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      const aiWelcomeMessage = { text: history[1].parts, user: false };
      setMessages((prevMessages) => [...prevMessages, aiWelcomeMessage]);
    }, 2000);
    setTimeout(() => {
      const aiIntroductionMessage = { text: history[3].parts, user: false };
      setMessages((prevMessages) => [...prevMessages, aiIntroductionMessage]);
      // setAudio(introductionAudio)
    }, 3000);
  }, []);

  // get response from gpt3 for user input
  const chatWithGPT3 = useChatWithGPT3(history, setAudio, setShouldAutoPlay);

  // Scroll to the end of messages whenever they change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      className=" w-[100vw] h-[100vh] overflow-hidden p-[25px] gap-4 mainAiInterviewContainer   "
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
        <div className="  overflow-y-auto w-[100%] h-[100%] p-3 ">
          {" "}
          <div
            className="  overflow-y-auto scrollbar-none w-[100%] h-[100%]"
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
                      <img src={user} alt="" />
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
                      <img src={model} alt="" />
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
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className=" h-[100%] p-4   w-[100%]  border-l-2  ">
          <form onSubmit={handleSubmit} className="w-[100%] h-[100%]">
            <div className="grid  grid-rows-[80%_20%] gap-2  w-[100%] h-[100%]  ">
              <textarea
                disabled={true}
                className="  h-[100%] w-full  resize-none   rounded-md border border-[#e5e7eb] text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                className=""
                onMouseDown={() => {
                  listen();
                  sethearing(true);
                }}
                onMouseUp={() => {
                  stop();
                  sethearing(false);
                }}
              >
                <div className="box">
                  <div className="object">
                    {hearing && (
                      <>
                        <div className="outline"></div>
                        <div className="outline" id="delayed"></div>
                        <div className="button"></div>
                      </>
                    )}

                    <div className="button" id="circlein">
                      <svg
                        className="mic-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1000 1000"
                        enableBackground="new 0 0 1000 1000"
                        xmlSpace="preserve"
                        style={{ fill: "#1E2D70" }}
                      >
                        <g>
                          <path d="M500,683.8c84.6,0,153.1-68.6,153.1-153.1V163.1C653.1,78.6,584.6,10,500,10c-84.6,0-153.1,68.6-153.1,153.1v367.5C346.9,615.2,415.4,683.8,500,683.8z M714.4,438.8v91.9C714.4,649,618.4,745,500,745c-118.4,0-214.4-96-214.4-214.4v-91.9h-61.3v91.9c0,141.9,107.2,258.7,245,273.9v124.2H346.9V990h306.3v-61.3H530.6V804.5c137.8-15.2,245-132.1,245-273.9v-91.9H714.4z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              {listening && <div>{"Go ahead I'm listening"}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiInterview;

// Hello, my name is Pravin Kale. I recently completed my Bachelor's degree in Computer Science. During my studies, I developed a strong foundation in computer science fundamentals and gained practical experience through various projects
