import flexbox from "../data/flexgame.json";
import PropTypes from "prop-types";

const CodeSetion = ({level, onPosChange, onLevelChangeHandle, onAlignItem, onJustifyContent}) => {

    const leftBracket = "{";
    const rightBracket = "}";
    const codeHereMessage = "/* Code Here */";
    
    // const OnChangeHandler = (event) => {
    //     // console.log(event.target.value);
    //     onPosChange(event.target.value);
    // };

    const OnAlignItemHandler = (event) => {
        onAlignItem(event.target.value);
    };

    const OnJustifyContentHandler = (event) => {
        onJustifyContent(event.target.value);

    };

    return (
        <div className="flex flex-col bg-mainBg h-full flex-grow w-1/2 justify-center items-center text-2xl text-codeEditor">

            {/* question statement */}
            <h2 className="text-white font-bold mb-20">{flexbox.level1.questions[0]}</h2>

            {/* code box */}
            <div className="bg-yellow-50 pl-20 pr-20 pt-10 pb-10 rounded-md">

                {/* css selector  */}
                <h2 className="">#box {leftBracket}</h2>

                {/* code indentation block  */}
                <div className="ml-10">

                    {/* css property  */}
                    <h2>display: flex;</h2>

                    {/* actual coding area  */}
                    <div>
                        <p> {codeHereMessage} </p>
                        {/* <textarea onChange={OnChangeHandler} className="w-80 h-32 text-codeEditor p-2 mt-3 bg-codeBg"></textarea> */}
                        <div className="flex flex-col w-96 h-32 text-codeEditor p-2 mt-3 bg-codeBg justify-center items-center gap-5 pl-5"> 
                            <div className="flex flex-row w-full gap-2 items-center">
                                <p className=" text-green-900">justify-content: </p>
                                <input onChange={OnJustifyContentHandler} type="text" placeholder="center" className="bg-codeBg w-44 placeholder-white p-1"/>
                            </div>

                            <div className="flex flex-row w-full gap-2 items-center">
                                <p className=" text-green-900">align-items: </p>
                                <input onChange={OnAlignItemHandler} type="text" placeholder="center" className="bg-codeBg w-44 placeholder-white p-1"/>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* bracket closing */}
                <h2>{rightBracket}</h2>
            </div>
        </div>
    );
};


CodeSetion.propTypes = {
    level: PropTypes.number.isRequired,
    onPosChange: PropTypes.func.isRequired,
    onLevelChangeHandle: PropTypes.func.isRequired,
    onAlignItem: PropTypes.func.isRequired,
    onJustifyContent: PropTypes.func.isRequired,
};

export default CodeSetion;
