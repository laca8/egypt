import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  studentsMidComm,
  studentsMidCommunity,
} from "../../../redux/actions/educationsAction/education";
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
import ChartLineSex from "../../chart/edu/students/ChartLineSex";
import ChartLineDependency from "../../chart/edu/students/ChartLineDependency";
import ChartLineResidence from "../../chart/edu/students/ChartLineResidence";
import ChartBarTotal from "../../chart/edu/students/ChartBarTotal";
import ChartBarSex from "../../chart/edu/students/ChartBarSex";
import ChartBarResidence from "../../chart/edu/students/ChartBarResidence";
import ChartBarDependency from "../../chart/edu/students/ChartBarDependency";
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
const MiddleStudents = ({ city }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(studentsMidComm(city));
  }, [city]);
  const listMidPreStuReducer = useSelector(
    (state) => state.listMidPreStuReducer
  );
  const { studentsMid, error, loading } = listMidPreStuReducer;
  const data = studentsMid
    ?.sort((a, b) => a._id.السنة - b._id.السنة)
    ?.sort((a, b) => a._id.النوع?.localeCompare(b._id.النوع))
    ?.sort((a, b) => a._id.dependency?.localeCompare(b._id.تبعية))
    ?.sort((a, b) => a._id.residence?.localeCompare(b._id.الإقامة));
  const columnsDefs = [
    {
      headerName: "السنة",
      field: "_id.السنة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "النوع",
      field: "_id.النوع",
      sortable: true,
      filter: true,
    },
    {
      headerName: "تبعية المدرسة",
      field: "_id.تبعية",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "الإقامة",
      field: "_id.الإقامة",
      sortable: true,
      filter: true,
    },
    {
      headerName: "العدد",
      field: `العدد`,
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
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : studentsMid ? (
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
            الطلاب في المرحلة الثانوية التجارية ({city})
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
                    <ChartLineSex data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineResidence data1={data} />
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Card>
                    <ChartLineDependency data1={data} />
                  </Card>
                </Col>
                <Col></Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <ChartBarTotal data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarSex data1={data} />
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Card>
                    <ChartBarResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBarDependency data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default MiddleStudents;
