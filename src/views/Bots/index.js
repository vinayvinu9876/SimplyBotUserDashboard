import React from "react";
import { Container, Row, Col,Button,Card,CardBody,CardFooter, } from "shards-react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle";

const Bots = () =>{

    return (
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="SIMPLY BOTS" subtitle="Manage" className="text-sm-left" />
            </Row>

            <>
                <Col>
                    <Button theme="primary" size="md">Add New BOT <i class="material-icons">add</i></Button>
                </Col>
                {/* Fourth Row of posts */}
                <Col>
                <br />
                <Row>
                    <BotComponent />
                </Row>
            </Col>
        </>
        </Container>
    )
}

const BotComponent = () =>{
    return <Col lg="3" md="6" sm="12" className="mb-4">
    <Card small className="card-post h-100">
        <div
            className="card-post__image"
            style={{ backgroundImage: `url(https://images-platform.99static.com//X0F3CDfCL6LcdPsSJNtRXSGn86Q=/108x1101:902x1895/fit-in/500x500/99designs-contests-attachments/126/126736/attachment_126736972)` }}
        />
    <CardBody>
        <h5 className="card-title">
            <a className="text-fiord-blue" href="#">
                Medical BOT
            </a>
        </h5>
        <p className="card-text">
            <div>
                <FieldValue fieldName={"Created On"} value="25/10/2021"/>
                <FieldValue fieldName={"Messages"} value="1 Million"/>
                <FieldValue fieldName={"Conversations"} value="5000"/>
                <StatusValue />
            </div>
        </p>
    </CardBody>
    <CardFooter className="text-muted border-top py-3">
        <span className="d-inline-block">
            <Link to="/botView"><Button outline theme="primary">View BOT</Button></Link>
        </span>
    </CardFooter>
</Card>
</Col>
}

const StatusValue = () =>{
    return (
        <Row>
            <Col md={6} lg={6} sm={6}>
                Status
            </Col>
            <Col md={6} lg={6} sm={6}>
                <span style={{fontWeight:"bold",color:"green"}}>Active</span>
            </Col> 
        </Row>
    )
}

const FieldValue = ({fieldName,value}) =>{
    return (
        <Row style={{paddingBottom:5}}>
                    <Col md={6} lg={6} sm={6}>
                        {fieldName}
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <span style={{fontWeight:"bold",color:"black"}}>{value}</span>
                    </Col> 
                </Row>
    )
}

export default Bots;