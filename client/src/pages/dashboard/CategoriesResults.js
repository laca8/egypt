import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const CategoriesResults = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");
  const [all1, setAll1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const res = await axios.get(`/api/category/${category}`);
        //console.log(res?.data?.subs);

        setData(res?.data?.subs);

        setAll1(res?.data?.subs[0]);
        console.log(
          [
            ...new Set(
              [].concat(...res?.data?.subs[0]?.map((e) => Object.keys(e)))
            ),
          ].map((x) => x)
        );

        console.log(
          res?.data?.subs[0].map((obj, index) =>
            Object.getOwnPropertyNames(obj).map((val, idx, array) => val[idx])
          )
        );
        console.log(
          res?.data?.subs?.forEach((x) => {
            return x;
          })
        );
        let result = [];
        console.log(
          res?.data?.subs?.forEach((first, i) => {
            return first.forEach((second) => {
              console.log(second);
              result.push(second);
            });
          })
        );
        console.log(result);

        setLoad(false);
      } catch (error) {
        setErr(error?.response?.data?.msg);
        setLoad(false);
      }
    };
    fetchData();
  }, [category]);
  return (
    <Container>
      {load && <Loader />}
      {err && <Error error={err} />}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px 0",
          textAlign: "right",
        }}
      >
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
          }}
        >
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
              }}
            >
              {data?.map((x, index) => (
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
                  }}
                >
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
