/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
// import flexbox from "../data/flexgame.json";
import PropTypes from "prop-types";
// import { levelData } from "../data/newFlexgame.js";

import "./editor.css";
import FlexLevel1 from "../FlexGameInput/FlexLevel1";
import FlexLevel2 from "../FlexGameInput/FlexLevel2";
const CodeSection = ({
  applyStyles,
  setCodeInput,

  currentLevel,
  setCurrentLevel,
  levelData,
  codeInput,
}) => {
  let currentLevelComponent;
  switch (currentLevel) {
    case 0:
      currentLevelComponent = (
        <FlexLevel1
          applyStyles={applyStyles}
          setCodeInput={setCodeInput}
          codeInput={codeInput}
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
          setCodeInput={setCodeInput}
          codeInput={codeInput}
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
    <div className="flex flex-col bg-mainBg h-full flex-grow w-1/2 justify-center items-center text-2xl text-codeEditor">
      {/* question statement */}
      {currentLevelComponent}
      {/* <FlexLevel1
        applyStyles={applyStyles}
        setCodeInput={setCodeInput}
        codeInput={codeInput}
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        levelData={levelData}
      /> */}
    </div>
  );
};

CodeSection.propTypes = {
  level: PropTypes.number.isRequired,
  onPosChange: PropTypes.func.isRequired,
  onLevelChangeHandle: PropTypes.func.isRequired,
  onAlignItem: PropTypes.func.isRequired,
  onJustifyContent: PropTypes.func.isRequired,
};

export default CodeSection;
