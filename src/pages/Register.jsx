// Import necessary React modules
import { useState } from "react";
import "../styles/Register.css";

import {
  PanelsContainer,
  Panel,
  Content,
  Image,
} from "../components/Authentications/PanelsContainer";
import SignUpForm from "../components/Authentications/SignInForm";
import SignInFrom from "../components/Authentications/SignUpFrom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Quiz from "./Quiz";

// Main App component
const Register = () => {
  // Handler for switching between sign-in and sign-up forms

  const [signUpMode, setSignUpMode] = useState(false);

  // Handler for switching between sign-in and sign-up modes
  const handleButtonClick = () => {
    setSignUpMode(!signUpMode);
  };

  const {
    user,
    presenceListener,
    searchPlayer,
    waiting,
    user1,
    user2,
    handleAnswer,
  } = useContext(AuthContext);
  if (user) {
    return (
      <>
        <Quiz
          user={user}
          presenceListener={presenceListener}
          searchPlayer={searchPlayer}
          waiting={waiting}
          user1={user1}
          user2={user2}
          handleAnswer={handleAnswer}
        />
      </>
    );
  }
  // Render the JSX structure
  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <SignUpForm />

          {/* Sign Up Form */}
          <SignInFrom />
        </div>
      </div>

      {/* Panels Container */}
      <PanelsContainer>
        {/* Left Panel */}
        <Panel isLeft={true}>
          <Content
            title="New to Code Saga ?"
            description="Discover a world of possibilities! Join us and explore a vibrant Saga where ideas flourish and connections thrive."
            buttonText="Sign up"
            onClick={handleButtonClick}
          />
          <Image
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            alt=""
          />
        </Panel>

        {/* Right Panel */}
        <Panel isLeft={false}>
          <Content
            title="One of Our Valued Members"
            description="Thank you for being part of our community. Your presence enriches our shared experiences. Let's continue this journey together!"
            buttonText="Sign in"
            onClick={handleButtonClick}
          />
          <Image
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            alt=""
          />
        </Panel>
      </PanelsContainer>
    </div>
  );
};

export default Register;
