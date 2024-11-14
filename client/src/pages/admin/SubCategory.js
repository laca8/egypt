import React, { useRef, useState, useEffect } from "react";
import { Table, InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Input, Typography } from "@mui/material";
import axios from "axios";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { Row, Col, Container } from "react-bootstrap";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { PlusCircle, MinusCircle } from "lucide-react";
import Sidebar from "../../component/admin/Sidebar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBFile,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { category } = useParams();
  const [file, setFile] = useState("");

  const API_URI = "/api/edu/azhar/classes/export/csv";
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");
  const [subData, setSubData] = useState([]);
  const [title, setTitle] = useState("");
  const [tables, setTables] = useState([
    {
      id: 1,
      rows: 2,
      cols: 2,
      data: Array(2)
        .fill()
        .map(() => Array(2).fill("")),
    },
  ]);
  function arrayToObjects(nestedArray) {
    // Extract headers from first row
    const headers = nestedArray[0];

    // Convert remaining rows to objects
    const result = nestedArray.slice(1).map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });

    return result;
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const res = await axios.get(`/api/category/${category}`);
        setSubData(res?.data?.subs);
        setLoad(false);
      } catch (error) {
        setErr(error?.response?.data?.msg);
        setLoad(false);
      }
    };
    fetchData();
  }, [category]);

  const handleChange2 = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErr("Please select a file");
      return;
    }

    const data = tables.map((x) => x.data.map((y) => y));
    console.log(data);
    if (tables[0].data.length != 0) {
      data.map((x, i) => {
        subData.push(arrayToObjects(data[i]));
        console.log(subData);
      });
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    setLoad(true);
    try {
      const response = await fetch(`/api/category/${category}`, {
        method: "PUT",
        body: formData,
      });
      console.log(response);

      if (response?.status == 200 || response?.statusText == "OK") {
        setLoad(false);
        alert("upload success");
      }
    } catch (error) {
      setLoad(false);

      setErr("Error uploading file");
      console.error("Upload error:", error);
    }
  };
  const exportCsv = () => {
    console.log("csv");

    const csvContent = [""].join(",") + "\n";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const removeSub = async (i, x) => {
    setLoad(true);
    console.log(i);
    console.log(x);
    try {
      const res = await axios.put(`/api/category/delete/${category}/${x}`);
      console.log(res);
      window.location.reload();
      alert("تم حذف الجدول");
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
      setErr("Error  delete table");
    }
  };
  return (
    <div>
      {load ? (
        <Loader />
      ) : err ? (
        <Error error={err} />
      ) : (
        <MDBRow style={{ height: "100%" }}>
          <MDBCol md="2">
            <Sidebar />
          </MDBCol>
          <MDBCol md="10" style={{ textAlign: "right" }}>
            <div className="p-4 space-y-8" dir="rtl">
              <div className="flex justify-between items-center">
                <h2
                  className="text-2xl font-bold"
                  style={{
                    margin: "0 auto",
                    textAlign: "center",
                    backgroundColor: "#496580",
                    color: "#fff",
                    width: "600px",
                    borderRadius: "5px",
                    padding: "5px",
                    marginBottom: "5px",
                  }}
                >
                  {category}
                </h2>
                <Accordion
                  className="mt-2 mb-2 "
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>الجداول السابقة</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      {subData?.map((x, index) => (
                        <div
                          style={{
                            maxWidth: "700px",
                            maxHeight: "600px",
                            overflowX: "auto",
                            overflowY: "auto",
                          }}
                        >
                          <Button
                            onClick={() => removeSub(index, x.id)}
                            variant="danger"
                            className="mb-2"
                          >
                            حذف
                          </Button>
                          <MDBTable
                            bordered
                            borderColor="dark"
                            dir="rtl"
                            className="table-secondary"
                          >
                            <MDBTableHead variant="dark">
                              <tr>
                                {[
                                  ...new Set(
                                    []?.concat(
                                      ...x?.results?.map((e) => Object.keys(e))
                                    )
                                  ),
                                ]?.map((val, index) => (
                                  <th scope="col" key={index}>
                                    {val}
                                  </th>
                                ))}
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              {x?.results?.map((obj, i) => (
                                <tr>
                                  {Object.getOwnPropertyNames(obj)?.map(
                                    (val, idx, array) => (
                                      <td>{obj[val]}</td>
                                    )
                                  )}
                                </tr>
                              ))}
                            </MDBTableBody>
                          </MDBTable>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              {tables?.map((table) => (
                <div
                  key={table?.id}
                  className="rounded-lg p-4 bg-white shadow-md mb-2"
                  style={{
                    border: "2px solid #807040",

                    width: "100%",
                    overflowX: "auto",
                  }}
                >
                  <div className="overflow-x-auto">
                    <div style={{ padding: "8px", border: "1px solid gray" }}>
                      {load ? (
                        <Loader />
                      ) : err ? (
                        <Error error={err} />
                      ) : (
                        <div
                          style={{
                            marginBottom: "10px",
                            padding: "8px",
                          }}
                        >
                          <Typography
                            variant="h4"
                            style={{
                              padding: "5px",
                              backgroundColor: "#807040",
                              color: "#fff",
                              borderRadius: "5px",
                              marginBottom: "5px",
                            }}
                          >
                            {category}
                          </Typography>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <ButtonMaterial
                              onClick={handleSubmit}
                              variant="outlined"
                              disabled={load || file == ""}
                              style={{ marginLeft: "10px" }}
                            >
                              save
                            </ButtonMaterial>

                            <Form.Group controlId="email">
                              {/* <Form.Label>اسم الجدول</Form.Label> */}
                              <Form.Control
                                style={{ fontWeight: "bold" }}
                                type="text"
                                placeholder="ادخل اسم الجدول"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              ></Form.Control>
                            </Form.Group>

                            <ButtonMaterial
                              variant="contained"
                              component="label"
                              style={{ backgroundColor: "#708040" }}
                            >
                              <UploadFileIcon />
                              <input
                                hidden
                                onChange={handleChange2}
                                type="file"
                              />
                            </ButtonMaterial>
                            <ButtonMaterial
                              style={{
                                marginRight: "10px",
                                backgroundColor: "#407080",
                                color: "#fff",
                                borderRadius: "4px",
                              }}
                              onClick={exportCsv}
                            >
                              {load ? "Exporting..." : "Export to CSV"}
                            </ButtonMaterial>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
};

export default SubCategory;
