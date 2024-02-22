// Import necessary dependencies
import { useEffect, useRef, useState } from "react";
import "../styles/QuizDemo.css";
import { questions } from "../data/questions";
import img from "../assets/img.png";

import { database, onValue, ref, set, update } from "../firebase";

// Define the Quiz component
// eslint-disable-next-line react/prop-types
function Quiz({ authUser }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [answer, setanswer] = useState(null);
  const [username, setUsername] = useState("");
  const [dataIndex, setdataIndex] = useState(null);
  const [currentTimer, setcurrentTimer] = useState(null);
  const [answerGiven, setAnswerGiven] = useState(false);
  const radioInputRef = useRef([]);

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
    // Call the function
    // console.log(questions.length - dataIndex, dataIndex);
    if (dataIndex < questions.length && dataIndex !== null) {
      console.log(questions[dataIndex].text);
      setQuestion(questions[dataIndex].text);
      setOptions(questions[dataIndex].options);
    } else {
      update(ref(database, "currentIndex/"), {
        currentIndex: 0,
      });
    }
    // if (currentTimer === 0) {
    //   setAnswerGiven(true);
    //   update(ref(database, "currentIndex/"), {
    //     currentIndex: dataIndex + 1,
    //   });
    // }
    return () => {};
  }, [dataIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (currentTimer > 0) {
      //   console.log("time remaining");
      //   update(ref(database, "currentTimer/"), {
      //     currentTimer: currentTimer - 1,
      //   });
      // } else {
      //   console.log("time up");
      // }
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

  return (
    <div className="Quiz">
      <img src={img} width="130px" alt="" srcSet="" />
      <div className="submit">
        <div>{currentTimer}</div>
      </div>

      <div id="quiz-container">
        <div id="question-container">
          <h2 id="question" className="question">
            {question}
          </h2>
          <div id="options">
            {/* Map through options and render them */}
            {options.map((option, index) => (
              <div
                className="opt"
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
                ></input>
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className="btn">
            <button onClick={submitAnswer}> Next &gt;</button>
          </div>
        </div>
        <div id="leaderboard-container">
          <h2 className="result">Leaderboard</h2>
          <ol id="leaderboard">
            {/* Map through leaderboard and render list items */}
            {leaderboard.map((entry, index) => (
              <li className="G" key={index}>
                {entry.username}: {entry.score}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
