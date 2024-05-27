/* eslint-disable react/prop-types */
// import React from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { cookies } from "../cookies.js";
import googleColor from "../assets/img/google-color.svg";
import "../styles/QuizAuthetications.css";
import Star from "../components/Back/Star.jsx";
import quizstart from "../assets/Quiz/quiz-start.png"; 

function Authentications({ setIsAuth, setAuthUser }) {
  const handleSignIn = async () => {
    const Authentications = await signInWithPopup(auth, provider);
    try {
      console.log(Authentications);
      cookies.set("auth-token", Authentications?.user?.refreshToken, {
        maxAge: 600,
      });
      cookies.set("auth-user", Authentications?.user?.displayName, {
        maxAge: 600,
      });
      setAuthUser(Authentications?.user?.displayName);

      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Star color={"bg-black"}/>
      <div className="flex justify-center items-center w-screen h-screen select-none bg-black ">
        <div className=" quiz-start box flex justify-between bg-gray-800 m-6 p-8 w-[65%] text-white rounded-lg">
          <div className="w-[70%] text-center border-r-2 border-white-100 p-4">
            <div className=" font-mono text-[40px] font-bold">WELCOME TO <span className=" text-blue-500">CODESAGA </span>QUIZ!</div>
            <div className="flex justify-center items-center">
              <div className=" w-[55%]">
                <img src={quizstart} alt="" />
              </div>
              <div className=" bg-gray-700 text-white m-1 p-4 rounded-lg">
                <p className=" mt-4 font-mono font-semibold text-lg">
                  Login to <span className="text-yellow-500">START</span>  Quiz
                </p>
                <div className="text-left mt-2 font-semibold text-gray-300">
                  <ol>
                    <li>1. CSS FLEX</li>
                    <li>2. CSS Selector</li>
                    <li>3. SQL</li>
                    <li>4. WEB DEV</li>
                    <li>5. CSS Transition</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <p>
              Answer Questions in 20 Seconds Fast thinking, quick coding! to climb
              to the top of the leaderboard.
            </p>
            <p>
              Answer questions within 20 seconds Challenge Yourself with Timed
              Questions Think you know code? Prove it! Face challenging questions
              and race against the clock.
            </p>
            <p>
              Wait for Timer if Answer is Wrong Got a wrong answer? No worries!
              Wait for the timer to finish before the next question.
            </p> */}
            {/* <p>
              Simultaneous Questions for Everyone Every logged-in user receives
              the same question simultaneously. Its a fair coding battlefield!
              Earn Points for Correct Answers Correct answers mean points on the
              leaderboard. Show off your coding skills and dominate! Stay Patient
              if No Answers If no one answers the question, be patient! Everyone
              waits until the timer hits zero. Unified Timer for All Players The
              countdown is on! The timer remains the same for all players,
              creating an intense and synchronized experience. Ready to embark on
              a coding journey like never before? Sign in, gear up, and let the
              CodeSaga begin
            </p> */}
          </div>
          <div className=" flex justify-center items-center mr-4">
          <div className=" dark:bg-gray-900 rounded-lg">
            <button
              onClick={handleSignIn}
              className="px-4 py-3 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <img
                className="w-6 h-6"
                src={googleColor}
                loading="lazy"
                alt="google logo"
              />
              <span className=" font-semibold">Login with Google</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentications;

{/* <div className=" flex justify-center items-center w-screen h-screen select-none">
  <div className="right-2 top-2  h-[10%] dark:bg-gray-800 mx-2">
    <button
      onClick={handleSignIn}
      className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
    >
      <img
        className="w-6 h-6"
        src={googleColor}
        loading="lazy"
        alt="google logo"
      />
      <span>Login with Google</span>
    </button>
  </div>
  <div className="quiz-container">
    <div className="welcome-conatiner">Welcome to CodeSaga Quiz!</div>{" "}
    <div>
      🚀 Compete with multiple players in real-time coding challenges!
      Google Log in using your Google account to start the coding
      adventure
    </div>
    <div>
      Answer Questions in 20 Seconds Fast thinking, quick coding! to climb
      to the top of the leaderboard.
    </div>
    <div>
      Answer questions within 20 seconds Challenge Yourself with Timed
      Questions Think you know code? Prove it! Face challenging questions
      and race against the clock.
    </div>
    <div>
      Wait for Timer if Answer is Wrong Got a wrong answer? No worries!
      Wait for the timer to finish before the next question.
    </div>{" "}
    <div>
      Simultaneous Questions for Everyone Every logged-in user receives
      the same question simultaneously. Its a fair coding battlefield!
      Earn Points for Correct Answers Correct answers mean points on the
      leaderboard. Show off your coding skills and dominate! Stay Patient
      if No Answers If no one answers the question, be patient! Everyone
      waits until the timer hits zero. Unified Timer for All Players The
      countdown is on! The timer remains the same for all players,
      creating an intense and synchronized experience. Ready to embark on
      a coding journey like never before? Sign in, gear up, and let the
      CodeSaga begin
    </div>
    <button className="px- py-2 border  border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow hover:bg-green-600 transition duration-150">
      start
    </button>
  </div>
</div> */}