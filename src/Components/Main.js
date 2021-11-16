import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Dashboard from './Dashboard'



export default class Main extends Component {
    render() {
        return (
            <Container>
              <Dashboard />
            </Container>
        )
    }
}
