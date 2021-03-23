import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import ball from '../../assests/Ball.png'


const today =new Date().getFullYear()+""+((new Date().getMonth()+1)<10? "0" + (new Date().getMonth()+1):(new Date().getMonth()+1))+""+(new Date().getDate()<10? "0" + new Date().getDate(): new Date().getDate())
export default function Header() {
    return(
        <>
            <header className="header">
                <div className="header__logo"><NavLink to="/" className="header__logo--link"><img className="header__logo--image" alt="balllogo"src={ball}/>MambaScore</NavLink></div> 
                <div className="header__navbar">
                    <ul className="header__navbar--links">
                        <li className="header__navbar--links--item">
                            <NavLink to="/players" className="header__navbar--links--inactive" activeClassName="header__navbar--links--active">Players</NavLink>
                            <Link to ={`/players/202681/compare/202681`}><div className = "testing">Player Compare</div></Link>
                        </li>
                        <li className="header__navbar--links--item">
                            <NavLink to="/teams" className="header__navbar--links--inactive" activeClassName="header__navbar--links--active">Teams</NavLink>
                            <Link to ={`/teams/standing`}><div className = "testing">Standing</div></Link>
                        </li>
                        <li className="header__navbar--links--item"><NavLink to={`/schedule/${today}`} className="header__navbar--links--inactive" activeClassName="header__navbar--links--active">Schedule</NavLink></li>
                        <li className="header__navbar--links--item"><NavLink to="/kobe" className="header__navbar--links--inactive" activeClassName="header__navbar--links--active">Kobe</NavLink></li>
                    </ul>
                </div>
            </header>
            <div className="test"></div>
        </>
    )
}