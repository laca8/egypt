import { Typography } from "@mui/material";
import React from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import Cinema from "../../component/culture/Cinema";
import Theater from "../../component/culture/Theater";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ChartLineCinema from "../../component/chart/culture/ChartLineCinema";
import ChartBarCinema from "../../component/chart/culture/ChartBaraCinema";
import ChartBarTheater from "../../component/chart/culture/ChartBarTheater";
import ChartLineTheater from "../../component/chart/culture/ChartLineTheater";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Culture = () => {
  const cinemaReducer = useSelector((state) => state.cinemaReducer);
  const { cinema, error, loading } = cinemaReducer;
  const theaterReducer = useSelector((state) => state.theaterReducer);
  const { theaters } = theaterReducer;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Cinema />
        <Theater />
      </div>
    </Container>
  );
};

export default Culture;
