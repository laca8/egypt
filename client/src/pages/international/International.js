import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const International = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "left", color: "grey" }}>
      <Typography variant="h4">International indicator</Typography>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card
            style={{ padding: "30px", fontSize: "35px", fontWeight: "bold" }}
          >
            <Link
              to="/international/unicef"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              - Unicef Data
            </Link>
            {/*     <Link
              to="/international/united"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              -United Nation
  </Link>*/}
            <Link
              to="/international/dhs"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              -DHS Egypt
            </Link>
            <Link
              to="/international/world/bank"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              -World Bank
            </Link>
            <Link
              to="/international/un"
              style={{ padding: "5px", textDecoration: "none" }}
            >
              -Egypt Un
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default International;
