import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import "../CSS/Home.css";
import GoogleLogin from "react-google-login";
import chart from "../images/chart.png"

export default class Home extends Component {
    responseGoogle = async (response) => {
        window.location.href = "/dashboard"
        this.props.handleLogin(response);
        }
      

  render() {
    return (
      <>
      <div id="main">
        <Container>
          <h1>MailPal</h1>
          <p>Providing analytical insights into your email habits</p>
          <GoogleLogin
            clientId="707464855273-6v3nkb519bofnhh0b4ivuareaa1o7vvt.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button variant="dark" onClick={renderProps.onClick}
              disabled={renderProps.disabled}>Get Started</Button>
            )}
            buttonText="Login"
            scope={"https://www.googleapis.com/auth/gmail.readonly"}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Container>
      </div>
      <Container style={{height: "500px"}}>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" style={{width: "20%", padding: "200px 0 20px 0"}}/>
        <img src={chart} alt="" style={{width: "40%", padding: "100px 0 20px 0", float: "right"}}/>
        <p>Understand your email habits to better read and respond</p>
        
      </Container>
      </>
    );
  }
}
