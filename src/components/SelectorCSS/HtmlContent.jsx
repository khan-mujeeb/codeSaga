/* eslint-disable react/prop-types */

function HtmlContent({ htmlContent }) {
  return (
    <div id="htmlContent" className="w-full h-[40%] ">
      <div id="editor">
        <div
          className="compiler-heading"
          style={{ backgroundColor: "#033143" }}
        >
          HTML
        </div>

        <div
          id="css"
          style={{
            height: "220px",
            padding: "0",
            backgroundColor: "#043C52",
          }}
        >
          <div className="line-numbers " style={{ backgroundColor: "#033143" }}>
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index + 1}>{index + 1}</div>
            ))}
          </div>
          <div className=" absolute top-[-15px] left-[-15px] w-[100%] h-[100%] overflow-auto">
            <pre style={{ color: "#d5d5d5" }}>{htmlContent}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlContent;
