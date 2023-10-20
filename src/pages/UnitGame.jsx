import DesktopSection from "../components/DesktopSection";
import DesktopCodeSection from "../components/DesktopCodeSection";
import React from "react";
const UnitGame = () => {

    const [height, setHeight] = React.useState("20%");
    const [width, setWidth] = React.useState("30%");


    return (
        <div className="flex w-screen h-screen bg-unitBg">
            
            <DesktopSection newHeight={height} newWidth={width}/>
            <DesktopCodeSection onHeightChange={setHeight} onWidthChange={setWidth}/>
            
        </div>
    );
}

export default UnitGame;