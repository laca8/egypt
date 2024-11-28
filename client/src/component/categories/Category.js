import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import axios from "axios";
import Loader from "../features/Loader";
import GoogleMap from "../map/GoogleMap";
import Map2 from "../map/Map2";
import { useDispatch, useSelector } from "react-redux";
import Error from "../features/Error";
const Category = () => {
  const listCategoryReducer = useSelector((state) => state.listCategoryReducer);
  const {
    loading: loadingCat,
    error: errorCat,
    category: dataCat,
    categories,
  } = listCategoryReducer;
  return (
    <Container className="categories">
      <Row style={{ marginBottom: "10px" }} className="row1">
        <Col>
          {loadingCat ? (
            <Loader />
          ) : errorCat ? (
            <Error error={errorCat} />
          ) : (
            <Row>
              {categories &&
                categories
                  ?.filter((x) => x.title !== "Dashboard")
                  ?.map((x, i) => (
                    <Col style={{ marginBottom: "5px" }}>
                      <Card
                        style={{
                          background: "none",
                          border: "2px solid #807040",
                        }}>
                        <Card.Body>
                          <h4
                            style={{
                              color: "#fff",
                              backgroundColor: "#807040",
                              padding: "4px",
                              textAlign: "center",
                            }}>
                            {x?.title}
                          </h4>
                          <Card.Text className="categories-content-card-text">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",

                                alignItems: "center",
                                gap: "5px",
                              }}>
                              <Link
                                to={`/sub/${x?.title}`}
                                style={{
                                  color: "#496580",
                                  border: "2px solid #496580",
                                  padding: "2px",
                                  fontSize: "14px",
                                  borderRadius: "10px",
                                  fontWeight: "bold",
                                  width: "90px",
                                  textAlign: "center",
                                }}>
                                Click to view
                              </Link>

                              <img
                                src={`/uploads/${x?.image}`}
                                alt=""
                                style={{
                                  width: "50px",
                                  height: "40px",
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
          )}
        </Col>

        <Col>
          <Map2 />
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
