import ConfettiExplosion from "react-confetti-explosion";
import Editor from "../components/SelectorCSS/Editor";
import GameOver from "../components/SelectorCSS/GameOver";
import Heading from "../components/SelectorCSS/Heading";
import HtmlContent from "../components/SelectorCSS/HtmlContent";
import Introduction from "../components/SelectorCSS/Introduction";
import SelectorAsset from "../components/SelectorCSS/SelectorAsset";
import { dataSelectorCss } from "../data/selectorCss";
import { useEffect, useState } from "react";

const SelectorCSS = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [currentLevelAnswer, setCurrentLevelAnswer] = useState(
    dataSelectorCss[0].correctAnswer
  );
  const [gameOver, setGameOver] = useState(false);
  const [nextLevel, setNextLevel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextLevel = () => {
    if (currentIndex < dataSelectorCss.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setNextLevel(false);
    } else {
      console.log("Game Over");
      setGameOver(true);
    }
  };

  const handleSubmitSelector = () => {
    if (userAnswer !== "" && userAnswer === currentLevelAnswer) {
      console.log("correct");
      setNextLevel(true);
    } else {
      console.log("incorrect");
    }
  };
  useEffect(() => {
    setCurrentLevelAnswer(dataSelectorCss[currentIndex].correctAnswer);
  }, [currentIndex]);

  const currentItem = dataSelectorCss[currentIndex];
  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: 1600,
    floorWidth: 1600,
  };

  return (
    <>
      {gameOver ? (
        <GameOver />
      ) : (
        <div
          key={currentItem.id}
          className="flex h-screen w-screen select-none"
        >
          <div
            id="QuestionsAndInputSide"
            className="w-[30%] flex h-full flex-col bg-gray-200 "
          >
            {/* heading */}
            <Heading data={currentItem.level} />

            {/* introductions */}
            <Introduction
              introductions={currentItem.introductions}
              descriptions={currentItem.descriptions}
              challenge={currentItem.challenge}
            />

            <div
              id="compiler"
              className="w-full h-auto flex-grow px-6 py-6 relative "
            >
              {/* editor */}
              <Editor setUserAnswer={setUserAnswer} />

              <button
                onClick={handleNextLevel}
                style={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "16px",
                }}
                className={`${
                  nextLevel
                    ? " bg-green-500 text-white py-1  px-4 rounded absolute bottom-2 right-4"
                    : "bg-gray-300 text-white py-1 hover:cursor-not-allowed px-4 rounded absolute bottom-2 right-4"
                }`}
                disabled={!nextLevel}
              >
                Next
              </button>
              {nextLevel && <ConfettiExplosion {...bigExplodeProps} />}

              <button
                style={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "16px",
                }}
                className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded absolute bottom-2 left-4"
                onClick={() => {
                  handleSubmitSelector();
                }}
              >
                submit
              </button>
            </div>
          </div>
          <div id="OutputSide" className="w-[70%] h-full  bg-gray-300 p-6">
            {/* selectorAsset */}
            <SelectorAsset currentItem={currentItem} nextLevel={nextLevel} />

            {/* htmlContent */}
            <HtmlContent htmlContent={currentItem.htmlContent} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectorCSS;
