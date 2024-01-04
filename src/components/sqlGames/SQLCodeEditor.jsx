import { sqlGameQuestions } from "../../data/sqlgameData";
import { useState } from "react";
import playImg from "../../assets/img/play.svg";
import { useEffect } from "react";
import alasql from "alasql";
import sqlUtils from "./sqlUtils";
import ConfettiExplosion from "react-confetti-explosion";
import SqlQueryEditor from "./SqlQueryEditor.jsx";
import CustomButton from "./CustomButton.jsx";
import ModalComponent from "./ModalComponent.jsx";

const SQLCodeEditor = ({ setData, submited, setSubmited, level, setLevel }) => {
    const [isExploding, setIsExploding] = useState(false);
    const [query, setQuery] = useState("SELECT * FROM Officers ");
    const [officerTable, setOfficerTable] = useState([]); // [
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
            const temp = mybase.exec("SELECT * FROM Officers");
            setOfficerTable(temp);
        } catch (error) {
            // console.log(error);
        }
        setSubmited(false);
    }, [query]);

    const onExecuteClickHandler = () => {
        setSubmited(true);
    };

    const inputHandler = (event) => {
        setQuery(event.target.value);
        console.log(query);
    };
    const onCheckClickHandler = () => {
        console.log(query);
        console.log(sqlGameQuestions[level].answer);
        if (
            query.toLowerCase() === sqlGameQuestions[level].answer.toLowerCase()
        ) {
            setCorrect(true);
            setIsExploding(true);
        }
    };

    const onNextClickHandler = () => {
        if (correct) {
            setLevel(level + 1);
            setCorrect(false);
            setQuery("");
            setSubmited(false);
            setIsExploding(false);
            setCorrect(false);
            setData([]);
            setQuery("");
        } else {
            alert("Enter Correct Query to Proceed");
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
                                {"Level "} <span>{level + 1}</span>{" "}
                                <span>:</span>
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

                    {/* editor  */}
                    <SqlQueryEditor
                        query={query}
                        setQuery={setQuery}
                        inputHandler={inputHandler}
                    />
                </div>

                {/* buttons  */}
                <div className="flex justify-between w-full items-center px-10">
                    <CustomButton
                        title="Execute"
                        onClickHandler={onExecuteClickHandler}
                    />
                    <div>
                        <CustomButton
                            title="Check"
                            onClickHandler={onCheckClickHandler}
                        />
                        {isExploding && <ConfettiExplosion />}
                    </div>
                    <CustomButton
                        title="Next"
                        onClickHandler={onNextClickHandler}
                        correct={correct}
                    />

                    <ModalComponent table={officerTable}/>
                </div>
            </div>
        </div>
    );
};

export default SQLCodeEditor;
