import React, { Component } from 'react'
import Logo from '../images/logo.svg'

export default class Footer extends Component {
    render() {
        return (
            <div style={{textAlign: "center", height: "120px", backgroundColor: "rgb(220 220 220)", marginTop: "50px"}}>
                <img className="logo" src={Logo} alt="" style={{width: "100px", paddingTop: "5px", display: "block", margin: "auto"}}></img>
                <h4>Code 301d79 Final Project</h4>
            </div>
            
        )
    }
}
