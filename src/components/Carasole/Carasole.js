import React from "react";
import "./Carasole.scss";
import { Link } from 'react-router-dom';

export default function Carasole(props){
    return(
        <div className="card">
            {props.testing
            .map ((item,i) => {
                return( 
                    <div key={i} className="card__game">
                        <div className="card__game--team"><Link to= {`/teams/${item.vTeam.triCode}/${item.vTeam.teamId}`}><img alt="logo" className="card__game--logo"src={`https://www.nba.com/assets/logos/teams/primary/web/${item.vTeam.triCode}.svg`}/></Link>{item.vTeam.triCode} <div className="card__game--content">@</div> {item.hTeam.triCode}<Link to= {`/teams/${item.hTeam.triCode}/${item.hTeam.teamId}`}><img className="card__game--logo" alt="logo"src={`https://www.nba.com/assets/logos/teams/primary/web/${item.hTeam.triCode}.svg`}/></Link></div>
                        <div className="card__game--time">{item.period.current === 0? item.startTimeEastern:item.vTeam.score + " - " + item.hTeam.score}{item.period.current > 0 & item.isGameActivated === true?" Q"+item.period.current : ""}{item.isGameActivated === false && item.period.current === 4? " FINAL":""}</div>
                    </div>
                )
            })}
        </div>
    )
}