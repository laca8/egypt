import React from "react";

import { Row, Col, Card, Container } from "react-bootstrap";
import Total from "../../component/admin/population/Total";
import Middle from "../../component/admin/population/Middle";
const Population = () => {
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
          marginBottom: "10px",
          marginRight: "25px",
          backgroundColor: "#496580",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "right",
          padding: "5px",
        }}
      >
        السكان
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
          <Total />
        </Card>
        <Card style={{ width: "48%" }}>
          <Middle />
        </Card>
      </div>
    </div>
  );
};

export default Population;
