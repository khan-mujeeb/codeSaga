import React from "react";
import Car from "../../../assets/car.png";

const Animation = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-semibold">CSS Transition Timing Function</h1>
            <p className="text-xl text-gray-700">Hover to see the transition</p>

            <div className=" mt-20 grid grid-cols-2 grid-rows-3 gap-3 ">
                {/* linear */}
                <div className="group w-[550px] relative border mb-12 cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Linear</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 ease-linear duration-1000" src={Car} alt="Car" />
                    </div>
                </div>

                {/* ease-in */}
                <div className="group w-[550px] relative border mb-12 cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Ease-in</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 ease-in duration-1000" src={Car} alt="Car" />
                    </div>
                </div>

                {/* ease-out */}
                <div className="group w-[550px] relative border mb-12 cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Ease-out</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 ease-out duration-1000" src={Car} alt="Car" />
                    </div>
                </div>

                {/* ease-in-out */}
                <div className="group w-[550px] relative border mb-12 cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Ease-in-out</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 ease-in-out duration-1000" src={Car} alt="Car" />
                    </div>
                </div>

                {/* steps */}
                <div className="group w-[550px] relative border mb-12 cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Steps (4 steps)</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 transition-[margin-left] duration-1000 step-custom" src={Car} alt="Car" />
                    </div>
                </div>

                {/* cubic-bezier */}
                <div className="group w-[550px] relative border cursor-pointer">
                    <h2 className="absolute left-6 -top-5 bg-white z-10 p-1 text-xl">Cubic-bezier (0.68, -0.55, 0.27, 1.55)</h2>
                    <div className="w-full flex">
                        <img className="w-32 group-hover:ml-96 transition-[margin-left] duration-1000 cubic-bezier-custom" src={Car} alt="Car" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;
