
import React from "react";
import DesktopSection from "../components/UnitGames/Level1/DesktopSection";
import DesktopCodeSection from "../components/UnitGames/Level1/DesktopCodeSection";
const UnitGame = () => {

    const [height, setHeight] = React.useState("20%");
    const [width, setWidth] = React.useState("30%");
    

    return (
        <div className="flex w-screen h-screen bg-unitBg justify-around">
            
            <DesktopSection newHeight={height} newWidth={width}/>

            
            <DesktopCodeSection onHeightChange={setHeight} onWidthChange={setWidth}/>
        </div>
    );
}

export default UnitGame;