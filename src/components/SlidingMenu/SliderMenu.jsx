import { useState } from "react";
import Star from "../Back/Star";
import "./Slider.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

// import { register } from "module";

const routesConfig = [
  {
    id: "demolab",
    label: "Demo Labs",
    path: "demolab",
  },
  {
    id: "flex",
    label: "Flex",
    path: "flex",
  },
  {
    id: "cssSlelectors",
    label: "Selectors",
    path: "cssSlelectors",
  },
  {
    id: "sql",
    label: "Sql",
    path: "sql",
  },

  {
    id: "ai-interview",
    label: "AI Interview",
    path: "ai-interview",
  },

  {
    id: "Authentications",
    label: "Quiz",
    path: "Authentications",
  },
];

const SliderMenu = () => {
  const [animation, setAnimation] = useState(false);

  const onPlayButtonHandler = () => {
    setAnimation(true);

    gsap.fromTo(
      ".box1",
      { opacity: 0, x: -400 },
      { opacity: 1, x: 0, duration: 2 }
    );
    gsap.fromTo(
      ".box2",
      { opacity: 0, x: 400 },
      { opacity: 1, x: 0, duration: 2 }
    );
  };
  const letters = ["C", "O", "D", "E", "S", "A", "G", "A"];

  return (
    <>
      <Star color={"bg-black"} />
      <div className=" select-none w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center gap-20">
        {/* menu items  */}
        <div
          className={`flex w-4/6 justify-between  ${
            animation ? `opacity-100` : `opacity-0`
          } `}
        >
          <Link
            to={routesConfig[0].path}
            className="button_home__Sr9Yf rotate-2 box1"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u">
                {routesConfig[0].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
          <Link
            to={routesConfig[1].path}
            className="button_home__Sr9Yf -rotate-2 box2"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u">
                {routesConfig[1].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
        </div>

        <div
          className={`flex w-5/6 justify-between  ${
            animation ? `opacity-100` : `opacity-0`
          } `}
        >
          <Link
            to={routesConfig[2].path}
            className="button_home__Sr9Yf rotate-2 box1"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u text-[30px]">
                {routesConfig[2].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
          <Link
            to={routesConfig[3].path}
            className="button_home__Sr9Yf -rotate-2 box2"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u">
                {routesConfig[3].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
        </div>
        <div
          className={`flex w-4/6 justify-between  ${
            animation ? `opacity-100` : `opacity-0`
          } `}
        >
          <Link
            to={routesConfig[4].path}
            className="button_home__Sr9Yf rotate-2 box1"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u">
                {routesConfig[4].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
          <Link
            to={routesConfig[5].path}
            className="button_home__Sr9Yf -rotate-2 box2"
          >
            <h3>
              <span className="__className_5a08f5 button_pointer__OFO8u">
                {routesConfig[5].label}
              </span>
            </h3>
            <div className="button_box__F0U3p"></div>
          </Link>
        </div>
        {/* {routesConfig.map(
          (route, index) =>
            index % 2 === 0 && (
              <div
                key={index}
                className={`flex justify-between ${
                  animation ? "opacity-100" : "opacity-0"
                } ${index % 2 === 0 ? "w-4/6" : "w-5/6"}`}
              >
                <Link
                  to={route.path}
                  className={`button_home__Sr9Yf rotate-3 box1`}
                >
                  <h3>
                    <span className="__className_5a08f5 button_pointer__OFO8u">
                      {route.label}
                    </span>
                  </h3>
                  <div className="button_box__F0U3p"></div>
                </Link>
                {routesConfig[index + 1] && (
                  <Link
                    to={routesConfig[index + 1].path}
                    className={`button_home__Sr9Yf -rotate-3 box2`}
                  >
                    <h3>
                      <span className="__className_5a08f5 button_pointer__OFO8u">
                        {routesConfig[index + 1].label}
                      </span>
                    </h3>
                    <div className="button_box__F0U3p"></div>
                  </Link>
                )}
              </div>
            )
        )} */}
        {/* throne image and title  */}
        <div className=" h-full flex justify-center items-center  absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex-col">
          <ul className="body">
            {letters.map((letter, index) => (
              <li key={index}>
                <input type="checkbox" checked={index % 2 === 1} />{" "}
                <div className="div">{letter}</div>
              </li>
            ))}
          </ul>

          <div
            className={` absolute top-10 ${
              animation ? `opacity-0` : `opacity-100`
            } transition-all duration-2000 `}
            onClick={() => {
              onPlayButtonHandler();
            }}
          >
            <svg
              id="play"
              viewBox="0 0 163 163"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
            >
              <g fill="none">
                <g transform="translate(2.000000, 2.000000)" strokeWidth="4">
                  <path
                    d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
                    id="lineOne"
                    stroke="#A5CB43"
                  ></path>
                  <path
                    d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z"
                    id="triangle"
                    stroke="#A3CD3A"
                  ></path>
                  <path
                    d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159"
                    id="lineTwo"
                    stroke="#A5CB43"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <img
            className=" h-3/4 "
            src="https://makeathon6.mlsctiet.com/_next/image?url=%2FthroneFinal.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SliderMenu;
