import React, { Component } from "react";
import "../CSS/table.css";

export default class HeaderSubtitle extends Component {
  render() {
    const currentStats = this.props.currentStats;
    const unreadChange = currentStats && currentStats[1].unread - currentStats[0].unread
    return (
      <div>
        {currentStats[1] && 
          <p style={{display: "block", margin: "1em 0 3em 0", textAlign: "center" }}>
            You have {currentStats[1].unread} unread emails and {currentStats[1].total} inbox emails<br/>
            {unreadChange < 0 ? 
              `There are ${Math.abs(unreadChange)} fewer unread emails since the last update!` : 
              unreadChange === 0 ? 
                `There is no change in the number of unread emails since the last update` : 
                `There are ${Math.abs(unreadChange)} more unread emails than the last update`
            }
          </p>
        }
      </div>
    );
  }
}
