import React from 'react';
import Select from 'react-select';
import "./Playercompare.scss"
import Player1Data from '../Player1Data/player'
import Player2Data from '../Player2Data/player2'

export default function Compare (props) {
    return(
        
        <div className="playercompare">
            <div className="playercompare__hero">
                <Select className="playercompare__hero--search" onChange={props.updateSearch.bind(this)} value={props.vidu}  options={props.Goku.map(item => ({label: item.firstName + " " + item.lastName, value: item.personId}))}/>
                <img alt="player" className="playercompare__hero--image" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player1id.personId}.png`}/>
                <img alt="player" className="playercompare__hero--image" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.player2id.personId}.png`}/>
                <Select className="playercompare__hero--search" onChange={props.updateSearch1.bind(this)} value={props.vidu1}  options={props.Goku.map(item => ({label: item.firstName + " " + item.lastName, value: item.personId}))}/>
            </div>
            <div className="playercompare__main">
                <div className="playercompare__main--player">
                    <div className="playercompare__main--player--jersey">#{props.player1id.jersey}</div>
                    <div className="playercompare__main--player--name">{props.player1id.firstName + " " + props.player1id.lastName}</div>
                </div>
                <div className="playercompare__main--player playercompare__main--player1">
                    <div className="playercompare__main--player--jersey">#{props.player2id.jersey}</div>
                    <div className="playercompare__main--player--name">{props.player2id.firstName + " " + props.player2id.lastName}</div>
                  </div>
            </div>
            <div className="playercompare__stats">
                <div className="playercompare__stats--player1">
                    <Player1Data 
                        ppg = {props.player1.ppg}
                        rpg = {props.player1.rpg}
                        apg = {props.player1.apg}
                        mpg = {props.player1.mpg}
                        to = {props.player1.topg}
                        spg = {props.player1.spg}
                        bpg = {props.player1.bpg}
                        three = {props.player1.tpp}
                        ft = {props.player1.ftp}
                        fg = {props.player1.fgp}
                        />
                </div>
                <div className="playercompare__stats--name">
                    <div className="playercompare__stats--name--stat">PPG</div>
                    <div className="playercompare__stats--name--stat">RPG</div>
                    <div className="playercompare__stats--name--stat">APG</div>
                    <div className="playercompare__stats--name--stat">MPG</div>
                    <div className="playercompare__stats--name--stat">TO</div>
                    <div className="playercompare__stats--name--stat">SPG</div>
                    <div className="playercompare__stats--name--stat">BPG</div>
                    <div className="playercompare__stats--name--stat">3PT%</div>
                    <div className="playercompare__stats--name--stat">FT%</div>
                    <div className="playercompare__stats--name--stat">FG%</div>
                </div>
                <div className="playercompare__stats--player2">
                    <Player2Data 
                        ppg = {props.player2.ppg}
                        rpg = {props.player2.rpg}
                        apg = {props.player2.apg}
                        mpg = {props.player2.mpg}
                        to = {props.player2.topg}
                        spg = {props.player2.spg}
                        bpg = {props.player2.bpg}
                        three = {props.player2.tpp}
                        ft = {props.player2.ftp}
                        fg = {props.player2.fgp}
                        />
                </div>
            </div>
        </div>
    )
}