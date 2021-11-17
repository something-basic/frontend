import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../CSS/Home.css'
import Logo from '../images/logo.svg'


export default class Home extends Component {

    render() {
        return (
            <Container>
                <img class="logo" src={Logo} alt=""></img>
                <p>Providing analytical insights into your email habits</p>
            </Container>
        )
    }
}
