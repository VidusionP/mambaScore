import React from 'react';
import "./Team.scss"
import { Link } from 'react-router-dom';

export default function Team(props) {
    return(
        <>
        <h2 className="teamlist__title">Team List</h2>
        <div className="teamlist">
                <div className="teamlist__headrow">
                    <div className="teamlist__headrow--name">NAME</div>
                    <div className="teamlist__headrow--conf">Conf.</div>
                    <div className="teamlist__headrow--div">Division</div>
                </div>
                <div className="teamlist__body">
                    {props.team.map ((item,i) => {
                        return (
                            
                        <Link key ={i} className="teamlist__body--link" to={`/teams/${item.tricode}/${item.teamId}`}>
                            <div key={i} className="teamlist__body--row">
                                <div><img className="teamlist__body--row--image" alt="logo"src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.tricode}_logo.svg`}/></div>
                                <div className="teamlist__body--row--name">{item.fullName}</div>
                                <div className="teamlist__body--row--conf">{item.confName}</div>
                                <div className="teamlist__body--row--div">{item.divName}</div>
                            </div>
                        </Link>
                        )
                    })}

                </div>
        </div>
        </>
    )
}