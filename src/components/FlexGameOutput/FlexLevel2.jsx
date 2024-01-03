/* eslint-disable react/prop-types */

import "./boyAnimations.css";

function FlexLevel2({
  levelData,

  pondStyles,
}) {
  const bg = levelData?.[1]?.assets[0];
  const greenhouse = levelData?.[1]?.assets[1];
  const greenboy = levelData?.[1]?.assets[2];
  const bulehouse = levelData?.[1]?.assets[3];
  const buleboy = levelData?.[1]?.assets[4];

  const fixed = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div>
        <div
          id="box"
          className=" flex relative    justify-between h-[600px] w-[700px] stroke-black-100 bg-white rounded-md"
          style={{
            ...fixed,
            ...pondStyles,
          }}
        >
          <img
            className=" absolute left-4 bottom-4 h-36 w-36"
            id="fo"
            src={greenhouse}
            alt="ndrb"
          />

          <img
            className="  absolute   right-4 top-[40%]  h-36 w-36"
            id="fo"
            src={bulehouse}
            alt="ndrb"
          />
          <img
            className="z-2  w-32 h-32 ml-[30px] boy-animation "
            id="mo"
            src={greenboy}
            alt="ndrb"
          />
          <img
            className="z-2   w-32 h-32 ml-[30px] boy-animation "
            id="mo"
            src={buleboy}
            alt="ndrb"
          />
        </div>
      </div>
    </div>
  );
}

export default FlexLevel2;
