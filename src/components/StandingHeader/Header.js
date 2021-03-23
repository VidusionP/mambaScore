import React from 'react';
import "./Header.scss"
import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <div className="standingheader">
            <div className="standingheader__year">2020-2021 Season Standings</div>
            <div className="standingheader__sub">
                <div className="standingheader__sub--title"><NavLink className="standingheader__sub--title--inactive" activeClassName="standingheader__sub--title--active" to="/teams/standing">CONF</NavLink></div>
                <div className="standingheader__sub--title"><NavLink className="standingheader__sub--title--inactive" activeClassName="standingheader__sub--title--active" to="/teams/standing-div">DIV</NavLink></div>
            </div>
        </div>
    )
}