import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default class LoginButton extends Component {
    responseGoogle=(response)=>{
        console.log(response)
    }
    render() {
        return (
            <div>
                <GoogleLogin clientId={process.env.REACT_APP_AUTH_CLIENT_ID} buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}
