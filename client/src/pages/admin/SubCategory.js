import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ButtonMaterial from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import { Row, Col, Container } from "react-bootstrap";

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
const SubCategory = () => {
  const [json, setJson] = useState("");
  const [file, setFile] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [title, setTitle] = useState("");
  const toggleOpen = () => setBasicModal(!basicModal);
  const handleSubmit = () => {
    setBasicModal(!basicModal);
    console.log(title);
  };
  const data = ["1", "2", "3", "4", "5", "6"];
  return (
    <div style={{ marginTop: "25px", padding: "10px" }}>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <MDBBtn onClick={toggleOpen}>Add New SubCategory</MDBBtn>
      </div>

      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add SubCategory</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Enter Title"
                id="typeText"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                style={{ marginBottom: "10px" }}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn onClick={() => handleSubmit()}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          width: "100%",
          marginBottom: "10px",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {data.map((x) => (
          <div
            style={{ padding: "8px", border: "1px solid gray", width: "48%" }}
          >
            <div
              style={{
                marginBottom: "10px",
                padding: "8px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  padding: "3px",
                  backgroundColor: "#807040",
                  color: "#fff",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              >
                {x}
              </Typography>
              <ButtonMaterial
                variant="contained"
                component="label"
                style={{ marginRight: "10px" }}
              >
                <a
                  href={"/"}
                  download={""}
                  target="_self"
                  rel="noopener noreferrer"
                  style={{ color: "#fff" }}
                >
                  Download
                </a>
              </ButtonMaterial>
              <ButtonMaterial variant="contained" component="label">
                <UploadFileIcon />
                <input hidden onChange={""} type="file" />
              </ButtonMaterial>
              <ButtonMaterial
                onClick={handleSubmit}
                variant="outlined"
                disabled={load || file == ""}
                style={{ marginLeft: "10px" }}
              >
                import
              </ButtonMaterial>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
