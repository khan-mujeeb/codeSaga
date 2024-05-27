import PropTypes from "prop-types";
import React from "react";
import UnitQuestions from "./UnitQuestions.js";

const DesktopCodeSection = ({ onHeightChange, onWidthChange }) => {
    const OnHeightChangeHandler = (event) => {
        // console.log(event.target.value);
        onHeightChange(event.target.value);
    };
    const OnWidthChangeHandler = (event) => {
        // console.log(event.target.value);
        onWidthChange(event.target.value);
    };
    const [level, setLevel] = React.useState(1);

    return (
        <div className="flex  flex-grow w-[40%] justify-center items-center">
            <div className="flex  flex-col bg-UnitCodeEditor w-full] h-[95%] rounded-3xl p-6 gap-6">
                {/* level component */}
                

                <div className=" flex flex-col gap-3">
                    
                    <div className="gap-2">
                        <h2 className=" font-semibold text-xl ">Task</h2>
                        <p className=" text-lg">{UnitQuestions[level - 1].question}</p>
                    </div>

                    <div className="gap-2">
                        <h2 className=" font-semibold text-xl ">hint</h2>
                        <p className=" text-lg">{UnitQuestions[level - 1].hint}</p>
                    </div>
                </div>

                {/* controler  */}
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex gap-2 items-center w-32">
                        {" "}
                        <label htmlFor="height" className="text-white" id>
                            Height
                        </label>
                        <input
                            id="height"
                            onChange={OnHeightChangeHandler}
                            className="w-32 h-10 rounded-2xl bg-gray-700 text-white p-2"
                            type="text"
                            placeholder="20%"
                        />
                    </div>

                    <div className="flex gap-2 items-center">
                        <label htmlFor="width" className="text-white">
                            Width
                        </label>
                        <input
                            id="width"
                            onChange={OnWidthChangeHandler}
                            className="w-32 h-10 rounded-2xl bg-gray-700 text-white p-2"
                            type="text"
                            placeholder="30%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


DesktopCodeSection.propTypes = {
    onHeightChange: PropTypes.func.isRequired,
    onWidthChange: PropTypes.func.isRequired,
};

export default DesktopCodeSection;
