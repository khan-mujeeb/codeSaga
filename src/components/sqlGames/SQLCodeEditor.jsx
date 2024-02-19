import { sqlGameQuestions } from "../../data/sqlgameData";
import { useState } from "react";
import { useEffect } from "react";
import alasql from "alasql";
import sqlUtils from "./sqlUtils";
import ConfettiExplosion from "react-confetti-explosion";
import SqlQueryEditor from "./SqlQueryEditor.jsx";
import CustomButton from "./CustomButton.jsx";
import ModalComponent from "./ModalComponent.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "../button/AnimatedBtn.css"



const SQLCodeEditor = ({ setData, submited, setSubmited, level, setLevel, setAiResult, setAiBtnClicked }) => {
    // gemini initializataion
    const genAI = new GoogleGenerativeAI(
        "AIzaSyBxqd-5jq5AP0LWxpdeuORYgpH07mGgIPU"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // states
    const [isExploding, setIsExploding] = useState(false);
    const [query, setQuery] = useState("");
    const [officerTable, setOfficerTable] = useState([]); // [
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        getHelpFromAi();
    }, [level]);

    async function getHelpFromAi() {
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: "The Officer table have the following coloumns officer_id, first_name, last_name, rank, department",
                },
                {
                    role: "model",
                    parts: "Great to meet you. What would you like to know?",
                },
                {
                    role: "user",
                    parts: "I want you to explain all the possible solution for the given sql query",
                },
                {
                    role: "model",
                    parts: "Okay, may i know what your sql query",
                },
            ],
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const msg = sqlGameQuestions[level].question

        const result = await chat.sendMessage(msg);
        const response = await result.response;
        const text = response.text();
        
        console.log(msg)
        console.log(text);
        setAiResult(text)


        
        
        // For text-only input, use the gemini-pro model
    }

    useEffect(() => {
        // Create a new database and execute a query
        const mybase = new alasql.Database();

        mybase.exec(sqlUtils.createTable);

        // enter data
        mybase.exec(sqlUtils.insertData);

        try {
            const temp = mybase.exec("SELECT * FROM Officers");
            setOfficerTable(temp);
        } catch (error) {
            // console.log(error);
        }
        
    },[]);

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
            setData(res);
            
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

    // function to check the correct answer
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

    // handler for next level change 
    const onNextClickHandler = () => {
        if (correct) {
            setLevel(level + 1);
            setCorrect(false);
            setQuery("");
            setSubmited(false);
            setIsExploding(false);
            setCorrect(false);
            setData([]);
            setAiBtnClicked(false)
            setAiResult(null)
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

                <div className="flex flex-col justify-center items-center gap-5">
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

                        <ModalComponent table={officerTable} />
                    </div>
                    
                    {/* ai button  */}
                    <div onClick={()=> setAiBtnClicked()} className={`gradient-background text-white font-semibold px-3 rounded-md py-1 cursor-pointer`}>get Help from AI</div>
                </div>
            </div>
        </div>
    );
};

export default SQLCodeEditor;
