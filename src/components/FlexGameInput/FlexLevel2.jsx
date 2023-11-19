/* eslint-disable react/prop-types */
import "./editor.css";

function FlexLevel1({
  applyStyles,
  setCodeInput,

  currentLevel,
  setCurrentLevel,
  levelData,
  codeInput,
}) {
  const handleNextLevel = () => {
    console.log("current" + currentLevel);
    if (currentLevel < 2) {
      console.log(levelData?.[currentLevel]?.questions);
      setCurrentLevel(currentLevel + 1);
    } else {
      setCurrentLevel(0);
    }
  };
  const hints = levelData?.[currentLevel]?.answers;
  const renderHints = hints?.map((hint) => {
    return (
      <div
        key={hint}
        style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
        className="text-white  pl-5  "
      >
        . {hint}
      </div>
    );
  });

  return (
    <>
      <h2
        style={{ fontFamily: "Source Code Pro, monospace", fontSize: "20px" }}
        className="text-white  pl-7"
      >
        {levelData?.[currentLevel]?.questions}
        <div className="py-5">
          HINTS:
          {renderHints}
        </div>
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
              .greenBoy {"{"}
              <br />
              &nbsp; display: flex;
              <br />
            </pre>
            <textarea
              id="code"
              autoFocus
              autoCapitalize="none"
              style={{ height: "80px" }}
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Enter your flexbox code"
            />
            <pre id="after">{"}"}</pre>
            <pre id="before">
              .blueBoy {"{"}
              <br />
              &nbsp; display: flex;
              <br />
            </pre>
            <textarea
              id="code"
              autoFocus
              autoCapitalize="none"
              style={{ height: "100px" }}
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Enter your flexbox code"
            />
            <pre id="after">{"}"}</pre>
          </div>
        </div>
        <button
          onClick={handleNextLevel}
          style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
          className="bg-gray-500 hover:bg-gray-700 text-white ] py-1 px-4 rounded  absolute bottom-2  right-4   "
        >
          Next
        </button>
        <button
          style={{ fontFamily: "Source Code Pro, monospace", fontSize: "16px" }}
          className="bg-gray-500 hover:bg-gray-700 text-white font-medium py-1 px-4 rounded  absolute  left-4  bottom-2 "
          onClick={applyStyles}
        >
          Apply Styles
        </button>
      </div>
    </>
  );
}

export default FlexLevel1;
