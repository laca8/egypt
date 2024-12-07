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
const Dashboard = () => {
  const colors = ['#876FD4','#F5921B','#4394E5','#87BB62','red']
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
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartBar
    colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "أعداد الأطفال")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "10px", marginTop: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
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
              <Card style={{ padding: "10px" }}>
                <ChartBarDeaths
     colors={colors}
                  arr={category?.subs
                    ?.filter((x) => x.title === "المواليد والوفيات")
                    ?.map((x) => JSON.stringify(x.results))}
                />
              </Card>
            </Col>

            <Col>
            
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
