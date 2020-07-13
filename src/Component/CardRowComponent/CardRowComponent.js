import React from 'react';
import { CardDeck, Card, Image } from 'react-bootstrap';
import CardComponent from '../CardComponent/CardComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardRowComponent = (props) => {
  const stats = [
    {
      header: 'h1',
      count : 100,
    },
    {
      header: 'h2',
      count : 200,
    },
    {
      header: 'h3',
      count : 300,
    },
    {
      header: 'h4',
      count : 400,
    }
  ];
  
  return (
    <div>
      <CardDeck>
        {
          stats.map((element, idx) => (
            <CardComponent element={element}/>
          ))
        }
      </CardDeck>
    </div>
  );
}

export default CardRowComponent;