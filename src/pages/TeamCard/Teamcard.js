import React, { Component } from 'react';
import "./Teamcard.scss"
import axios from 'axios';
import Card from '../../components/Teamcard/Teamcard'
import Header from '../../components/TeamHeader/Teamheader'

class Teamcard extends Component {
    state = {
        teams:[],
        team2:[],
        team1: [],
        player: [],
        leaders: [],
        schedule: [],
        dates: []
    }
    componentDidMount() {
        const {match: { params} } = this.props;
        axios.get(`https://data.nba.net/prod/v1/current/standings_all.json`)
            .then(response => {
                this.setState({
                    teams: response.data.league.standard.teams.find(x=>x.teamId === params.id)
                })
            })
        axios.get(`https://data.nba.net/prod/v2/2020/teams.json`)
            .then(response => {
                this.setState({
                    team2: response.data.league.standard.find(x=>x.teamId === params.id)
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/team_stats_rankings.json`)
            .then(response => {
                this.setState({
                    team1: response.data.league.standard.regularSeason.teams.find(x=>x.teamId === params.id),
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/players.json`)
            .then(response => {
                this.setState({
                    player: response.data.league.standard.filter(x=>x.teamId===params.id)
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/teams/${params.id}/leaders.json`)
            .then(response => {
                this.setState({
                    leaders: response.data.league.standard
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/teams/${params.id}/schedule.json`)
            .then(response => {
                this.setState({
                    schedule: response.data.league.standard
                })
            })
    }
    render(){
        if (this.state.team1.teamId && this.state.player[10] && this.state.leaders.seasonStageId && this.state.teams.teamId && this.state.team2.teamId){
            return(
                <>
                    <Header 
                        teams={this.state.teams}
                        team2={this.state.team2}
                        team1={this.state.team1}
                        player={this.state.player}
                        leaders={this.state.leaders}
                        
                    />
                    <Card 
                        teams={this.state.teams}
                        team2={this.state.team2}
                        team1={this.state.team1}
                        player={this.state.player}
                        leaders={this.state.leaders}
                        
                    />
                </>
            )
        }else 
        return <h1>Loading...</h1>
        
    }
}

export default Teamcard