import React, { Component } from 'react';
import "./Test.scss"
import axios from 'axios';
import Header from '../ScheduleHeader/Header'
import search from '../../assests/2.svg'

const today =new Date().getFullYear()+""+((new Date().getMonth()+1)<10? "0" + (new Date().getMonth()+1):(new Date().getMonth()+1))+""+(new Date().getDate()<10? "0" + new Date().getDate(): new Date().getDate())
class Vidu extends Component {
    state = {
        today:[],
        all: [],
        test: [],
        test1: []
    }
    componentDidMount() {
        const {match: { params} } = this.props;
        axios.get(`http://data.nba.net/prod/v1/${params.id}/scoreboard.json`)
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
                this.setState({
                    test: Object.entries(this.state.all).filter(x=>x[1]!==0).slice(0,-4),
                })
            })
            setTimeout(() => {
                this.setState ({
                    test1: this.state.test.slice(this.state.test.findIndex(x=>x[0]===today))
                })
            }, 2000);
            
    }
    componentDidUpdate = (prevProps) => {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            const {match: { params} } = this.props;
            axios.get(`http://data.nba.net/prod/v1/${params.id}/scoreboard.json`)
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
                    this.setState({
                        test: Object.entries(this.state.all).filter(x=>x[1]!==0).slice(0,-4)
                    })
                })
        }
    }
    render () {
        if (this.state.test1[1]) {
            return (
                <>
                <Header test = {this.state.test1} />
                <div className="scheduleDate">
                    {this.state.today.map((item,i) => {
                        return(
                            <div key={i} className="scheduleDate__game">
                                <div><img className="scheduleDate__game--image" alt="logo" src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.vTeam.triCode}_logo.svg`}/></div>
                                <div className="scheduleDate__game--card">
                                    <div className="scheduleDate__game--card--time">{item.period.current === 0? item.startTimeEastern:item.vTeam.score + " - " + item.hTeam.score}{item.period.current > 0 & item.isGameActivated === true?" Q"+item.period.current: ""}</div>
                                    <div className="scheduleDate__game--card--text">@</div>
                                    <div className="scheduleDate__game--card--arena">{item.arena.name}</div>
                                </div>
                                <div><img className="scheduleDate__game--image" alt="logo" src={`https://ca.global.nba.com/media/img/teams/00/logos/${item.hTeam.triCode}_logo.svg`}/></div>
                            </div>
                        )
                    })}
                </div>
                </>
                )
            } else {
                return (
                    <div className="loading">
                        <h1>Loading</h1>
                        <img alt="load" src={search}/>
                    </div>
                )   
            }
            
            
    }
}

export default Vidu