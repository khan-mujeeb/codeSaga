import React from 'react'

function practice() {
  return (
    <>
    <div id="leaderboard-container">
              
              <ol id="leaderboard">
                {/* Map through leaderboard and render list items */}
                  <div className="center">
                    <h2 className="result text-center text-black pb-5 font-bold text-xl">Leaderboard</h2>
                    <div className="list">
                        <div className="item">
                          <div className="pic bg-black" >
                          </div>
                          <div className="name">
                            <b>
                              Pravin Kale
                            </b>
                          </div>
                          <div className="score">
                            5000
                          </div>
                        </div>
                        <div className="item">
                          <div className="pic">
                          </div>
                          <div className="name">
                            pravin kale
                          </div>
                          <div className="score">
                            5000
                          </div>
                        </div>
                        <div className="item">
                          <div className="pic">
                          </div>
                          <div className="name">
                            pravin kale
                          </div>
                          <div className="score">
                            5000
                          </div>
                        </div>
                        <div className="item">
                          <div className="pic">
                          </div>
                          <div className="name">
                            pravin kale
                          </div>
                          <div className="score">
                            5000
                          </div>
                        </div>
                    </div>
                  </div>
              </ol>
            </div>
    </>
  )
}

export default practice