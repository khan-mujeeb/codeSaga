import { useEffect, useState } from "react";
import Table from "../components/sqlGames/Table";
import desktop from "../assets/pc.jpg";
import LevelStepper from "../components/sqlGames/LevelStepper.jsx";
import SQLCodeEditor from "../components/sqlGames/SQLCodeEditor.jsx";

import MDEditor from "@uiw/react-md-editor";
import { sqlGameQuestions } from "../data/sqlgameData.js";
import useGetAnswerFromAi from "../api/useGetAnswerFromAi.jsx";

const Sql = () => {
    const { result, loading, error, getHelpFromAi } = useGetAnswerFromAi();

    const [level, setLevel] = useState(0);
    const [aiBtnClicked, setAiBtnClicked] = useState(false);
    const [query, setQuery] = useState("");
    const [submited, setSubmited] = useState(false);
    const [data, setData] = useState([]);
    const [resultData, setResultData] = useState([]);

    const aiBtnCLickHandler = () => {
        // console.log(aiBtnClicked);
        setAiBtnClicked(!aiBtnClicked);
    };

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

    const aiHintResponse = async (msg) => {
        await getHelpFromAi(msg);
    };
    useEffect(() => {
        setAiBtnClicked(false);
        aiHintResponse(sqlGameQuestions[level].question);
    }, [level]);

    useEffect(() => {
        setData(resultData);
        // console.log("resultData");
        // console.log(data);
    }, [submited]);

    return (
        <div className="flex flex-col h-screen bg-dark-grey overflow-hidden select-none">
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
                        setSubmited={setSubmited}
                        level={level}
                        setLevel={setLevel}
                        setAiBtnClicked={aiBtnCLickHandler}
                    />
                </div>

                {/* desktop section for output  */}
                <div className="flex justify-center items-end flex-6 w-[100%] second-step ">
                    <div
                        className="w-[80%] h-[80%] bg-contain flex justify-center overflow-auto  "
                        style={{
                            backgroundImage: `url(${desktop})`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="w-[90%] h-[70%] mt-7 overflow-y-hidden overflow-x-hidden">
                            <h1 className=" text-white-100 text-xl mb-3">
                                {query}
                            </h1>

                            {/* table  */}

                            {!aiBtnClicked && (
                                <Table data={data} setData={setData} />
                            )}

                            {aiBtnClicked && (
                                <div className=" h-full">
                                    {loading ? (
                                        <div className=" text-white-100">
                                            Generating Solution...
                                        </div>
                                    ) : (
                                        <div className=" h-full">
                                            {error ? (
                                                <div className=" text-white-100">
                                                    Error: {error}
                                                </div>
                                            ) : (
                                                <MDEditor
                                                    className="w-[90%]"
                                                    value={result}
                                                    loading={result}
                                                    hideToolbar={true}
                                                    preview="preview"
                                                    height={"100%"}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sql;
