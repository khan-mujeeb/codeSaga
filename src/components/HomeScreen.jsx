import React from "react";
import NavBar from "./NavBar";
import GameBody from "./GameBody";
import flexgame from "../data/flexgame.json";
import Discuss from "./discussion/Discuss";
import { levelData } from "../data/newFlexgame.js";
import { useState } from "react";

const HomeScreen = () => {
  // state to update level number
  const [currentLevel, setCurrentLevel] = useState(0);

  const [discussionClicked, setDiscussionClicked] = React.useState(false);
  return (
    <div className="h-screen w-screen flex flex-col">
      <NavBar
        data={flexgame}
        setDiscussionClicked={setDiscussionClicked}
        discussionClicked={discussionClicked}
        levelData={levelData}
        currentLevel={currentLevel}
      />
      {discussionClicked ? null : (
        <GameBody
          levelData={levelData}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      )}
      {discussionClicked ? <Discuss /> : null}
    </div>
  );
};

export default HomeScreen;
