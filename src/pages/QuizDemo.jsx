// Import necessary dependencies
import { useEffect, useRef, useState } from "react";
import "../styles/QuizDemo.css";
import { questions } from "../data/questions";
import img from "../assets/img.png";

import { database, onValue, ref, set, update } from "../firebase";

// Define the Quiz component
function Quiz() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [answer, setanswer] = useState(null);
  const [username, setUsername] = useState("");
  const [dataIndex, setdataIndex] = useState(null);

  const radioInputRef = useRef([]);
  const submitAnswer = (e) => {
    e.preventDefault();

    const currentIntedx = dataIndex;
    console.log(questions[currentIntedx]);

    if (currentIntedx < questions.length) {
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
      } else {
        alert("Wrong Answer");
      }
    } else {
      alert("Quiz Completed");
      setdataIndex(0);
    }
    radioInputRef.current.forEach((radio) => {
      radio.checked = false;
    });
  };

  useEffect(() => {
    const CurrentUsername = prompt("Enter your username");
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
  }, []);
  // when new player enters resets the questions
  //   useEffect(() => {
  //     console.log("first");
  //     if (dataIndex !== null) {
  //       console.log("second");
  //       const db = ref(database, "currentIndex/");
  //       onValue(db, (snapshot) => {
  //         const data = snapshot.val();

  //         setdataIndex(data.currentIndex);
  //       });
  //     } else {
  //       console.log("third");
  //       set(ref(database, "currentIndex/"), {
  //         currentIndex: 0,
  //       });
  //       setdataIndex(0);
  //     }
  //   }, [dataIndex]);
  useEffect(() => {
    const db = ref(database, "currentIndex/");

    // Attach an asynchronous callback to read the data
    const fetchData = () => {
      onValue(db, (snapshot) => {
        const data = snapshot.val();

        if (data !== null) {
          // Data exists, update state
          setdataIndex(data.currentIndex);

          setQuestion(questions[dataIndex].text);
          setOptions(questions[dataIndex].options);
        } else {
          // Data doesn't exist, initialize and update state
          set(ref(database, "currentIndex/"), {
            currentIndex: 0,
          });
        }
      });
    };

    fetchData(); // Call the function

    // Cleanup function
    return () => {
      // Detach the event listener if needed
    };
  }, [dataIndex]);
  //   useEffect(() => {
  //     console.log(dataIndex);

  //   }, [dataIndex]);
  return (
    <div className="Quiz">
      <img src={img} width="130px" alt="" srcSet="" />
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
