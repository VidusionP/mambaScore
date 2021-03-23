import React, { Component } from 'react';
import "./Teamlist.scss"
import axios from 'axios';
import List from "../../components/Teamlist/Team"

class Team extends Component {
    state = {
        teams:[]
    }
    componentDidMount() {
        axios.get("http://data.nba.net/prod/v2/2020/teams.json")
            .then(response => {
                this.setState({
                    teams: response.data.league.standard.filter(x=>x.isNBAFranchise===true)
                })
            })
    }
    render() {
        return(
            <List team = {this.state.teams}/>
        )
    }
}

export default Team;