import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import dayjs from "dayjs";
import Form from 'react-bootstrap/Form';

export default class UnsubscribeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      binOption: "Last 7 days",
      
    };
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

  componentDidMount() {
    this.getUnsubscribe(this.state.binOption);
  }

  render() {
    return (
      <div className="unsubscribe-chart">
        <div style={{ display: "block", margin: "0 0 1em 0" }}>
        <h4 style={{ display: "inline-block", margin: "0 0 0 0"}}>Unsubscribes</h4>
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
                label: "Contains \"Unsubscribe\"",
                data: this.state.data.map((obj) => {
                  return obj.unsubscribe;
                }),
                backgroundColor: ['#34adfe'],
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
          width={200}
          height={150}
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
