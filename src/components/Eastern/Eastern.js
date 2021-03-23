import React from 'react';
import "./Eastern.scss"

export default function Eastern(props) {
    return(
        <>
            <div className="conferenceTitle">EASTERN</div>
            <div className="standings">
                    <div className="standings__headrow">
                        <div className="standings__headrow--rank">RANK</div>
                        <div className="standings__headrow--name">NAME</div>
                        <div className="standings__headrow--title">W</div>
                        <div className="standings__headrow--title">L</div>
                        <div className="standings__headrow--title">%</div>
                        <div className="standings__headrow--title">GAMES BEHIND</div>
                        <div className="standings__headrow--title">Last 10 Games</div>
                    </div>
                    {props.east.map((item,i) => {
                        return(
                            <div key={i} className="standings__bodyrow">
                                <div className="standings__bodyrow--rank">{item.confRank}</div>
                                <div className="standings__bodyrow--name">{(item.clinchedPlayoffsCodeV2?item.clinchedPlayoffsCodeV2+"-":item.clinchedPlayoffsCodeV2) + item.teamSitesOnly.teamName + " " + item.teamSitesOnly.teamNickname}</div>
                                <div className="standings__bodyrow--value">{item.win}</div>
                                <div className="standings__bodyrow--value">{item.loss}</div>
                                <div className="standings__bodyrow--value">{item.winPct}</div>
                                <div className="standings__bodyrow--value">{item.gamesBehind}</div>
                                <div className="standings__bodyrow--value">{item.lastTenWin + "W" + " - " + item.lastTenLoss + "L"}</div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}