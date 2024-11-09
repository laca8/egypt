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
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState("");
  const [subData, setSubData] = useState([]);
  const [tables, setTables] = useState([
    {
      id: 1,
      rows: 0,
      cols: 0,
      data: Array(0)
        .fill()
        .map(() => Array(0).fill("")),
    },
  ]);

  const addTable = () => {
    setTables([
      ...tables,
      {
        id: tables.length + 1,
        rows: 2,
        cols: 2,
        data: Array(2)
          .fill()
          .map(() => Array(2).fill("")),
      },
    ]);
    console.log(tables);
  };

  const removeTable = (tableId) => {
    setTables(tables.filter((table) => table.id !== tableId));
  };

  const addRow = (tableId) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newData = [...table.data];
          newData.push(Array(table.cols).fill(""));
          return {
            ...table,
            rows: table.rows + 1,
            data: newData,
          };
        }
        return table;
      })
    );
  };

  const removeRow = (tableId) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId && table.rows > 1) {
          const newData = table.data.slice(0, -1);
          return {
            ...table,
            rows: table.rows - 1,
            data: newData,
          };
        }
        return table;
      })
    );
  };

  const addColumn = (tableId) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newData = table.data.map((row) => [...row, ""]);
          return {
            ...table,
            cols: table.cols + 1,
            data: newData,
          };
        }
        return table;
      })
    );
  };

  const removeColumn = (tableId) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId && table.cols > 1) {
          const newData = table.data.map((row) => row.slice(0, -1));
          return {
            ...table,
            cols: table.cols - 1,
            data: newData,
          };
        }
        return table;
      })
    );
  };

  const handleCellChange = (tableId, rowIndex, colIndex, value) => {
    setTables(
      tables.map((table) => {
        if (table.id === tableId) {
          const newData = [...table.data];
          newData[rowIndex][colIndex] = value;
          return {
            ...table,
            data: newData,
          };
        }
        return table;
      })
    );
  };

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
  const saveData = async () => {
    setLoad(true);
    const headers = tables.map((x) => x.data[0]);
    //console.log(headers);
    console.log(tables);

    const data = tables.map((x) => x.data.map((y) => y));
    console.log(data);
    if (tables[0].data.length != 0) {
      data.map((x, i) => {
        subData.push(arrayToObjects(data[i]));
        console.log(subData);
      });
    }
    try {
      const res = await axios.put(`/api/category/${category}`, {
        subs: subData,
      });
      console.log(res);
      //alert("تم اضافة الجداول....");
      window.location.reload();
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setErr(error.response.data.msg);
    }
  };

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
  const removeSub = (i, x) => {
    console.log(i);
    //console.log(x);
    setSubData(subData.filter((item, index) => i !== index));
    //saveData();
    // console.log(subData);
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
                            maxWidth: "800px",
                            maxHeight: "600px",
                            overflowX: "auto",
                            overflowY: "auto",
                          }}
                        >
                          <Button
                            onClick={() => removeSub(index, x)}
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
                                    [].concat(...x?.map((e) => Object.keys(e)))
                                  ),
                                ]?.map((val, index) => (
                                  <th scope="col" key={index}>
                                    {val}
                                  </th>
                                ))}
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              {x?.map((obj, i) => (
                                <tr>
                                  {Object.getOwnPropertyNames(obj).map(
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

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    onClick={addTable}
                    className="flex items-center gap-2 mb-2"
                    style={{ backgroundColor: "#807040" }}
                  >
                    اضافة جدول
                    <PlusCircle className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => saveData()}
                    className="flex items-center gap-2 mb-2"
                    style={{ backgroundColor: "#496580", fontWeight: "bold" }}
                  >
                    حفظ
                  </Button>
                </div>
              </div>

              {tables.map((table) => (
                <div
                  key={table.id}
                  className="rounded-lg p-4 bg-white shadow-md mb-2"
                  style={{
                    border: "2px solid #807040",

                    width: "100%",
                    overflowX: "auto",
                  }}
                >
                  <div className="flex justify-between items-center ">
                    <h3
                      className="text-lg font-semibold m-auto p-2 text-black "
                      style={{
                        border: "2px solid #496580",
                        width: "100px",
                        borderRadius: "10px",
                      }}
                    >
                      جدول {table.id}
                    </h3>
                    <div
                      className="flex flex-row gap-4"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      <Button
                        onClick={() => addRow(table.id)}
                        variant="success"
                        size="sm"
                      >
                        صف <PlusCircle className="w-4 h-4 mr-1" />
                      </Button>
                      <Button
                        onClick={() => removeRow(table.id)}
                        variant="danger"
                        size="sm"
                      >
                        صف <MinusCircle className="w-4 h-4 mr-1" />
                      </Button>
                      <Button
                        onClick={() => addColumn(table.id)}
                        variant="success"
                        size="sm"
                      >
                        عمود <PlusCircle className="w-4 h-4 mr-1" />
                      </Button>
                      <Button
                        onClick={() => removeColumn(table.id)}
                        variant="danger"
                        size="sm"
                      >
                        عمود <MinusCircle className="w-4 h-4 mr-1" />
                      </Button>
                      <Button
                        onClick={() => removeTable(table.id)}
                        variant="danger"
                        size="lg"
                      >
                        حذف الجدول
                      </Button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table
                      className="min-w-full border-collapse"
                      style={{ backgroundColor: "#496580", padding: "2px" }}
                    >
                      <tbody>
                        {table.data.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                              <td key={colIndex} className="border p-2">
                                <input
                                  type="text"
                                  value={cell}
                                  onChange={(e) =>
                                    handleCellChange(
                                      table.id,
                                      rowIndex,
                                      colIndex,
                                      e.target.value
                                    )
                                  }
                                  className="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
