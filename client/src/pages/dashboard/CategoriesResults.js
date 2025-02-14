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
  const collator = new Intl.Collator("ar");
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
            <div
              style={{
                padding: "10px",
                fontWeight: "bold",
                marginBottom: "5px",
                backgroundColor: "#807040",
                display: "grid",
              }}>
              {dataCat?.subs
                ?.sort((a, b) => collator.compare(b?.title, a?.title))
                ?.map((x, index) => (
                  <Card
                    className="result"
                    style={{
                      padding: "9px",
                      margin: "5px",
                      color: "#fff",
                      border: "1px solid #fff",
                      backgroundColor: "rgba(0,0,0,0.5)",
                    }}>
                    <Link
                      to={`/sub/${category}/${x.id}`}
                      style={{ color: "#fff", padding: "1px" }}>
                      {x?.title}
                      {/* <hr />
                      <p style={{ marginTop: "4px" }}>المصدر: {x?.src}</p> */}
                    </Link>
                  </Card>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CategoriesResults;
