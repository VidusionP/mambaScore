import React, { Component } from 'react';
import "./Standing.scss"
import axios from 'axios';
import Header from '../../components/StandingHeader/Header'
import Eastern from '../../components/Eastern/Eastern'
import Western from '../../components/Western/Western'

class Standing extends Component {
    state = {
        east: [],
        west: []
    }
    componentDidMount() {
        axios.get(`https://data.nba.net/prod/v1/current/standings_conference.json`)
            .then(response => {
                this.setState({
                    east: response.data.league.standard.conference.east,
                    west: response.data.league.standard.conference.west
                })
                console.log(this.state.east)
            })
    }
    render() {
        if (this.state.east[14] && this.state.west[14]) {
            return(
                <>
                    <Header/>
                    <Eastern east = {this.state.east}/>
                    <Western west = {this.state.west}/>
                </>
            )
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default Standing;