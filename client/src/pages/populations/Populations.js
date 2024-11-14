import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  listPop,
  addPopMiddle,
} from "../../redux/actions/populationAction/population";
import ListGroup from "react-bootstrap/ListGroup";

import TransitionAlerts from "../../component/populations/Alert";
import PopulationTotal from "../../component/populations/PopulationTotal";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import {
  listPopMiddle,
  listPopTotal,
  addPopTotal,
} from "../../redux/actions/populationAction/population";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import PopulationMiddle from "../../component/populations/PopulationMiddle";
const Populations = () => {
  const dispatch = useDispatch();
  const listPopTotalReducer = useSelector((state) => state.listPopTotalReducer);
  const { popTotal, loading, error } = listPopTotalReducer;
  useEffect(() => {
    dispatch(listPopTotal());
  }, []);
  const cities = [...new Set(popTotal?.map((x) => x?._id?.المحافظة))];
  const [city, setCity] = useState("Egypt");
  const [total, setTotal] = useState(true);
  useEffect(() => {
    if (city == "Egypt") {
      setTotal(true);
    } else {
      setTotal(false);
    }
  }, [city]);

  const addPopMiddleReducer = useSelector((state) => state.addPopMiddleReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopMiddleReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <Container style={{ marginTop: "10px" }}>
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
          <PopulationTotal />
        </>
      ) : (
        <PopulationMiddle city={city} />
      )}
      {/*<AgeGroup18 /> */}
    </Container>
  );
};

export default Populations;
