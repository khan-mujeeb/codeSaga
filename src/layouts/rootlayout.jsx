import { Link, Outlet } from "react-router-dom";
import  { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotBody from "./ChatbotBody";

const Rootlayout = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="h-full w-full">
            <Link
                to={"/"}
                className="outline-1 bg-transparent absolute top-2 left-2 z-50"
            >
                <svg
                    stroke="#fff"
                    fill="#65A30D"
                    strokeWidth="2"
                    
                    className="text-white block border-gray-200 align-middle"
                    viewBox="0 0 1024 1024"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                </svg>
            </Link>
            {/* add nav bar and config here */}
            <ChatbotButton
                isChatOpen={isChatOpen}
                setIsChatOpen={setIsChatOpen}
            />
            {isChatOpen && <ChatbotBody />}

            <Outlet />
        </div>
    );
};

export default Rootlayout;
