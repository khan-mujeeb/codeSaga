// import React from "react";
import "../../styles/star.css";

function Star({color}) {
  return (
    <div className={`background ${color}`}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* <div id="title"></div> */}
    </div>
  );
}

export default Star;
