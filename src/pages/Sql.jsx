import React, { useEffect, useState } from "react";
import Table from "../components/sqlGames/Table";
import desktop from "../assets/pc.jpg";

import SQLCodeEditor from "../components/sqlGames/SQLCodeEditor.jsx";
// Example usage:

const Sql = () => {
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState("");
    const [submited, setSubmited] = useState(false);
    const [data, setData] = useState([]);
    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        setData(resultData);
        console.log("resultData");
        console.log(data);
    
        console.log(submited);
    }, [submited]);

    return (
        <div className=" bg-cover w-screen h-screen flex bg-dark-grey">
            {/* sql editor and questions  */}
            <SQLCodeEditor setData={setResultData} submited={submited} setSubmited= { setSubmited} />

            {/* desktop section for output  */}
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

                        {/* table  */}
                        { (
                            <Table data={data} setData={setData} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sql;
