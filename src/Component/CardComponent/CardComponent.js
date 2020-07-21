import React from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardComponent = (props) => {
  const style = {
    backgroundColor: '#ff9800'
  };

  return (
    <Card  className="mb-2 text-center" style={style}>
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
