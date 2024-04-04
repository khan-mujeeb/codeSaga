/* eslint-disable react/prop-types */
// Import necessary dependencies
// import React from "react";
import "../styles/quizstyle.css";
import Star from "../components/Back/Star.jsx";
import { useEffect, useRef, useState } from "react";
// import { questions } from "../data/questions";
import profileimage from "../assets/CssMenuImages/sql.png";
import { database, onValue, ref, set, update } from "../firebase";

// Define the Quiz component
// eslint-disable-next-line react/prop-types
const URL = "https://demo-api-opal.vercel.app/api/css-quetions";

function Quiz({ authUser }) {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [answer, setanswer] = useState(null);
  const [username, setUsername] = useState("");
  const [dataIndex, setdataIndex] = useState(null);
  const [currentTimer, setcurrentTimer] = useState(null);
  const [answerGiven, setAnswerGiven] = useState(false);
  const radioInputRef = useRef([]);
  // submit answer function
  const submitAnswer = (e) => {
    e.preventDefault();
    if (answer === null) {
      alert("Please select an option");
      return;
    }

    const currentIntedx = dataIndex;
    console.log(questions[currentIntedx]);

    if (currentIntedx < questions.length - 1) {
      if (questions[currentIntedx].correctIndex === answer) {
        setdataIndex((prev) => prev + 1);
        setLeaderboard((prev) => {
          return prev.map((entry) => {
            if (entry.username === username) {
              update(ref(database, "leaderBoard/" + entry.username), {
                username: entry.username,
                score: entry.score + 10,
              });

              return { ...entry, score: entry.score + 10 };
            } else {
              return entry;
            }
          });
        });
        update(ref(database, "currentIndex/"), {
          currentIndex: dataIndex + 1,
        });
        update(ref(database, "currentTimer/"), {
          currentTimer: 20,
        });
      } else {
        alert("Wrong Answer");
        setAnswerGiven(true);
      }
    } else {
      alert("Quiz Completed");
      setdataIndex(0);
      update(ref(database, "currentIndex/"), {
        currentIndex: 0,
      });
    }
    radioInputRef.current.forEach((radio) => {
      radio.checked = false;
    });
    setanswer(null);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [questions]);
  // initialize the leaderboard and username
  useEffect(() => {
    const CurrentUsername = authUser || "Anonymous";
    setUsername(CurrentUsername);

    if (CurrentUsername !== null) {
      set(ref(database, "leaderBoard/" + CurrentUsername), {
        username: CurrentUsername,
        score: 0,
      });
    }

    const db = ref(database, "leaderBoard/");
    onValue(db, (snapshot) => {
      const data = snapshot.val();

      setLeaderboard(() => {
        return [...Object.values(data)];
      });
    });
  }, [authUser]);

  useEffect(() => {
    const db = ref(database, "currentIndex/");

    // Attach an asynchronous callback to read the data
    const fetchData = () => {
      onValue(db, (snapshot) => {
        const data = snapshot.val();

        if (data !== null) {
          // Data exists, update state
          setdataIndex(data.currentIndex);
        } else {
          // Data doesn't exist, initialize and update state
          set(ref(database, "currentIndex/"), {
            currentIndex: 0,
          });
          set(ref(database, "currentTimer/"), {
            currentTimer: 20,
          });
        }
      });
    };

    fetchData();

    if (dataIndex < questions.length && dataIndex !== null) {
      setQuestion(questions[dataIndex].text);
      setOptions(questions[dataIndex].options);
    } else {
      update(ref(database, "currentIndex/"), {
        currentIndex: 0,
      });
    }

    return () => {};
  }, [dataIndex]);
  // timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTimer > 0) {
        console.log("time remaining");
        update(ref(database, "currentTimer/"), {
          currentTimer: currentTimer - 1,
        });
      } else {
        console.log("time up");
      }
    }, 1000);

    if (currentTimer === 0) {
      clearInterval(currentTimer);

      update(ref(database, "currentIndex/"), {
        currentIndex: dataIndex + 1,
      });
      setAnswerGiven(false);

      update(ref(database, "currentTimer/"), {
        currentTimer: 20,
      });
    }
    return () => clearInterval(interval);
  }, [currentTimer, dataIndex]);
  //Global timer for the quiz intialize and update state
  useEffect(() => {
    const db = ref(database, "currentTimer/");

    // Attach an asynchronous callback to read the data
    const fetchData = () => {
      onValue(db, (snapshot) => {
        const data = snapshot.val();

        if (data !== null) {
          // Data exists, update state
          setcurrentTimer(data.currentTimer);
        } else {
          // Data doesn't exist, initialize and update state
          set(ref(database, "currentTimer/"), {
            currentTimer: 20,
          });
        }
      });
    };

    fetchData();

    // Call the function
  }, [currentTimer]);
  // Sort the leaderboard by score
  useEffect(() => {
    leaderboard.sort((a, b) => b.score - a.score);
  }, [leaderboard]);

  return (
    <>
      <Star color={"bg-navBarBg"} />
      <div
        className="w-screen h-screen p-1 overflow-y-scroll overflow-x-hidden box-border  bg-navBarBg"
        style={
          {
            // backgroundImage: `url("${back}")`,
            // backgroundSize: "100% 100% ",
          }
        }
      >
        <div className="submit">
          <div>{currentTimer}</div>
          <button>Submit</button>
        </div>
        <div className="quiz-content m-8">
          <div className="question-container flex justify-center items-center">
            <div className="app">
              <p className=" text-xl font-bold text-center ">Technical Quiz</p>
              <div className="quiz">
                <h2>{question}</h2>
                <div className="answer-options">
                  {options.map((option, index) => (
                    <div
                      className="op-btn"
                      key={index}
                      onClick={() => {
                        setanswer(index);
                      }}
                    >
                      <input
                        disabled={answerGiven}
                        type="radio"
                        id={option}
                        name="option"
                        value={option}
                        ref={(el) => {
                          radioInputRef.current[index] = el;
                        }}
                      />
                      <label className=" px-1" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="controls">
                  {/* <button className="ctl-btn">Previous</button> */}
                  <button className="ctl-btn" onClick={submitAnswer}>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="leaderboard-container">
            <ol id="leaderboard">
              {/* Map through leaderboard and render list items */}
              <div className="center">
                <h2 className="result text-center text-black pb-5 font-bold text-xl">
                  Leaderboard
                </h2>
                {leaderboard.map((entry, index) => (
                  <div key={index} className="list">
                    <div className="item">
                      <div className="pos ml-2 text-black">{index + 1}</div>
                      <div
                        className="pic"
                        style={{ backgroundImage: `url(${profileimage})` }}
                      ></div>
                      <div className="name">{entry?.username}</div>
                      <div className="score">{entry?.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
