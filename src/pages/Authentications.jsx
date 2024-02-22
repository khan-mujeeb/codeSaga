/* eslint-disable react/prop-types */
// import React from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { cookies } from "../cookies.js";

function Authentications({ setIsAuth, setAuthUser }) {
  const handleSignIn = async () => {
    const Authentications = await signInWithPopup(auth, provider);
    try {
      console.log(Authentications);
      cookies.set("auth-token", Authentications?.user?.refreshToken, {
        // maxAge: 30,
      });
      cookies.set("auth-user", Authentications?.user?.displayName)
      setAuthUser(Authentications?.user?.displayName);

      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen dark:bg-gray-800">
        <button
          onClick={handleSignIn}
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </>
  );
}

export default Authentications;
