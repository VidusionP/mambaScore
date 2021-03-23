import React from 'react';
import "./Teamcard.scss"
import { Link } from 'react-router-dom';

export default function TeamCard(props) {
    return(
        <div className="teamcard">
            <div className="teamcard__roster">
                <div className="teamcard__roster--text">
                    <div className="teamcard__roster--text--title">LINE UP</div>
                    <Link className="teamcard__roster--text--link" to={`/teams/${props.team1.abbreviation}/${props.team1.teamId}/roster`}>
                    <div className="teamcard__roster--text--small">SEE FULL ROSTER</div>
                    </Link>
                </div>
                <div className="teamcard__roster--card">
                    {props.player.slice(0,5).map((item,i) => {
                        return(
                            <Link key={i} className="teamcard__roster--card--link"to={`/players/${item.personId}`}>
                                <div key={i} className="teamcard__roster--card--player">
                                    <div><img className="teamcard__roster--card--player--image" alt="headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}/></div>
                                    <div className="teamcard__roster--card--player--pos">{item.pos}</div>
                                    <div className="teamcard__roster--card--player--name">{item.firstName + " " + item.lastName}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="teamcard__leaders">
                <div className="teamcard__leaders--title">TEAM LEADER</div>
                <div className="teamcard__leaders--players">
                    <Link className="teamcard__leaders--players--link" to={`/players/${props.leaders.ppg[0].personId}`}>
                    <div className="teamcard__leaders--players--card">
                        <div><img className="teamcard__leaders--players--card--image" alt="headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.leaders.ppg[0].personId}.png`}/></div>
                        <div className="teamcard__leaders--players--card--value">{props.leaders.ppg[0].value} PPG</div>
                        <div className="teamcard__leaders--players--card--name">{props.player.find(x=>x.personId === props.leaders.ppg[0].personId).firstName + " " + props.player.find(x=>x.personId === props.leaders.ppg[0].personId).lastName}</div>
                    </div>
                    </Link>
                    <Link className="teamcard__leaders--players--link" to={`/players/${props.leaders.apg[0].personId}`}>
                    <div className="teamcard__leaders--players--card">
                        <div><img className="teamcard__leaders--players--card--image" alt="headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.leaders.apg[0].personId}.png`}/></div>
                        <div className="teamcard__leaders--players--card--value">{props.leaders.apg[0].value} APG</div>
                        <div className="teamcard__leaders--players--card--name">{props.player.find(x=>x.personId === props.leaders.apg[0].personId).firstName + " " + props.player.find(x=>x.personId === props.leaders.apg[0].personId).lastName}</div>
                    </div>
                    </Link>
                    <Link className="teamcard__leaders--players--link" to={`/players/${props.leaders.trpg[0].personId}`}>
                    <div className="teamcard__leaders--players--card">
                        <div><img className="teamcard__leaders--players--card--image" alt="headshot" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.leaders.trpg[0].personId}.png`}/></div>
                        <div className="teamcard__leaders--players--card--value">{props.leaders.trpg[0].value} RPG</div>
                        <div className="teamcard__leaders--players--card--name">{props.player.find(x=>x.personId === props.leaders.trpg[0].personId).firstName + " " + props.player.find(x=>x.personId === props.leaders.trpg[0].personId).lastName}</div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}