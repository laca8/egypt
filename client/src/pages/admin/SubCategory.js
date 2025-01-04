import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Input, Typography, Button } from "@mui/material";
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
import * as XLSX from "xlsx";
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
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AddSubCategory,
  deleteSubCategory,
  listCategoryByTitle,
} from "../../redux/actions/category/categoryAction";
import EditSubCategory from "./EditSubCategory";

const SubCategory = ({ category }) => {
  const dispatch = useDispatch();
  // const { category } = useParams();
  const [file, setFile] = useState("");
  const [line, setLine] = useState("");
  const [image_bar, setImageBar] = useState("");
  const [image_pie, setImagePie] = useState("");
  const [image_pyramid, setImagePyramid] = useState("");

  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");

  const handleChange2 = (e) => {
    const x = e.target.files[0];
    const allowedTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel.sheet.macroEnabled.12",
    ];
    const maxSize = 2.5 * 1024 * 1024; // 2MB in bytes
    if (!x) return;

    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      console.log(x.type);

      alert("Invalid file type. Please upload a EXCEL");
      return;
    }

    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 2MB.");
      return;
    }

    setFile(e.target.files[0]);
  };
  const handleChangeLine = (e) => {
    const x = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "images/jpg"];
    const maxSize = 1 * 1024 * 1024; // 5MB in bytes
    if (!x) return;

    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      alert("Invalid file type. Please upload a JPEG, PNG, JPG.");
      return;
    }

    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 1MB.");
      return;
    }

    setLine(e.target.files[0]);
    console.log(line);
  };
  const handleChangeBar = (e) => {
    const x = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "images/jpg"];
    const maxSize = 1 * 1024 * 1024; // 5MB in bytes
    if (!x) return;

    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      alert("Invalid file type. Please upload a JPEG, PNG, JPG.");
      return;
    }

    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 1MB.");
      return;
    }
    setImageBar(e.target.files[0]);
    console.log(image_bar);
  };
  const handleChangePie = (e) => {
    const x = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "images/jpg"];
    const maxSize = 1 * 1024 * 1024; // 5MB in bytes
    if (!x) return;

    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      alert("Invalid file type. Please upload a JPEG, PNG, JPG.");
      return;
    }

    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 1MB.");
      return;
    }
    setImagePie(e.target.files[0]);
  };
  const handleChangePyramid = (e) => {
    const x = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "images/jpg"];
    const maxSize = 1 * 1024 * 1024; // 5MB in bytes
    if (!x) return;

    // Validate file type
    if (!allowedTypes.includes(x.type)) {
      alert("Invalid file type. Please upload a JPEG, PNG, JPG.");
      return;
    }

    // Validate file size
    if (x.size > maxSize) {
      alert("File is too large. Maximum size is 1MB.");
      return;
    }
    setImagePyramid(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    if (!file) {
      alert("Please select a excel file");
      return;
    }
    if (!title) {
      alert("Please enter name table");
      return;
    }
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("line", line);
    formData.append("image_bar", image_bar);
    formData.append("image_pie", image_pie);
    formData.append("image_pyramid", image_pyramid);
    formData.append("title", title);
    formData.append("src", src);
    dispatch(AddSubCategory(category, formData));
    setTitle("");
    setLine("");
    setImageBar("");
    setImagePie("");
    setImagePyramid("");
    setFile("");
    setSrc("");
    dispatch(listCategoryByTitle(category));
  };
  const exportCsv = ({ data = [""], filename = "download.xlsx" }) => {
    console.log("csv");

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate Excel file buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Create Blob from buffer
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  const removeSub = async (i, x) => {
    let isBoss = window.confirm("هل تريد حذف البيانات؟");
    if (isBoss) {
      dispatch(deleteSubCategory(category, x));
      dispatch(listCategoryByTitle(category));
    }
  };

  const listCategoryByTitlReducer = useSelector(
    (state) => state.listCategoryByTitlReducer
  );
  const {
    loading,
    error,
    category: dataCat,
    categories,
  } = listCategoryByTitlReducer;
  useEffect(() => {
    dispatch(listCategoryByTitle(category));
  }, [category, dispatch]);
  const AddSubCategoryReducer = useSelector(
    (state) => state.AddSubCategoryReducer
  );
  const {
    loading: loadAdd,
    error: errAdd,

    success,
  } = AddSubCategoryReducer;
  return (
    <div>
      {loading || loadAdd ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : errAdd ? (
        <Error error={errAdd} />
      ) : (
        <MDBRow style={{ height: "100%" }}>
          <MDBCol style={{ textAlign: "right" }}>
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
                  }}>
                  {category}
                </h2>
                <Accordion
                  className="mt-2 mb-2 "
                  style={{ backgroundColor: "whitesmoke" }}>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography>الجداول السابقة</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div>
                      <div
                        style={{
                          maxWidth: "700px",
                          maxHeight: "600px",
                          overflowX: "auto",
                          overflowY: "auto",
                        }}>
                        <MDBTable bordered className="table-secondary">
                          <MDBTableHead variant="dark">
                            <tr>
                              <th>مسلسل</th>
                              <th>اسم الجدول</th>
                              <th>تعديل</th>
                              <th>حذف</th>
                            </tr>
                          </MDBTableHead>
                          <MDBTableBody>
                            {dataCat?.subs?.map((x, index) => (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{x?.title}</td>

                                <td>
                                  <EditSubCategory
                                    images={x?.images}
                                    category={category}
                                    title={x?.title}
                                    srcEdit={x?.src}
                                  />
                                </td>
                                <td>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => removeSub(index, x.id)}>
                                    <DeleteIcon />
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </MDBTableBody>
                        </MDBTable>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div
                className="rounded-lg p-4 bg-white shadow-md mb-2"
                style={{
                  border: "2px solid #807040",
                  width: "100%",
                  overflowX: "auto",
                }}>
                <div className="overflow-x-auto">
                  {loading ? (
                    <Loader />
                  ) : error ? (
                    <Error error={error} />
                  ) : (
                    <div
                      style={{
                        padding: "8px",
                      }}>
                      <Row>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            justifyContent: "space-between",
                            alignItems: "end",
                          }}>
                          <Form.Group style={{ width: "100%" }}>
                            <Form.Label>اسم الجدول</Form.Label>
                            <Form.Control
                              style={{ fontWeight: "bold" }}
                              type="text"
                              placeholder="ادخل اسم الجدول"
                              value={title}
                              onChange={(e) =>
                                setTitle(e.target.value)
                              }></Form.Control>
                          </Form.Group>
                          <Form.Group style={{ width: "100%" }}>
                            <Form.Label>المصدر</Form.Label>
                            <Form.Control
                              style={{ fontWeight: "bold" }}
                              type="text"
                              placeholder="ادخل المصدر"
                              value={src}
                              onChange={(e) =>
                                setSrc(e.target.value)
                              }></Form.Control>
                          </Form.Group>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              width: "100%",
                            }}>
                            <ButtonMaterial
                              variant="contained"
                              component="label"
                              style={{
                                backgroundColor: "#708040",
                                width: "41%",
                              }}>
                              <UploadFileIcon />
                              <input
                                hidden
                                name="file"
                                onChange={handleChange2}
                                type="file"
                                accept=".xlsx"
                              />
                            </ButtonMaterial>
                            <ButtonMaterial
                              style={{
                                marginRight: "10px",
                                backgroundColor: "#407080",
                                color: "#fff",
                                borderRadius: "4px",
                                width: "50%",
                              }}
                              onClick={exportCsv}>
                              {loading ? "Exporting..." : "Export to Excel"}
                            </ButtonMaterial>
                          </div>
                        </div>

                        <Row>
                          <Col
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: "20px",
                              marginBottom: "20px",
                            }}>
                            <div>
                              <div className="mb-1 d-flex justify-content-center">
                                {image_pyramid && (
                                  <img
                                    id="selectedImage"
                                    src={URL.createObjectURL(image_pyramid)}
                                    alt="pyramid"
                                    style={{
                                      width: "90px",
                                      height: "50px",
                                      border: "1px solid #708040",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="d-flex justify-content-center">
                                <ButtonMaterial
                                  variant="contained"
                                  component="label"
                                  style={{
                                    backgroundColor: "#708040",
                                  }}>
                                  Graph 4
                                  <input
                                    hidden
                                    onChange={handleChangePyramid}
                                    type="file"
                                    accept="image/*"
                                  />
                                </ButtonMaterial>
                              </div>
                            </div>
                            <div>
                              <div className="mb-1 d-flex justify-content-center">
                                {image_pie && (
                                  <img
                                    id="selectedImage"
                                    src={URL.createObjectURL(image_pie)}
                                    alt="pie"
                                    style={{
                                      width: "90px",
                                      height: "50px",

                                      border: "1px solid #708040",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="d-flex justify-content-center">
                                <ButtonMaterial
                                  variant="contained"
                                  component="label"
                                  style={{
                                    backgroundColor: "#708040",
                                  }}>
                                  Graph 3
                                  <input
                                    hidden
                                    onChange={handleChangePie}
                                    type="file"
                                    accept="image/*"
                                  />
                                </ButtonMaterial>
                              </div>
                            </div>

                            <div>
                              <div className="mb-1 d-flex justify-content-center">
                                {image_bar && (
                                  <img
                                    id="selectedImage"
                                    src={URL.createObjectURL(image_bar)}
                                    alt="bar"
                                    style={{
                                      width: "90px",
                                      height: "50px",

                                      border: "1px solid #708040",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="d-flex justify-content-center">
                                <ButtonMaterial
                                  variant="contained"
                                  component="label"
                                  style={{
                                    backgroundColor: "#708040",
                                  }}>
                                  Graph 2
                                  <input
                                    hidden
                                    onChange={handleChangeBar}
                                    type="file"
                                    accept="image/*"
                                  />
                                </ButtonMaterial>
                              </div>
                            </div>
                            <div>
                              <div className="mb-1 d-flex justify-content-center">
                                {line && (
                                  <img
                                    id="selectedImage"
                                    src={URL.createObjectURL(line)}
                                    alt="line"
                                    style={{
                                      width: "90px",
                                      height: "50px",

                                      border: "1px solid #708040",
                                    }}
                                  />
                                )}
                              </div>
                              <div className="d-flex justify-content-center">
                                <ButtonMaterial
                                  variant="contained"
                                  component="label"
                                  style={{
                                    backgroundColor: "#708040",
                                  }}>
                                  Graph 1
                                  <input
                                    hidden
                                    onChange={handleChangeLine}
                                    type="file"
                                    accept="image/*"
                                  />
                                </ButtonMaterial>
                              </div>
                            </div>
                          </Col>
                        </Row>

                        <ButtonMaterial
                          onClick={handleSubmit}
                          variant="outlined"
                          disabled={loading || file == ""}
                          style={{ width: "100px", margin: "auto" }}>
                          save
                        </ButtonMaterial>
                      </Row>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      )}
    </div>
  );
};

export default SubCategory;
