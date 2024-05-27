import { useState, useEffect } from "react";
import { dataFlexbox } from "../data/FlexOptimised";
import { Modal } from "react-responsive-modal";
import MDEditor from "@uiw/react-md-editor";
import { parseCSS, ToastSuccess } from "../components/FlexGameInput/utils";
import { AnswerChecker } from "../components/FlexGameInput/AnswerCheck";
import toast from "react-hot-toast";
import GameOverComponent from "../components/SelectorCSS/GameOver";
import Discuss from "../components/discussion/Discuss";
import "../styles/editor.css";
import ConfettiExplosion from "react-confetti-explosion";

function FlexOptimised() {
  const [discussionClicked, setDiscussionClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextLevel, setNextLevel] = useState(false);
  const currentItem = dataFlexbox[currentIndex];
  const [open, setOpen] = useState(false);
  const [pondStyles, setPondStyles] = useState({
    flexLevel1: {
      style1: "",
    },
    flexLevel2: {
      style1: "",
      style2: "",
    },
    flexLevel3: {
      style1: "",
    },
    flexLevel4: {
      style1: "",
    },
  });
  const [inputStyle, setInputStyle] = useState("");
  const applyStyles = (flexLevel, leveStyle) => {
    setPondStyles({
      ...pondStyles,
      [flexLevel]: leveStyle,
    });
  };
  useEffect(() => {
    if (currentIndex === 0) {
      setInputStyle("");
    } else if (currentIndex === 1) {
      setInputStyle({
        style1: "",
        style2: "",
      });
    } else if (currentIndex === 2) {
      setInputStyle({
        style1: "",
      });
    } else if (currentIndex === 3) {
      setInputStyle({
        style1: "",
      });
    }
  }, [currentIndex]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleNextLevel = () => {
    console.log("current" + currentIndex);
    if (currentIndex < 3) {
      console.log(dataFlexbox?.[currentIndex]?.questions);
      setCurrentIndex(currentIndex + 1);
      setNextLevel(false);
    } else {
      setCurrentIndex(currentIndex + 1);
      setNextLevel(false);
    }
  };

  const currentEditor = (index) => {
    switch (index) {
      case 0: {
        return (
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
                value={inputStyle}
                onChange={(e) => setInputStyle(e.target.value)}
                style={{
                  height: "45px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
                placeholder="Enter your flexbox code"
              />

              <pre id="after">{"}"}</pre>
            </div>
          </div>
        );
      }
      case 1: {
        return (
          <div id="editor">
            <div className="compiler-heading">CSS</div>
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
                  height: "45px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
                spellCheck={false}
                autoCapitalize="none"
                value={inputStyle.style1}
                onChange={(e) =>
                  setInputStyle((p) => ({
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
                  height: "45px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
                value={inputStyle.style2}
                onChange={(e) =>
                  setInputStyle((p) => ({
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
        );
      }
      case 2: {
        return (
          <div id="editor">
            <div className="compiler-heading">CSS</div>
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
              <textarea
                id="code"
                autoFocus
                spellCheck={false}
                autoCapitalize="none"
                value={inputStyle.style1}
                onChange={(e) =>
                  setInputStyle((p) => ({
                    ...p,
                    style1: e.target.value,
                  }))
                }
                style={{
                  height: "45px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
                placeholder="Enter your flexbox code"
              />
              <pre id="after">{"}"}</pre>
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div id="editor">
            <div className="compiler-heading">CSS</div>
            <div id="css">
              <div className="line-numbers">
                {Array.from({ length: 13 }, (_, index) => (
                  <div key={index + 1}>{index + 1}</div>
                ))}
              </div>
              <pre id="before">.blueChemical {"{"}</pre>
              <textarea
                id="code"
                autoFocus
                style={{
                  height: "45px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
                spellCheck={false}
                autoCapitalize="none"
                value={inputStyle.style1}
                onChange={(e) =>
                  setInputStyle((p) => ({
                    ...p,
                    style1: e.target.value,
                  }))
                }
                placeholder="Enter your flexbox code"
              />
              <pre id="after">{"}"}</pre>
            </div>
          </div>
        );
      }
    }
  };

  const currentOutput = (index) => {
    switch (index) {
      case 0: {
        const bg = dataFlexbox?.[0]?.assets[0];
        const house = dataFlexbox?.[0]?.assets[1];
        const boy = dataFlexbox?.[0]?.assets[2];

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
                ...pondStyles?.flexLevel1?.style1,
                transition: "all 0.5s ease-in-out",
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
      case 1: {
        const bg = dataFlexbox?.[1]?.assets[0];
        const greenhouse = dataFlexbox?.[1]?.assets[1];
        const greenboy = dataFlexbox?.[1]?.assets[2];
        const bulehouse = dataFlexbox?.[1]?.assets[3];
        const buleboy = dataFlexbox?.[1]?.assets[4];
        console.log(pondStyles?.flexLevel2);
        const fixed = {
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

        return (
          <div>
            <div>
              <div
                id="box"
                className=" flex relative    justify-between h-[600px] w-[700px] stroke-black-100 bg-white rounded-md"
                style={{
                  ...fixed,
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <img
                  className=" absolute left-4 bottom-4 h-36 w-36"
                  id="fo"
                  src={greenhouse}
                  alt="ndrb"
                />
                <img
                  className="  absolute   right-4 top-[40%]  h-36 w-36"
                  id="fo"
                  src={bulehouse}
                  alt="ndrb"
                />
                <img
                  className="z-2  w-32 h-32 ml-[30px] boy-animation "
                  // style={{ alignSelf: "flex-end" }}
                  id="mo"
                  src={greenboy}
                  style={{ ...pondStyles.flexLevel2.style1 }}
                  alt="ndrb"
                />
                <img
                  className="z-2   w-32 h-32 ml-[30px] boy-animation "
                  id="mo"
                  src={buleboy}
                  style={{ ...pondStyles.flexLevel2.style2 }}
                  alt="ndrb"
                />
              </div>
            </div>
          </div>
        );
      }
      case 2: {
        const bg = dataFlexbox?.[2]?.assets[0];
        const greenBoy = dataFlexbox?.[2]?.assets[1];
        const blueBoy = dataFlexbox?.[2]?.assets[2];
        const redBoy = dataFlexbox?.[2]?.assets[3];
        const greenBoyHouse = dataFlexbox?.[2]?.assets[4];
        const blueBoyHouse = dataFlexbox?.[2]?.assets[5];
        const redBoyHouse = dataFlexbox?.[2]?.assets[6];

        const fixed = {
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
        console.log(pondStyles?.flexLevel3?.style1);
        return (
          <div>
            <div
              id="box"
              className="flex relative h-[600px] w-[700px] stroke-black-100 bg-white rounded-md"
              style={{
                ...fixed,
                ...pondStyles?.flexLevel3?.style1,
                transition: "all 0.5s ease-in-out",
              }}
            >
              <img
                className="z-2 w-32 h-32  mt-28  boy-animation "
                id="greenBoy"
                src={greenBoy}
                alt="greenBoy"
              />
              <img
                className="z-2 w-32 h-32 mt-28   boy-animation "
                id="redBoy"
                src={redBoy}
                alt="redBoy"
              />
              <img
                className="z-2 w-32 h-32  mt-28  boy-animation "
                id="blueBoy"
                src={blueBoy}
                alt="blueBoy"
              />

              <img
                className="absolute start-8 h-36 w-36"
                id="greenBoyHouse"
                src={greenBoyHouse}
                alt="greenBoyHouse"
              />
              <img
                className="absolute end-8 h-36 w-36"
                id="blueBoyHouse"
                src={blueBoyHouse}
                alt="blueBoyHouse"
              />
              <img
                className="absolute left-1/2 transform -translate-x-1/2 h-36 w-36"
                id="redBoyHouse"
                src={redBoyHouse}
                alt="redBoyHouse"
              />
            </div>
          </div>
        );
      }
      case 3: {
        console.log(pondStyles?.flexLevel4);

        return (
          <div>
            <div
              id="box"
              className="flex relative h-[600px] w-[700px] stroke-black-100 bg-white rounded-md"
              style={{
                backgroundColor: "rgb(193, 154, 107)",
                transition: "all 0.5s ease-in-out",
              }}
            >
              <div className="absolute top-32 left-48 w-64 h-96 flex  flex-col-reverse border-l-4 border-r-4 border-b-4 border-white rounded-md ">
                <div className="h-[10%] bg-red-500 rounded-b-md  "></div>
                <div className="h-[10%] bg-green-500 "></div>
                <div
                  className="h-[10%] bg-blue-500 rounded-t-md   "
                  style={{
                    ...pondStyles?.flexLevel4,
                    transition: "all 0.5s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  const handleApplyStyles = (index) => {
    switch (index) {
      case 0: {
        const parsedCssString = { style1: parseCSS(inputStyle) };
        const answers = AnswerChecker("flexLevel1", parsedCssString);
        const handlereset = () => {
          console.log("reset");
          applyStyles("flexLevel1", { style1: "" });
          setInputStyle("");
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
        break;
      }

      case 1: {
        const levelStyle = {
          style1: parseCSS(inputStyle.style1),
          style2: parseCSS(inputStyle.style2),
        };
        const answers = AnswerChecker("flexLevel2", levelStyle);
        const handlereset = () => {
          applyStyles("flexLevel2", { style1: "", style2: "" });
          setInputStyle({ style1: "", style2: "" });
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
        break;
      }
      case 2: {
        const parsedCssString = {
          style1: parseCSS(inputStyle.style1),
        };
        console.log(parsedCssString);
        const answers = AnswerChecker("flexLevel3", parsedCssString);
        const handlereset = () => {
          console.log("reset");
          applyStyles("flexLevel3", { style1: "" });
          setInputStyle({ style1: "" });
        };
        if (answers) {
          toast.success("You have cleared this level", ToastSuccess);
          setNextLevel(true);
          applyStyles("flexLevel3", parsedCssString);
        } else {
          toast.error("Try again");
          setNextLevel(false);
          applyStyles("flexLevel3", parsedCssString);
          setTimeout(handlereset, 1000);
        }
        break;
      }
      case 3: {
        console.log(inputStyle);
        const parsedCssString = parseCSS(inputStyle.style1);
        const answers = AnswerChecker("flexLevel4", parsedCssString);
        const handlereset = () => {
          console.log("reset");
          applyStyles("flexLevel4", { style1: "" });
          setInputStyle({ style1: "" });
        };
        if (answers) {
          toast.success("You have cleared this level", ToastSuccess);

          setNextLevel(true);
          applyStyles("flexLevel4", parsedCssString);
        } else {
          toast.error("Try again");
          setNextLevel(false);
          applyStyles("flexLevel4", parsedCssString);
          setTimeout(handlereset, 1000);
        }
        break;
      }
    }
  };
  console.log(currentIndex);
  if (currentIndex > 3) {
    return <GameOverComponent />;
  }
  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    floorHeight: 1600,
    floorWidth: 1600,
  };

  return (
    <div
      id="Homescreen"
      className="h-screen w-screen flex flex-col select-none"
    >
      <div
        id="NavBar"
        className="w-full h-[10%] flex flex-row    bg-mainBg justify-between px-10 items-center   "
      >
        {" "}
        <div className="flex gap-2 text-xl">
          <h2 className=" text-white">LEVEL :</h2>
          <h2 className=" text-white"> {currentItem?.level}</h2>
        </div>
        <h2 className="flex text-3xl">
          <span
            className="text-green-400 cursor-pointer "
            onClick={() => setDiscussionClicked(false)}
          >
            FLEX
          </span>
          🌎{" "}
        </h2>
        <h1
          style={{
            color: discussionClicked ? "green" : "white",
            cursor: "pointer",
          }}
          onClick={() => setDiscussionClicked(true)}
        >
          DISCUSSION
        </h1>
      </div>
      {discussionClicked ? null : (
        <div id="GameBody" className="w-full h-[90%] bg-mainBg flex flex-row">
          <div id="flexInput" className="h-full w-[50%] p-4 ">
            <div
              id="introductions"
              className="w-full h-auto text-base space-y-2 px-4 py-4"
            >
              <p className="text-white">{currentItem?.introductions}</p>
              <p className="text-white">{currentItem?.descriptions}</p>
              <p className="text-white">{currentItem?.challenge}</p>
            </div>
            <div className="bg-yellow-50 px-4 py-2 w-11/12 h-[70%] rounded-md relative">
              {currentEditor(currentIndex)}
              <button
                style={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "16px",
                }}
                className={
                  nextLevel
                    ? "bg-green-500 text-white py-1 px-4 rounded absolute bottom-2 right-4"
                    : "bg-gray-300 text-white py-1 hover:cursor-not-allowed px-4 rounded absolute bottom-2 right-4"
                }
                disabled={!nextLevel}
                onClick={handleNextLevel}
              >
                Next
              </button>
              <button
                style={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "16px",
                }}
                onClick={() => handleApplyStyles(currentIndex)}
                className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-4 rounded absolute bottom-2 left-4"
              >
                Apply Styles
              </button>
              <button
                style={{
                  fontFamily: "Source Code Pro, monospace",
                  fontSize: "16px",
                }}
                className="bg-yellow-600 hover:bg-yellow-400 hover:cursor-help text-white py-1 px-4 rounded absolute bottom-2 left-[180px]"
                onClick={onOpenModal}
              >
                Learning
              </button>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
              <div className="flex w-[100%] p-4 gap-10">
                <img className="w-72" src={currentItem?.modelImage} alt="" />
                <MDEditor.Markdown source={currentItem?.learning} />
              </div>
            </Modal>
          </div>
          {nextLevel && (
            <ConfettiExplosion
              className="absolute top-0 left-[50%]"
              {...bigExplodeProps}
            />
          )}
          <div id="flexOutput" className="h-full w-[50%] p-4 ">
            {currentOutput(currentIndex)}
          </div>
        </div>
      )}

      {discussionClicked ? <Discuss /> : null}
    </div>
  );
}

export default FlexOptimised;
