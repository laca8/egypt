import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { listTotalAge } from "../../redux/actions/populationAction/population";
import ListGroup from "react-bootstrap/ListGroup";
import TotalAges from "../../component/populations/TotalAges";
import PopulationArea from "../../component/populations/PopulationArea";
import ChildMiddle from "../../component/child/ChildMiddle";

const Child = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("Egypt");
  const [total, setTotal] = useState(true);
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);

  const govs = [...new Set(popTotalAge?.map((x) => x?._id?.المحافظة))];

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
        style={{ marginTop: "5px" }}
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
