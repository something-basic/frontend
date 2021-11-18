import React, { Component } from "react";
import UnsubscribeChart from "./UnsubscribeChart";
import DailyChart from "./DailyChart";
import TotalChart from "./TotalChart";
import UnreadTable from "./UnreadTable";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.getData();
  // }
  // getData = async () => {
  //   const jwt = this.props.accessToken;
  //   console.log(jwt);
  //   const config = {
  //     headers: { Authorization: `Bearer ${jwt}` },
  //     method: "get",
  //     baseURL: process.env.REACT_APP_SERVER_URL,
  //     url: "/counts",
  //   };
  //   console.log(config);
  //   const data = await axios(config);
  //   console.log(data);
  //   this.setState({ data: data });
  // };

  render() {
    return (
      <>
        {this.props.accessToken && (
          <Container style={{ padding: "1% 0 0 0" }}>
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
            <DailyChart accessToken={this.props.accessToken} />
            <Row m={1} lg={2}>
              <TotalChart accessToken={this.props.accessToken} />

              <UnsubscribeChart accessToken={this.props.accessToken}/>
            </Row>
          </Container>
        )}
      </>
    );
  }
}
