import React, { Component } from 'react';


// location to show basic information about each team member//

export default class About extends Component {
    render(){
    return ( <Card>
        {/* possibly add photos or other info per card  */}
        {/* need 'about' button on home page and dashboard */}
        {/* need to figure out styling for cards */}
        <Card.Header>Test</Card.Header>
        <Card.Body>
          <Card.Title>Jordan Folk</Card.Title>
          <Card.Text>
            TEXT ABOUT PERSON
          </Card.Text>
{/* need to add links for each github page */}
          <Button variant="primary">Jordan's Github</Button>
        </Card.Body>
      </Card>

        <Card>
      <Card.Header>Test</Card.Header>
      <Card.Body>
        <Card.Title>Miguel Fierro</Card.Title>
        <Card.Text>
          TEXT ABOUT PERSON
        </Card.Text>
        <Button variant="primary">Miguel's Github</Button>
      </Card.Body>
        </Card>

        <Card>
    <Card.Header>Test</Card.Header>
    <Card.Body>
      <Card.Title>Chloe Nott</Card.Title>
      <Card.Text>
        TEXT ABOUT PERSON
      </Card.Text>
      <Button variant="primary">Chloe's Github</Button>
    </Card.Body>
        </Card>

            <Card>
            <Card.Header>Test</Card.Header>
            <Card.Body>
                <Card.Title>K'Lan Stovall</Card.Title>
                <Card.Text>
                TEXT ABOUT PERSON
                </Card.Text>
                <Button variant="primary">K'Lan's Github</Button>
            </Card.Body>
            </Card>
        <Card>
        <Card.Header>Test</Card.Header>
        <Card.Body>
          <Card.Title>Joseph Nguyen</Card.Title>
          <Card.Text>
            TEXT ABOUT PERSON
          </Card.Text>
          <Button variant="primary">Joseph Github</Button>
        </Card.Body>
      </Card>
    )
    };

      

