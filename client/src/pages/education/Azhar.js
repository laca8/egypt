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
        الازهر
      </Typography>

      <Row style={{ marginTop: "10px" }}>
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
              to="/azhar/reads"
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
              عدد الطلاب قراءات / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/instituide"
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
              المعاهد / حضر ريف / خاصة حكومي{" "}
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
              to="/azhar/teachers"
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
              عدد المدرسين / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/classes"
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
              عدد الفصول / حضر ريف / خاصة حكومي{" "}
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
              to="/azhar/primary"
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
              عدد الطلاب المرحلة الابتدائية / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/secondary"
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
              عدد الطلاب المرحلة الاعدادية / حضر ريف / خاصة حكومي
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
              to="/azhar/high"
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
              عدد الطلاب الثانوية العامة / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/azhar/kids"
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
              عدد الطلاب رياض اطفال / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/azhar/disabled"
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
              عدد الطلاب ذو الاعاقة / حضر ريف / خاصة حكومي -
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Azhar;
