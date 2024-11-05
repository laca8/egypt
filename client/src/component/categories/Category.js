import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import axios from "axios";
import Loader from "../features/Loader";
import GoogleMap from "../map/GoogleMap";
const Category = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const res = await axios.get("/api/category");
        console.log(res);

        setData(res?.data);
        setLoad(false);
      } catch (err) {
        setLoad(false);
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Container className="categories">
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          <GoogleMap />
        </Col>
        {load && <Loader />}
        <Col>
          <Row>
            {data &&
              data?.map((x, i) => (
                <Col style={{ marginBottom: "5px" }}>
                  <Card
                    style={{
                      background: "none",
                      border: "2px solid #807040",
                    }}
                  >
                    <Card.Body>
                      <h3
                        style={{
                          color: "#fff",
                          backgroundColor: "#807040",
                          padding: "4px",
                          textAlign: "center",
                        }}
                      >
                        {x?.title}
                      </h3>
                      <Card.Text className="categories-content-card-text">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",

                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Link
                            to={`/${x?.title}`}
                            style={{
                              color: "#496580",
                              border: "2px solid #496580",
                              padding: "5px",
                              fontSize: "15px",
                              borderRadius: "10px",
                              fontWeight: "bold",
                              width: "160px",
                            }}
                          >
                            Click to view this theme
                          </Link>

                          <img
                            src={x?.image}
                            style={{
                              width: "80px",
                              height: "60px",
                              border: "2px solid #807040",

                              borderRadius: "50%",
                            }}
                          />
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
