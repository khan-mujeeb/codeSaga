import React from "react";
import NavBar from "./NavBar";
import GameBody from "./GameBody";
import flexgame from "../data/flexgame"
const HomeScreen = () => {
    // state to update level number
    const [level, setLevel] = React.useState(1);
    
    return (
        <div className="h-screen w-screen flex flex-col">
            <NavBar level={level} data={flexgame}/>
            <GameBody level={level} data={flexgame}/>
        </div>
    );
};

export default HomeScreen;
