import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import TotalSchools from "../../../component/education/high/schools/TotalSchools";
import MiddleSchools from "../../../component/education/high/schools/MiddleSchools";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import { addSchoolHighAction } from "../../../redux/actions/educationsAction/education";
const Classes = () => {
  const cities = [
    "القاهرة",
    "الجيزة",
    "الأسكندرية",
    "الدقھلیة",
    "البحر الاحمر",
    "البحیرة",
    "الفيوم",
    "الغربیة",
    "الإسماعيلية",
    "المنوفیة",
    "المنيا",
    "القلیوبیة",
    "الوادى الجديد",
    "السویس",
    "أسوان",
    "أسيوط",
    "بنى سویف",
    "بورسعید",
    "دمياط",
    "الشرقیة",
    "جنوب سيناء",
    "كفر الشيخ",
    "مرسى مطروح",
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

  const addSchoolsReducer = useSelector((state) => state.addSchoolsReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addSchoolsReducer;
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
          <TotalSchools />
        </>
      ) : (
        <MiddleSchools city={city} />
      )}
    </Container>
  );
};

export default Classes;
