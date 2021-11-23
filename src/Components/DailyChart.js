import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import dayjs from "dayjs";
import Form from 'react-bootstrap/Form';

export default class DailyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      binOption: "Last 7 days",
      
    };
  }

  getHistory = async (binOption) => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/history",
      params: {
        binOption: binOption,
      },
    };
    const data = await axios(config);
    this.setState({ data: data.data.reverse() });
  };

  handleChange = (e) => {
    this.getHistory(e.target.value)
  };

  componentDidMount() {
    this.getHistory(this.state.binOption);
  }

  render() {
    return (
      <div className="daily-chart" style={{ display: "block", margin: "0 0 0 0", width: "100%", boxShadow: "0em 0.5em 50px #C4DFF5", padding: "3em" }}>
        <div style={{ display: "block", margin: "0 0 2em 0" }}>
          <h4 style={{ display: "inline-block", margin: "0 0 0 0"}}>Current Distribution</h4>
          <Form.Select size="sm" style={{ display: "inline-block", width: "12em", float: "right"}}  onChange={(value) => this.handleChange(value)} id="binSelection">
            <option value="Last 7 days" defaultValue>Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 12 months">Last 12 months</option>
            <option value="Last 5 years">Last 5 years</option>
          </Form.Select>
        </div>
        {this.state.data && <Bar
          data={{
            labels: this.state.data.map((obj) => {
              return dayjs(obj.date).format("MMM DD, YYYY");
            }),

            datasets: [
              {
                label: "Unread",
                data: this.state.data.map((obj) => {
                  return obj.unread;
                }),
                backgroundColor: ["#34adfe"],
                hoverBackgroundColor:["#ffea00"],
                fill: "origin",
              },
              {
                label: "Emails Received",
                data: this.state.data.map((obj) => {
                  return obj.total;
                }),
                backgroundColor: ["#93d8ff"],
                hoverBackgroundColor:["#ffea00"],
                fill: "origin",
              },
            ],
          }}
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
            plugins: {
              subtitle: {
                display: true,
                text: "The counts in this chart excludes emails with the word \"unsubscribe\""
              }
            },
            scales: {
              x: {
                stacked: true
              }
            }
          }}
        />}
      </div>
    );
  }
}
