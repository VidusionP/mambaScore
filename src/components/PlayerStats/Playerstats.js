import React from 'react';
import "./Playerstats.scss"
import Chart from '../.../../Bar/Bar'
import { Link } from 'react-router-dom';

export default function Player(props) {
    return (
        <div>
            {props.vidu.map ((item,i) => {
                return (
                    <div key={i}>
                        <div className="playerstat">
                            <div>
                                <img alt="headshot" className="playerstat__headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}/>
                                <Link className="playerstat__compare" to={`/players/${item.personId}/compare/${item.personId}`}><div>Compare Players</div></Link>    
                            </div>
                            <div className="playerstat__mini">
                                <div className="playerstat__mini--info">
                                    <div className="playerstat__mini--info--num">#{item.jersey} |</div>
                                    <div className="playerstat__mini--info--name">{item.firstName+ " " + item.lastName}</div>
                                </div>
                                <div className="playerstat__mini--stat">
                                    <div className="playerstat__mini--stat--ppg">{props.test.total.ppg} PPG</div>
                                    <div className="playerstat__mini--stat--apg">{props.test.total.apg} APG</div>
                                    <div className="playerstat__mini--stat--rpg">{props.test.total.rpg} RPG</div>
                                </div>
                            </div>
                            <div className="playerstat__bio">
                                <div className="playerstat__bio--pos">Position: {item.pos}</div>
                                <div className="playerstat__bio--height">Height: {item.heightFeet}'{item.heightInches}"</div>
                                <div className="playerstat__bio--weight">Weight:{item.weightPounds}lbs</div>
                                <div className="playerstat__bio--dob">DOB:{item.dateOfBirthUTC}</div>
                                <div className="playerstat__bio--draft">Draft Year: {item.draft.seasonYear} R{item.draft.roundNum} P{item.draft.pickNum}</div>
                                <div className="playerstat__bio--past">Last Affiliation: {item.lastAffiliation}</div>
                            </div>
                            <Link to= {`/teams/${props.goku.tricode}/${props.goku.teamId}`}><div><img alt="logo"className="playerstat__logo"src={`https://ca.global.nba.com/media/img/teams/00/logos/${props.goku.tricode}_logo.svg`}/></div></Link>
                        </div>
                        <div className="substat">
                            <div className="substat__data">
                                <div className="substat__data--year">{props.test.seasonYear} Season</div>
                                <div className="graph">
                                    <Chart 
                                        ppg = {props.test.total.ppg}
                                        apg = {props.test.total.apg}
                                        rpg = {props.test.total.rpg}
                                        ft = {props.test.total.ftp}
                                        three = {props.test.total.tpp}/>
                                </div>
                            </div>
                            <div className="substat__title">
                                
                                <div className="substat__title--stats">
                                    <div>PPG</div>
                                    <div>APG</div>
                                    <div>RPG</div>
                                    <div>FT%</div>
                                    <div>3PT</div>
                                </div>
                            </div>
                        </div>
                        <div className ="tableTitle">Season Stats</div>
                            <table className="main">
                                <thead>
                                    <tr className="main__title">
                                        <th className="main__title--year">YEAR</th>
                                        <th className="main__title--team">TEAM</th>
                                        <th className="main__title--width">GP</th>
                                        <th className="main__title--width">GS</th>
                                        <th className="main__title--width">PPG</th>
                                        <th className="main__title--width">APG</th>
                                        <th className="main__title--width">RPG</th>
                                        <th className="main__title--width">MPG</th>
                                        <th className="main__title--width">TO</th>
                                        <th className="main__title--width">SPG</th>
                                        <th className="main__title--width">BPG</th>
                                        <th className="main__title--width">FT%</th>
                                        <th className="main__title--width">FG%</th>
                                        <th className="main__title--width">3PT%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="main__stats">
                                        <td className="main__stats--year">{props.test.seasonYear}</td>
                                        <td className="main__stats--team">{props.goku.fullName}</td>
                                        <td className="main__stats--width">{props.test.total.gamesPlayed}</td>
                                        <td className="main__stats--width">{props.test.total.gamesStarted}</td>
                                        <td className="main__stats--width">{props.test.total.ppg}</td>
                                        <td className="main__stats--width">{props.test.total.apg}</td>
                                        <td className="main__stats--width">{props.test.total.rpg}</td>
                                        <td className="main__stats--width">{props.test.total.mpg}</td>
                                        <td className="main__stats--width">{props.test.total.topg}</td>
                                        <td className="main__stats--width">{props.test.total.spg}</td>
                                        <td className="main__stats--width">{props.test.total.bpg}</td>
                                        <td className="main__stats--width">{props.test.total.ftp}</td>
                                        <td className="main__stats--width">{props.test.total.fgp}</td>
                                        <td className="main__stats--width">{props.test.total.tpp}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                )
            })}
        </div>
    )
}