import React, { Component } from "react";
import { Line } from 'react-chartjs-2'

export default class DailyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["day1", "day2", "day3"],
        datasets: [
          {
            label: "Daily Unread",
            data: [1, 10, 3],
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
      <div className="daily-chart">
        <Line
          data={this.state.charData}
          width={200}
          height={100}
          options={{
            title: {
              display: true,
              text: "Daily Unread",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}
