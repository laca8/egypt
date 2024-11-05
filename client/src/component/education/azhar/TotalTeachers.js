import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAzharTeachersAction,
  listTeachersAzhar,
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
import TotalLineChart from "../../chart/edu/azhar/teachers/TotalLineChart";
import LineChart from "../../chart/edu/azhar/teachers/LineChart";
import BarChartTotal from "../../chart/edu/azhar/teachers/BarChartTotal";
import BarChart from "../../chart/edu/azhar/teachers/BarChart";
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
const TotalTeachers = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTeachersAzhar());
  }, []);
  const azharReducer = useSelector((state) => state.azharReducer);
  const { data, error, loading } = azharReducer;
  const data1 = data
    .sort((a, b) => a._id.العام - b._id.العام)
    .sort((a, b) => a._id.residence?.localeCompare(b._id.residence));

  const columnsDefs = [
    {
      headerName: "عدد الفصول",
      field: `العدد`,
      sortable: true,
      filter: true,
      width: 300,
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
      width: 350,
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
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Graphs
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Line" {...a11yProps(0)} />
                <Tab label="Bar" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
            <TabPanel value={value} index={1}>
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

export default TotalTeachers;
