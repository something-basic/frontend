import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import dayjs from "dayjs";

export default class UnsubscribeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      binOption: "Last 7 days",
      
    };
  }

  componentDidMount() {
    this.getUnsubscribe(this.state.binOption);
  }
  getUnsubscribe = async (binOption) => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/unsub",
      params: {
        binOption: binOption,
      },
    };
    const data = await axios(config);
    this.setState({ data: data.data.reverse() });
  };
  handleChange = (e) => {
    this.getUnsubscribe(e.target.value)
  };

  render() {
    return (
      <div className="daily-chart" style={{ display: "inline-block" }}>
        <select onChange={this.handleChange} id="binSelection" style={{float: "left", margin: "12px 0 0 0" }}>
          <option value="Last 7 days" selected>
            Last 7 days
          </option>
          <option value="Last 30 days">Last 30 days</option>
          <option value="Last 12 months">Last 12 months</option>
          <option value="Last 5 years">Last 5 years</option>
        </select>
        {this.state.data && <Line
          data={{
            labels: this.state.data.map((obj) => {
              return dayjs(obj.date).format("YYYY MMM DD");
            }),

            datasets: [
              {
                label: "Emails with Unsubscribe",
                data: this.state.data.map((obj) => {
                  return obj.unsubscribe;
                }),
                backgroundColor: ["rgba(60, 60, 60, 30)"],
                borderColor: ["rgb(180, 180, 180)"],
                fill: "origin",
              },
              {
                label: "Total Emails",
                data: this.state.data.map((obj) => {
                  return obj.total;
                }),
                backgroundColor: ["rgb(100, 100, 100)"],
                borderColor: ["rgb(0, 0, 0)"],
                fill: "origin",
              },
            ],
          }}
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
            elements: {
              line: {
                  tension: 0.25
              }
            }
          }}
        />}
      </div>
    );
  }
}
