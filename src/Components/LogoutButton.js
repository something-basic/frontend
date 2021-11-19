import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

export default class LoginButton extends Component {
  render() {
    return (
      <GoogleLogout
        clientId={`${process.env.REACT_APP_AUTH_DOMAIN}`}
        buttonText="Logout"
        onLogoutSuccess={() => {
          this.props.handleLogout();
        }}
      />
    );
  }
}
