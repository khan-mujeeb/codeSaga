/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./boyAnimations.css";

function FlexLevel1({
  levelData,

  pondStyles,
}) {
  const bg = levelData?.[0]?.assets[0];
  const house = levelData?.[0]?.assets[1];
  const boy = levelData?.[0]?.assets[2];

  const fixed = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div
        id="box"
        className="flex relative h-[600px] w-[700px] stroke-black-100 bg-white rounded-md"
        style={{
          ...fixed,
          ...pondStyles,
        }}
      >
        <img
          className="absolute bottom-2 start-8 h-36 w-36"
          id="fo"
          src={house}
          alt="ndrb"
        />
        <img
          className="z-2 w-32 h-32 ml-[30px] boy-animation "
          id="mo"
          src={boy}
          alt="ndrb"
        />
      </div>
    </div>
  );
}

export default FlexLevel1;
