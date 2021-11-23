import React, { Component } from "react";
import "../CSS/table.css";

export default class HeaderSubtitle extends Component {
  render() {
    const currentStats = this.props.currentStats;
    const lastUpdate = currentStats[1] && `${((Date.now() - currentStats[1].date)/1000/60/60).toFixed(1)} hours ago`
    const unreadChange = currentStats && currentStats[1].unread - currentStats[0].unread
    return (
      <div>
        {currentStats[1] && 
          <p style={{display: "block", margin: "1em 0 3em 0", textAlign: "center" }}>
            You have {currentStats[1].unread} unread emails and {currentStats[1].total} inbox emails<br/>
            {unreadChange < 0 ? 
              `${Math.abs(unreadChange)} fewer unread emails since the last update ${lastUpdate}!` : 
              unreadChange === 0 ? 
                `No change in unread emails since the last update ${lastUpdate}` : 
                `${Math.abs(unreadChange)} more unread emails than the last update ${lastUpdate}`
            }
          </p>
        }
      </div>
    );
  }
}
