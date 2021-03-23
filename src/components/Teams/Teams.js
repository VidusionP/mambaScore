import React, { Component } from "react";
import Playerteam from "../PlayerTeam/PlayerTeam";
import axios from 'axios';

const url = "http://data.nba.net/prod/v2/2019/teams.json"



class Team extends Component {
    state = {
        teams:[]    
    }
    componentDidMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    teams: response.data.league.standard
                })
            })
    }

    render() {

        return(
            <Playerteam Veg = {this.state.teams}/>
        )
    }
}

export default Team;