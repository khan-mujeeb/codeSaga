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
import SpinningLoader from "./SpinningLoader.jsx";
import useCheckAnswer from "../../api/useCheckAnswer.jsx";
import { Toaster, toast } from "react-hot-toast";

const SQLCodeEditor = ({ setData, setSubmited, level, setLevel, setAiBtnClicked }) => {
    

    const {result, loading, error, getAnswerFromAi} = useCheckAnswer();
    
    
    

    // states
    const [isExploding, setIsExploding] = useState(false);
    const [query, setQuery] = useState("");
    const [officerTable, setOfficerTable] = useState([]); // [
    const [correct, setCorrect] = useState(false);


    // show table data
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

    // run query and get result
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
        console.log("execute clicked" );
        // setAiBtnClicked(false)
        setSubmited(true);
    };

    const inputHandler = (event) => {
        setQuery(event.target.value);
        // console.log(query);
    };



    // function to check the correct answer
    const onCheckClickHandler = () => {

        getAnswerFromAi(sqlGameQuestions[level].answer, query, setCorrect, setIsExploding)
        

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
            
        } else {
            alert("Enter Correct Query to Proceed");
        }
    };

    return (
        <div className={`flex p-10 flex-4 justify-center items-center `} >
            <div><Toaster/></div>
            
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
                        <h1 className="text-white font-medium text-xl ">
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
                    {isExploding && <ConfettiExplosion />}
                    {/* editor  */}

                    {
                        loading && <SpinningLoader />
                    }

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
