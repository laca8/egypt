import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
  Alert,
} from "react-bootstrap";
import Error from "../features/Error";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { listCinema } from "../../redux/actions/culture/cultureAction";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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

const Cinema = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCinema());
  }, []);
  const cinemaReducer = useSelector((state) => state.cinemaReducer);
  const { cinema, error, loading } = cinemaReducer;
  const data = cinema
    .sort((a, b) => a._id?.year - b._id?.year)
    .sort((a, b) => a._id.city?.localeCompare(b._id.city));
  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "_id.المحافظة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "العام",
      field: "_id.العام",
      sortable: true,
      filter: true,
    },
    {
      headerName: "عدد ادوار السينما",
      field: `العدد`,
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked", e);
  });

  const addCinemaReducer = useSelector((state) => state.addCinemaReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addCinemaReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : cinema ? (
        <>
          <Box sx={{ width: "100%", backgroundColor: "#807040" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Table"
                  {...a11yProps(0)}
                  style={{ color: "#fff" }}
                />
                <Tab label="Line" {...a11yProps(1)} style={{ color: "#fff" }} />
                <Tab label="Bar" {...a11yProps(2)} style={{ color: "#fff" }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={data}
                  columnDefs={columnsDefs}
                  defaultColDef={defaultColDef}
                  rowSelection="multiple"
                  animateRows={true}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <ChartLineCinema data1={cinema} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <ChartBarCinema data1={cinema} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </Container>
  );
};

export default Cinema;
