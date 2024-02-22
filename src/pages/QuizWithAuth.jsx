import React, { useState } from "react";
import Authentications from "./Authentications";
import QuizDemo from "./QuizDemo";
import { cookies } from "../cookies.js";

function QuizWithAuth() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [authUser, setAuthUser] = useState(null);

  if (!isAuth)
    return <Authentications setIsAuth={setIsAuth} setAuthUser={setAuthUser} />;
  return (
    <>
      <QuizDemo authUser={authUser} />
    </>
  );
}

export default QuizWithAuth;
