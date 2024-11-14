import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
const CategoryDescription = () => {
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
            margin: "10px auto",
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
      <div>
        {data?.map((x, index) => (
          <div style={{ marginBottom: "10px" }}>
            {x?.title && (
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  backgroundColor: "#496580",
                  color: "#fff",
                  width: "auto",
                  borderRadius: "5px",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              >
                {x?.title}
              </Typography>
            )}
            <div
              dir="rtl"
              style={{
                maxHeight: "700px",
                overflowX: "auto",
                overflowY: "auto",
              }}
            >
              <MDBTable
                bordered
                borderColor="dark"
                dir="rtl"
                className="table-secondary"
              >
                <MDBTableHead className="table-dark">
                  <tr>
                    {[
                      ...new Set(
                        [].concat(...x?.results?.map((e) => Object.keys(e)))
                      ),
                    ]
                      ?.filter((val) => val != "_v")
                      ?.map((val, index) => (
                        <th scope="col" key={index}>
                          {val}
                        </th>
                      ))}
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {x?.results?.map((obj, i) => (
                    <tr>
                      {Object.getOwnPropertyNames(obj)
                        ?.filter((y) => obj[y] !== "")
                        ?.map((val, idx, array) => (
                          <td>{obj[val]}</td>
                        ))}
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryDescription;
