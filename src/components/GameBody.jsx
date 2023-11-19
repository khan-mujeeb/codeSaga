/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";
import { useState } from "react";

const GameBody = ({ currentLevel, setCurrentLevel, levelData }) => {
  const [codeInput, setCodeInput] = useState("");
  const [pondStyles, setPondStyles] = useState({});

  const applyStyles = () => {
    // Apply user's styles to the pond
    setPondStyles({ ...pondStyles, ...parseCSS(codeInput) });
    console.log(pondStyles);
  };

  const parseCSS = (cssString) => {
    const styles = {};
    cssString.split(";").forEach((rule) => {
      const [property, value] = rule.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        styles[camelCaseProperty] = value.trim();
      }
    });
    return styles;
  };

  return (
    <div className="flex  h-full  w-full">
      <CodeSection
        applyStyles={applyStyles}
        setCodeInput={setCodeInput}
        codeInput={codeInput}
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

GameBody.propTypes = {
  level: PropTypes.number.isRequired,
  onLevelChangeHandle: PropTypes.func.isRequired,
};

export default GameBody;
