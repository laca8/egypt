import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

import TotalStudents from "../../../component/education/azhar/TotalClasses";
const Students = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <TotalStudents />
    </Container>
  );
};

export default Students;
