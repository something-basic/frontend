import React, { Component } from "react";
import { Line } from 'react-chartjs-2'

export default class ChartByRecepient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["today", "yesterday", "last week"],
        datasets: [
          {
            label: "Unread",
            data: [1, 3, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div className="recipient-chart">
          <Line
            data={this.state.charData}
            width={200}
            height={100}
            options={{
              title: {
                display: true,
                text: "Unread from: ",
                fontSize: 15,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
      </div>
    );
  }
}
