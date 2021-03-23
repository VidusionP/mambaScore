import React, { Component } from 'react';
import "./Standing.scss"
import axios from 'axios';
import Header from '../../components/StandingHeader/Header'
import Division from '../../components/Division/Division'
import loadingImage from '../../assests/2.svg'

class Standing extends Component {
    state = {
        southeast: [],
        atlantic: [],
        central: [],
        southwest: [],
        pacific: [],
        northwest: []
    }
    componentDidMount() {
        axios.get(`http://data.nba.net/prod/v1/current/standings_division.json`)
            .then(response => {
                this.setState({
                    southeast: response.data.league.standard.conference.east.southeast,
                    atlantic: response.data.league.standard.conference.east.atlantic,
                    central: response.data.league.standard.conference.east.central,
                    southwest: response.data.league.standard.conference.west.southwest,
                    pacific: response.data.league.standard.conference.west.pacific,
                    northwest: response.data.league.standard.conference.west.northwest
                })
            })
    }
    render() {
        if (this.state.southeast[4] && this.state.atlantic[4] && this.state.central[4] && this.state.southwest[4] && this.state.pacific[4] && this.state.northwest[4]) {
            return(
                <>
                    <Header/>
                    <Division
                        southeast = {this.state.southeast}
                        atlantic = {this.state.atlantic}
                        central = {this.state.central}
                        southwest = {this.state.southwest}
                        pacific = {this.state.pacific}
                        northwest = {this.state.northwest}
                    />
                </>
            )
        } else {
            return (
                <div className="loading">
                    <h1>Loading</h1>
                    <img alt="loading" src={loadingImage}/>
                </div>
            )
        }
    }
}

export default Standing;