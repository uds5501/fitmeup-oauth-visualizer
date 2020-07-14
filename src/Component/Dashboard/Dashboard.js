import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import CardRowComponent from '../CardRowComponent/CardRowComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = (props) => {
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
            <CardRowComponent user={props.user}/>
          </div> : null
        }
      </Container>
    </div>
  );
}

export default Dashboard;
