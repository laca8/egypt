import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

import TotalSchools from "../../../component/education/precentage/schools/TotalSchools";

const Schools = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Alert variant="secondary" style={{ width: "300px" }}>
        Note: Click To Filter,Sort
      </Alert>
      <TotalSchools />
    </Container>
  );
};

export default Schools;
