import React, { Component } from 'react';
import "./PlayerStats.scss"
import axios from 'axios';
import Player from '../../../components/PlayerStats/Playerstats'
import Games from '../../../components/Last3Games/Games'
import search from '../../../assests/2.svg'


const url1 = "http://data.nba.net/prod/v1/2020/players.json"
const url = "http://data.nba.net/prod/v2/2020/teams.json"
class PlayerStats extends Component {
    state = {
        player:[],
        teams:[],
        logo: [],
        threegamestats: [],
        opp: [],
        full:[]
    }
    componentWillMount() {
        const {match: { params} } = this.props;
        axios.get(`http://data.nba.net/prod/v1/2020/players/${params.id}_profile.json`)
            .then(response => {
                this.setState({
                    player: response.data.league.standard.stats.regularSeason
                })
            })
        axios.get(`http://data.nba.net/prod/v1/2020/players/${params.id}_gamelog.json`)
            .then(response => {
                this.setState({
                    threegamestats: response.data.league.standard
                })
            })
            
            axios.get(url1)
            .then(response => {
                this.setState({
                    teams: response.data.league.standard.filter(x=>x.personId ===params.id)
                })
            })
    }
    componentDidMount() {
    setTimeout(() => {
        
        axios.get(url)
                .then(response => {
                    this.setState({
                        logo: response.data.league.standard.filter(x=> this.state.teams.map(x=> {return x.teamId}).includes(x.teamId))[0],
                        opp: response.data.league.standard.filter(x=> this.state.threegamestats.map(x=> {return x.isHomeGame?x.vTeam:x.hTeam}).map(x=> {return x.teamId}).includes(x.teamId)),
                        full: this.state.opp.map(itm => ({
                            ...this.state.threegamestats.find((item) => (item.isHomeGame? item.vTeam.teamId === itm.teamId: item.hTeam.teamId ===itm.teamId) && item),
                            ...itm
                        }))
                    })
                })
                
    }, 1000);
    setTimeout(() => {
        this.setState({
            full: this.state.opp.map(itm => ({
                ...this.state.threegamestats.find((item) => (item.isHomeGame? item.vTeam.teamId === itm.teamId: item.hTeam.teamId ===itm.teamId) && item),
                ...itm
            }))
        })
    }, 3000);
}
    render() {
        console.log(this.state.teams)
        if (this.state.player && this.state.teams && this.state.logo.divName ) {
            return(
                <>
                    <Player vidu = {this.state.teams} test = {this.state.player.season[0]} goku = {this.state.logo} />
                    
                </>
            )

        } else {
            return (
                <div className="loading">
                    <h1>Loading</h1>
                    <img alt="loading" src={search}/>
                </div>
            )
        }
    }
}

export default PlayerStats;