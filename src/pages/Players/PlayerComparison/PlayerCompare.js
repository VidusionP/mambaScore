import React, { Component } from 'react';
import "./PlayerCompare.scss"
import Player1 from '../../../components/PlayerCompare/Playercompare'
import axios from 'axios';
import search from '../../../assests/2.svg'

class Compare extends Component {
    state = {
        player1:[],
        player2:[],
        player1ID:[],
        player2ID:[],
        search: [],
        search1: [],
        test:[]
    }

    updateSearch(event) {
        axios.get(`https://data.nba.net/prod/v1/2020/players/${event.value}_profile.json`)
            .then(response => {
                this.setState ({
                    player1: response.data.league.standard.stats.latest
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/players.json`)
            .then(response => {
                this.setState ({
                    player1ID: response.data.league.standard.find(x=>x.personId ===event.value)
                })
            })
        
    }
    updateSearch1(event) {
        axios.get(`https://data.nba.net/prod/v1/2020/players/${event.value}_profile.json`)
            .then(response => {
                this.setState ({
                    player2: response.data.league.standard.stats.latest
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/players.json`)
            .then(response => {
                this.setState ({
                    player2ID: response.data.league.standard.find(x=>x.personId ===event.value)
                })
            })
    }
    
    
    componentDidMount() {
        const {match: { params} } = this.props;
        axios.get(`https://data.nba.net/prod/v1/2020/players/${params.id}_profile.json`)
            .then(response => {
                this.setState({
                    player1: response.data.league.standard.stats.latest
                })
            })
        axios.get(`https://data.nba.net/prod/v1/2020/players/${params.id2}_profile.json`)
            .then(response => {
                this.setState({
                    player2: response.data.league.standard.stats.latest
                })
            })
        axios.get("https://data.nba.net/prod/v1/2020/players.json")
            .then(response => {
                this.setState({
                    player1ID: response.data.league.standard.find(x=>x.personId ===params.id)
                })
            })
        axios.get("https://data.nba.net/prod/v1/2020/players.json")
            .then(response => {
                this.setState({
                    player2ID: response.data.league.standard.find(x=>x.personId ===params.id2)
                })
            })
        axios.get("https://data.nba.net/prod/v1/2020/players.json")
            .then(response => {
                this.setState({
                    test: response.data.league.standard.filter(x => x.teamId).sort(function(a, b) { 
                        return a.lastName - b.lastName  ||  a.firstName.localeCompare(b.firstName);
                      })   
                })
            })
    }
    componentDidUpdate() {

    }
    render() {
        const x = this.state.test.filter((name) => {
            return (
                name.firstName.indexOf(this.state.search) !== -1
            );
    })
    
    
        if (this.state.player1 && this.state.player2 && this.state.player1ID.firstName && this.state.player2ID.firstName) {
            return(
                <Player1 Goku={x} vidu = {this.state.search} vidu1 = {this.state.search1} updateSearch = {this.updateSearch.bind(this)} updateSearch1 = {this.updateSearch1.bind(this)} player1id = {this.state.player1ID} player2id = {this.state.player2ID} player1 = {this.state.player1} player2 = {this.state.player2}/>
            )
        } else {
            return (
                <div className="loading">
                    <h1>Loading</h1>
                    <img alt="loading"src={search}/>
                </div>
            )
        }
    }
}

export default Compare;