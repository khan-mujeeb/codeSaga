// import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Authentications() {
  const handleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const Authentications = signInWithPopup(auth, provider);
    Authentications.then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={handleSignIn}
      >
        signInwithGoogle
      </button>
    </div>
  );
}

export default Authentications;
