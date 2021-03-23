import React from 'react';
import "./Division.scss"

export default function Division(props) {
    return(
        <>
            <div className="divisionTitle">Southeast</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.southeast.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="divisionTitle">Atlantic</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.atlantic.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="divisionTitle">Central</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.central.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="divisionTitle">Southwest</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.southwest.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="divisionTitle">Pacific</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.pacific.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="divisionTitle">Northwest</div>
            <div className="divisionStanding">
                <div className="divisionStanding__heading">
                    <div className="divisionStanding__heading--rank">RANK</div>
                    <div className="divisionStanding__heading--name">NAME</div>
                    <div className="divisionStanding__heading--title">W</div>
                    <div className="divisionStanding__heading--title">L</div>
                    <div className="divisionStanding__heading--title">%</div>
                    <div className="divisionStanding__heading--title">GAMES BEHIND</div>
                    <div className="divisionStanding__heading--title">Last 10 Games</div>
                </div>
                {props.northwest.map((item,i) => {
                    return(
                        <div key={i} className="divisionStanding__body">
                            <div className="divisionStanding__body--rank">{item.divRank}</div>
                            <div className="divisionStanding__body--name">{item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                            <div className="divisionStanding__body--value">{item.win}</div>
                            <div className="divisionStanding__body--value">{item.loss}</div>
                            <div className="divisionStanding__body--value">{item.winPct}</div>
                            <div className="divisionStanding__body--value">{item.gamesBehind}</div>
                            <div className="divisionStanding__body--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}