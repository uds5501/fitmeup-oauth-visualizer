import axios from 'axios';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

// We need to get aggregated data *on that particular day for now*

// Provide request headers to be attached with each function call
export const getRequestHeaders = (accessToken) => {
  const requestHeaderBody = {
    params: {
      'key': API_KEY
    },
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    }
  }
  return requestHeaderBody;
}

export const getAggregatedDataBody = (dataType, endTime) => {
  const requestBody = {
    "aggregateBy": [{
      "dataTypeName": dataType
    }],
    "bucketByTime": {
      "durationMillis": 86400000
    },
    "endTimeMillis": endTime,
    "startTimeMillis": endTime - 86400000
  }
  return requestBody;
}

export const getAggregateData = async (body, headers) => {
  const req = await axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, headers);
  return req;
}

export const addAggregate = async(endTime, requestParameters) => {
  const dataValues = [
    {
      "title": "Calories Burned",
      "type": "com.google.calories.expended"
    },
    {
      "title": "Heart Points",
      "type": "com.google.heart_minutes"
    },
    {
      "title": "Move Minutes",
      "type": "com.google.active_minutes"
    },
    {
      "title": "Step Count",
      "type": "com.google.step_count.delta"
    },
  ];
  const state = [];
  dataValues.forEach(async (element) => {
    let body = getAggregatedDataBody(element.type, endTime);
    const req = await getAggregateData(body, requestParameters);
    console.log(element.type ," : " , req);
  })
  return state;
}