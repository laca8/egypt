import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  addPopMiddle,
} from "../../redux/actions/populationAction/population";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Error from "../features/Error";
import Loader from "../features/Loader";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChartBar from "../chart/chartPopulation/ChartBar";
import ChartLine from "../chart/chartPopulation/ChartLine";
import ChartPie from "../chart/chartPopulation/ChartPie";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../firebase";
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
const PopulationMiddle = ({ city }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const listPopMiddleReducer = useSelector(
    (state) => state.listPopMiddleReducer
  );
  const { popMiddle, loading, error } = listPopMiddleReducer;
  useEffect(() => {
    dispatch(listPopMiddle(city));
  }, [city]);

  const dispatch = useDispatch();

  const addPopMiddleReducer = useSelector((state) => state.addPopMiddleReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopMiddleReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const columns = [
    {
      name: "العدد",
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
      name: "المحافظة",
      selector: (row) => row._id.المحافظة,
    },
  ];
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popMiddle ? (
        <>
          <Row style={{ marginTop: "10px" }}>
            <Typography
              variant="h4"
              style={{
                margin: "0 auto 10px",
                textAlign: "center",
                backgroundColor: "#496580",
                color: "#fff",
                width: "600px",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              تعداد السكان في منتصف العام
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
                  <Tab
                    label="Line"
                    {...a11yProps(1)}
                    style={{ color: "#fff" }}
                  />
                  <Tab
                    label="Bar"
                    {...a11yProps(2)}
                    style={{ color: "#fff" }}
                  />
                  <Tab
                    label="Pie"
                    {...a11yProps(3)}
                    style={{ color: "#fff" }}
                  />
                  {/* <Tab label="Pie" {...a11yProps(2)} /> */}
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <DataTable
                  style={{ padding: "20px", marginTop: "30px" }}
                  columns={columns}
                  data={popMiddle}
                  pagination
                  fixedHeader
                  fixedHeaderScrollHeight="450"
                  highlightOnHover
                />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Row>
                  <Col>
                    <Card>
                      <ChartLine
                        data1={popMiddle}
                        color="lightblue"
                        filter="ذكور"
                        label="ذكور"
                      />
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <ChartLine
                        data1={popMiddle}
                        filter="إناث"
                        color="red"
                        label="إناث"
                      />
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Row>
                  <Col>
                    <Card>
                      <ChartBar
                        data1={popMiddle}
                        color="lightblue"
                        filter="ذكور"
                        label="ذكور"
                      />
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <ChartBar
                        data1={popMiddle}
                        filter="إناث"
                        color="red"
                        label="إناث"
                      />
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Row
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Col>
                    <Card>
                      <ChartPie
                        data1={popMiddle}
                        data2={popMiddle}
                        label1="ذكور"
                        label2="إناث"
                        color1="rgba(53, 162, 235, 0.5)"
                        color2="rgba(255, 99, 132, 0.5)"
                      />
                    </Card>
                  </Col>
                </Row>
              </TabPanel>
            </Box>
          </Row>
        </>
      ) : null}
    </div>
  );
};

export default PopulationMiddle;
