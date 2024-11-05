import React, { useState, useEffect, useMemo, useCallback } from "react";

import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

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
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";
import { Typography } from "@mui/material";
import {
  listDeathMotherResidence,
  addDeathMotherResidence,
} from "../../../redux/actions/health/healthAction";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import Box from "@mui/material/Box";
import ChartLine from "../../../component/chart/health/death/mothers/LineChart";
import ChartBar from "../../../component/chart/health/death/mothers/BarChart";
import BarCities from "../../../component/chart/health/death/mothers/BarCities";
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
const MotherPlace = () => {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeathMotherResidence());
  }, []);
  const listDeathRed = useSelector((state) => state.listDeathRed);
  const { data, error, loading } = listDeathRed;
  const data1 = data
    .sort((a, b) => a._id.year - b._id.year)
    .sort((a, b) => a._id.city?.localeCompare(b._id.city));
  const columnsDefs = [
    {
      headerName: "العدد",
      field: `العدد`,
      sortable: true,
      filter: true,
      width: 450,
    },
    {
      headerName: "السنة",
      field: "_id.السنة",
      sortable: true,
      filter: true,
      width: 400,
    },
    {
      headerName: "المحافظة",
      field: "_id.المحافظة",
      sortable: true,
      filter: true,
      width: 400,
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

  const addDeathRed = useSelector((state) => state.addDeathRed);
  const { loading: loadingAdd, error: errorAdd, success } = addDeathRed;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <></>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <Typography
            variant="h4"
            style={{
              margin: "10px auto",
              textAlign: "center",
              backgroundColor: "#496580",
              color: "#fff",
              width: "600px",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            وفيات الامهات طبقا لمحل الاقامة
          </Typography>
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

                <Tab label="Bar" {...a11yProps(1)} style={{ color: "#fff" }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                  rowData={data1}
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
                    <ChartBar data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <BarCities data1={data} />
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

export default MotherPlace;
