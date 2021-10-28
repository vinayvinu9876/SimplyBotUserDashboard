import React,{Component} from "react";
import {
  CircularGridLines,
  RadarChart} from 'react-vis';

  const DATA = [
    {
      Sunday : 10,
      Monday : 5,
      Tuesday: 7,
      Wednesday: 10,
      Thursday : 8,
      Friday : 9,
      Saturday: 7
    }
  ];
  
  const DOMAIN = [
    {name: 'Sunday', domain: [0, 100], tickFormat: t => t},
    {name: 'Monday', domain: [6.9, 7.1]},
    {name: 'Tuesday', domain: [0, 11]},
    {name: 'Wednesday', domain: [0, 16]},
    {name: 'Thursday', domain: [0, 10]},
    {name: 'Friday', domain: [0, 20]},
    {name: 'Saturday', domain: [0, 20]},
  ];
 
  
export default class AnimatedRadar extends Component {
    state = {
      data: DATA
    };
  
    render() {
      const {data} = this.state;
  
      return (
        <div className="centered-and-flexed">
          <RadarChart
            animation
            data={data}
            domains={DOMAIN}
            colorType={"black"}
            style={{
              polygons: {
                fillOpacity: 0,
                strokeWidth: 3,
                color:"black",
              },
              axes: {
                text: {
                  opacity: 1
                }
              },
              labels: {
                textAnchor: 'middle'
              }
            }}
            margin={{
              left: 30,
              top: 30,
              bottom: 40,
              right: 50
            }}
            tickFormat={t => ''}
            width={400}
            height={300}
          >
            <CircularGridLines
              tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
            />
          </RadarChart>
        </div>
      );
    }
  }