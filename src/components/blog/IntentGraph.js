import React from "react";
import {XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,} from 'react-vis';

const IntentGraph = () =>{

    
    const BarSeries = HorizontalBarSeries;

    return (
      
          <XYPlot width={150} height={150} stackBy="x">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="X"/>
            <YAxis />
            <BarSeries yType="linear" data={[{y: 1, x: 3}, {y: 2, x: 2}, {y: 3, x: 5}]} />
          </XYPlot>
         
    )
}

export default IntentGraph;