import React from "react";

import { Row, Col, Card, Container } from "react-bootstrap";
import Club from "../../component/admin/sport/Club";
import Council from "../../component/admin/sport/Council";
const Sport = () => {
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
        الرياضة
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
          <Club />
        </Card>
        <Card style={{ width: "48%" }}>
          <Council />
        </Card>
      </div>
    </div>
  );
};

export default Sport;
