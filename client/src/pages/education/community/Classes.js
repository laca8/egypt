import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import TotalClasses from "../../../component/education/community/classes/TotalClasses";
import MiddleClasses from "../../../component/education/community/classes/MiddleClasses";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import { addClassesCommunityAction } from "../../../redux/actions/educationsAction/education";
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
  const dispatch = useDispatch();

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
