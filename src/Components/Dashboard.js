import React, { Component } from 'react';
import ChartByRecepient from './ChartByRecepient';
import DailyChart from './DailyChart';
import TotalChart from './TotalChart';
import UnreadTable from './UnreadTable';
import axios from 'axios';

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

async componentDidMount(){
      const jwt = this.props.accessToken

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/books",
      };

      const booksResponse = await axios(config);

      this.setState({ books: booksResponse.data });
}
    
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
