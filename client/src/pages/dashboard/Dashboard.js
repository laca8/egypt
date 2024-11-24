import React, { useState, useEffect } from "react";
import Error from "../../component/features/Error";
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
import International from "../../component/chart/dashboard/culture/International";
import Indicator from "../../component/chart/dashboard/indicator/Indicator";

import ChartBarMiddle from "../../component/chart/dashboard/middle/child/ChartBarChild";
import ChartBarHealth from "../../component/chart/dashboard/middle/health/ChartBarHealth";

import ChartBarStudMiddle from "../../component/chart/dashboard/middle/education/ChartBarStud";
import ChartBarClassesMiddle from "../../component/chart/dashboard/middle/education/ChartBarClasses";
import ChartBarTeacherMiddle from "../../component/chart/dashboard/middle/education/ChartBarTeacher";
import ChartCulture from "../../component/chart/dashboard/middle/culture/Culture";
import axios from "axios";
import ChartPyramid from "../../component/chart/dashboard/middle/child/ChartPyramidMiddle";
import { useDispatch, useSelector } from "react-redux";
import Sport from "../../component/chart/dashboard/sport/Sport";
import SportMiddle from "../../component/chart/dashboard/middle/sport/SportMiddle";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const govs = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",

    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادى الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بنى سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الاقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  const [city, setCity] = useState("Egypt");
  const [err, setErr] = useState("");
  const [total, setTotal] = useState(true);
  const [dates, setDates] = useState([]);
  const [ind, setInd] = useState(Number(88000000));
  const [d, setD] = useState("");
  const [pop, setPop] = useState(Number(0));
  useEffect(() => {
    if (city == "Egypt") {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [city]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get("/api/total/date");
        //console.log(res);
        setDates(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);
  useEffect(() => {
    dates
      ?.filter((x) => x.date == date)
      ?.map((x) => {
        setInd(x.total);
      });
  }, [date]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        total: pop,
        date: d,
      };
      if (!d || !pop) {
        setErr("please enter date and total");
      } else {
        const res = await axios.post("/api/total/date", data);
        handleClose();
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/total/date/${id}`);
      alert("delete successed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row style={{ marginTop: "10px" }}>
        <Col sm={8}>
          <Card
            style={{
              padding: "10px",
            }}>
            <ChartPyramid data1={[]} />
          </Card>
        </Col>
        <Col sm={4}>
          <Card style={{ padding: "10px" }}>
            <ChartBar />
          </Card>
          <Card style={{ padding: "10px", marginTop: "10px" }}>
            <Sport />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <ChartBarClasses />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <ChartBarTeacher />
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: "10px" }}>
            <ChartBarStud />
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card style={{ padding: "10px" }}>
            <ChartBarDeaths />
          </Card>
        </Col>

        <Col>
          <Card style={{ padding: "10px" }}>
            <Culture />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
