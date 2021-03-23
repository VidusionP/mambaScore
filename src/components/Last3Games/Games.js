import React from 'react';
import { Link } from 'react-router-dom'
import "./Games.scss"

export default function Games(props) {
    return(
        <div className="games">
            <div className="games__heading">
                Last 3 Games Played
            </div>
            <table className="games__table">
                <thead>
                    <tr className="games__table--heading">
                        <th className="games__table--heading--date">DATE</th>
                        <th className="games__table--heading--team">OPP</th>
                        <th className="games__table--heading--sub">W/L</th>
                        <th className="games__table--heading--sub">PTS</th>
                        <th className="games__table--heading--sub">ASSISTS</th>
                        <th className="games__table--heading--sub">REBOUNDS</th>
                        <th className="games__table--heading--sub">OREB</th>
                        <th className="games__table--heading--sub">DREB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.opp.map((item,i) => {
                        return(
                                <tr key={i} className="games__table--row">
                                    <td className="games__table--row--date">{item.gameDateUTC}</td>
                                    <td className="games__table--row--team"><Link to={`/teams/${item.tricode}/${item.teamId}`}><img alt="logo"className="games__table--row--image" src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.tricode}_logo.svg`}/></Link></td>
                                    <td className="games__table--row--score">{item.hTeam.score}-{item.vTeam.score}{item.isHomeGame?item.hTeam.isWinner===true?"W":"L":item.vTeam.isWinner===true?"W":"L"}</td>
                                    <td className="games__table--row--sub">{item.stats.points}</td>
                                    <td className="games__table--row--sub">{item.stats.assists}</td>
                                    <td className="games__table--row--sub">{item.stats.totReb}</td>
                                    <td className="games__table--row--sub">{item.stats.offReb}</td>
                                    <td className="games__table--row--sub">{item.stats.defReb}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}