import React from 'react';
import "./Header.scss"
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const today =new Date().getFullYear()+""+((new Date().getMonth()+1)<10? "0" + (new Date().getMonth()+1):(new Date().getMonth()+1))+""+(new Date().getDate()<10? "0" + new Date().getDate(): new Date().getDate())

export default function Today(props) {
    moment('2016-05-12').format('MMM DD, YYYY');
    return(
        <>
        <h2 className="scheduleTitle">Schedule</h2>
        <div className="scheduleHeader">
            {props.test.map((item,i) => {
                return(
                    <NavLink key={i} className="scheduleHeader__link" to={`/schedule/${item[0]}`}><div key={i} className="scheduleHeader__date">{item[0]===today?"TODAY":moment(item[0]).format("MMM DD")}</div></NavLink>
                )
            })}
        </div>
            
        </>
    )
}