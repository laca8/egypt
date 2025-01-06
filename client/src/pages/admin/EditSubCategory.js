import React, { useState, useEffect } from "react";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCategory,
  AddCategory,
  listCategoryByTitle,
  listCategory,
  editCategories,
  editSubCategory,
} from "../../redux/actions/category/categoryAction";
import Form from "react-bootstrap/Form";

import {
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
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Row, Col, Container } from "react-bootstrap";
import ButtonMaterial from "@mui/material/Button";
import { Alert, AlertTitle, Input, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Initialize Firebase (replace with your config)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  projectId: process.env.REACT_APP_ProjectId,
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const EditSubCategory = ({ category, title, id, images, srcEdit }) => {
  const dispatch = useDispatch();
  // console.log(images);

  const [basicModal, setBasicModal] = useState(false);
  const [line, setLine] = useState("");
  const [image_bar, setImageBar] = useState("");
  const [image_pie, setImagePie] = useState("");
  const [image_pyramid, setImagePyramid] = useState("");
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(srcEdit);
    setName(title);
  }, [srcEdit, title]);
  const toggleOpen = () => {
    setBasicModal(!basicModal);
  };
  const handleChangeLine = async (e) => {
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
    try {
      const filename = `${Date.now()}-${x.name}`;
      const storageRef = ref(storage, `line/${filename}`);
      const snapshot = await uploadBytes(storageRef, x);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setLine(downloadURL);
      console.log(downloadURL);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeBar = async (e) => {
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
    try {
      const filename = `${Date.now()}-${x.name}`;
      const storageRef = ref(storage, `bar/${filename}`);
      const snapshot = await uploadBytes(storageRef, x);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setImageBar(downloadURL);
      console.log(downloadURL);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePie = async (e) => {
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
    try {
      const filename = `${Date.now()}-${x.name}`;
      const storageRef = ref(storage, `pie/${filename}`);
      const snapshot = await uploadBytes(storageRef, x);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setImagePie(downloadURL);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePyramid = async (e) => {
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
    try {
      const filename = `${Date.now()}-${x.name}`;
      const storageRef = ref(storage, `pyramid/${filename}`);
      const snapshot = await uploadBytes(storageRef, x);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setImagePyramid(downloadURL);
      console.log(downloadURL);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    console.log(title);

    const formData = new FormData();
    if (line == "") {
      formData.append("line", images[0]?.image);
    } else {
      formData.append("line", line);
    }
    if (image_bar == "") {
      formData.append("image_bar", images[1]?.image);
    } else {
      formData.append("image_bar", image_bar);
    }
    if (image_pie == "") {
      formData.append("image_pie", images[2]?.image);
    } else {
      formData.append("image_pie", image_pie);
    }
    if (image_pyramid == "") {
      formData.append("image_pyramid", images[3]?.image);
    } else {
      formData.append("image_pyramid", image_pyramid);
    }
    formData.append("name", name);
    formData.append("src", src);
    dispatch(editSubCategory(category, id, formData));
    setBasicModal(!basicModal);
  };
  return (
    <div>
      <MDBBtn onClick={toggleOpen} style={{ backgroundColor: "#708040" }}>
        <EditIcon />
      </MDBBtn>
      <MDBModal
        dir="ltr"
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Images</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Row>
                <Col>
                  <div>
                    <Form.Group style={{ width: "100%" }}>
                      <Form.Label>اسم الجدول</Form.Label>
                      <Form.Control
                        style={{ fontWeight: "bold" }}
                        type="text"
                        placeholder="ادخل اسم الجدول"
                        value={name}
                        onChange={(e) =>
                          setName(e.target.value)
                        }></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ width: "100%" }}>
                      <Form.Label>المصدر</Form.Label>
                      <Form.Control
                        style={{ fontWeight: "bold" }}
                        type="text"
                        placeholder="ادخل المصدر"
                        value={src}
                        onChange={(e) => setSrc(e.target.value)}></Form.Control>
                    </Form.Group>
                  </div>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}>
                  <div>
                    <div className="mb-1 d-flex justify-content-center">
                      <img
                        id="selectedImage"
                        src={
                          line !== "" ? line : images && `${images[0]?.image}`
                        }
                        alt="graph"
                        style={{
                          width: "90px",
                          height: "50px",

                          border: "1px solid #708040",
                        }}
                      />
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
                  <div>
                    <div className="mb-1 d-flex justify-content-center">
                      <img
                        id="selectedImage"
                        src={
                          image_bar !== ""
                            ? image_bar
                            : images && `${images[1]?.image}`
                        }
                        alt="graph"
                        style={{
                          width: "90px",
                          height: "50px",

                          border: "1px solid #708040",
                        }}
                      />
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
                      <img
                        id="selectedImage"
                        src={
                          image_pie !== ""
                            ? image_pie
                            : images && `${images[2]?.image}`
                        }
                        alt="graph"
                        style={{
                          width: "90px",
                          height: "50px",

                          border: "1px solid #708040",
                        }}
                      />
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
                    <div className="mb-1  d-flex justify-content-center ">
                      <img
                        id="selectedImage"
                        src={
                          image_pyramid !== ""
                            ? image_pyramid
                            : images && `${images[3]?.image}`
                        }
                        alt="graph"
                        style={{
                          width: "90px",
                          height: "50px",
                          border: "1px solid #708040",
                        }}
                      />
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
                </Col>
              </Row>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                style={{ backgroundColor: "#708040" }}
                onClick={() => handleSubmit()}>
                save
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default EditSubCategory;
