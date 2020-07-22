import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const { extractElement, extractDate } = require('../../Utility/ChartDataManager.js');

const textStyle = {
  color: '#ffffff'
}
const ChartComponent = (props) => {
  const options = {
    chart: {
      type: 'column',
      backgroundColor: '#272727'
    },
    title: {
      text: 'Your Weekly Fitness Data',
      style: textStyle
    },
    credits:{
      text: ''
    },
    xAxis: {
      categories: extractDate(props.data),
      crosshair: true,
      labels: {
        style: textStyle
      }
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0
    },
    legend: {
      backgroundColor: '#A9A9A9'
    },
    tooltip: {
      backgroundColor: '#272727',
      headerFormat: '<span style="font-size:10px; color:white">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}: </b></td>' +
        '<td style="padding:0; color:white"><b>{point.y} units</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        stacking: 'percent'
      }
    },
    colors : ['#ff3d00', '#00e676', '#651fff', '#00e5ff'],
    series: [{
      name: 'Calories Burnt',
      data: extractElement(props.data, 'Calories')
  
    }, {
      name: 'Heart Points',
      data: extractElement(props.data, 'Heart')
  
    }, {
      name: 'Move Minutes',
      data: extractElement(props.data, 'Move')
  
    }, {
      name: 'Steps',
      data: extractElement(props.data, 'Steps')
  
    }]
  }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
};

export default ChartComponent