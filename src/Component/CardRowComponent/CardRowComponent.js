import React from 'react';
import { CardDeck } from 'react-bootstrap';
import CardComponent from '../CardComponent/CardComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardRowComponent = (props) => {
  // fetch aggregated data
  let selected = props.selected;
  if (selected.length === 0) {
    selected = [0,1,2,3,4,5,6];
  }
  const data = props.data;
  const aggData = [];
  console.log("inside", data, selected);
  return (
    <div>
      <CardDeck>
        {
          aggData.map((element, idx) => (
            <CardComponent element={element}/>
          ))
        }
      </CardDeck>
    </div>
  );
}

export default CardRowComponent;