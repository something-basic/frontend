import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default class SendersChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],      
    };
  }
  
  getSenders = async () => {
    const jwt = this.props.accessToken;
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/senders",
    };
    const data = await axios(config);
    this.setState({ data: data.data.slice(0, 40) });
  };

  componentDidMount() {
    this.getSenders();
  }

  render() {
    return (
      <div className="senders-chart" style={{ display: "block" }}>
        <h4 style={{ display: "inline-block" }}>Unread Senders</h4>
        {this.state.data && <Bar
          data={{
            labels: this.state.data.map((obj) => {
              return obj.sender.slice(0, 70);
            }),

            datasets: [
              {
                label: "Unread Count",
                data: this.state.data.map((obj) => {
                  return obj.count;
                }),
                backgroundColor: ["#34adfe"],
                borderColor: ["rgb(180, 180, 180)"],
                hoverBackgroundColor:["#ffea00"]
              },
            ],
          }}
          width={200}
          height={200}
          options={{
            indexAxis: 'y',
          }}
        />}
      </div>
    );
  }
}
