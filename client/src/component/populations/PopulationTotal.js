import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listPopMiddle,
  listPopTotal,
  addPopTotal,
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

import ChartBar from "../chart/totalPopulation/Bar";
import FamilyBar from "../chart/family/FamilyBar";
import ChartLine from "../chart/totalPopulation/Line";
import ChartPie from "../chart/totalPopulation/Pie";
import TotalLine from "../chart/totalPopulation/TotalLine";
import CountUp from "react-countup";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Family from "./Family";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import TotalBar from "../chart/totalPopulation/BarTotal";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
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
const PopulationTotal = () => {
  const [value, setValue] = React.useState(0);
  const [familyMale, setFamilyMale] = useState(0);
  const [familyFemale, setFamilyFemale] = useState(0);
  const [pars, setPars] = useState([]);
  const [par1, setPar1] = useState("");
  const [par2, setPar2] = useState("");
  const [id, setId] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const listPopTotalReducer = useSelector((state) => state.listPopTotalReducer);
  const { popTotal, loading, error } = listPopTotalReducer;
  useEffect(() => {
    dispatch(listPopTotal());
  }, []);
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
    // {
    //   name: "المحافظة",
    //   selector: (row) => row._id.المحافظة,
    // },
  ];

  const addPopMiddleReducer = useSelector((state) => state.addPopMiddleReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addPopMiddleReducer;

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  useEffect(() => {
    const fetchParagraphs = async () => {
      try {
        const res = await axios.get("/api/pop/par");
        setPars(res?.data);
        setPar1(res?.data[0]?.par1);
        setPar2(res?.data[0]?.par2);
        setId(res?.data[0]?._id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchParagraphs();
  }, []);
  const updatePar = async () => {
    try {
      const pars = {
        par1,
        par2,
      };
      await axios.put(`/api/pop/par/${id}`, pars);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : popTotal ? (
        <>
          {pars &&
            pars?.map((x, i) => (
              <div>
                <textarea
                  disabled={!userInfo?.user?.isAdmin}
                  style={{
                    width: "100%",
                    height: "auto",
                    textAlign: "right",
                    padding: "10px",
                    backgroundColor: "#807040",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                  value={par1}
                  onChange={(e) => setPar1(e.target.value)}
                >
                  {par1}
                </textarea>

                <textarea
                  disabled={!userInfo?.user?.isAdmin}
                  style={{
                    width: "100%",
                    height: "200px",

                    textAlign: "right",
                    padding: "10px",
                    backgroundColor: "#807040",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                  value={par2}
                  onChange={(e) => setPar2(e.target.value)}
                >
                  {par2}
                </textarea>
              </div>
            ))}
          {userInfo?.user?.isAdmin ? (
            <Button onClick={() => updatePar()}>save</Button>
          ) : null}

          {/* <Family
            setFamilyMale={setFamilyMale}
            setFamilyFemale={setFamilyFemale}
          /> */}

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
                <Tab label="Pie" {...a11yProps(4)} style={{ color: "#fff" }} />
                {/* <Tab label="Pie" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <DataTable
                style={{ padding: "20px", marginTop: "30px" }}
                columns={columns}
                data={popTotal}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="450"
                highlightOnHover
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card>
                <Row style={{ marginTop: "20px", padding: "20px" }}>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3>Male Population </h3>
                    <div style={{ color: "#1b7ced" }}>
                      <ManIcon style={{ fontSize: "50px" }} />
                      <ManIcon style={{ fontSize: "50px" }} />
                      <ManIcon style={{ fontSize: "50px" }} />
                      <ManIcon style={{ fontSize: "50px" }} />
                      <ManIcon style={{ fontSize: "50px" }} />
                    </div>
                    <h3>51%</h3>
                  </Col>
                </Row>

                <Row
                  style={{
                    marginTop: "20px",

                    width: "100%",
                    padding: "20px",
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3>Female Population </h3>
                    <div style={{ color: "pink" }}>
                      <WomanIcon style={{ fontSize: "50px" }} />
                      <WomanIcon style={{ fontSize: "50px" }} />
                      <WomanIcon style={{ fontSize: "50px" }} />
                      <WomanIcon style={{ fontSize: "50px" }} />
                      <WomanIcon style={{ fontSize: "50px" }} />
                    </div>
                    <h3>49%</h3>
                  </Col>
                </Row>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col>
                  <Card>
                    <ChartLine data1={popTotal} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <TotalLine data1={popTotal} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Row>
                <Col>
                  <Card>
                    <ChartBar data1={popTotal} />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <TotalBar data1={popTotal} />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col>
                  <Card>
                    <ChartPie
                      data1={popTotal}
                      label1="ذكور"
                      label2="إناث"
                      color1="rgba(53, 162, 235, 0.5)"
                      color2="rgba(255, 99, 132, 0.5)"
                    />
                  </Card>
                </Col>
              </Row>
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
              <ChartPie data1={popTotal} />
            </TabPanel> */}
          </Box>
        </>
      ) : null}
    </div>
  );
};

export default PopulationTotal;
