import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = (props) => {
  return (
    <Card bg={'dark'} text={'white'} className="mb-2">
      <Card.Body>
        <Card.Title>
          {props.element.title}
        </Card.Title>
        <Card.Subtitle>
          {props.element.value}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
