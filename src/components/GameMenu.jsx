import { NavLink } from "react-router-dom";
import GameMenuUnit from "./GameMenuUnit";
import menubg from "../assets/img/menubg.jpg";

const routesConfig = [
  {
    id: "unit",
    label: "Units",
    path: "unit",
  },
  {
    id: "flex",
    label: "Flex",
    path: "flex",
  },
  {
    id: "grid",
    label: "Grid",
    path: "animations",
  },
  {
    id: "media-query",
    label: "Media Query",
    path: "media-qurey",
  },
  { id: "animations", label: "Animations", path: "/animations" },
];

const GameMenu = () => {
  const rendergameList = routesConfig.map((route) => {
    return (
      <NavLink
        to={route.path}
        key={route.id}
        className={"bg-blue-500  py-5 px-5  rounded-md shadow-md"}
        style={{
          fontFamily: "Source Code Pro,  monospace",
          fontSize: "25px",
          backgroundColor: " #999",
        }}
      >
        {route.label}
      </NavLink>
    );
  });

  return (
    <>
      <div
        className=" w-screen h-screen p-1 overflow-hidden box-border"
        style={{
          backgroundImage: `url(${menubg})`,
          backgroundSize: "100% 100% ",
        }}
      >
        <div className="w-full h-full flex flex-col  ">
          <div className="m-1 w-screen  text-stone-400  h-40 font-roboto py-1 items-center flex justify-center  text-center text-6xl">
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
