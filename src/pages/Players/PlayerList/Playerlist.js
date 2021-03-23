import React, { Component } from 'react';
import "./Playerlist.scss"
import Playerlist from '../../../components/Playerlist/Playerlist'

class List extends Component {
    render() {
        return(
            <div className="list">
                <div className="list__heading">
                    <div className="list__heading--sub"></div>
                    <div className="list__heading--name">Name</div>
                    <div className="list__heading--team">Team</div>
                    <div className="list__heading--position">Position</div>
                </div>
                <Playerlist/>
            </div>
        )
    }
}

export default List;