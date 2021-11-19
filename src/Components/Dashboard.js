import React, { Component } from "react";
import UnsubscribeChart from "./UnsubscribeChart";
import DailyChart from "./DailyChart";
import TotalChart from "./TotalChart";
import { Container, Row } from "react-bootstrap";
import SendersChart from "./SendersChart";
import HeaderSubtitle from "./HeaderSubtitle";



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStats: false
    };
  }

  getCurrentStats = (currentStats) => {
    this.setState({ currentStats: currentStats });
  }

  render() {
    const spacing = "3em 0 3em 0";
    return (
      <>
        {this.props.accessToken && (
          <Container style={{ padding: "1% 0 0 0" }}>
            <h1 style={{ margin: "0 auto", display: "block", width: "fit-content" }}>{this.props.userName.split(' ')[0]}'s Inbox Dashboard</h1>
            <HeaderSubtitle style={{ margin: spacing}} currentStats={this.state.currentStats} />
            <DailyChart style={{ margin: "spacing" }}  accessToken={this.props.accessToken} />
            <Row style={{ margin: "4em 0 3em 0"}}  m={1} lg={2}>
              <TotalChart getCurrentStats={this.getCurrentStats} accessToken={this.props.accessToken} />
              <UnsubscribeChart accessToken={this.props.accessToken} />
            </Row>
            <SendersChart style={{ margin: spacing}}  accessToken={this.props.accessToken} />
          </Container>
        )}
      </>
    );
  }
}
