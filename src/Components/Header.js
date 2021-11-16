import React, { Component } from 'react';
import { Container, NavItem, Navbar } from 'react-bootstrap';
import LoginButton from "./LoginButton.js";
import LogoutButton from './LogoutButton.js';
import Dashboard from './Dashboard'
import { 
    Link
} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg='light'>
                   <Container>
                    <Navbar.Brand>MailPal</Navbar.Brand>
                    <NavItem>
                        <Link to ="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard">Dashboard</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">About</Link>
                    </NavItem>
                    <LoginButton loggedIn={this.props.loggedIn} handleLogin={this.props.handleLogin} /> 
                    <LogoutButton loggedIn={this.props.loggedIn} handleLogout={this.props.handleLogout}/> 
               </Container>
            </Navbar>
            
        )
    }
}
