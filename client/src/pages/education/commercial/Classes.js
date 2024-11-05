import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import TotalClasses from "../../../component/education/commercial/classes/TotalClasses";
import MiddleClasses from "../../../component/education/commercial/classes/MiddleClasses";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import { addClassesCommAction } from "../../../redux/actions/educationsAction/education";
const Classes = () => {
  const cities = [
    "القاهرة",
    "الجيزة",
    "الاسكندرية",
    "الدقهلية",
    "البحر الاحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الاسماعيلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
    "سوهاج",
  ];
  const [city, setCity] = useState("Egypt");
  const [total, setTotal] = useState(true);
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
