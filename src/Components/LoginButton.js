import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class LoginButton extends Component {
  responseGoogle = async (response) => {
    this.props.handleLogin(response);
  };
  render() {
    return (
      <GoogleLogin
        clientId={`${process.env.REACT_APP_AUTH_DOMAIN}`}
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
