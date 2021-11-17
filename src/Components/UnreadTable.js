import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../CSS/table.css";

export default class UnreadTable extends Component {
  render() {
    return (
      <Table>
        <tbody>
          <tr>
            <td>50% Read</td>
            <td>Unread: 300</td>
          </tr>
          <tr>
            <td>300 Read</td>
            <td>Total: 600</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
