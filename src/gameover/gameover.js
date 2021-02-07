import React, {useState} from 'react'
import './gameover.scss'
function GameOver(props) {

  return (
        <div className="game_over">
          <div className="game_overContent">
				  <p className="game_overtitle">G A M E &nbsp; O V E R</p>
          
          {props.brokeRecord ? <p className="newRecord"> Hooray! You set a new {props.gamemode} Mode website record: &nbsp;{props.record}</p>
          :<section>
          <p className="scoreFinal"> Your score: &nbsp;{props.score}</p>
          <p className="scoreFinal2"> {props.gamemode} Mode website record: &nbsp;{props.record}</p>
          </section>  
          }
          <p className="playagainorquit">&nbsp;Press R to Restart&nbsp;  | &nbsp; Press Q to QUIT</p>
           </div>
		    </div> 
  )
}

export default GameOver;
