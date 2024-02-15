import React, { useEffect, useState } from "react";
import Table from "../components/sqlGames/Table";
import desktop from "../assets/pc.jpg";
import LevelStepper from "../components/sqlGames/LevelStepper.jsx";
import SQLCodeEditor from "../components/sqlGames/SQLCodeEditor.jsx";
import Joyride from "react-joyride";
import MDEditor from "@uiw/react-md-editor";

const Sql = () => {
    const [level, setLevel] = useState(0);
    const [aiResult, setAiResult] = useState(null);
    const [aiBtnClicked, setAiBtnClicked] = useState(false)
    const [query, setQuery] = useState("");
    const [submited, setSubmited] = useState(false);
    const [data, setData] = useState([]);
    const [resultData, setResultData] = useState([]);

    const aiBtnCLickHandler = () => {
        console.log(aiBtnClicked)
        setAiBtnClicked(!aiBtnClicked)
    }

    const state = {
        steps: [
            {
                target: ".code-step",
                content: "Here you will type your query",
            },
            {
                target: ".second-step",
                content: "This is Screen were you can see the output",
            },
            {
                target: ".first-step",
                content: "Here you will type your query",
            },
        ],
    };

    useEffect(() => {
        setData(resultData);
        console.log("resultData");
        console.log(data);

        console.log(submited);
    }, [submited]);

    return (
        <div className="flex flex-col h-screen bg-dark-grey overflow-hidden">
            {/* modal  */}
            {/* <Joyride
                steps={state.steps}
                continuous={true}
                showProgress={true}
                showSkipButton={true}
                disableBeacon={true}
            /> */}
            {/* level stepper  */}
            <LevelStepper level={level} />

            {/* sql editor and questions  */}
            <div className="bg-cover w-screen h-full flex">
                {/* sql editor and questions  */}
                <div className="first-step">
                    <SQLCodeEditor
                        setData={setResultData}
                        submited={submited}
                        setSubmited={setSubmited}
                        level={level}
                        setLevel={setLevel}
                        setAiResult={setAiResult}
                        setAiBtnClicked={aiBtnCLickHandler}
                    />
                </div>

                {/* desktop section for output  */}
                <div className="flex justify-center items-end flex-6 w-[100%] second-step">
                    <div
                        className="w-[80%] h-[80%] bg-contain flex justify-center "
                        style={{
                            backgroundImage: `url(${desktop})`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-[90%] h-[70%] mt-7 overflow-y-auto overflow-x-hidden">
                            <h1 className=" text-white-100 text-xl mb-3">
                                {query}
                            </h1>

                            {/* table  */}
                            
                                {!aiBtnClicked && <Table data={data} setData={setData} />}
                            
                            {aiBtnClicked && (
                                <MDEditor
                                    value={aiResult}
                                    hideToolbar={true}
                                    preview="preview"
                                    setAiResult={setAiResult}
                                    height={"100%"}
                                    
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sql;
