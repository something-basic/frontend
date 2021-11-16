import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import LoginButton from "./LoginButton.js";
import LogoutButton from './LogoutButton.js';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg='light'>
                <Container>
                    <Navbar.Brand>MailPal</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Dashboard</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <LoginButton /> 
                    <LogoutButton /> 
                </Container>
            </Navbar>
        )
    }
}
