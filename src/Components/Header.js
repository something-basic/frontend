import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Header extends Component {
  render() {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="/">MailPal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {this.props.loggedIn && (
            <Nav.Link href="dashboard">Dashboard</Nav.Link>
            )}
            <Nav.Link href="about">About</Nav.Link>
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
