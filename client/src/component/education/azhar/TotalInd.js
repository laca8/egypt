import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listHighStuAzhar,
  listIntAzhar,
  listPrimryStuAzhar,
  addAzharIndsAction,
} from "../../../redux/actions/educationsAction/eduAzharAction";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import ChartLineSex from "../../chart/edu/azhar/students/ChartLineSex";

import TotalLineChart from "../../chart/edu/azhar/inst/TotalLineChart";
import LineChart from "../../chart/edu/azhar/inst/LineChart";
import BarChartTotal from "../../chart/edu/azhar/inst/BarChartTotal";
import BarChart from "../../chart/edu/azhar/inst/BarChart";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
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
const TotalInd = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listIntAzhar());
  }, []);
  const azharReducer = useSelector((state) => state.azharReducer);
  const { data, error, loading } = azharReducer;
  const data1 = data
    .sort((a, b) => a._id.العام - b._id.العام)
    .sort((a, b) => a._id.residence?.localeCompare(b._id.residence));
  const columnsDefs = [
    {
      headerName: "عدد المعاهد",
      field: `العدد`,
      sortable: true,
      filter: true,
      width: 200,
    },
    {
      headerName: "محل الاقامة",
      field: "_id.الاقامة",
      sortable: true,
      filter: true,
    },

    {
      headerName: "المرحلة",
      field: "_id.المرحلة",
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
      headerName: "المنطقة",
      field: "_id.المنطقة",
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

  const addAzharReducer = useSelector((state) => state.addAzharReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addAzharReducer;
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <Container>
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
              width: "400px",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            عدد المعاهد
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
              <div
                className="ag-theme-alpine"
                style={{ height: 500, width: "100%" }}
              >
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
                    <TotalLineChart data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <LineChart data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <BarChartTotal data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <BarChart data1={data} />
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

export default TotalInd;
