import React, { Component } from 'react';
import "./Schedule.scss"
import axios from 'axios';
import Today from '../../components/ScheduleCard/Schedule'
import Header from '../../components/ScheduleHeader/Header'
import search from '../../../assests/2.svg'

const today =new Date().getFullYear()+""+((new Date().getMonth()+1)<10? "0" + (new Date().getMonth()+1):(new Date().getMonth()+1))+""+(new Date().getDate()<10? "0" + new Date().getDate(): new Date().getDate())

class Schedule extends Component {
    state = {
        today:[],
        all: [],
        test: []
    }
    componentDidMount() {
        const {match: { params} } = this.props;
        axios.get(`http://data.nba.net/prod/v1/${today}/scoreboard.json`)
            .then(response => {
                this.setState({
                    today: response.data.games
                })
            })
            axios.get(`http://data.nba.net/prod/v1/calendar.json`)
            .then(response => {
                this.setState({
                    all: response.data
                })
            })
            
    }

    
    render(){

        if (this.state.test[200]) {
            return(
                <>
                    <Header test = {this.state.test} />
                    <Today today = {this.state.today}/>
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

export default Schedule;