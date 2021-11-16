import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


// location to show basic information about each team member//

export default class About extends Component {
  // click end for jordan's github

  render() {
      return  ( 
        <div>
        <Card>
        {/* possibly add photos or other info per card  */}
        {/* need 'about' Button on home page and dashboard */}
        {/* need to figure out styling for cards */}
        <Card.Header>Test</Card.Header>
        <Card.Body>
          <Card.Title>Jordan Folk</Card.Title>
          <Card.Text>
            TEXT ABOUT PERSON
          </Card.Text>
            {/* need to add links for each github page */}
            <a href="https://github.com/folksmash" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
            <a href="https://www.linkedin.com/in/jordan-folk-2a6062220/" target="_blank"><img src="" /></a>
        </Card.Body>
      </Card>
        <Card>
      <Card.Header>Test</Card.Header>
      <Card.Body>
        <Card.Title>Miguel Fierro</Card.Title>
        <Card.Text>
          TEXT ABOUT PERSON
        </Card.Text>
            <a href="https://github.com/MFierro25" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
            <a href="https://www.linkedin.com/in/mfierrro-1/" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
      </Card.Body>
        </Card>
        <Card>
    <Card.Header>Test</Card.Header>
    <Card.Body>
      <Card.Title>Chloe Nott</Card.Title>
      <Card.Text>
        TEXT ABOUT PERSON
      </Card.Text>
            <a href="https://github.com/chloenott" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
            <a href="http://www.linkedin.com/in/chloenott" target="_blank"><img src="" /></a>
    </Card.Body>
        </Card>

            <Card>
            <Card.Header>Test</Card.Header>
            <Card.Body>
                <Card.Title>K'Lan Stovall</Card.Title>
                <Card.Text>
                TEXT ABOUT PERSON
                </Card.Text>
                <a href="https://github.com/KSTOV" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
                <a href="https://www.linkedin.com/in/klanstovall/" target="_blank"><img src="" /></a>
            </Card.Body>
            </Card>
            
        <Card>
        <Card.Header>Test</Card.Header>
        <Card.Body>
          <Card.Title>Joseph Nguyen</Card.Title>
          <Card.Text>
            TEXT ABOUT PERSON
            </Card.Text>
            <a href="https://github.com/3lueHippo" target="_blank"><img src="/public/images/Github-Mark-64px.png" /></a>
            <a href="https://www.linkedin.com/in/josephthuan-nguyen/" target="_blank"><img src="" /></a>
        </Card.Body>
      </Card>
      </div>
    )
    };
}