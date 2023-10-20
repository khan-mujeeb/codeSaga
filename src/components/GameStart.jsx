import React from 'react'

export const GameStart = ({onStart}) => {
  return (
    <>
    <div className=" w-screen h-screen p-1 overflow-hidden box-border">
    <div className="w-full h-full flex flex-col  ">
    <div className=" m-10 w-screen    py-1 flex justify-center  text-9xl">
       CODE SAGA
       </div>
       <div className=" flex grow my-10 w-full justify-center  text-5xl">
         <button onClick={onStart}>START</button>
       </div>
       
    </div >
       
       
       </div>
   </>
  )
}
