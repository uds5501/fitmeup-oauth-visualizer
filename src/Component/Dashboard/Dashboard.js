import React from 'react';

import { Container, Jumbotron } from 'react-bootstrap';
import ExampleComponent from '../ExampleComponent/ExampleComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = (props) => {
  console.log('In Dashboard : ', props.user);
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ExampleComponent>
          We now have Toasts
            <span role="img" aria-label="tada">
            🎉
            </span>
        </ExampleComponent>
        {props.user.haslogin ?
          <div>
            <h3>Your Access Token is : </h3>
            <p> {props.user.accessToken}</p>
          </div> : <div>
            <h3> Nah king you ain't logged in</h3>
          </div>
        }
      </Jumbotron>
    </Container>
  );
}

export default Dashboard;
