import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import TotalClasses from "../../../component/education/secondary/classes/TotalClasses";
import MiddleClasses from "../../../component/education/secondary/classes/MiddleClasses";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import {
  addClassesSecondaryAction,
  classesAgri,
} from "../../../redux/actions/educationsAction/education";
const Classes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(classesAgri());
  }, []);
  const listClassesReducer = useSelector((state) => state.listClassesReducer);
  const { classes, error, loading } = listClassesReducer;
  const data = classes.sort((a, b) => a._id.السنة - b._id.السنة);
  const [city, setCity] = useState("Egypt");
  const [total, setTotal] = useState(true);
  const cities = [...new Set(data?.map((x) => x?._id?.المديرية))];
  useEffect(() => {
    if (city == "Egypt") {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [city]);

  const addClassesReducer = useSelector((state) => state.addClassesReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addClassesReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  return (
    <Container style={{ marginTop: "20px" }}>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "10px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Egypt">Egypt</option>
        {cities.map((dep) => (
          <option value={dep}>{dep}</option>
        ))}
      </Form.Select>

      {total ? (
        <>
          <TotalClasses />
        </>
      ) : (
        <MiddleClasses city={city} />
      )}
    </Container>
  );
};

export default Classes;
