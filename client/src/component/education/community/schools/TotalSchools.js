import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { schoolCommunity } from "../../../../redux/actions/educationsAction/education";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../../features/Error";
import Loader from "../../../features/Loader";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import ChartLineDependency from "../../../chart/edu/schools2/ChartLineDependency";
import ChartLineResidence from "../../../chart/edu/schools2/ChartLineResidence";

import ChartBarResidence from "../../../chart/edu/schools2/ChartBarResidence";
import ChartBarDependency from "../../../chart/edu/schools2/ChartBarDependency";
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
const TotalStudents = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(schoolCommunity());
  }, []);
  const listSchoolReducer = useSelector((state) => state.listSchoolReducer);
  const { schools, error, loading } = listSchoolReducer;
  const data = schools.sort((a, b) => a._id.year - b._id.year);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : schools ? (
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
            المدارس في التعليم المجتمعي
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
              <Table
                striped
                bordered
                hover
                style={{
                  marginBottom: "30px",
                  marginTop: "20px",
                  height: "100px",
                  backgroundColor: "#fff",
                }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>السنة</th>
                    <th>تبعية المدرسة</th>
                    <th>محل الاقامة</th>
                    <th>عدد المدارس</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((pop, index) => (
                    <tr key={index}>
                      <td>{1 + index}</td>
                      <td>{pop?._id?.السنة}</td>
                      <td>{pop?._id?.تبعية}</td>
                      <td>{pop?._id?.الاقامة}</td>
                      <td>{pop?.العدد}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col>
                  <Card>
                    <ChartLineResidence data1={data} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <ChartLineDependency data1={data} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
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
    </Container>
  );
};

export default TotalStudents;
