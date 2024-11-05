import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Deaths from "../../component/chart/dashboard/tables/health/Deaths";
import RateDeaths from "../../component/chart/dashboard/tables/health/RateDeaths";
import MotherDeaths from "../../component/chart/dashboard/tables/health/MothersDeaths";
import Population from "../../component/chart/dashboard/tables/population/Population";
import Females from "../../component/chart/dashboard/tables/work/Females";
import Services from "../../component/chart/dashboard/tables/services/Services";
import Total from "../../component/chart/dashboard/tables/edu/Total";
import Azhar from "../../component/chart/dashboard/tables/edu/Azhar";
import Teachers from "../../component/chart/dashboard/tables/edu/Teachers";
import Schools from "../../component/chart/dashboard/tables/edu/Schools";
import Classes from "../../component/chart/dashboard/tables/edu/Classes";

const Graphs = () => {
  return (
    <Container>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <MotherDeaths />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <RateDeaths />
          </Card>
        </Col>
        <Col style={{ height: "100px" }}>
          <Card style={{ padding: "10px" }}>
            <Deaths />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Services />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Females />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Population />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        {/*
         <Col>
          <Card style={{ padding: "10px" }}>
            <Azhar />
          </Card>
        </Col>
        */}
        <Col>
          <Card style={{ padding: "10px" }}>
            <Total />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Teachers />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Classes />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <Schools />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Graphs;
