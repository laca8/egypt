import React, { useState, useEffect } from "react";
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
import { Table } from "react-bootstrap";
import axios from "axios";
import Loader from "../../component/features/Loader";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Category = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [load, setLoad] = useState(false);
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const res = await axios.get("/api/category");
        console.log(res);

        setData(res?.data);
        setLoad(false);
      } catch (err) {
        setLoad(false);
        console.log(err);
        alert(err?.resposnse?.data?.msg);
        //setErr(err.response.data.msg)
      }
    };
    fetchData();
  }, []);
  const handleChange2 = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async () => {
    //e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post("/api/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setLoad(false);
      alert("category dded success");

      window.location.reload();
      //alert("file upload success");
      toggleOpen();
    } catch (error) {
      setLoad(false);
      setErr("Error uploading file");
      // alert(error?.response?.data?.msg);
      console.error("Upload error:", error);
    }
  };
  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/category/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "35px", width: "95%" }}>
      <MDBBtn onClick={toggleOpen} style={{ backgroundColor: "#708040" }}>
        Add New Category
      </MDBBtn>
      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
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
              <MDBFile onChange={handleChange2} id="customFile" />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                onClick={() => handleSubmit()}
                style={{ backgroundColor: "#708040" }}
              >
                save
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {load && <Loader />}
      <MDBRow style={{ marginLeft: "10px" }}>
        <div style={{ height: "400px", overflowY: "auto" }}>
          <Table
            striped
            bordered
            hover
            style={{
              marginTop: "10px",
              height: "100px",
              textAlign: "left",
            }}
          >
            <thead style={{ backgroundColor: "#111", color: "#fff" }}>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "whitesmoke", color: "#111" }}>
              {data?.map((x, index) => (
                <tr key={index}>
                  <td>{1 + index}</td>
                  <td>{x?.title}</td>
                  <td>
                    <img
                      src={x?.image}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                  </td>
                  <td>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(x?._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </MDBRow>
    </div>
  );
};

export default Category;
