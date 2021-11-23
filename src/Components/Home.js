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
        <Container style={{padding: "6.5em"}}>
          <div style={{padding: "3em 4em", margin: "0em auto 0em auto", width: "fit-content", dispaly: "block",  backdropFilter: "blur(0.3em)", backgroundColor: "rgba(250,250,250,0.5)"}}>
            <h1 style={{fontSize: "5em", margin: "0", padding: "0"}}>MailPal</h1>
            <p>Providing analytical insights into your email habits</p>
            <GoogleLogin
              clientId={`${process.env.REACT_APP_AUTH_DOMAIN}`}
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
          </div>
        </Container>
      </div>
      <Container style={{height: "500px"}}>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" style={{width: "10em", padding: "200px 0 20px 0"}}/>
        <img src={chart} alt="" style={{width: "40%", padding: "100px 0 20px 0", float: "right"}}/>
        <p>Understand your email habits to better read and respond</p>    
      </Container>
    </>
    );
  }
}
