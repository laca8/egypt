import { Typography } from "@mui/material";
import React from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import Club from "../../component/sports/Clubs";
import Council from "../../component/sports/Council";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import ChartLineClub from "../../component/chart/sport/ChartLineClub";
import ChartBarClub from "../../component/chart/sport/ChartBarClub";
import ChartBarCouncil from "../../component/chart/sport/ChartBarCouncil";
import ChartLineCouncil from "../../component/chart/sport/ChartLineCouncil";
import ChartLineCouncilType from "../../component/chart/sport/ChartLineCouncilType";
import ChartBarCouncilType from "../../component/chart/sport/ChartBarCouncilType";
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
  const clubReducer = useSelector((state) => state.clubReducer);
  const { clubs } = clubReducer;
  const councilReducer = useSelector((state) => state.councilReducer);
  const { councils } = councilReducer;
  const cinemaReducer = useSelector((state) => state.cinemaReducer);
  const { cinema } = cinemaReducer;
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
        <Club />
        <Council />
      </div>
    </Container>
  );
};

export default Culture;
