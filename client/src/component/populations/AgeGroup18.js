import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listPopAge } from "../../redux/actions/populationAction/population";
import Loader from "../features/Loader";
import Error from "../features/Error";
import BoyIcon from "@mui/icons-material/Boy";
import GirlIcon from "@mui/icons-material/Girl";
import CountUp from "react-countup";
const AgeGroup18 = () => {
  const dispatch = useDispatch();
  const listPopAgeReducer = useSelector((state) => state.listPopAgeReducer);
  const { popAge, error, loading } = listPopAgeReducer;

  useEffect(() => {
    dispatch(listPopAge());
  }, []);
  const arrMales = popAge.filter((pop) => pop._id.Sex == "ذكور");
  const arrFemales = popAge.filter((pop) => pop._id.Sex == "اناث");
  const totalMales = arrMales.reduce((acc, val) => acc + val.total, 0);
  const totalFemales = arrFemales.reduce((acc, val) => acc + val.total, 0);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : popAge ? (
        <Row>
          <h5 style={{ marginBottom: "15px", marginTop: "15px" }}>
            Children Under 18 Years For Egypt (2022)
          </h5>

          <Col>
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "pink",
              }}
            >
              <Card.Body>
                <Card.Title>Girls</Card.Title>
                <Card.Text>
                  <GirlIcon fontSize="large" />
                </Card.Text>
              </Card.Body>
              <Card.Body style={{ textAlign: "right", marginTop: "10px" }}>
                <h2>
                  <CountUp end={totalFemales} duration={20} />
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#1b7ced",
              }}
            >
              <Card.Body>
                <Card.Title>Boys</Card.Title>
                <Card.Text>
                  <BoyIcon fontSize="large" />
                </Card.Text>
              </Card.Body>
              <Card.Body style={{ textAlign: "right", marginTop: "10px" }}>
                <h2>
                  <CountUp end={totalMales} duration={20} />
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default AgeGroup18;
