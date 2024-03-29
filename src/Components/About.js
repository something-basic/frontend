import "../CSS/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import githublogo from "../images/GitHub-Mark-32px.png";
import linkedin from "../images/LI-In-Bug.png";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

// location to show basic information about each team member//

export default class About extends Component {
  render() {
    return (
      <Container style={{ padding: "5% 0 0 0" }}>
        <h2
          style={{
            padding: "20px",
            display: "inline-block",
            width: "fit-content",
          }}
        >
          About
        </h2>
        <div>
          <CardGroup>
            <Card
              border="secondary"
              style={{ width: "15rem" }}
              className="cardframe"
            >
              {/* possibly add photos or other info per card  */}
              {/* need 'about' Button on home page and dashboard */}
              {/* need to figure out styling for cards */}
              <Card.Header>
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Card.Title>Jordan Folk</Card.Title>
                <Card.Text>Currently attending Code Fellows to pursue a future working with Python and making the tools of tomorrow.</Card.Text>
                {/* need to add links for each github page */}
                <a
                  href="https://github.com/folksmash"
                  target="_blank"
                  rel="noreferrer"
                > 
                  <img src={githublogo} alt="GitHub" />
                </a>&ensp;
                <a
                  href="https://www.linkedin.com/in/jordan-folk-2a6062220/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} className="linkedinlogo" alt="" />
                </a>
              </Card.Body>
            </Card>
            <Card border="secondary" className="cardframe">
              <Card.Header>
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Card.Title>Miguel Fierro</Card.Title>
                <Card.Text>Software  developer that enjoys the process of creating things, the endless possibilities of technology 
and solving everyday obstacles.
</Card.Text>
                <a
                  href="https://github.com/MFierro25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githublogo} alt="GitHub" />
                </a>&ensp;
                <a
                  href="https://www.linkedin.com/in/mfierrro-1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} className="linkedinlogo" alt="" />
                </a>
              </Card.Body>
            </Card>
            <Card border="secondary" className="cardframe">
              <Card.Header>
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Card.Title>Chloe Nott</Card.Title>
                <Card.Text>Career changing student at Code Fellows. Background in manufacturing engineering. Enjoys utilization of data to communicate and base decisions.</Card.Text>
                <a
                  href="https://github.com/chloenott"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githublogo} alt="GitHub" />
                </a>&ensp;
                <a
                  href="http://www.linkedin.com/in/chloenott"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} className="linkedinlogo" alt="" />
                </a>
              </Card.Body>
            </Card>

            <Card border="secondary" className="cardframe">
              <Card.Header>
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Card.Title>K'Lan Stovall</Card.Title>
                <Card.Text>
                  Software Developer fascinated with the relationship between technology and creativity.
                </Card.Text>
                <a
                  href="https://github.com/KSTOV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githublogo} alt="GitHub" />
                </a>&ensp;
                <a
                  href="https://www.linkedin.com/in/klanstovall/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} className="linkedinlogo" alt="" />
                </a>
              </Card.Body>
            </Card>

            <Card border="secondary" className="cardframe">
              <Card.Header>
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>&ensp;
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
              </Card.Header>
              <Card.Body>
                <Card.Title>Joseph Nguyen</Card.Title>
                <Card.Text>Software development student with a passion for solving problems with technology</Card.Text>
                <a
                  href="https://github.com/3lueHippo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githublogo} alt="GitHub" />
                </a>&ensp;
                <a
                  href="https://www.linkedin.com/in/josephthuan-nguyen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedin} className="linkedinlogo" alt="" />
                </a>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </Container>
    );
  }
}
