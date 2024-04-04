import { useState } from "react";
import Authentications from "./Authentications";
import QuizDemo from "../components/Quiz/QuizDemo.jsx";
import { cookies } from "../cookies.js";

function QuizWithAuth() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [authUser, setAuthUser] = useState(cookies.get("auth-user"));

  if (!isAuth)
    return <Authentications setIsAuth={setIsAuth} setAuthUser={setAuthUser} />;
  return (
    <>
      <QuizDemo authUser={authUser} />
    </>
  );
}

export default QuizWithAuth;
