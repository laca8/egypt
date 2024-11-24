import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryByTitle } from "../../redux/actions/category/categoryAction";
const CategoriesResults = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(listCategoryByTitle(category));
  }, [category]);
  const listCategoryByTitlReducer = useSelector(
    (state) => state.listCategoryByTitlReducer
  );
  const {
    loading,
    error,
    category: dataCat,
    categories,
  } = listCategoryByTitlReducer;

  return (
    <Container>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px 0",
          textAlign: "right",
        }}>
        <Typography
          variant="h4"
          style={{
            margin: "0 auto",
            textAlign: "center",
            backgroundColor: "#496580",
            color: "#fff",
            width: "600px",
            borderRadius: "5px",
            padding: "5px",
          }}>
          {category}
        </Typography>
      </div>
      <div dir="rtl">
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <Card
              style={{
                padding: "10px",
                fontWeight: "bold",
                marginBottom: "5px",
                backgroundColor: "#807040",
              }}>
              {dataCat?.subs?.map((x, index) => (
                <Link
                  to={`/sub/${category}/${x.id}`}
                  style={{
                    textDecoration: "none",
                    padding: "4px",
                    border: "1px solid #fff",
                    borderRadius: "5px",
                    width: "auto",
                    margin: "5px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}>
                  {x?.title}
                </Link>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CategoriesResults;
