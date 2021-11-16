import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import axios from 'axios'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "",
      loggedIn: false
    };
  }
  handleLogin = async(res) => {
    if(res){
    this.setState({
      loggedIn: true,
      accessToken: res.Zb.access_token,
      userName: res.it.Se
    })}
  }
  handleLogout = async() => {
    this.setState({
      loggedIn: false
    })
    let url = `https://accounts.google.com/o/oauth2/revoke?token=${this.state.accessToken}`
    let res = await axios.get(url)
  };
  render() {
    return (
      <Router>
        <Header userName={this.state.userName} loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        <Switch>
        <Route path="/dashboard" >
            <Dashboard accessToken={this.state.accessToken} />
          </Route>
          <Route path="/about" >
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}
