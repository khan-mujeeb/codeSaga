import React from 'react'
import bg1 from '../assets/img/mainBg.jpg'
import play from '../assets/img/play.svg'



export const GameStart = ({onStart}) => {
  
  return (
    <>
      <div className="w-screen h-screen p-1 overflow-hidden box-border bg-cover" style={{ backgroundImage:`url(${bg1})`}}>
        <div className="w-full h-full flex flex-col">
          <div className="m-10 w-screen h-40 font-roboto py-1 text-mountain flex justify-center  text-center text-9xl">
            CODE SAGA
          </div>
          <div className="flex h-60 my-10 w-full justify-center items-center text-5xl">
            <button 
              className='z-[1] bg-lime-600 scale-125 h-20 w-20 p-4 rounded-[80px] font-bold hover:bg-lime-400 hover:scale-150 transition-all duration-300 hover:border-black-500 '  
              onClick={onStart}
            >
              <img src={play} className='h-full w-full' alt="play"></img>
            
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
