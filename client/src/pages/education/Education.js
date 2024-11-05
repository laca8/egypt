import React, { useState, useEffect } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";

import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Education = () => {
  const dispatch = useDispatch();

  return (
    <Container style={{ marginTop: "20px", textAlign: "right", color: "#fff" }}>
      <Typography
        variant="h4"
        style={{
          backgroundColor: "#496580",
          padding: "10px",
          color: "#fff",
          width: "100px",
          borderRadius: "10px",
          margin: "auto",

          alignItems: "end",
          textAlign: "center",
        }}
      >
        التعليم
      </Typography>
      <Row style={{ marginTop: "10px", height: "200px" }}>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الاعدادية
            </Card.Title>
            <Link
              to="/secondary/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/secondary/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/secondary/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس / حضر ريف / خاصة حكومي -
            </Link>
            <Link
              to="/secondary/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الابتدائية
            </Card.Title>
            <Link
              to="/primary/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/primary/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/primary/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/primary/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة قبل الابتدائية
            </Card.Title>

            <Link
              to="/pre-primary/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/pre-primary/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/pre-primary/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/pre-primary/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", height: "200px" }}>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية التجاري
            </Card.Title>

            <Link
              to="/comm/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب الثانوية التجاري / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/comm/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول الثانوية التجاري / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/comm/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس الثانوية التجاري / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/comm/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الصناعي
            </Card.Title>
            <Link
              to="/ind/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب الثانوية الصناعي / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/ind/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول الثانوية الصناعي / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/ind/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس الثانوية الصناعي / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/ind/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية العامة
            </Card.Title>

            <Link
              to="/high/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب الثانوية العامة / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/high/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول الثانوية العامة / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/high/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس الثانوية العامة / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/high/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", height: "200px" }}>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التربية الخاصة
            </Card.Title>
            <Link
              to="/special/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/special/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/special/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/special/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الزراعي
            </Card.Title>

            <Link
              to="/argi/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب الثانوية الزراعي / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/agri/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول الثانوية الزراعي / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/agri/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس الثانوية الزراعي / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/argi/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم في المرحلة الثانوية الفندقي
            </Card.Title>

            <Link
              to="/hotel/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول الثانوية الفندقي / حضر ريف / خاصة حكومي
            </Link>

            <Link
              to="/hotel/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس الثانوية الفندقي / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/hotel/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", height: "200px" }}>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              التعليم المجتمعي
            </Card.Title>
            <Link
              to="/community/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الطلاب / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/community/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد الفصول / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/community/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدارس / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/community/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              المدرسين
            </Card.Title>
            <Link
              to="/total/teachers"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين / حضر ريف / خاصة حكومي
            </Link>
            <Link
              to="/total/teachers/students"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              عدد المدرسين لكل طالب / حضر ريف / خاصة حكومي
            </Link>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              padding: "10px",
              fontWeight: "bold",
              marginBottom: "5px",
              backgroundColor: "#807040",
              height: "200px",
            }}
          >
            <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
              النسب المئوية
            </Card.Title>
            <Link
              to="/edu/precentage/girls"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              قيد البنات
            </Link>
            <Link
              to="/edu/precentage/classes"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              كثافة الفصول
            </Link>
            <Link
              to="/edu/precentage/schools"
              style={{
                textDecoration: "none",
                padding: "4px",
                border: "1px solid #fff",
                borderRadius: "5px",
                width: "auto",
                margin: "2px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              نصيب المدرس من الطلاب
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
