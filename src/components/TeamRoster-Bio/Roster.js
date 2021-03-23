import React from 'react';
import "./Roster.scss"
import { Link } from 'react-router-dom';

export default function Roster(props) {
    return(
        <>
            <div className="roster">
                <div className="roster__headrow">
                    <div className="roster__headrow--image"></div>
                    <div className="roster__headrow--name">NAME</div>
                    <div className="roster__headrow--title">POS</div>
                    <div className="roster__headrow--title">HEIGHT</div>
                    <div className="roster__headrow--title">WEIGHT</div>
                    <div className="roster__headrow--title">JERSEY#</div>
                    <div className="roster__headrow--title">DOB</div>
                    <div className="roster__headrow--title">COUNTRY</div>
                </div>
                {props.player.map((item,i) => {
                    return(
                        <Link key={i} className="roster__bodyrow--link" to={`/players/${item.personId}`}>
                            <div key={i} className="roster__bodyrow">
                                <img className="roster__bodyrow--image" alt="headshot"src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}/>
                                <div className="roster__bodyrow--name">{item.firstName + " " + item.lastName}</div>
                                <div className="roster__bodyrow--value">{item.pos}</div>
                                <div className="roster__bodyrow--value">{item.heightFeet + "'" + item.heightInches + '"'}</div>
                                <div className="roster__bodyrow--value">{item.weightPounds +"lbs"}</div>
                                <div className="roster__bodyrow--value">#{item.jersey}</div>
                                <div className="roster__bodyrow--value">{item.dateOfBirthUTC}</div>
                                <div className="roster__bodyrow--value">{item.country}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            
        </>
    )
}