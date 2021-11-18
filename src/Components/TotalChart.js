import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import axios from "axios";

export default class TotalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getTotal();
    
  }
  getTotal = async () => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/total",
    };
    console.log(config);
    const data = await axios(config);
    
    this.setState({ rawData: data.data.sort((a,b) => {return b.date - a.date}) });
    this.filterData(7)
    console.log(this.state.rawData);
  };
  handleChange = (e) =>{
    this.filterData(e.target.value)
  }
  filterData = (value) => {
    let filteredData = []
    for (let i = 0; i < value; i++) {
      filteredData.push(this.state.rawData[i])
    }
    this.setState({data: filteredData.reverse()});
  }
  render() {
    return (
      <div className="main-chart">
        <h2 style={{display: "inline-block"}}>Unread vs. Total Unread</h2>
               <select onChange={this.handleChange} id="binSelection" style={{float: "right", margin: "12px 0 0 0" }}>
          <option value="7" selected>
            Last 7 Requests
          </option>
          <option value="30">Last 30 Requests</option>
          <option value="60">Last 60 Requests</option>
        </select> 
        {this.state.data && (
          <Line 
            data={{
              labels: this.state.data.map((obj) => {
                return dayjs(obj.date).format("YYYY MMM DD");
              }),

              datasets: [
                {
                  label: "Unread Emails",
                  data: this.state.data.map((obj) => {
                    return obj.unread;
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
            }}}
          />
        )}
      </div>
    );
  }
}
