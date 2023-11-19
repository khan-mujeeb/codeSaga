/* eslint-disable react/prop-types */
import React from "react";

const GameMenuUnit = ({ value, key }) => {
  return (
    <div
      key={key}
      style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
      className="bg-blue-500 p-4 rounded-md shadow-md"
    >
      {value}
    </div>
  );
};
export default GameMenuUnit;
