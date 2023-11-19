import bg1 from "../assets/img/mainBg.jpg";
import play from "../assets/img/play.svg";
// import Sql from "../pages/Sql.jsx";

export const GameStart = ({ onStart }) => {
  // Function to add data
  return (
    <>
      <div
        className="w-screen h-screen p-1 overflow-hidden box-border"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* <Sql /> */}
        <div className="w-full h-full flex flex-col">
          <div className="m-10 w-screen h-40 font-roboto py-1 text-mountain flex justify-center  text-center text-9xl">
            CODE SAGA
          </div>
          <div className="flex h-60 my-10 w-full justify-center items-center text-5xl relative">
            <button
              className="z-[1] absolute bg-lime-600 scale-125 bottom-[120px] h-20 w-20 p-4 rounded-[50%] font-bold hover:bg-lime-400 hover:scale-150 transition-all duration-300 hover:border-black-500 "
              onClick={onStart}
            >
              <img src={play} className="h-full w-full" alt="play"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
