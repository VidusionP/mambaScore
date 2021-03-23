import React from 'react';
import "./Teamheader.scss"

export default function Header(props){
    return(
        <div className="teamheader">
            <div className="teamheader__info">
                <div><img className="teamheader__info--logo" alt="logo"src={`https://ca.global.nba.com/media/img/teams/00/logos/${props.team1.abbreviation}_logo.svg`}/></div>
                <div className="teamheader__info--team">
                    <div className="teamheader__info--team--name">{props.team1.name + " " + props.team1.nickname}</div>
                    <div className="teamheader__info--team--rank">{props.team2.confName + " " + "#"+props.teams.confRank}</div>
                </div>
                <div className="teamheader__info--score">
                    {props.teams.win+"W" + "-" + props.teams.loss+"L"}
                </div>
            </div>
            <div className="teamheader__stats">
                <div className="teamheader__stats--year">2020 - 2021 Ranking</div>
                <div className="teamheader__stats--rank">
                    <div className="teamheader__stats--rank--title">PPG</div>
                    <div className="teamheader__stats--rank--value">{props.team1.ppg.rank}</div>
                </div>
                <div className="teamheader__stats--rank">
                    <div className="teamheader__stats--rank--title">APG</div>
                    <div className="teamheader__stats--rank--value">{props.team1.apg.rank}</div>
                </div>
                <div className="teamheader__stats--rank">
                    <div className="teamheader__stats--rank--title">RPG</div>
                    <div className="teamheader__stats--rank--value">{props.team1.trpg.rank}</div>
                </div>
            </div>
        </div>
    )
}