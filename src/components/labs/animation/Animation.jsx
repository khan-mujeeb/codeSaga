import Car from "../../../assets/car.png";
import Star from "../../Back/Star";
import "../../../styles/star.css";
const Animation = () => {
  return (
    <>
      <Star color={"bg-black"} />
      <div className="select-none w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center ">
        <div className=" w-screen text-[#EB6F63] h-40 font-semibold   items-center flex justify-center  text-center text-7xl drop-shadow-[4px_4px_var(--tw-shadow-color)] shadow-[#8ECEBA]">
          CSS Transition Timing Function
        </div>

        <div className="  grid grid-cols-2 grid-rows-3 gap-4 ">
          {/* linear */}
          <div className="group w-[550px] relative border h-[100px]  mt-6    rounded-md  cursor-pointer">
            <h2 className="absolute left-6 -top-5 rounded-md bg-white z-10 p-1 text-xl">
              Linear
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 ease-linear duration-1000"
                src={Car}
                alt="Car"
              />
            </div>
          </div>

          {/* ease-in */}
          <div className="group w-[550px] relative border rounded-md  mt-6   h-[100px] cursor-pointer">
            <h2 className="absolute left-6 -top-5 rounded-md bg-white z-10 p-1 text-xl">
              Ease-in
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 ease-in duration-1000"
                src={Car}
                alt="Car"
              />
            </div>
          </div>

          {/* ease-out */}
          <div className="group w-[550px] relative border  h-[100px]  mt-6   rounded-md cursor-pointer">
            <h2 className="absolute left-6 -top-5 rounded-md bg-white z-10 p-1 text-xl">
              Ease-out
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 ease-out duration-1000"
                src={Car}
                alt="Car"
              />
            </div>
          </div>

          {/* ease-in-out */}
          <div className="group w-[550px] relative border  h-[100px]  mt-6  rounded-md cursor-pointer">
            <h2 className="absolute left-6 -top-5  rounded-md bg-white z-10 p-1 text-xl">
              Ease-in-out
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 ease-in-out duration-1000"
                src={Car}
                alt="Car"
              />
            </div>
          </div>

          {/* steps */}
          <div className="group w-[550px] relative border  h-[100px]  mt-6   rounded-md cursor-pointer">
            <h2 className="absolute left-6 -top-5  rounded-md bg-white z-10 p-1 text-xl">
              Steps (4 steps)
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 transition-[margin-left] duration-1000 step-custom"
                src={Car}
                alt="Car"
              />
            </div>
          </div>

          {/* cubic-bezier */}
          <div className="group w-[550px] relative h-[100px] border mt-6      rounded-md cursor-pointer">
            <h2 className="absolute left-6 -top-5  rounded-md bg-white z-10 p-1 text-xl">
              Cubic-bezier (0.68, -0.55, 0.27, 1.55)
            </h2>
            <div className="w-full flex">
              <img
                className="w-32 group-hover:ml-96 transition-[margin-left] duration-1000 cubic-bezier-custom"
                src={Car}
                alt="Car"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
