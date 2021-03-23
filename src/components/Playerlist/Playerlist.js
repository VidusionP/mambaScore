import React, { Component } from 'react';
import "./Playerlist.scss"
import axios from 'axios';
import Player from "../Player/Player"
import search from '../../assests/2.svg'
import { Link, NavLink } from 'react-router-dom';

const url = "https://data.nba.net/prod/v1/2020/players.json"
const url1 = "https://data.nba.net/prod/v2/2020/teams.json"

class Playerlist extends Component {
    state = {
        players:[],
        teams:[],
        fullInfo:[],
        search: [],
        letters: []
    }
    filterList = (event) => {
        let items = this.state.test1;
        items = items.filter((item) => {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !==-1;
        })

    }
    updateSearch(event) {
        this.setState ({
            search: event.target.value
        })
    }
    filteredTest = (names, index, letter)  => {
        var filteredNames = names.filter((word) => {
           return word.firstName.charAt(index) === letter;
        });
        return filteredNames;
    }
    
    componentDidMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    players: response.data.league.standard.filter(x => x.teamId).sort(function(a, b) { 
                        return a.lastName - b.lastName  ||  a.firstName.localeCompare(b.firstName);
                      })   
                })  
                
                setTimeout(() => {
                    this.setState({
                        fullInfo: this.state.players.map(itm => ({
                            ...this.state.teams.find((item) => (item.teamId === itm.teamId) && item),
                            ...itm
                        }))
                    })
                    // console.log(this.state.letter)
                    console.log(this.filteredTest(this.state.fullInfo, 0, "A"))
                }, 1000);
            })  
            axios.get(url1)
            .then(response => {
                this.setState({
                    teams: response.data.league.standard.filter(x=>x.isNBAFranchise===true)
                })
            }) 
    }
    // componentDidUpdate = (prevProps) => {
    //     const {match: { params} } = this.props;
    //     if(this.props.match.params.id2 !== prevProps.match.params.id2) {
    //         const {match: { params} } = this.props;
    //     }
    // }
    
    render() {
        if (this.state.teams[29] && this.state.fullInfo[400]) {
            let filtered = this.state.fullInfo.filter((name) => {
                return (
                    name.firstName.indexOf(this.state.search) !== -1
                );
        })
        
            return(
                <div className="playerlist">
                    <form className="playerlist__form">
                        <input className="playerlist__form--search" value={this.state.search} type="text" placeholder ="Search" onChange={this.updateSearch.bind(this)}/>
                    </form>
                    <Player vidu = {this.state.player} data={filtered} letter = {this.state.letter}/>
                </div>
            )
        } else {
            return (
                <div className="loading">
                    <h1>Loading...</h1>
                    <img alt="loading" src={search}/>
                </div>
            )
        }
    }
}

export default Playerlist;