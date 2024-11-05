import React from "react";
import Sidebar from "../../component/admin/Sidebar";
import { Row, Col, Card, Container } from "react-bootstrap";
import MotherPlace from "../../component/admin/health/MotherPlace";
import MotherResidence from "../../component/admin/health/MotherResidence";
import Kids7 from "../../component/admin/health/Kids7";
import Kids28 from "../../component/admin/health/Kids28";
import Kids1 from "../../component/admin/health/Kids1";
import Kids5 from "../../component/admin/health/Kids5";
import Kids1To5 from "../../component/admin/health/Kids1To5";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Category from "../../component/admin/Category";
import Azhar from "./Azhar";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Health from "./Health";
import Education from "./Education";
import Culture from "./Culture";
import Sport from "./Sport";
import Population from "./Population";
import Children from "./Children";
import International from "./International";
const AdminPanel = () => {
  const { category } = useParams();
  console.log(category);

  const arrCategories = [
    {
      category: "Azhar",
      component: <Azhar />,
    },
    {
      category: "categories",
      component: <Category />,
    },
    {
      category: "Health",
      component: <Health />,
    },
    {
      category: "Education",
      component: <Education />,
    },
    {
      category: "Culture",
      component: <Culture />,
    },
    {
      category: "Sports",
      component: <Sport />,
    },
    {
      category: "Population",
      component: <Population />,
    },
    {
      category: "Children",
      component: <Children />,
    },
    {
      category: "International",
      component: <International />,
    },
  ];
  return (
    <MDBRow style={{ height: "100%" }}>
      <MDBCol md="2">
        <Sidebar />
      </MDBCol>
      <MDBCol md="10" style={{ textAlign: "right" }}>
        {/* <Category /> */}
        {arrCategories.map((x, i) =>
          x.category == category ? x.component : null
        )}
      </MDBCol>
    </MDBRow>
  );
};
export default AdminPanel;
