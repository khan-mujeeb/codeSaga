import ConfettiExplosion from "react-confetti-explosion";
import Editor from "../components/SelectorCSS/Editor";
import GameOver from "../components/SelectorCSS/GameOver";
import Heading from "../components/SelectorCSS/Heading";
import HtmlContent from "../components/SelectorCSS/HtmlContent";
import Introduction from "../components/SelectorCSS/Introduction";
import SelectorAsset from "../components/SelectorCSS/SelectorAsset";
// import { dataSelectorCss } from "../data/cssSelector";
import { Sugar } from "react-preloaders";
import { useEffect, useState } from "react";

const URL = "https://demo-api-opal.vercel.app/api/selector";
const CACHE_KEY = "cachedSelectorCss";
// https://demo-api-opal.vercel.app
const SelectorCSS = () => {
  const [dataSelectorCss, setDataSelectorCss] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [currentLevelAnswer, setCurrentLevelAnswer] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [nextLevel, setNextLevel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to fetch data from the cache or URL
    const fetchData = async () => {
      // Check if data exists in localStorage
      const cachedData = localStorage.getItem(CACHE_KEY);

      if (cachedData) {
        // Use cached data if available
        const parsedData = JSON.parse(cachedData);
        setDataSelectorCss(parsedData);
        setCurrentLevelAnswer(parsedData[0]?.correctAnswer || "");
      } else {
        // Fetch data from URL
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();

          // Store fetched data in localStorage
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));

          // Update state with fetched data
          setDataSelectorCss(data);
          setCurrentLevelAnswer(data[0]?.correctAnswer || "");
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      }
    };

    fetchData();
  }, []);
  console.log(dataSelectorCss);

  useEffect(() => {
    if (dataSelectorCss.length > 0) {
      dataSelectorCss.sort((a, b) => a.level - b.level);
    }
  }, [dataSelectorCss]);

  useEffect(() => {
    setCurrentLevelAnswer(dataSelectorCss[currentIndex]?.correctAnswer || "");
  }, [currentIndex, dataSelectorCss]);
  // useEffect(() => {
  //   setCurrentLevelAnswer(dataSelectorCss[currentIndex].correctAnswer);
  // }, [currentIndex]);

  const handleNextLevel = () => {
    if (currentIndex < dataSelectorCss.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setUserAnswer("");
      setNextLevel(false);
    } else {
      setGameOver(true);
    }
  };

  const handleSubmitSelector = () => {
    if (userAnswer !== "" && userAnswer === currentLevelAnswer) {
      setNextLevel(true);
    }
  };
  if (dataSelectorCss.length === 0) {
    const loading = true;
    return (
      <Sugar
        background={"#000000"}
        color="#65A30D"
        customLoading={loading}
        time={1800}
      />
    );
  }
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
            className="w-[30%] flex h-full flex-col bg-[#0E6D8B]"
          >
            <Heading data={currentItem.level} />
            <Introduction
              introductions={currentItem.introductions}
              descriptions={currentItem.descriptions}
              challenge={currentItem.challenge}
            />
            <div
              id="compiler"
              className="w-full h-auto flex-grow px-6 py-6 relative"
            >
              <Editor setUserAnswer={setUserAnswer} />
              <button
                onClick={handleNextLevel}
                className={`${
                  nextLevel
                    ? "bg-green-500 text-white py-1 px-4 rounded absolute bottom-2 right-4"
                    : "bg-gray-300 text-white py-1 hover:cursor-not-allowed px-4 rounded absolute bottom-2 right-4"
                }`}
                disabled={!nextLevel}
              >
                Next
              </button>
              <button
                className="bg-[#F55C97] hover:bg-gray-700 text-white py-1 px-4 rounded absolute bottom-2 left-4"
                onClick={handleSubmitSelector}
              >
                Submit
              </button>
            </div>
          </div>
          {nextLevel && (
            <ConfettiExplosion
              className="absolute top-0 left-[50%]"
              {...bigExplodeProps}
            />
          )}
          <div id="OutputSide" className="w-[70%] h-full p-6 bg-[#23AEB6]">
            <SelectorAsset currentItem={currentItem} nextLevel={nextLevel} />
            <HtmlContent htmlContent={currentItem.htmlContent} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectorCSS;
