/* eslint-disable react/prop-types */
import { useState } from "react";
import "./editor.css";
import { parseCSS, ToastSuccess } from "./utils";
import toast from "react-hot-toast";
import { AnswerChecker } from "./AnswerCheck";
import Modal from "./Modal";

function FlexLevel1({
  applyStyles,

  currentLevel,
  setCurrentLevel,
  levelData,
}) {
  const [inputStyle, setINputStyle] = useState("");
  const [nextLevel, setNextLevel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleNextLevel = () => {
    console.log("current" + currentLevel);
    if (currentLevel < 1) {
      console.log(levelData?.[currentLevel]?.questions);
      setCurrentLevel(currentLevel + 1);
    } else {
      setCurrentLevel(0);
    }
  };

  const handleApplyStyles = () => {
    const parsedCssString = { style1: parseCSS(inputStyle) };
    const answers = AnswerChecker("flexLevel1", parsedCssString);
    const handlereset = () => {
      console.log("reset");
      applyStyles("flexLevel1", { style1: "" });
      setINputStyle("");
    };
    if (answers) {
      toast.success("You have cleared this level", ToastSuccess);

      setNextLevel(true);
      applyStyles("flexLevel1", parsedCssString);
    } else {
      toast.error("Try again");
      setNextLevel(false);
      applyStyles("flexLevel1", parsedCssString);
      setTimeout(handlereset, 1000);
    }
  };

  const hintdata = levelData?.[currentLevel]?.answers;

  const renderHints = hintdata?.map((hint) => {
    return (
      <div
        key={hint}
        style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
        className="text-black   items-center justify-center  "
      >
        {hint}
      </div>
    );
  });

  // Modal content
  const modalContent = <>{renderHints}</>;

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(renderHints);
  return (
    <>
      <h2
        style={{ fontFamily: "Source Code Pro, monospace", fontSize: "20px" }}
        className="text-white  items-center justify-center  "
      >
        {" "}
        <div>FLEXBOX</div>
        {levelData?.[currentLevel]?.questions}
      </h2>

      {/* code box */}
      <div className="bg-yellow-50  px-4 py-2  w-11/12 h-3/5  rounded-md relative">
        {/* code indentation block  */}

        <div id="editor">
          <div id="css">
            <div className="line-numbers">
              {Array.from({ length: 13 }, (_, index) => (
                <div key={index + 1}>{index + 1}</div>
              ))}
            </div>
            <pre id="before">
              .boy {"{"}
              <br />
              &nbsp; display: flex;
              <br />
              &nbsp; flex-direction: row;
            </pre>
            <textarea
              id="code"
              autoFocus
              spellCheck={false}
              autoCapitalize="none"
              style={{
                height: "45px",
                borderRadius: "10px",
                paddingLeft: "10px",
                paddingTop: "10px",
              }}
              // value={codeInput}
              value={inputStyle}
              onChange={(e) => setINputStyle(e.target.value)}
              placeholder="Enter your flexbox code"
            />

            <pre id="after">{"}"}</pre>
          </div>
        </div>
        <button
          onClick={handleNextLevel}
          style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
          className={`${
            nextLevel
              ? " bg-green-500 text-white py-1  px-4 rounded absolute bottom-2 right-4"
              : "bg-gray-300 text-white py-1 hover:cursor-not-allowed px-4 rounded absolute bottom-2 right-4"
          }`}
          disabled={!nextLevel}
        >
          Next
        </button>

        <button
          style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
          className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded absolute bottom-2 left-4"
          onClick={() => {
            handleApplyStyles();
          }}
        >
          Apply Styles
        </button>
        <button
          style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
          className={
            "bg-yellow-600 hover:bg-yellow-400 hover:cursor-help text-white py-1 px-4 rounded absolute bottom-2 left-[180px]"
          }
          onClick={() => {
            console.log("hint");
            handleModalToggle();
          }}
        >
          Learning
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        content={modalContent}
      />
    </>
  );
}

export default FlexLevel1;
