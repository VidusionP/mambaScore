import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Chart(props) {
    const data = {
        labels: ['PPG', 'APG', 'RPG', 'FT%', '3PT'],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [props.ppg, props.apg, props.rpg, props.ft, props.three]
          }
        ]
      };
    return(
        <div className="Jenny">
            <Bar
        id="playerStatBar"
        data={data}
        width={650}
        height={100}
        options={{
          legend:{
              display:false
          },
          layout:{
              padding: {
                  left:0,
                  right:0,
              }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              yAxes:[{
                  gridLines:{
                      display:false
                  },
                  ticks: {
                      beginAtZero: true,
                      display:false,
                  }
              }],
              xAxes:[{
                  
                  gridLines:{
                      display:false
                  },
                  ticks: {
                      display:false
                  }
              }]
          }
        }}
      />
        </div>
    )
}