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
  listDeathKidsUnder1year,
  addDeathKidsUnder1year,
} from "../../../redux/actions/health/healthAction";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import ChartLineSex from "../../../component/chart/health/death/kids_under_5years/ChartLineSex";
import ChartLineResidence from "../../../component/chart/health/death/kids_under_5years/ChartLineResidence";
import ChartBarFemales from "../../../component/chart/health/death/kids_under_5years/ChartBarFemales";
import ChartBarMales from "../../../component/chart/health/death/kids_under_5years/ChartBarMales";
import ChartBarFemalResidence from "../../../component/chart/health/death/kids_under_5years/ChartBarFemalResidence";
import ChartBarMaleResidence from "../../../component/chart/health/death/kids_under_5years/ChartBarMaleResidence";
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
const KidsUnder1Year = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeathKidsUnder1year());
  }, []);
  const listDeathRed = useSelector((state) => state.listDeathRed);
  const { data, error, loading } = listDeathRed;
  const data1 = data
    .sort((a, b) => a._id.year - b._id.year)
    .sort((a, b) => a._id.residence?.localeCompare(b._id.residence));
  const columnsDefs = [
    {
      headerName: "العدد",
      field: `العدد`,
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "السنة",
      field: "_id.السنة",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "النوع",
      field: "_id.النوع",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "محل الاقامة",
      field: "_id.الاقامة",
      sortable: true,
      filter: true,
      width: 300,
    },

    {
      headerName: "المحافظة",
      field: "_id.المحافظة",
      sortable: true,
      filter: true,
      width: 300,
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
            وفيات الاطفال تحت سنة
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
                <Tab label="Line" {...a11yProps(1)} style={{ color: "#fff" }} />
                <Tab label="Bar" {...a11yProps(2)} style={{ color: "#fff" }} />
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
                    <ChartLineSex data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineResidence data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <ChartBarMales data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarFemales data1={data} />
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Card>
                    <ChartBarMaleResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarFemalResidence data1={data} />
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

export default KidsUnder1Year;
