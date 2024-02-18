// import React from "react";
import "../styles/GridGame.css";

function GridGame() {
  return (
    <div className="bodyGrid">
      <div className=" flex flex-col min-h-screen ">
        <header className=" flex items-center justify-between  bg-black h-20 px-4"></header>
        <div className="game_gameLayout">
          <div className="game_gameLayoutInner">
            <div className="game_leftSide"></div>
            <div className="game_rightSide">
              <div className="relative w-full flex flex-col justify-center items-center p-6 pt-8 lg:p-8 lg:pt-12">
                <div
                  id="fieldContainer"
                  className="relative z-10 game_fieldContainer"
                >
                  <div
                    id="fieldContainerResize"
                    className="absolute w-full h-full z-50 game_fieldContainer"
                  ></div>
                  <div id="field" className="grid relative z-20 w-full h-full">
                    <div className="EvilLandAnswer_land"></div>
                    <div className="HumanLand_land"></div>
                    <div
                      style={{
                        display: "block",
                        position: "absolute",
                        height: "650px",
                        width: "650px",
                        top: "0px",
                        left: "0px",
                      }}
                    >
                      <div
                        style={{ left: "137.5px" }}
                        className="Inspector_columnSignal"
                      >
                        50%
                      </div>
                      <div
                        style={{
                          border: "1px dashed rgba(255, 238, 0, 0.9)",
                          position: "absolute",
                          height: "680px",
                          width: "2px",
                          left: "-1px",
                          top: "-15px",
                        }}
                      ></div>
                      <div
                        style={{
                          left: "462.5px",
                        }}
                        className="Inspector_columnSignal"
                      >
                        50%
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          height: "680px",
                          width: "2px",
                          left: "324px",
                          top: "-15px",
                          border: "1px dashed rgba(255, 238, 0, 0.7)",
                        }}
                      ></div>
                      <div
                        style={{
                          border: "1px dashed rgba(255, 238, 0, 0.9)",
                          position: "absolute",
                          height: "680px",
                          width: "2px",
                          left: "649px",
                          top: "-15px",
                        }}
                      ></div>
                      <div
                        style={{
                          border: "1px dashed rgba(255, 238, 0, 0.9)",
                          position: "absolute",
                          width: "680px",
                          height: "2px",
                          top: "-1px",
                          left: "-15px",
                        }}
                      ></div>
                      <div
                        style={{
                          border: "1px dashed rgba(255, 238, 0, 0.9)",
                          position: "absolute",
                          width: "680px",
                          height: "2px",
                          top: "649px",
                          left: "-15px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div id="gameFieldBack"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridGame;
