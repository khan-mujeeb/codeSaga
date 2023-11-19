import React, { useState } from "react";
import "./Game.css"; // Import your CSS file

const CssTabComponent = ({ combinedSetState }) => {
    const { handletableCommands, handleSelect, addColumn, aggregateFunction } =
        combinedSetState;
    const [selectedTab, setSelectedTab] = useState("one");

    const tableCommandsOptions = ["SELECT", "FROM", "WHERE", "ORDER BY"];
    const columnOptions = ["id", "name", "age", "grade"];
    const tableOptions = ["(", ")", ">", "<", "=", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const aggregateOptions = ["COUNT", "SUM", "AVG", "MIN", "MAX"];

    const handleTabChange = (tabId) => {
        setSelectedTab(tabId);
    };

    return (
        <div>
            <div className="warpper bg-white-100 rounded-lg w-[500px]">
                <input
                    className="radio"
                    id="one"
                    name="group"
                    type="radio"
                    checked={selectedTab === "one"}
                    onChange={() => handleTabChange("one")}
                />
                <input
                    className="radio"
                    id="two"
                    name="group"
                    type="radio"
                    checked={selectedTab === "two"}
                    onChange={() => handleTabChange("two")}
                />
                <input
                    className="radio"
                    id="three"
                    name="group"
                    type="radio"
                    checked={selectedTab === "three"}
                    onChange={() => handleTabChange("three")}
                />
                <div className="tabs flex w-[500px]">
                    <label className="tab flex-1 text-center" id="one-tab" htmlFor="one">
                        Table
                    </label>
                    <label className="tab  flex-1 text-center" id="two-tab" htmlFor="two">
                        Aggregate
                    </label>
                    <label className="tab  flex-1 text-center" id="three-tab" htmlFor="three">
                        Symbols
                    </label>
                </div>
                <div className="panels h-72 rounded-lg w-[1000px]">
                    <div
                        className={`panel ${
                            selectedTab === "one" ? "active" : ""
                        }`}
                        id="one-panel"
                    >
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-between h-52">
                                {tableCommandsOptions.map((command) => (
                                    <button
                                        key={command}
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-32"
                                        onClick={() =>
                                            handletableCommands(command)
                                        }
                                    >
                                        {command}
                                    </button>
                                ))}
                            </div>

                            

                            <div className="flex flex-col h-52 justify-between">
                                <div className="flex">
                                    <button
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                        onClick={() => handleSelect("*")}
                                    >
                                        *
                                    </button>
                                    <button
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                        onClick={() => handletableCommands("officers")}
                                    >
                                        officers
                                    </button>
                                    <button
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                        onClick={() => handletableCommands(";")}
                                    >
                                        ;
                                    </button>
                                </div>
                                {columnOptions.map((column) => (
                                    <button
                                        key={column}
                                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                        onClick={() => addColumn(column)}
                                    >
                                        {column.charAt(0).toUpperCase() +
                                            column.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className={`panel ${
                            selectedTab === "two" ? "active" : ""
                        }`}
                        id="two-panel"
                    >
                        {/* aggregateFunction */}
                        <div className="flex justify-between mb-4">
                            {aggregateOptions.map((command) => (
                                <button
                                    key={command}
                                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                    onClick={() => aggregateFunction(command)}
                                >
                                    {command}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        className={`panel ${
                            selectedTab === "three" ? "active" : ""
                        }`}
                        id="three-panel"
                    >
                        <div className="flex justify-between mb-4 flex-wrap">
                            {tableOptions.map((table) => (
                                <button
                                    key={table}
                                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                    onClick={() => handletableCommands(table)}
                                >
                                    {table}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssTabComponent;
