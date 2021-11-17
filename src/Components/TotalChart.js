import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class TotalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Emails that are Unread",
            data: [1, 2, 3, 2, 5],
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
      <div className="main-chart">
        <Bar
          data={this.state.charData}
          width={200}
          height={100}
          options={{
            title: {
              display: true,
              text: "Total inbox Unread",
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
