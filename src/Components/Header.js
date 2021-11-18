import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faStream, } from '@fortawesome/free-solid-svg-icons';
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
            <Link to="/"><Button variant="light"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home  </Button></Link>&ensp;
            {this.props.loggedIn && (
            <Link to="dashboard"><Button variant="light"><FontAwesomeIcon icon={faStream}></FontAwesomeIcon> Dashboard </Button></Link> 
            )}
           &ensp;<Link to="about"><Button variant="light"><FontAwesomeIcon icon={faInfo}></FontAwesomeIcon> About </Button></Link>
        </Nav>
        </Navbar.Collapse>
        {this.props.loggedIn ? (
            <>
              <p style={{padding: '15px 10px 0 0', fontSize: "15px"}}>{this.props.userName}</p>
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
