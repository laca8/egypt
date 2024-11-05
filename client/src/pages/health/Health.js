import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Azhar = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "#fff" }}>
      <Typography
        variant="h4"
        style={{
          backgroundColor: "#496580",
          padding: "5px",
          color: "#fff",
          width: "100px",
          borderRadius: "10px",
          margin: "auto",

          alignItems: "end",
          textAlign: "center",
        }}
      >
        الوفيات
      </Typography>

      <Row style={{ marginTop: "20px", fontSize: "20px" }}>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "10px",
              backgroundColor: "#807040",
            }}
          >
            <Link
              to="/health/death/kids-under-1year"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الاطفال الرضع ( أقل من سنة )-
            </Link>

            <Link
              to="/health/death/mother-residence"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الامهات طبقا لمحل الاقامة
            </Link>
          </Card>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "10px",
              backgroundColor: "#807040",
            }}
          >
            <Link
              to="/health/death/kids-from-1-to-5years"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الاطفال (من سنة - أقل من 5 سنوات)
            </Link>
            <Link
              to="/health/death/mother-place"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الامهات وفقا لمكان الوفاه-
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "10px",
              backgroundColor: "#807040",
            }}
          >
            <Link
              to="/health/death/kids-under-28"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الاطفال حديثى الولادة ( أقل من 28 يوم )
            </Link>
            <Link
              to="/health/death/kids-under-7days"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات المواليد المبكرة ( أقل من 7 أيام )-
            </Link>
          </Card>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "10px",
              backgroundColor: "#807040",
            }}
          >
            <Link
              to="/health/death/kids-under-5years"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              وفيات الاطفال (دون الخامسة)-
            </Link>
            <Link
              to="/health/female/rate"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              معدل الاناث
            </Link>
            <Link
              to="/health/death/kids/rate"
              style={{
                textDecoration: "none",
                padding: "5px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "4px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              معدل الوفيات الاطفال-
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Azhar;
