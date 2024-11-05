import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  listPop,
  addPopAge,
} from "../../redux/actions/populationAction/population";
import ListGroup from "react-bootstrap/ListGroup";
import TotalAges from "../../component/populations/TotalAges";
import PopulationArea from "../../component/populations/PopulationArea";
import ChildMiddle from "../../component/child/ChildMiddle";

const Child = () => {
  const cities = [
    "damieeeta",
    "القاهرة",
    "الأسكندرية",
    "luxor",
    "matrouh",
    "north sinai",
    "portsaid",
    "fayoum",
    "gharbiya",
    " red sea",
    "new valley",
    "qena",
    "dakahlia",
    "menoufia",
    "assiut",
    "sohag",
    "الجيزة",
    "south sinai",
    "suez",
    "beheira",
    "sharkia",
    "minya",
    "gharbiya",
    "al-galubiah",
    "aswan",
    "kafr al-sheikh",
    "ismailia",
    "beni suef",
  ];
  const govs = [
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
    "الاقصر",
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

  const addPopAgeReducer = useSelector((state) => state.addPopAgeReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopAgeReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <Container>
      <Form.Select
        aria-label="Default select example"
        style={{ marginBottom: "10px", marginTop: "15px" }}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="Egypt">Egypt</option>
        {govs.map((dep) => (
          <option value={dep}>{dep}</option>
        ))}
      </Form.Select>

      {total ? (
        <>
          <TotalAges />
          {/* <PopulationArea /> */}
        </>
      ) : (
        <ChildMiddle city={city} />
      )}
    </Container>
  );
};

export default Child;
