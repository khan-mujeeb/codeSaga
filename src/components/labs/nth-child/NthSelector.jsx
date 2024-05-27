import React from "react";
import "./NthSelector.css";

function App() {
    return (
        <div>
            <h1>CSS CHILD SELECTORS</h1>
            <div className="nth-child-container">
                <div className="nth-child-left">
                    <div className="nth-child-wrapper">
                        <h3>:first-child</h3>
                        <div className="nth-child-box-container first-child">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>

                    <div className="nth-child-wrapper">
                        <h3>:last-child</h3>
                        <div className="nth-child-box-container last-child">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>

                    <div className="nth-child-wrapper">
                        <h3>:nth-child(2)</h3>
                        <div className="nth-child-box-container nth-child-second">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>

                    <div className="nth-child-wrapper">
                        <h3>:nth-child(odd)</h3>
                        <div className="nth-child-box-container nth-child-odd">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>
                    <div className="nth-child-wrapper">
                        <h3>:nth-child(even)</h3>
                        <div className="nth-child-box-container nth-child-even">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>

                    <div className="nth-child-wrapper">
                        <h3>:nth-child(3n)</h3>
                        <div className="nth-child-box-container nth-child-3n">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>

                    <div className="nth-child-wrapper">
                        <h3>:nth-child(n+3)</h3>
                        <div className="nth-child-box-container nth-child-other">
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                            <div className="nth-child-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
