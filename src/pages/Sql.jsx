import React, { useState } from "react";
import Table from "../components/sqlGames/Table";
import desktop from "../assets/pc.jpg";
import CssTabComponent from "../components/sqlGames/TabsLayout";
import { sqlGameQuestions } from "../data/sqlgameData";
import { StudentData } from "../data/StudentData";
import playImg from "../assets/img/play.svg";

// Example usage:

const SelectQuery = () => {
    const [result, setResult] = useState([]);
    const [columns, setColumns] = useState([]);
    const [query, setQuery] = useState("");
    const [submited, setSubmited] = useState(false);
    const [level, setLevel] = useState(0);
    const [correct, setCorrect] = useState(false);

    const handleSelect = (selectedColumns) => {
        if (selectedColumns === "*") {
            const copy = query;
            setQuery(copy + " " + "*");
            setResult(StudentData);
            console.log(result);
        } else {
            const filteredData = StudentData.map((student) =>
                selectedColumns.reduce((obj, column) => {
                    obj[column] = student[column];
                    return obj;
                }, {})
            );
            // console.log(filteredData)
            setResult(filteredData);
            // console.log(result)
        }
    };

    const handleWhere = () => {
        const query = "SELECT * FROM officers WHERE age > 40;";
        console.log("mujeeb");
        console.log(query);
        if (query.includes("WHERE")) {
            const condition = query.split("WHERE")[1].trim();
            const [field, operator, value] = condition.split(" ");

            const filtered = result.filter((student) => {
                switch (operator) {
                    case ">":
                        return student[field] > parseFloat(value);
                    case "<":
                        return student[field] < parseFloat(value);
                    case "=":
                        return student[field] === parseFloat(value);
                    // Add more cases for different operators as needed
                    default:
                        return true; // Return true for invalid operators
                }
            });

            setResult(filtered);
        }
    };

    const handletableCommands = (command) => {
        const copy = query;
        if (command === "SELECT") {
            setQuery(copy + "SELECT");
        } else if (command === "FROM") {
            setQuery(copy + " FROM");
        } else if (command === "WHERE") {
            setQuery(copy + " WHERE");
        } else if (command === "ORDER BY") {
            setQuery(copy + " ORDER BY");
        } else if (command == ",") {
            setQuery(copy + " ,");
        } else if (command == "StudentData") {
            setQuery(copy + " officers");
        } else if (command == "COUNT") {
            setQuery(copy + " COUNT");
        } else if (command == "SUM") {
            setQuery(copy + " SUM");
        } else if (command == "AVG") {
            setQuery(copy + " AVG");
        } else if (command == "MIN") {
            setQuery(copy + " MIN");
        } else if (command == "MAX") {
            setQuery(copy + " MAX");
        } else if (command == "(") {
            setQuery(copy + " (");
        } else if (command == ")") {
            setQuery(copy + " )");
        } else if (command == ";") {
            setQuery(copy + ";");
        } else if (command == "officers") {
            setQuery(copy + " officers");
        } else if (command == ">") {
            setQuery(copy + " >");
        } else if (command == "<") {
            setQuery(copy + " <");
        } else if (command == "=") {
            setQuery(copy + " =");
        } else if (command == "0") {
            setQuery(copy + "0");
        } else if (command == "1") {
            setQuery(copy + "1");
        } else if (command == "2") {
            setQuery(copy + "2");
        } else if (command == "3") {
            setQuery(copy + " 3");
        } else if (command == "4") {
            setQuery(copy + "4");
        } else if (command == "5") {
            setQuery(copy + "5");
        } else if (command == "6") {
            setQuery(copy + "6");
        } else if (command == "7") {
            setQuery(copy + "7");
        } else if (command == "8") {
            setQuery(copy + "8");
        } else if (command == "9") {
            setQuery(copy + "9");
        }

        if (query.includes("WHERE")) {
            console.log("hiii");
            handleWhere();
        }
    };

    const addColumn = (columnName) => {
        const copy = query;
        if (!copy.includes("WHERE")) {
            setQuery(copy + " " + columnName);
            const updatedColumns = [...columns, columnName];
            setColumns(updatedColumns);
            handleSelect(updatedColumns);
            console.log(columns);
        }
    };

    const onCheckClickHandler = () => {
        console.log(query);
        console.log(sqlGameQuestions[level].answer);
        if (query === sqlGameQuestions[level].answer) {
            setCorrect(true);
        }
    };

    const onNextClickHandler = () => {
        if (correct) {
            setLevel(level + 1);
            setCorrect(false);
            setQuery("");
            setSubmited(false);
            setResult(StudentData);
        }
    };

    const aggregateFunction = (aggrigate) => {
        handletableCommands(aggrigate);
    };

    const combinedSetState = {
        handletableCommands,
        handleSelect,
        addColumn,
        aggregateFunction,
        handleWhere,
    };

    return (
        <div className=" bg-cover w-screen h-screen flex bg-dark-grey">
            <div className="flex p-10 flex-4 justify-center items-center ">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h1 className=" text-white font-semibold text-3xl flex items-center">
                                    Level <span>{level + 1}</span>{" "}
                                    <span>:</span>
                                </h1>
                                <h1 className=" text-codeEditor font-bold text-3xl">
                                    {sqlGameQuestions[level].name}
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-white font-medium text-xl">
                                Scenario:
                            </h1>
                            <p className=" text-lg">
                                {sqlGameQuestions[level].scenario}
                            </p>
                        </div>

                        <div className="flex gap-1 flex-col">
                            <h1 className="text-white font-medium text-xl">
                                Question:{" "}
                            </h1>
                            <p>{sqlGameQuestions[level].question}</p>
                        </div>
                    </div>
                    <CssTabComponent combinedSetState={combinedSetState} />

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

            <div className="flex justify-center items-center flex-6 w-[100%] ">
                <div
                    className="w-[80%] h-[80%] bg-center bg-cover flex justify-center "
                    style={{
                        backgroundImage: `url(${desktop})`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="w-[90%] h-[430px] mt-7 overflow-y-auto">
                        <h1 className=" text-white-100 text-xl mb-3">
                            {query}
                        </h1>

                        {submited ? (
                            <Table
                                result={result}
                                getColumnNames={() =>
                                    Object.keys(result[0] || {})
                                }
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectQuery;
