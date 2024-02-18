import { useState } from "react";
function Quiz({ user, waiting, searchPlayer, user1, user2, handleAnswer }) {
  console.log(waiting);
  const [show, setSHow] = useState(false);

  const handleStartQuiz = () => {
    // Call the presenceListener callback

    searchPlayer();
    console.log("presenceListener called");
    setSHow(true);
  };
  console.log("user1", user1);
  console.log("user2", user2);
  console.log("user", user);

  return (
    <div>
      <button
        onClick={handleStartQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute left-20 top-10 "
      >
        start
      </button>
      {show && (
        <>
          {!waiting ? (
            <>
              <div> found other</div>
              <button
                onClick={handleAnswer}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute left-20 top-10 "
              >
                answer
              </button>
            </>
          ) : (
            <div>waiting for another player</div>
          )}{" "}
        </>
      )}
    </div>
  );
}

export default Quiz;
