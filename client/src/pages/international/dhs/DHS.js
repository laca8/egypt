import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import WomanViolent from "../../../component/international/dhs/WomanViolent";
import Child from "../../../component/international/dhs/Child";
import Fgm from "../../../component/international/dhs/Fgm";
import PhysicalPunishment from "../../../component/international/dhs/PhysicalPunishment";

const DHS = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Alert variant="secondary" style={{ width: "300px" }}>
        Note: Click To Filter,Sort
      </Alert>
      <WomanViolent />
      <Child />
      <Fgm />
      <PhysicalPunishment />
    </Container>
  );
};

export default DHS;
