import React, { useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import CardRowComponent from '../CardRowComponent/CardRowComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const { getRequestHeaders, getWeeklyData } = require('../../Utility/DataRequestManager.js');

const Dashboard = (props) => {
  // fetch weekly data
  const accessToken = props.user.accessToken;
  const [weekData, setWeekData] = useState([]);
  // const [selected, setSelected] = useState([]);
  // let weekData = [];

  let selected = [];
  const callBack = (state) => {
    setWeekData(state);
  }
  const requestHeaders = getRequestHeaders(accessToken);
  const timeRightNow = new Date().getTime();
  getWeeklyData(timeRightNow, requestHeaders, callBack);

  return (
    <div>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To Fit Me Up Visualizer</h1>
          {props.user.haslogin ?
            <div>
              <h2>You are logged in as: </h2>
              <p> {props.user.email}</p>
            </div> : <div>
              <h3> Please login</h3>
            </div>
          }
        </Jumbotron>
        {props.user.haslogin ?
          <div>
            <CardRowComponent user={props.user} selected={selected} data={weekData}/>
          </div> : null
        }
      </Container>
    </div>
  );
}

export default Dashboard;
