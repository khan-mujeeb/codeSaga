/* eslint-disable react/prop-types */
import "./editor.css";
import { useState } from "react";
import { parseCSS, ToastSuccess } from "./utils";
import toast from "react-hot-toast";
import { AnswerChecker } from "./AnswerCheck";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MDEditor from "@uiw/react-md-editor";

function FlexLevel1({
    applyStyles,
    // setCodeInput,
    currentLevel,
    setCurrentLevel,
    levelData,
    // codeInput,
}) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [styleInput, setStyleInput] = useState({
        style1: "",
        style2: "",
    });
    const [nextLevel, setNextLevel] = useState(false);
    const handleApplyStyles = () => {
        const levelStyle = {
            style1: parseCSS(styleInput.style1),
            style2: parseCSS(styleInput.style2),
        };
        const answers = AnswerChecker("flexLevel2", levelStyle);
        const handlereset = () => {
            applyStyles("flexLevel2", { style1: "", style2: "" });
            setStyleInput({ style1: "", style2: "" });
        };
        if (answers) {
            toast.success("You have cleared this level", ToastSuccess);

            setNextLevel(true);
            applyStyles("flexLevel2", levelStyle);
        } else {
            toast.error("Try again");
            setNextLevel(false);
            applyStyles("flexLevel2", levelStyle);
            setTimeout(handlereset, 1000);
        }
    };

    const handleNextLevel = () => {
        console.log("current" + currentLevel);
        if (currentLevel < 1) {
            console.log(levelData?.[currentLevel]?.questions);
            setCurrentLevel(currentLevel + 1);
        } else {
            setCurrentLevel(0);
        }
    };
    const hints = levelData?.[currentLevel]?.answers;

    return (
        <>
            <h2
                style={{
                    fontFamily: "Source Code Pro, monospace",
                    fontSize: "20px",
                }}
                className="text-white  pl-7"
            >
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
                            .playground {"{"}
                            <br />
                            &nbsp; display: flex;
                            <br />
                        </pre>
                        <pre id="after">{"}"}</pre>
                        <pre id="before">.greenBoy {"{"}</pre>
                        <textarea
                            id="code"
                            autoFocus
                            style={{
                                height: "60px",
                                borderRadius: "5px",
                                paddingLeft: "10px",
                                paddingTop: "5px",
                            }}
                            spellCheck={false}
                            autoCapitalize="none"
                            value={styleInput.style1}
                            onChange={(e) =>
                                setStyleInput((p) => ({
                                    ...p,
                                    style1: e.target.value,
                                }))
                            }
                            placeholder="Enter your flexbox code"
                        />
                        <pre id="after">{"}"}</pre>
                        <pre id="before">.blueBoy {"{"}</pre>
                        <textarea
                            id="code"
                            autoFocus
                            autoCapitalize="none"
                            spellCheck={false}
                            style={{
                                height: "60px",
                                borderRadius: "5px",
                                paddingTop: "5px",
                                paddingLeft: "10px",
                            }}
                            value={styleInput.style2}
                            onChange={(e) =>
                                setStyleInput((p) => ({
                                    ...p,
                                    style2: e.target.value,
                                }))
                            }
                            // value={codeInput}
                            // onChange={(e) => setCodeInput(e.target.value)}
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
                    className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-1 px-4 rounded  absolute  left-4  bottom-2 "
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
                        src="https://samanthaming.gumlet.io/flexbox30/28-align-self.jpg.gz?format=auto"
                        alt=""
                    />
                  <MDEditor.Markdown source="In flexbox, align-self is like a special power for individual flex items. It lets each item decide how it wants to be aligned vertically inside the flex container, regardless of what the other items are doing. Here's how it works: Say you have a bunch of items inside a flex container, and you've used align-items to set how they're all aligned together. But then, you want one particular item to be aligned differently from the others. That's where align-self comes in handy. You can use align-self on that specific item to override the alignment set by align-items just for that item. So, it's like saying, Hey, for this one, do your own thing! Now, let's talk about how flex-direction affects align-self: If flex-direction is set to row (the default), align-self controls vertical alignment for each item. If flex-direction is set to column, align-self controls horizontal alignment for each item. So, align-self lets individual flex items break free from the group alignment set by align-items, and flex-direction determines whether it's affecting vertical or horizontal alignment based on the main axis direction."/>
                </div>
            </Modal>
        </>
    );
}

export default FlexLevel1;
