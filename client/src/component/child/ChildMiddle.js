import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPopAgeByCity } from "../../redux/actions/populationAction/population";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../features/Error";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Pyramid from "../chart/childMiddle/Pyramid";
import DataTable from "react-data-table-component";
import ChartPyramid from "../chart/childMiddle/Pyramid";

import FamilyBar from "../chart/family/FamilyBar";
import ChartBar from "../chart/totalAge/Bar";
import ChartLine from "../chart/totalAge/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import TotalLine from "../chart/totalPopulation/TotalLine";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TotalBar from "../chart/totalPopulation/BarTotal";
import ListAge from "./ListAge";
import ChartLine2 from "../chart/totalAge/Line2";
import ChartBar2 from "../chart/totalAge/Bar2";
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
const ChildMiddle = ({ city }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPopAgeByCity(city));
  }, [city]);
  const listPopAgeReducer = useSelector((state) => state.listPopAgeReducer);
  const { popAge, error, loading } = listPopAgeReducer;

  const columns = [
    {
      name: "عدد السكان",
      selector: (row) => row.العدد,
    },
    {
      name: "النوع",
      selector: (row) => row._id.النوع,
    },
    {
      name: "الشهر",
      selector: (row) => row._id.الشهر,
    },
    {
      name: "السنة",
      selector: (row) => row._id.السنة,
    },
    {
      name: "محل الإقامة",
      selector: (row) => row._id.الإقامة,
    },
    {
      name: "فئات عمرية",
      selector: (row) => row._id.فئات,
    },
    {
      name: "القسم أو المركز",
      selector: (row) => row._id.القسم,
    },
    {
      name: "المحافظة",
      selector: (row) => row._id.المحافظة,
    },
  ];
  //console.log(arr);
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
      ) : popAge ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "10px 0",
              textAlign: "right",
            }}
          >
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
              تسلسل عدد الاطفال في محافظة ({city})
            </Typography>
          </div>
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
                <Tab label="Data" {...a11yProps(1)} style={{ color: "#fff" }} />
                <Tab label="Line" {...a11yProps(2)} style={{ color: "#fff" }} />
                <Tab label="Bar" {...a11yProps(3)} style={{ color: "#fff" }} />
                <Tab
                  label="Pyramid"
                  {...a11yProps(4)}
                  style={{ color: "#fff" }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <DataTable
                style={{ padding: "20px", marginTop: "30px", fontSize: "40px" }}
                columns={columns}
                data={popAge}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="450"
                selectableRowsHighlight
                highlightOnHover
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListAge data1={popAge} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <ChartLine2 data1={popAge} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLine data1={popAge} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Row>
                <Col>
                  <Card>
                    <ChartBar data1={popAge} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartBar2 data1={popAge} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Row>
                <Col>
                  <Card>
                    <ChartPyramid data1={popAge} />
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

export default ChildMiddle;
