import React, { Component } from 'react';
import ChartByRecepient from './ChartByRecepient';
import DailyChart from './DailyChart';
import TotalChart from './TotalChart';
import UnreadTable from './UnreadTable';

export default class LoginButton extends Component {

    render () {
        return (
            <div>
               <h3>My DashBoard</h3> 
               <UnreadTable />
               <TotalChart />
               <DailyChart />
               <ChartByRecepient />
            </div>
        )
    }
}
