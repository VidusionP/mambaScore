import React from 'react';
import "./PlayerTeam.scss"

export default function PlayerTeam (props) {

    return (
        <>
        {props.Veg.filter(x => x.teamId ===props.test)
        .map((item,i) => {
            return (
                <div key={i}>{item.tricode}</div>
            )
        })}
        </>
    )
}