import { useState, useRef, useEffect } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

import Markdown from "react-markdown";
const API_KEY = "AIzaSyDFbNSCADhC5Etd8DuZdSht4uPkqvy416c";

const ChatbotBody = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run(input) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const baseContext = `
    Please analyze the text between the asterisks below. Determine if the text is related to any of the following topics: Flex, SQL, CSS, CssSelector, or SQL. If it is related, provide  a explanation about the topic in 100 words. If it is not related to any of these topics, respond with an error message stating that the content is unrelated.

    Text to analyze:
    ***
    ${input}
    ***
  `;

    const result = await model.generateContent(baseContext);
    const response = result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

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
    const userMessage = { text: input, user: true };
    // setMessages([...messages, userMessage]);
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    // Clear the input field
    const aiMessage = { text: "...", user: false };
    //
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await run(input);

    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput("");
  };

  // Example usage:

  return (
    <div
      className="fixed  z-50  bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-green-50 p-6 rounded-lg border border-[#e5e7eb] w-[400px] h-[550px]"
      style={{
        boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
    >
      {/* Heading */}
      <div className="flex flex-col space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">CodeHelper</h2>
        <p className="text-sm text-[#6b7280] leading-3">Ask me anything</p>
      </div>

      {/* Chat Container */}
      <div
        className="pr-4  mb-2 h-[385px] overflow-y-scroll  scrollbar-none"
        style={{
          minWidth: "100%",
          WebkitScrollbarWidth: "thin",
          scrollbarWidth: "thin",
        }}
      >
        {messages.map((message, index) =>
          message.user ? (
            <div
              key={index}
              className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
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
                  Cognicare AI{" "}
                </span>{" "}
                {<Markdown>{message.text}</Markdown>}
              </p>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="flex items-center pt-0">
        <form
          className="flex items-center justify-center w-full space-x-2"
          onSubmit={handleSubmit}
        >
          <input
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-lime-600 hover:bg-[#111827E6] h-10 px-4 py-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotBody;
