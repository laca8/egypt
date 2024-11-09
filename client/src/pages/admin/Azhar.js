import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Classes from "../../component/admin/azhar/Classes";
import Teachers from "../../component/admin/azhar/Teachers";
import Primary from "../../component/admin/azhar/Primary";
import Secondary from "../../component/admin/azhar/Secondary";
import High from "../../component/admin/azhar/High";
import Industite from "../../component/admin/azhar/Industite";
import Disables from "../../component/admin/azhar/Disables";
import Kids from "../../component/admin/azhar/Kids";
import Reads from "../../component/admin/azhar/Reads";

const Azhar = () => {
  return (
    <div>
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
          الازهر
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
            <Classes />
          </Card>
          <Card style={{ width: "48%" }}>
            <Teachers />
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
            <Reads />
          </Card>
          <Card style={{ width: "48%" }}>
            <Disables />
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
            <Industite />
          </Card>
          <Card style={{ width: "48%" }}>
            <Kids />
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
            <Primary />
          </Card>
          <Card style={{ width: "48%" }}>
            <Secondary />
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
          <Card style={{ width: "48%" }}></Card>

          <Card style={{ width: "48%" }}>
            <High />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Azhar;
