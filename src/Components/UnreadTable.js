import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class UnreadTable extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Read</th>
              <th>Unread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>% Read </td>
              <td># Read</td>
             
            </tr>
            <tr>
              <td>Unread today: # </td>
              <td>Total Unread: #</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
