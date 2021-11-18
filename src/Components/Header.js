import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import '../CSS/header.css'

export default class Header extends Component {
  render() {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand><img className="logo" src={Logo} alt="" style={{width: "100px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link to="/">Home</Link>
            {this.props.loggedIn && (
            <Link to="dashboard">Dashboard</Link>
            )}
            <Link to="about">About</Link>
        </Nav>
        </Navbar.Collapse>
        {this.props.loggedIn ? (
            <>
              <p style={{padding: '15px 10px 0 0'}}>{this.props.userName}</p>
              <LogoutButton
                loggedIn={this.props.loggedIn}
                handleLogout={this.props.handleLogout}
              />{" "}
            </>
          ) : (
            <LoginButton
              loggedIn={this.props.loggedIn}
              handleLogin={this.props.handleLogin}
            />
          )}
    </Container>
    </Navbar>
    );
  }
}
