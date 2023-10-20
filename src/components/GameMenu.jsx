import React from 'react'
const flexgame = {1:'Units',2:'Flex',3:'Grid',4:'media-query',5:'animations'}
import GameMenuUnit from "./GameMenuUnit";
const GameMenu = () => {
    const rendergameList = Object.entries(flexgame).map(([key, value], index) => {
        return (
         <>
          <div key={index}>
          <GameMenuUnit value={value}/>
          </div>
        
         </>
        );
      });
    



  return (
    <>
   <div className=" w-screen h-screen p-1 overflow-hidden box-border">
   <div className="w-full h-full flex flex-col  ">
   <div className=" m-10 w-screen    py-1 flex justify-center  text-9xl">
       GameMenu
       </div>
      <div className=" flex w-screen flex-wrap px-10 gap-4    grow my-10   text-5xl justify-center items-center">
      {rendergameList}
      </div>
      
   </div >
      
      
      </div>
  </>
  )
}

export default GameMenu