import bg1 from "../assets/img/mainBg.jpg";
import "../styles/start.css";
// import Sql from "../pages/Sql.jsx";
import { useRef } from "react";
import gsap, { Power4, Elastic } from "gsap";

export const GameStart = ({ onStart }) => {
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  const activeMagneto = (event) => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 50;
    const magnetoTextStrength = 80;
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;
    gsap.to(magneto, {
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      duration: 1,
      ease: Power4.easeOut,
    });
    gsap.to(magnetoText, {
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      duration: 1,
      ease: Power4.easeOut,
    });
  };
  const resetMagneto = () => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;
    gsap.to(magneto, {
      x: 0,
      y: 0,
      duration: 1,
      ease: Elastic.easeOut,
    });
    gsap.to(magnetoText, {
      x: 0,
      y: 0,
      duration: 1,
      ease: Elastic.easeOut,
    });
  };
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
          <div className="flex  w-full justify-center items-center text-5xl relative">
            <button
              onMouseMove={activeMagneto}
              onMouseLeave={resetMagneto}
              ref={magnetoRef}
              className="magneto"
              onClick={onStart}
            >
              <span ref={magnetoTextRef} className="text">
                START!!
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
