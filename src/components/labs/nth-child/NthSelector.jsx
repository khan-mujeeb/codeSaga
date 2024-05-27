import Star from "../../Back/Star";
import "./NthSelector.css";

function App() {
    return (
        <>
            <Star />
            <div className="flex flex-col items-center justify-center bg-black w-screen h-screen">
                <div className=" w-screen text-[#EB6F63]  font-semibold   items-center flex justify-center  text-center text-7xl drop-shadow-[4px_4px_var(--tw-shadow-color)] shadow-[#8ECEBA]">
                    Nth Child Selector in CSS
                </div>

                <div className=" bg-whiteflex flex-col items-center justify-center nth-child-container mt-10 w-full ">
                    <div className=" nth-child-left ">
                        <div className="nth-child-wrapper  w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">:first-child</h3>
                            <div className="nth-child-box-container first-child ">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>

                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">:last-child</h3>
                            <div className="nth-child-box-container last-child">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>

                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">
                                :nth-child(2)
                            </h3>
                            <div className="nth-child-box-container nth-child-second">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>

                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">
                                :nth-child(odd)
                            </h3>
                            <div className="nth-child-box-container nth-child-odd">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>
                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">
                                :nth-child(even)
                            </h3>
                            <div className="nth-child-box-container nth-child-even">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>

                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">
                                :nth-child(3n)
                            </h3>
                            <div className="nth-child-box-container nth-child-3n">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>

                        <div className="nth-child-wrapper w-[650px] flex justify-between">
                            <h3 className="text-xl text-white">
                                :nth-child(n+3)
                            </h3>
                            <div className="nth-child-box-container nth-child-other">
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                                <div className="nth-child-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
