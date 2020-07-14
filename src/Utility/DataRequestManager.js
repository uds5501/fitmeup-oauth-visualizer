import axios from 'axios';

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

export const addAggregate = async (endTime, requestParameters, callBack) => {
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
  let state = [];  
  let promises = [];

  dataValues.forEach((element) => {
    let body = getAggregatedDataBody(element.type, endTime);
    promises.push(
      axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', body, requestParameters)
        .then((resp) => {
          var aggVal = 0;
          resp.data.bucket[0].dataset[0].point.forEach((point) => {
            point.value.forEach((val) => {
              let tmp = val['intVal'] || Math.ceil(val['fpVal']) || 0;
              aggVal = aggVal + tmp;
            })
          })
          state.push({
            ...element,
            "value": aggVal
          })
        }
      )
    )
  })
  Promise.all(promises).then(() => {
    callBack(state);
  })
}