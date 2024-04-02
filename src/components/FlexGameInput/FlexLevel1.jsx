/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../styles/editor.css";
import { parseCSS, ToastSuccess } from "./utils";
import toast from "react-hot-toast";
import { AnswerChecker } from "./AnswerCheck";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MDEditor from "@uiw/react-md-editor";

function FlexLevel1({
  applyStyles,

  currentLevel,
  setCurrentLevel,
  levelData,
}) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [inputStyle, setINputStyle] = useState("");
  const [nextLevel, setNextLevel] = useState(false);
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

  return (
    <>
      <h2
        style={{
          fontFamily: "Source Code Pro, monospace",
          fontSize: "20px",
        }}
        className="text-white  items-center justify-center  "
      >
        {" "}
        <div>FLEXBOX</div>
        {levelData?.[currentLevel]?.questions}
      </h2>

      {/* code box */}
      <div className="bg-yellow-50  px-4 py-2  w-11/12 h-[70%] rounded-md relative">
        <div id="editor">
          <div className="compiler-heading">CSS</div>
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
          style={{
            fontFamily: "Source Code Pro, monospace",
            fontSize: "16px",
          }}
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
          style={{
            fontFamily: "Source Code Pro, monospace",
            fontSize: "16px",
          }}
          className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded absolute bottom-2 left-4"
          onClick={() => {
            handleApplyStyles();
          }}
        >
          Apply Styles
        </button>
        <button
          style={{
            fontFamily: "Source Code Pro, monospace",
            fontSize: "16px",
          }}
          className={
            "bg-yellow-600 hover:bg-yellow-400 hover:cursor-help text-white py-1 px-4 rounded absolute bottom-2 left-[180px]"
          }
          onClick={onOpenModal}
        >
          Learning
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className=" flex w-[100%] p-4 gap-10">
          <img
            className=" w-72"
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*UN38NMI1knNTwX6HbV0oYA.png"
            alt=""
          />
          <MDEditor.Markdown source="`align-items` in flexbox controls how items are aligned vertically (up and down) inside a flex container. </br></br> **It works like this:** - </br> If `align-items` is set to `flex-start`, items align to the start of the container.</br> - If set to `flex-end`, items align to the end of the container.</br> - If set to `center`, items align at the center of the container. </br>- If set to `stretch`, items stretch to fill the container vertically.</br>- If set to `baseline`, items align along their baselines. </br></br>Now, the `flex-direction` property in flexbox determines the direction of the main axis, which affects how `align-items` works: - If `flex-direction` is set to `row` (the default), `align-items` controls vertical alignment. - If `flex-direction` is set to `column`, `align-items` controls horizontal alignment. So, `align-items` in flexbox is used to vertically align items inside a flex container, and its effect can change based on the direction of the main axis set by `flex-direction`." />
        </div>
      </Modal>
    </>
  );
}

export default FlexLevel1;
