import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default class LoginButton extends Component {
    responseGoogle=(response)=>{
        console.log(response)
    }
    render() {
        return (
            <div>
                <GoogleLogin clientId="707464855273-6v3nkb519bofnhh0b4ivuareaa1o7vvt.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}
