import { useState } from "react";
import { GameStart } from "../components/GameStart";
// import GameMenu from "../components/GameMenu";
import GameMenu from "../components/CSSGameMenu/GameMenu";

const CssMenu = () => {
    const [isGameMenuVisible, setIsGameMenuVisible] = useState(false);
    const [isGameStartVisible, setIsGameStartVisible] = useState(true);

    const startGame = () => {
        setIsGameStartVisible(false);
        setIsGameMenuVisible(true);
    };

    return (
        <div>
            {isGameStartVisible && <GameStart onStart={startGame} />}
            {isGameMenuVisible && <GameMenu />}
        </div>
    );
};
export default CssMenu;
