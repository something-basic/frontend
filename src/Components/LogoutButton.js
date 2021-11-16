import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

export default class LoginButton extends Component {
  
  render() {
    return (
        <GoogleLogout
          clientId="707464855273-6v3nkb519bofnhh0b4ivuareaa1o7vvt.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={()=> {this.props.handleLogout()}}
        />
    );
  }
}
