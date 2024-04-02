/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
// import flexbox from "../data/flexgame.json";

// import { levelData } from "../data/newFlexgame.js";

import FlexLevel1 from "../FlexGameInput/FlexLevel1";
import FlexLevel2 from "../FlexGameInput/FlexLevel2";

const CodeSection = ({
  applyStyles,

  currentLevel,
  setCurrentLevel,
  levelData,
}) => {
  let currentLevelComponent;
  switch (currentLevel) {
    case 0:
      currentLevelComponent = (
        <FlexLevel1
          applyStyles={applyStyles}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          levelData={levelData}
        />
      );
      break;
    case 1:
      currentLevelComponent = (
        <FlexLevel2
          applyStyles={applyStyles}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          levelData={levelData}
        />
      );
      break;

    default:
      currentLevelComponent = null;
  }

  return (
    <div className="flex flex-col tracking-wide  gap-2 bg-mainBg h-full flex-grow w-1/2 justify-center items-center text-2xl text-codeEditor">
      {/* question statement */}
      {currentLevelComponent}
    </div>
  );
};

export default CodeSection;
