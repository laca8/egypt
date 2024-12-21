import React, { useState, useEffect } from "react";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
  Table,
} from "react-bootstrap";
import ChartBar from "../../component/chart/dashboard/child/ChartBarChild";
import ChartBarDeaths from "../../component/chart/dashboard/deaths/ChartBar";
import ChartBarStud from "../../component/chart/dashboard/education/ChartBarStud";
import ChartBarTeacher from "../../component/chart/dashboard/education/ChartBarTeacher";
import ChartBarClasses from "../../component/chart/dashboard/education/ChartBarClasses";
import Culture from "../../component/chart/dashboard/culture/Culture";

import { useDispatch, useSelector } from "react-redux";
import Sport from "../../component/chart/dashboard/sport/Sport";
import { listCategoryByTitle } from "../../redux/actions/category/categoryAction";
import Primary from "../../component/chart/dashboard/education/tasrb/Primary";
import Secondary from "../../component/chart/dashboard/education/tasrb/Secondary";
import International from "../../component/chart/dashboard/culture/International";
import Internet from "../../component/chart/dashboard/culture/Internet";
import Disable from "../../component/chart/dashboard/culture/Disable";
import { AlertTitle, Alert } from "@mui/material";
const Dashboard = () => {
  const colors = ["#876FD4", "#F5921B", "#4394E5", "#87BB62", "red", "purple"];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategoryByTitle("Dashboard"));
  }, []);

  const listCategoryByTitlReducer = useSelector(
    (state) => state.listCategoryByTitlReducer
  );
  const { loading, error, category } = listCategoryByTitlReducer;
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <Alert
            severity="info"
            dir="rtl"
            style={{ marginTop: "10px", fontSize: "20px", fontWeight: "bold" }}>
            <AlertTitle>ملاحظة</AlertTitle>
            يمكنك تحديد اي فئة تريد ان تراها في الرسومات البيانية عن طريقة الضغط
            علي الفئات الاخري
          </Alert>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,22,0,1)",
                }}>
                <ChartBar
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "أعداد الأطفال")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,22,44,1)",
                }}>
                <Sport
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "الرياضة")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{ padding: "10px", backgroundColor: "rgba(0,22,0,50)" }}>
                <ChartBarClasses
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) => x.title === "المعاهد والفصول والتلاميذ الازهر"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,22,0,20)",
                }}>
                <ChartBarTeacher
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) =>
                        x.title === "مدارس وفصول وتلاميذ ومدرسون مدارس التجريبي"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,0,0,144)",
                }}>
                <ChartBarStud
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) =>
                        x.title === "فصول ومدارس وتلاميذ التعليم قبل الجامعي"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,22,44,180)",
                }}>
                <Culture
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "عدد الوفيات دون الخامسة")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,20,10,90)",
                }}>
                <Primary
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) => x.title === "التسرب من التعليم المرحلة الأبتدائية"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(10,22,44,1)",
                }}>
                <Secondary
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) => x.title === "التسرب من التعليم المرحلة الأعدادية"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{ padding: "10px", backgroundColor: "rgba(1,2,3,4)" }}>
                <ChartBarDeaths
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "المواليد والوفيات")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(0,0,10,200)",
                }}>
                <International
                  colors={colors}
                  arr={category?.subs
                    ?.filter(
                      (x) =>
                        x.title ===
                        "نسب المصريين من (17:4 سنة) طبقاً لإستخــدام الفرد للانترنت تعداد 2017"
                    )
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card
                style={{ padding: "10px", backgroundColor: "rgba(0,0,0,1)" }}>
                <Internet
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "أعداد مستخدمين الانترنت")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(50,10,0,200)",
                }}>
                <Disable
                  colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "الاعاقات")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
