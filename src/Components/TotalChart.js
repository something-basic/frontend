import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import axios from "axios";
import Form from 'react-bootstrap/Form';

export default class TotalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getTotal = async () => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/total",
    };
    const data = await axios(config);
    const sortedData = data.data.sort((a,b) => a.date - b.date );
    this.setState({ rawData: sortedData });
    this.filterData(10);
    this.props.getCurrentStats(sortedData.slice(-2));
  };

  postTotal = async () => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "post",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/total",
    };
    const data = await axios(config);
    console.log(data.data)
  }

  filterData = (value) => {
    const filteredData = this.state.rawData;
    this.setState({data: filteredData.slice(-value)});
  };

  handleChange = (e) => {
    this.filterData(e.target.value)
  };

  getAndUpdateTotal = async () => {
    await this.postTotal(); // Update
    await this.getTotal(); // Post-updated get to show current data
  }

  componentDidMount() {
    this.getAndUpdateTotal();
  };

  render() {
    return (
      <div className="total-chart">
        <div style={{ display: "block", margin: "0 0 1em 0" }}>
          <h4 style={{ display: "inline-block", margin: "0 0 0 0"}}>Logged History</h4>
          <Form.Select size="sm" style={{ display: "inline-block", width: "12em", float: "right"}} onChange={(value) => this.handleChange(value)} id="binSelection">
            <option value="10" defaultValue>Last 10 Requests</option>
            <option value="50">Last 50 Requests</option>
            <option value="200">Last 200 Requests</option>
            <option value="1000">Last 1000 Requests</option>
          </Form.Select>
        </div>
        {this.state.data && (
          <Line 
            data={{
              labels: this.state.data.map((obj) => {
                return dayjs(obj.date).format("MMM DD, YYYY HH:mm");
              }),
              datasets: [
                {
                  label: "Unread Emails",
                  data: this.state.data.map((obj) => {
                    return obj.unread;
                  }),
                  backgroundColor: ['#34adfe'],
                  pointBackgroundColor: ['#34adfe'],
                  hoverBackgroundColor:["#ffea00"],
                  fill: "origin",
                },
                {
                  label: "Total Emails",
                  data: this.state.data.map((obj) => {
                    return obj.total;
                  }),
                  backgroundColor: ["#93d8ff"],
                  pointBackgroundColor: ['#93d8ff'],
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
              elements: {
                point: {
                    radius: 3
                },
                line: {
                    tension: 0
                }
              }
            }}
          />
        )}
      </div>
    );
  }
}
