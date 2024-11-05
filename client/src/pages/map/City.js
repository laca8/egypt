import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../../component/features/Error";
import Loader from "../../component/features/Loader";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
  listPopMiddle,
  listPopAgeByCity,
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
import ChartLine from "../../component/chart/gov/LineChart";
import LineAge from "../../component/chart/gov/LineAge";

import ChartBar from "../../component/chart/gov/Bar";
import BarAge from "../../component/chart/gov/BarAge";
import PieAge from "../../component/chart/gov/PieAge";
import PieAge2 from "../../component/chart/gov/PieAge2";
import PiePop from "../../component/chart/gov/PiePop";
import PiePop2 from "../../component/chart/gov/PiePop2";
import LineArea from "../../component/chart/gov/LineArea";
import BarArea from "../../component/chart/gov/BarArea";
import axios from "axios";
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

const City = () => {
  const dispatch = useDispatch();
  const [area, setArea] = useState([]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { gov } = useParams();
  const listPopMiddleReducer = useSelector(
    (state) => state.listPopMiddleReducer
  );
  const { popMiddle } = listPopMiddleReducer;
  const listPopAgeReducer = useSelector((state) => state.listPopAgeReducer);
  const { popAge, loading, error } = listPopAgeReducer;
  useEffect(() => {
    dispatch(listPopMiddle(gov));
    dispatch(listPopAgeByCity(gov));
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/area/${gov}`);
        console.log(res);

        setArea(res?.data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    fetchData();
  }, [gov]);
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
          محافظة {gov}
        </Typography>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Box sx={{ width: "100%", backgroundColor: "#807040" }} dir="ltr">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Line" {...a11yProps(0)} style={{ color: "#fff" }} />
              <Tab label="Bar" {...a11yProps(1)} style={{ color: "#fff" }} />
              <Tab label="Pie" {...a11yProps(2)} style={{ color: "#fff" }} />
              <Tab label="Area" {...a11yProps(3)} style={{ color: "#fff" }} />
              <Tab
                label="Pyramid"
                {...a11yProps(4)}
                style={{ color: "#fff" }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Row>
              <Col>
                <Card>
                  <ChartLine
                    data1={popMiddle}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="تعداد السكان"
                    label="السنة"
                  />
                </Card>
              </Col>
              <Col>
                <Card>
                  <LineAge
                    data1={popAge}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="الفئات العمرية"
                    label="فئات"
                  />
                </Card>
              </Col>
            </Row>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Row>
              <Col>
                <Card>
                  <ChartBar
                    data1={popMiddle}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="تعداد السكان"
                    label="السنة"
                  />
                </Card>
              </Col>
              <Col>
                <Card>
                  <BarAge
                    data1={popAge}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="الفئات العمرية"
                    label="فئات"
                  />
                </Card>
              </Col>
            </Row>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Row style={{ marginBottom: "20px" }}>
              <Col>
                <Card>
                  <PieAge2
                    data1={popAge}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="(ذكور) الفئات العمرية"
                    label="فئات"
                  />
                </Card>
              </Col>
              <Col>
                <Card>
                  <PieAge
                    data1={popAge}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="(اناث) الفئات العمرية"
                    label="فئات"
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <PiePop2
                    data1={popMiddle}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="(ذكور) تعداد السكان"
                    label="السنة"
                  />
                </Card>
              </Col>
              <Col>
                <Card>
                  <PiePop
                    data1={popMiddle}
                    filter1="ذكور"
                    filter2="إناث"
                    color1="rgba(53, 162, 235, 0.5)"
                    color2="rgba(255, 99, 132, 0.5)"
                    text="(اناث) تعداد السكان"
                    label="السنة"
                  />
                </Card>
              </Col>
            </Row>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Row>
              <Col>
                <Card>
                  <LineArea
                    data1={area}
                    filter1="المساحة المأهولة"
                    filter2="المساحة الكلية"
                    color2="rgba(53, 162, 235, 0.5)"
                    color1="rgba(255, 99, 132, 0.5)"
                    text="المساحة"
                    label="السنة"
                  />
                </Card>
              </Col>
              <Col>
                <Card>
                  <BarArea
                    data1={area}
                    filter1="المساحة المأهولة"
                    filter2="المساحة الكلية"
                    color2="rgba(53, 162, 235, 0.5)"
                    color1="rgba(255, 99, 132, 0.5)"
                    text="المساحة"
                    label="السنة"
                  />
                </Card>
              </Col>
            </Row>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Row>
              <Col>
                <Card></Card>
              </Col>
            </Row>
          </TabPanel>
        </Box>
      )}
    </Container>
  );
};

export default City;
