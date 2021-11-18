import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../CSS/Home.css'



export default class Home extends Component {

    render() {
        return (
            <div id="main">
            <Container>
                <h1>MailPal</h1>
                <p>Providing analytical insights into your email habits</p>
            </Container>
            </div>
        )
    }
}
