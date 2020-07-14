import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';
import CardComponent from '../CardComponent/CardComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const { getRequestHeaders, addAggregate } = require('../../Utility/DataRequestManager.js');

const CardRowComponent = (props) => {
  // fetch aggregated data
  const [aggData, setAggData] = useState([]);
  
  const callBack = (state) => {
    setAggData(state);
  }
  const accessToken = props.user.accessToken;
  useEffect(() => {
    const requestHeaders = getRequestHeaders(accessToken);
    const timeRightNow = new Date().getTime();
    addAggregate(timeRightNow, requestHeaders, callBack);
  }, [])
  
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