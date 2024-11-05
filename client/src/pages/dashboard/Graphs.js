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
import IndicatorMiddle from "../../component/chart/dashboard/middle/indicator/IndicatorMiddle";
import axios from "axios";
import ChartPyramid from "../../component/chart/childMiddle/Pyramid";
import { useDispatch, useSelector } from "react-redux";
import Sport from "../../component/chart/dashboard/sport/Sport";
import SportMiddle from "../../component/chart/dashboard/middle/sport/SportMiddle";
import { listTotalAge } from "../../redux/actions/populationAction/population";

const Graphs = () => {
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
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);
  return (
    <Container>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {err && <Error error={err} />}
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  value={d}
                  onChange={(e) => setD(e.target.value)}
                  type="text"
                  placeholder="Enter date"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Total Population</Form.Label>
                <Form.Control
                  value={pop}
                  onChange={(e) => setPop(e.target.value)}
                  type="number"
                  placeholder="Enter number of population"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>date</th>
                  <th>total population</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {dates?.map((d) => (
                  <tr>
                    <td>{d.date}</td>
                    <td>{d.total}</td>
                    <td
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => handleDelete(d._id)}
                    >
                      x
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Form.Select
          aria-label="Default select example"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Egypt">Egypt</option>
          {govs.map((dep) => (
            <option value={dep}>{dep}</option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{
            marginLeft: "10px",
            marginRight: "10px",
          }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          {dates?.map((dep) => (
            <option value={dep.date}>{dep.date}</option>
          ))}
        </Form.Select>

        <label style={{ width: "30%", marginTop: "8px" }}>
          Total Population:
        </label>
        <input
          type="number"
          value={ind}
          onChange={(e) => setInd(e.target.value)}
        />

        {userInfo?.user?.isAdmin ? (
          <>
            <div style={{ display: "flex" }}>
              <Button
                variant="primary"
                onClick={handleShow}
                style={{ marginLeft: "10px" }}
              >
                Add
              </Button>
            </div>
            <div>
              <Button
                variant="secondary"
                onClick={handleShow1}
                style={{ marginLeft: "10px" }}
              >
                show
              </Button>
            </div>
          </>
        ) : null}
      </div>

      {total ? (
        <>
          <Row style={{ marginTop: "10px" }}>
            <Col sm={4}>
              <Card style={{ padding: "10px" }}>
                <ChartBar />
              </Card>
              <Card style={{ padding: "10px", marginTop: "10px" }}>
                <Sport />
              </Card>
            </Col>
            <Col sm={8}>
              <Card
                style={{
                  padding: "10px",
                }}
              >
                <ChartPyramid data1={popTotalAge} />
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
            <Col>
              <Card style={{ padding: "10px" }}>
                <International />
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row style={{ position: "relative", marginTop: "10px" }}>
            <Col sm={4}>
              <Card style={{ padding: "10px" }}>
                <ChartBarMiddle city={city} />
              </Card>
              <Card style={{ padding: "10px", marginTop: "10px" }}>
                <SportMiddle city={city} />
              </Card>
            </Col>
            <Col sm={8}>
              <Card
                style={{
                  padding: "10px",
                }}
              >
                <ChartPyramid data1={popTotalAge} />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartBarClassesMiddle city={city} />
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartBarTeacherMiddle city={city} />
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartBarStudMiddle city={city} />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartBarHealth city={city} />
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "10px" }}>
                <ChartCulture city={city} />
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "10px" }}>
                <International />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Graphs;
