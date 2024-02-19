import React from 'react'
import back from "../assets/CssMenuImages/quizbg.jpg"
import "../styles/quizstyle.css"
import Star from '../components/Back/Star.jsx'

function Quizui() {
  return (
    <>
    <Star/>
    <div className='w-screen h-screen p-1 overflow-y-scroll overflow-x-hidden box-border'
    style={{
        // backgroundImage: `url("${back}")`,
        // backgroundSize: "100% 100% ",
      }}>
            <div className='submit'>
                <div>60</div>
                <button>Submit</button>
            </div>
        <div className=" flex justify-center items-center m-24">
            <div className='app'>
                <p className=' text-xl font-bold text-center '>Sample Quiz</p>
                <div className="quiz">
                    <h2>What does CSS stands for?</h2>
                    <div className="answer-options">
                        <button className="btn">Answer 1</button>
                        <button className="btn">Answer 2</button>
                        <button className="btn">Answer 3</button>
                        <button className="btn">Answer 4</button>
                    </div>
                    <div className="controls">
                        <button className="ctl-btn">Previous</button>
                        <button className="ctl-btn">Next</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Quizui