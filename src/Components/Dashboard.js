import React, { Component } from "react";
import ChartByRecipient from "./ChartByRecipient";
import DailyChart from "./DailyChart";
import TotalChart from "./TotalChart";
import UnreadTable from "./UnreadTable";
import axios from "axios";
import { Container } from "react-bootstrap";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const jwt = this.props.accessToken;
    console.log(jwt);
    const config = {
      headers: { Authorization: `Bearer ${jwt}` },
      method: "get",
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: "/counts",
    };
    console.log(config);
    const data = await axios(config);
    console.log(data);
    this.setState({ data: data });
  };

  render() {
    return (
      <Container style={{ padding: "5% 0 0 0" }}>
        <h3
          style={{
            padding: "20px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          My DashBoard
        </h3>
        <UnreadTable />
        <TotalChart />
        <DailyChart />
        <ChartByRecipient />
      </Container>
    );
  }
}
