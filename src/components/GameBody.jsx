import PropTypes from "prop-types";
import React from "react";
import CodeSection from "./CodeSection";
import OutputSection from "./OutputSection";



const GameBody = (props) => {

    const [elementPosition, setElementPosition] = React.useState("");

    return <div className="flex flex-wrap h-full">
        <CodeSection onPosChange = {setElementPosition}/>
        <OutputSection level={props.level} elementPosition = {elementPosition}/>
    </div>
}

GameBody.propTypes = {
    level: PropTypes.number.isRequired, 
};

export default GameBody;