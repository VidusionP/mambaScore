import React from "react";
import { Link } from 'react-router-dom';
import "./Player.scss";


export default function Player (props) {
    return(
        <div className="test123">
            {props.data
            .map ((item,i) => {
                return (
                    
                    <Link key={i} className="players__link" to={`/players/${item.personId}`}>     
                        <div key={i} className="players">
                            {item.isActive?<div><img  alt="headshot" className="players__headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}/></div>:""}
                            {item.isActive?<div className="players__name">{item.firstName+ " " + item.lastName}</div>:""}
                            {item.isActive?<div className="players__team">{item.fullName}</div>:""}
                            {item.isActive?<div className="players__position">{item.pos}</div>:""}
                            
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}