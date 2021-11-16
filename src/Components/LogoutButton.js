import React, { Component } from "react";
import GoogleLogout from "react-google-login";

export default class LoginButton extends Component {
  logout = (response) => {
    console.log(response);
  };
  render() {
    return (
      <div>
        <GoogleLogout
          clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        ></GoogleLogout>
      </div>
    );
  }
}
