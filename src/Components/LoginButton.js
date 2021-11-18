import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class LoginButton extends Component {
  responseGoogle = async (response) => {
    console.log(response);
    this.props.handleLogin(response);
  };
  render() {
    return (
      <GoogleLogin
        clientId="707464855273-6v3nkb519bofnhh0b4ivuareaa1o7vvt.apps.googleusercontent.com"
        buttonText="Login"
        scope={"https://www.googleapis.com/auth/gmail.readonly"}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}
