import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

import Unicef from "../../../component/international/unicef/Unicef";
import Unicef2 from "../../../component/international/unicef/Unicef2";
import Demography from "../../../component/international/unicef/Demography";
import Gender from "../../../component/international/unicef/Gender";
import Education from "../../../component/international/unicef/Education";
import Economic from "../../../component/international/unicef/Economic";
const UnicefComponent = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Alert variant="secondary" style={{ width: "300px" }}>
        Note: Click To Filter,Sort
      </Alert>
      <Unicef />

      {/*<Unicef2 />*/}
      <Demography />
      <Gender />
      <Education />
      <Economic />
    </Container>
  );
};

export default UnicefComponent;
