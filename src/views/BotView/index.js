import React from "react";
import { Container, Row, Col,Button,Card,CardBody,CardHeader } from "shards-react";
import SmallStats from "./../../components/common/SmallStats";
import MostUsedWords from './MostUsedWords';
import PageTitle from "../../components/common/PageTitle";
import ChatBotComp from "./ChatBot";
import 'react-chatbot-kit/build/main.css';
import {Link} from 'react-router-dom'

const BotView = () =>{

    const smallStats =  [
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
        {
            label: "Repeated Users",
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
          {
            label: "Avg Monthly Users",
            value: "150",
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

    return (
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Medical BOT" subtitle="Manage" className="text-sm-left" />
            </Row>
            <Col stye={{paddingBottom:10}}>
               <Link to="/bots"><Button theme="primary" outline>Back</Button></Link>
                <br />
            </Col>
            <Col>
            <br />
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
    <br />
    <Row>
    <Col md={4} lg={4} sm={4}>
        <Card>
        <CardHeader className="border-bottom">
            <h6 className="m-0">Bot Details</h6>
          </CardHeader>
          <CardBody className="p-3 pb-3">
                <Col md={5} lg={5} sm={12} xs={12}>
                    <img height={200} width={200} src={"https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972"}>
                    </img>
                </Col>
                <br />
                <Col md={12} lg={12} sm={12} xs={12}>
                    <div >
                        <h4>Medical Bot <span style={{fontSize:12,color:"blue"}}>Edit</span></h4>
                        <span style={{color:"green"}}>Active</span><br />
                    </div>
                </Col>
            </CardBody>
        </Card>
    </Col>
    <Col md={3} lg={3} sm={3}>
        <ChatBotComp />
    </Col>
    <Col md={5} lg={5} sm={5}>
        <MostUsedWords />
    </Col> 
        
    </Row>
    <br />
    </Col>
        </Container>
    )
}

export default BotView;