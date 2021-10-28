import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, FormSelect, FormInput, Button,Card,CardHeader,CardBody } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import IntentGraph from "../components/blog/IntentGraph";
import HeatMap from 'react-heatmap-grid';
import WaitTimeByDayOfWeek from '../components/blog/WaitTimeByDaysGraph';

const BlogOverview = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Analytics" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    <Row>
      <Col md={4} lg={4} sm={12} xs={12}>
        <FormSelect>
          <option>All Bots</option>
          <option>Bot 1</option>
          <option>Bot 2</option>
        </FormSelect>
      </Col>
      
      <Col md={3} lg={3} sm={12} xs={12}>
        <Row>
        <Col md={4} lg={4} sm={12} xs={12} style={{align:'center',justifyContent:"center"}}>
          <p style={{paddingTop:"5px"}}>Start Date</p>
        </Col>
        <Col md={8} lg={8} sm={12} xs={12}>
          <FormInput type="date" placeholder="Start Date"/>
        </Col>
        </Row>
      </Col>
      <Col md={3} lg={3} sm={12} xs={12}>
      <Row>
        <Col md={4} lg={4} sm={12} xs={12} style={{align:'center',justifyContent:"center"}}>
          <p style={{paddingTop:"5px"}}>End Date</p>
        </Col>
        <Col md={8} lg={8} sm={12} xs={12}>
          <FormInput type="date" placeholder="End Date"/>
        </Col>
        </Row>
      </Col>
      <Col md={2} lg={2} sm={12} xs={12}>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
          Read Docs
        </Button>
      </Col>
    </Row>
    <br />


    <Row>
    <Col lg={7} md={7} sm={12} xs={12}>
    {/* Small Stats Blocks */}
    <Col>
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
          />
        </Col>
      ))}
    </Row>
    </Col>
      <Col lg={12} md={12} sm={12} className="mb-4">
        <Card small className="h-100">
          <CardHeader className="border-bottom">
          <h6 className="m-0">Intent</h6>
          </CardHeader>
          <CardBody className="d-flex py-0">
            <Col>
              <br />
              <Row>
                <Col md={4} lg={4} sm={12} xs={12}>
                  <IntentGraph />
                  <p style={{fontSize:12,textAlign:"center"}} className="m-0">Converstational Count</p>
                </Col>
                <Col md={4} lg={4} sm={12} xs={12}>
                  <IntentGraph />
                  <p style={{fontSize:12,textAlign:"center"}}>User Count</p>
              </Col>
              <Col md={4} lg={4} sm={12} xs={12}>
                <IntentGraph />
                <p style={{fontSize:12,textAlign:"center"}}>Time Spent</p>
              </Col>
            </Row>
          </Col>
        </CardBody>
    </Card>
        
      </Col>
      {/* Users Overview */}
      <Col lg="12" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>
        
      <Col lg="12" md="12" sm="12" className="mb-4">
        <Card>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Wait Time By Day of Week</h6>
            </CardHeader>
            <CardBody>
              <center><WaitTimeByDayOfWeek /></center>
            </CardBody>
        </Card>
      </Col>

    </Col>
    <Col lg={5} md={5} sm={12} xs={12}>
      <center><IntensityDayWeekHeatMap /></center>
    </Col>
    </Row>
    <br />
  </Container>
);



const IntensityDayWeekHeatMap = () =>{
  const xLabels = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
  ];

  const yLabels = [];
  
  for(var i=0;i<24;i++){
    yLabels.push(i);
  }

  var data = [];
  
  for(i=0;i<24;i++){
    var temp = [];
    for(var j=0;j<7;j++){
        temp.push(Math.floor(Math.random() * 100000) + 1)
    }
    data.push(temp);
  }


  return (
    <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Intensity @ Day of Week and Hour of day</h6>
        </CardHeader>
        <CardBody>
    <div style={{fontSize:12,overflow:"scroll",overflowX:"hidden",overflowY:"hidden"}}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={data}
        squares
        height={40}
        onClick={(x, y) => {}}
        cellStyle={
          (background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "14px",
          color: "#444",
          textAlign:"center",
          width : "45px"
        })
      }
        cellRender={value => value && <div style={{}}>{value}</div>}
      />
    </div>
    </CardBody>
    </Card>
  )
}

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Total Conversations",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Users Interacted",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Interaction Hours",
      value: "120",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    
  ]
};

export default BlogOverview;
