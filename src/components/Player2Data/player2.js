import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';


export default function Chart(props) {
    const data = {
        labels: ['PPG', 'RPG', 'APG', 'MPG', 'TO', 'SPG', 'BPG', '3PT%', 'FT%', "FG%" ],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [props.ppg, props.rpg, props.apg, props.mpg, props.to, props.spg, props.bpg, props.three, props.ft, props.fg]
          }
        ]
      };
    return(
        <div>
            <HorizontalBar
        id="player2Bar"
        data={data}
        width={600}
        height={400}
        options={{
            responsive:true,
          legend:{
              display:false
          },
          layout:{
              padding: {
                  left:0,
                  right:50,
              }
          },
          maintainAspectRatio: false,
          scales: {
              yAxes:[{
                  display:true,
                  gridLines:{
                      display:false
                  },
                  ticks: {
                      beginAtZero: true,
                      display:false,
                      maxRotation:0,
                      minRotation:0
                  }
              }],
              xAxes:[{
                  position:'right',
                  maxRotation:180,
                  gridLines:{
                      display:false
                  },
                  ticks: {
                    display:false,
                  }
              }]
          }
        }}
      />
        </div>
    )
}