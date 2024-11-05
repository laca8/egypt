import React from "react";
import GoogleMaps from "../component/map/GoogleMap";
import Category from "../component/categories/Category";

import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <Container>
      <div
        style={{
          width: "100%",

          marginTop: "20px",
        }}
      >
        <Category />
      </div>
    </Container>
  );
};
export default Home;
