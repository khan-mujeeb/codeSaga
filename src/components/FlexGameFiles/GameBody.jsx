/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import CodeSection from "./CodeSection";
// import OutputSection from "./OutputSection";
import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";
import { useState } from "react";

const GameBody = ({ currentLevel, setCurrentLevel, levelData }) => {
  const [pondStyles, setPondStyles] = useState({
    flexLevel1: {
      style1: "",
    },
    flexLevel2: {
      style1: "",
      style2: "",
    },
  });

  const applyStyles = (flexLevel, leveStyle) => {
    setPondStyles({
      ...pondStyles,
      [flexLevel]: leveStyle,
    });
  };

  return (
    <div className="flex  h-full relative  w-full">
      <CodeSection
        applyStyles={applyStyles}
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        levelData={levelData}
      />

      <OutputSection
        pondStyles={pondStyles}
        levelData={levelData}
        currentLevel={currentLevel}
      />
    </div>
  );
};

export default GameBody;
