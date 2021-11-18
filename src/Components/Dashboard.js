import React, { Component } from "react";
import ChartByRecipient from "./ChartByRecipient";
import DailyChart from "./DailyChart";
import TotalChart from "./TotalChart";
import UnreadTable from "./UnreadTable";
import { Container, Row } from "react-bootstrap";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

              <ChartByRecipient />
            </Row>
          </Container>
        )}
      </>
    );
  }
}
