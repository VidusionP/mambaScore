import React from 'react';
import "./Schedule.scss"


export default function Today(props) {
    return(
        <div className="scheduleDate">
            {props.today.map((item,i) => {
                return(
                    <div key={i} className="scheduleDate__game">
                        <div><img className="scheduleDate__game--image" alt="logo" src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.vTeam.triCode}_logo.svg`}/></div>
                        <div className="scheduleDate__game--card">
                            <div className="scheduleDate__game--card--time">{item.period.current === 0? 'item.startTimeEastern':"Hello"}</div>
                            <div className="scheduleDate__game--card--text">@</div>
                            <div className="scheduleDate__game--card--arena">{item.arena.name}</div>
                        </div>
                        <div><img className="scheduleDate__game--image" alt="logo" src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.hTeam.triCode}_logo.svg`}/></div>
                    </div>
                )
            })}
        </div>
    )
}
