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
  const chartTypes = [
    { value: "line", label: "خط" },
    { value: "bar", label: "أعمدة" },
    { value: "radar", label: "رادار" },
    { value: "pie", label: "دائري" },
    { value: "polarArea", label: "مساحة قطبية" },
    { value: "doughnut", label: "حلقي" },
  ];

  const colors = [
    "#87BB62",
    "#F5921B",
    "#ffc658",
    "#82ca9d",
    "#876FD4",
    "#ff0000",
    "#4394E5",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategoryByTitle("Dashboard"));
  }, []);

  const listCategoryByTitlReducer = useSelector(
    (state) => state.listCategoryByTitlReducer
  );
  const { loading, error, category } = listCategoryByTitlReducer;
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="dash">
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
                style={{ paddng: "10px", backgroundColor: "rgb(87, 55, 17)" }}>
                <ChartBar
                  colors={colors}
                  chartTypes={chartTypes}
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
                  backgroundColor: "#333",
                  height: "100%",
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
                style={{
                  padding: "10px",
                  backgroundColor: "#111",
                  height: "100%",
                }}>
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
                  backgroundColor: "rgb(137, 132, 37)",
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
                  backgroundColor: "rgb(70, 48, 67)",
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
                  backgroundColor: "rgb(73, 47, 124)",
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
                  backgroundColor: "rgb(0, 129, 0)",
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
                  backgroundColor: "rgb(94, 142, 108)",
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
                style={{
                  padding: "10px",
                  backgroundColor: "rgb(53, 90, 126)",
                }}>
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
                  backgroundColor: "rgb(100, 57, 57)",
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
                style={{
                  padding: "10px",
                  backgroundColor: "rgb(130, 125, 92)",
                }}>
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
                  backgroundColor: "rgb(146, 83, 68)",
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
        </div>
      )}
    </>
  );
};

export default Dashboard;
