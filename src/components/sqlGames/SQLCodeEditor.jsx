import { sqlGameQuestions } from "../../data/sqlgameData";
import { useState } from "react";
import playImg from "../../assets/img/play.svg";
import { useEffect } from "react";
import alasql from "alasql";
import sqlUtils from "./sqlUtils";

const SQLCodeEditor = ({ setData, submited, setSubmited }) => {
    const [query, setQuery] = useState(
        "SELECT * FROM Officers "
    );


    const [level, setLevel] = useState(0);
    const [result, setResult] = useState([]);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        // Create a new database and execute a query
        const mybase = new alasql.Database();

        // create tablle
        mybase.exec(sqlUtils.createTable);

        // enter data
        mybase.exec(sqlUtils.insertData);

        // Execute a query and log the result
        try {
            const res = mybase.exec(query);
            console.log(query);
            setData(res);
            console.log(res);

        } catch (error) {
            // console.log(error);
        }
        setSubmited(false);
    }, [query]);

    const inputHandler = (event) => {
        setQuery(event.target.value);
        console.log(query);
    };
    const onCheckClickHandler = () => {
        console.log(query);
        console.log(sqlGameQuestions[level].answer);
        if (query.toLocaleLowerCase === sqlGameQuestions[level].answer.toLocaleLowerCase) {
            setCorrect(true);
        }
    };

    const onNextClickHandler = () => {
        if (correct) {
            setLevel(level + 1);
            setCorrect(false);
            setQuery("");
            setSubmited(false);
        }
    };

    return (
        <div className="flex p-10 flex-4 justify-center items-center ">
            <div className="flex flex-col gap-10">

                {/* level info  */}
                <div className="flex flex-col gap-2">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <h1 className=" text-white font-semibold text-3xl flex items-center">
                                Level <span>{level + 1}</span> <span>:</span>
                            </h1>
                            <h1 className=" text-codeEditor font-bold text-3xl">
                                {sqlGameQuestions[level].name}
                            </h1>
                        </div>
                    </div>

                    {/* scenario  */}
                    <div className="flex flex-col">
                        <h1 className="text-white font-medium text-xl">
                            Scenario:
                        </h1>
                        <p className=" text-lg">
                            {sqlGameQuestions[level].scenario}
                        </p>
                    </div>

                    {/* question  */}
                    <div className="flex gap-1 flex-col">
                        <h1 className="text-white font-medium text-xl">
                            Question:{" "}
                        </h1>
                        <p>{sqlGameQuestions[level].question}</p>
                    </div>

                    {/* input  */}
                    <input
                        type="text"
                        onChange={inputHandler}
                        className="w-[500px] h-[50px] border-2 border-black-100 rounded-lg px-5 py-2.5 text-start me-2 mb-2 dark:border-black-100 dark:text-black-100 dark:hover:text-white dark:hover:bg-black-100 dark:focus:ring-black-100"
                    />
                </div>

                {/* buttons  */}
                <div className="flex justify-between w-[500px] items-center">
                    <button
                        className="flex gap-1"
                        onClick={() => {
                            setSubmited(true);
                        }}
                    >
                        <img src={playImg} alt="" />
                        <h1>Execute</h1>
                    </button>
                    <button
                        className=" font-bold text-black-700 hover:text-white border border-black-100 hover:bg-black-100 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black-100 dark:text-black-100 dark:hover:text-white dark:hover:bg-black-100 dark:focus:ring-black-100"
                        onClick={() => {
                            onCheckClickHandler();
                        }}
                    >
                        Check
                    </button>
                    <button
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all duration-300"
                        style={{
                            backgroundColor: correct ? "green" : "",
                        }}
                        onClick={() => {
                            onNextClickHandler();
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SQLCodeEditor;
