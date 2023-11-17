import React from "react";
import NavBar from "./NavBar";
import GameBody from "./GameBody";
import flexgame from "../data/flexgame"
import Discuss from "./discussion/Discuss";

const HomeScreen = () => {
    // state to update level number
    const [level, setLevel] = React.useState(1);
    const onLevelChangeHandler = () => {
        setLevel(level + 1);
    }
    const [discussionClicked, setDiscussionClicked] = React.useState(false);
    return (
        <div className="h-screen w-screen flex flex-col">
            <NavBar level={level} data={flexgame} onLevelChangeHandler = {onLevelChangeHandler} setDiscussionClicked={setDiscussionClicked} discussionClicked={discussionClicked}/>
            {discussionClicked? null: <GameBody level={level} data={flexgame}/> }
            {discussionClicked? <Discuss />: null}

        </div>
    );
};

export default HomeScreen;
