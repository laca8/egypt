import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../component/admin/Sidebar";
import { Row, Col, Card, Container } from "react-bootstrap";

import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import { useParams, useNavigate } from "react-router-dom";

import SubCategory from "./SubCategory";
import Category from "../../component/admin/Category";
const AdminPanel = () => {
  const navigator = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (!userInfo?.user?.isAdmin) {
      navigator("/login");
    }
  }, [userInfo?.user?.isAdmin]);
  const { category } = useParams();
  console.log(category);

  return (
    <MDBRow style={{ height: "100%" }} dir="ltr">
      <MDBCol md="3">
        <Sidebar />
      </MDBCol>
      <MDBCol md="9">
        {category == "categories" ? <Category /> : <SubCategory />}
      </MDBCol>
    </MDBRow>
  );
};
export default AdminPanel;
