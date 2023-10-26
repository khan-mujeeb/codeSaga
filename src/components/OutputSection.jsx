import PropTypes from "prop-types";
import flexbox from "../data/flexgame.json";
// import React, { useState, useEffect } from "react";
import flexGameStyle from "../styles/flexGameStyles.css";
// import bg from "../assets/img/fbg.png";
import child from "../assets/img/child.png";

const bg = flexbox.level1.assets[0];
// const mo = flexbox.level1.assets[2];
const fo = flexbox.level1.assets[1];

const OutputSection = ({level, elementPosition, onLevelChangeHandle, alignItem, justifyContent}) => {
    // console.log("1st log" + mo);
    // const [image, setImage] = useState('/');

    // useEffect(() => {
    //     setImage(mo);
    //     console.log("2nd log" + mo);
    // }, []);

    console.log("3rd log " + elementPosition);

    return (
        <div className="flex bg-mainBg h-full flex-grow w-1/2 justify-center items-center">

            {/* game box */}
            <div id="box" className="flex relative h-[500px] w-[500px] stroke-black-100 bg-white rounded-md"
            style={
                {
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    alignItems: alignItem,
                    justifyContent: justifyContent,  

                }
                
            }
            >
                <img className="absolute bottom-0 start-0 h-36 w-36" id="fo" src={fo} alt="ndrb" />
                <img className="z-10 w-32 h-32 ml-[30px]" id="mo" src={child} alt="ndrb" />
            </div>
        </div>
    );
};

OutputSection.propTypes = {
    level: PropTypes.number.isRequired,
    elementPosition: PropTypes.string.isRequired,
    onLevelChangeHandle: PropTypes.func.isRequired,
    alignItem: PropTypes.string.isRequired,
    justifyContent: PropTypes.string.isRequired,
};

export default OutputSection;
