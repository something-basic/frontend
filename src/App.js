import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: ""
    };
  }
  handleLogin = async(res) => {
    if(res){
    this.setState({
      loggedIn: true,
      accessToken: res.Zb.access_token,
      userName: res.it.Se
    })}
    console.log(this.state.accessToken, this.state.userName)
  }
  handleLogout = async() => {
    let url = `https://accounts.google.com/o/oauth2/revoke?token=${this.state.accessToken}`
    let res = await axios.get(url)
    if(res) {
      this.setState=({loggedIn: false})
    }
    
  };
  render() {
    return (
      <Router>
        <Header loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
        <Switch>
        <Route path="/dashboard" >
            <Main />
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
