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
          clientId="707464855273-t1hjud5ojdi1qrshaef6t4iq6ijdgjgc.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.logout}
          onFailure={this.logout}
        ></GoogleLogout>
      </div>
    );
  }
}
