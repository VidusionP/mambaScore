import React, { Component } from "react";
import "./Hero.scss";
import axios from 'axios';
import left from '../../assests/feather-icon/chevron-left.svg';
import right from '../../assests/feather-icon/chevron-right.svg';
import Carasole from "../Carasole/Carasole"
import ball from '../../assests/Ball.png'

const today =new Date().getFullYear()+""+((new Date().getMonth()+1)<10? "0" + (new Date().getMonth()+1):(new Date().getMonth()+1))+""+(new Date().getDate()<10? "0" + new Date().getDate(): new Date().getDate())
const url = `http://data.nba.net/prod/v1/${today}/scoreboard.json`

class Hero extends Component {
    state = {
        games: []
    }
    componentDidMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    games: response.data.games
                })
            })
    }
    render() {

        return(
            <>
            <main className="hero">
                <h2 className="hero__title">Today's Games<img className="hero__image bounce-1"src={ball} alt="ball"/></h2>
                <div className="hero__carasole">
                    <img className="herp_carasole--left" alt="left" src={left}/>
                    <Carasole testing= {this.state.games}/>
                    <img className="herp_carasole--right" alt="right" src={right}/>
                </div>
            </main>
            </>
        )
    }
}

export default Hero;