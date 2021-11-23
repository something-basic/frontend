import React, { Component } from "react";
import "../CSS/table.css";
import Placeholder from 'react-bootstrap/Placeholder'

export default class HeaderSubtitle extends Component {
  render() {
    const currentStats = this.props.currentStats;
    const lastUpdate = currentStats[1] ? `${((Date.now() - currentStats[1].date)/1000/60/60).toFixed(1)} hours ago` : `0.0 hours ago`
    const unreadChange = currentStats[1] ? currentStats[0].unread - currentStats[1].unread : 0
    return (
      <div>
        {currentStats[0] ? 
          <p style={{display: "block", margin: "1em 0 3em 0", textAlign: "center" }}>
            You have {currentStats[0].total} emails total, {currentStats[0].unread} unread emails, and<br/>
            {unreadChange < 0 ? 
              `${Math.abs(unreadChange)} fewer unread emails since the last update ${lastUpdate}!` : 
              unreadChange === 0 ? 
                `no change in unread emails since the last update ${lastUpdate}` : 
                `${Math.abs(unreadChange)} more unread emails than the last update ${lastUpdate}`
            }
          </p> :
          <p style={{display: "block", margin: "1em 0 3em 0", textAlign: "center" }}>
            <Placeholder animation="glow"> 
              <Placeholder as="p" xs={2} />{' '}<Placeholder as="p" xs={2} />{' '}<Placeholder as="p" xs={1} /><br />
              <Placeholder as="p" xs={3} />{' '}<Placeholder as="p" xs={1} />{' '}<Placeholder as="p" xs={2} />
            </Placeholder>
          </p>
        }
      </div>
    );
  }
}
