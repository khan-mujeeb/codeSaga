// eslint-disable-next-line react/prop-types
function Editor({ setUserAnswer }) {
  return (
    <div id="editor">
      <div className="compiler-heading" style={{ backgroundColor: "#033143" }}>
        CSS
      </div>

      <div id="css" style={{ height: " auto", backgroundColor: "#043C52" }}>
        <div className="line-numbers" style={{ backgroundColor: "#033143" }}>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index + 1}>{index + 1}</div>
          ))}
        </div>{" "}
        <pre id="before" style={{ color: "#d5d5d5" }}>
          <div className="flex gap-3">
            <textarea
              autoFocus
              spellCheck={false}
              autoCapitalize="none"
              className="h-[25px] w-[80%] px-2  border-none font-mono text-base outline-none resize-none overflow-hidden"
              style={{ color: "black" }}
              placeholder="Enter Selector"
              onChange={(e) => setUserAnswer(e.target.value.replace(/\s/g, ""))}
            />{" "}
            {"{"}
          </div>
          &nbsp; &nbsp; your-styles:here;
          <br />
          &nbsp; &nbsp; your-styles:here;
        </pre>
        <pre id="after" style={{ color: "#d5d5d5" }}>
          {"}"}
        </pre>
      </div>
    </div>
  );
}

export default Editor;
