import PropTypes from "prop-types";
import React from "react";
import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";



const GameBody = ({level, onLevelChangeHandle}) => {

    const [elementPosition, setElementPosition] = React.useState();
    const [alignItem, setAlignItem] = React.useState("center");
    const [justifyContent, setJustifyContent] = React.useState("center");

    return <div className="flex flex-wrap h-full">

        <CodeSection onPosChange = {setElementPosition} onAlignItem = {setAlignItem} onJustifyContent = {setJustifyContent} onLevelChangeHandle = {onLevelChangeHandle}/>

        <OutputSection level={level} elementPosition = {elementPosition} alignItem = {alignItem} justifyContent = {justifyContent} onLevelChangeHandle = {onLevelChangeHandle}/>
    </div>
}

GameBody.propTypes = {
    level: PropTypes.number.isRequired, 
    onLevelChangeHandle: PropTypes.func.isRequired,
};

export default GameBody;