/* eslint-disable react/prop-types */
// import React from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { cookies } from "../cookies.js";
import googleColor from "../assets/img/google-color.svg";
import "../styles/QuizAuthetications.css";

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
      <div className=" relative w-screen h-screen">
        <div className=" absolute right-2 top-2  h-[10%] dark:bg-gray-800 mx-2">
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
        <div className="quiz-container">hey </div>
      </div>
    </>
  );
}

export default Authentications;
