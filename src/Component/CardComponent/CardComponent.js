import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = (props) => {
  return (
    <Card bg={'dark'} text={'white'} className="mb-2">
      <Card.Body>
        <Card.Title>
          {props.element.header}
        </Card.Title>
        <Card.Subtitle>
          {props.element.count}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
