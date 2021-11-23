import "./CSS/App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleLogin = async (res) => {
    if (res) {
      this.setState({
        loggedIn: true,
        accessToken: res.wc.access_token,
        userName: res.vu.jf,
      });
    }
  };

  handleLogout = async () => {
    this.setState({
      loggedIn: false
    });
    let url = `https://accounts.google.com/o/oauth2/revoke?token=${this.state.accessToken}`;
    await axios.get(url);
  };

  render() {
    return (
      <Router>
        <Header
          userName={this.state.userName}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
        />
        <Container>
        <Switch>
            <Route path="/dashboard">
              <Dashboard userName={this.state.userName} accessToken={this.state.accessToken}/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/*">
              <Home accessToken={this.state.accessToken} handleLogin={this.handleLogin}/>
            </Route>
        </Switch>
        </Container>
        <Footer />
      </Router>
    );
  }
}
