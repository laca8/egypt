import React from "react";

import { Row, Col, Card, Container } from "react-bootstrap";
import TotalAges from "../../component/admin/Children/TotalAges";

const Children = () => {
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
        الاطفال
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
        <Card style={{ width: "98%" }}>
          <TotalAges />
        </Card>
      </div>
    </div>
  );
};

export default Children;
