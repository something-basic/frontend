import React, { Component } from 'react'
import Logo from '../images/logo.svg'

export default class Footer extends Component {
    render() {
        return (
            <div style={{textAlign: "center", height: "15em", backgroundColor: "rgb(240 240 240)", marginTop: "50px"}}>
                <img className="logo" src={Logo} alt="" style={{width: "100px", paddingTop: "5em", display: "block", margin: "auto"}}></img>
            </div>
        )
    }
}
