import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const UserCard = (props) => {
  const style = {
    backgroundColor: '#272727',
    color: '#ffffff'
  };
  return (
    <Card  className="mb-2 text-center" style={style}>
      <Card.Body>
        <Card.Title>
          Welcome {props.user.name}
        </Card.Title>
        <Card.Subtitle>
          Your Google Fit Stats are aggregated below!
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default UserCard;
