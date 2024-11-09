import React from "react";
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
import { Row, Col, Card, Container } from "react-bootstrap";

const Health = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        fontWeight: "bold",
        width: "100%",
      }}
    >
      <h2
        style={{
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#496580",
          color: "#fff",
          width: "600px",
          borderRadius: "5px",
          padding: "5px",
          marginBottom: "5px",
        }}
      >
        الوفيات
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",

          marginBottom: "10px",

          gap: "10px",
        }}
      >
        <Card style={{ width: "48%" }}>
          <MotherPlace />
        </Card>
        <Card style={{ width: "48%" }}>
          <MotherResidence />
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          width: "100%",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        <Card style={{ width: "48%" }}>
          <Kids7 />
        </Card>
        <Card style={{ width: "48%" }}>
          <Kids28 />
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        <Card style={{ width: "48%" }}>
          <Kids1 />
        </Card>
        <Card style={{ width: "48%" }}>
          <Kids5 />
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          width: "100%",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        <Card style={{ width: "48%" }}>
          <Kids1To5 />
        </Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Health;
