import PropTypes from "prop-types";
import React from "react";
import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";



const GameBody = ({level, onLevelChangeHandle}) => {

    const [elementPosition, setElementPosition] = React.useState("");

    return <div className="flex flex-wrap h-full">
        <CodeSection onPosChange = {setElementPosition} onLevelChangeHandle = {onLevelChangeHandle}/>
        <OutputSection level={level} elementPosition = {elementPosition} onLevelChangeHandle = {onLevelChangeHandle}/>
    </div>
}

GameBody.propTypes = {
    level: PropTypes.number.isRequired, 
    onLevelChangeHandle: PropTypes.func.isRequired,
};

export default GameBody;