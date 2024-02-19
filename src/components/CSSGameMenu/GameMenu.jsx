import { NavLink } from "react-router-dom";
// import GameMenuUnit from "./GameMenuUnit";

import flex from "../../assets/CssMenuImages/flex.png";
import grid from "../../assets/CssMenuImages/grid.jpg";

import units from "../../assets/CssMenuImages/units.svg";
import sql from "../../assets/CssMenuImages/sql.png";
// import { register } from "module";

const routesConfig = [
  {
    id: "unit",
    label: "Units",
    path: "unit",
    url: units,
  },
  {
    id: "flex",
    label: "Flex",
    path: "flex",
    url: flex,
  },
  {
    id: "grid",
    label: "Grid",
    path: "grid",
    url: grid,
  },
  {
    id: "sql",
    label: "Sql",
    path: "sql",
    url: sql,
  },
  {
    id: "register",
    label: "register",
    path: "register",
    url: sql,
  },
  {
    id: "ai-interview",
    label: "AI Interview",
    path: "ai-interview",
    url: "https://www.globaltimes.cn/Portals/0/attachment/2022/2022-05-27/04143cc7-2bd0-4e3a-bec3-1a250f689a86.jpeg",
  },
];

const GameMenu = () => {
  const rendergameList = routesConfig.map((route) => {
    return (
      <NavLink
        to={route.path}
        key={route.id}
        className={"py-1 px-1  rounded-md shadow-md"}
        // style={{
        //   fontFamily: "Source Code Pro,  monospace",
        //   fontSize: "25px",
        //   backgroundColor: " #999",
        // }}
      >
        {/* {route.label} */}
        <div className="w-full max-w-xs bg-white border hover:scale-95 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-5 rounded-t-3xl w-80 h-40 "
              src={route.url}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-2xl mb-3 text-center font-roboto tracking-tight text-gray-900 dark:text-white">
                {route.label}
              </h5>
            </a>
            <div className="flex justify-center">
              <a
                href="#"
                className="text-white bg-blue-700 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green-600 hover:scale-95 dark:focus:ring-blue-800"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </NavLink>
    );
  });

  return (
    <>
      <div
        className=" w-screen h-screen p-1 overflow-y-scroll overflow-x-hidden box-border"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/59/2f/ae/592fae18268bc4eecc25879241ff90b5.gif")`,
          backgroundSize: "100% 100% ",
        }}
      >
        <div className="w-full h-full flex flex-col  ">
          <div className="m-1 w-screen text-white h-40 font-roboto py-1 items-center flex justify-center  text-center text-7xl">
            GAME MENU
          </div>
          <div className=" flex w-screen flex-wrap px-10 gap-4    grow my-10   text-5xl justify-center items-center">
            {rendergameList}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMenu;
