import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PrePrimaryClass from "../../component/admin/education/classes/PrePrimaryClass";
import { Row, Col, Card, Container } from "react-bootstrap";
import PrimaryClass from "../../component/admin/education/classes/PrimaryClass";
import SecondaryClass from "../../component/admin/education/classes/Secondary";
import High from "../../component/admin/education/classes/High";
import IndClass from "../../component/admin/education/classes/IndClass";
import AgriClass from "../../component/admin/education/classes/AgriClass";
import CommericalClass from "../../component/admin/education/classes/Commerical";
import Hotel from "../../component/admin/education/classes/Hotel";
import CommunityClass from "../../component/admin/education/classes/CommunityClass";
import SpecialClass from "../../component/admin/education/classes/SpecialClass";

import PrimarySchool from "../../component/admin/education/schools/Primary";
import SecondarySchool from "../../component/admin/education/schools/Secondary";
import HighSchool from "../../component/admin/education/schools/HighSchool";
import IndSchool from "../../component/admin/education/schools/Ind";
import AgriSchool from "../../component/admin/education/schools/AgriSchool";
import CommericalSchool from "../../component/admin/education/schools/Commerical";
import HotelSchool from "../../component/admin/education/schools/Hotel";
import CommunitySchool from "../../component/admin/education/schools/CommunitySchool";
import PrePrimarySchool from "../../component/admin/education/schools/PrePrimary";
import SpecialSchool from "../../component/admin/education/schools/Special";

import PrimaryStudents from "../../component/admin/education/students/PrimaryStudents";
import SecondaryStudents from "../../component/admin/education/students/SecondaryStudents";
import HighStudents from "../../component/admin/education/students/HighStudents";
import IndStudents from "../../component/admin/education/students/IndStudents";
import AgriStudents from "../../component/admin/education/students/AgriStudents";
import CommericalStudents from "../../component/admin/education/students/CommericalStudents";
import HotelStudents from "../../component/admin/education/students/HotelStudents";
import CommunityStudents from "../../component/admin/education/students/CommunityStudents";
import PrePrimaryStudents from "../../component/admin/education/students/PrePrimaryStudents";
import SpecialStudents from "../../component/admin/education/students/SpecialStudents";

import PrimaryTeachers from "../../component/admin/education/teachers/Primary";
import SecondaryTeachers from "../../component/admin/education/teachers/Secondary";
import HighTeachers from "../../component/admin/education/teachers/High";
import IndTeachers from "../../component/admin/education/teachers/Indus";
import AgriTeachers from "../../component/admin/education/teachers/Agri";
import CommericalTeachers from "../../component/admin/education/teachers/Commerical";
import HotelTeachers from "../../component/admin/education/teachers/Hotel";
import CommunityTeachers from "../../component/admin/education/teachers/Community";
import PrePrimaryTeachers from "../../component/admin/education/teachers/PrePrimary";
import SpecialTeachers from "../../component/admin/education/teachers/Special";
const Education = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          label="الفصول"
          style={{
            color: "#496580",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        />
        <Tab
          label="المدارس"
          style={{ color: "#496580", fontWeight: "bold", fontSize: "20px" }}
        />
        <Tab
          label="الطلاب"
          style={{ color: "#496580", fontWeight: "bold", fontSize: "20px" }}
        />
        <Tab
          label="المدرسين"
          style={{ color: "#496580", fontWeight: "bold", fontSize: "20px" }}
        />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <div>
          <div
            style={{
              fontWeight: "bold",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",

                marginBottom: "10px",

                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <PrimaryClass />
              </Card>
              <Card style={{ width: "48%" }}>
                <PrePrimaryClass />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <High />
              </Card>
              <Card style={{ width: "48%" }}>
                <SecondaryClass />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <IndClass />
              </Card>
              <Card style={{ width: "48%" }}>
                <AgriClass />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommericalClass />
              </Card>
              <Card style={{ width: "48%" }}>
                <Hotel />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommunityClass />
              </Card>

              <Card style={{ width: "48%" }}>
                <SpecialClass />
              </Card>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div>
          <div
            style={{
              fontWeight: "bold",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",

                marginBottom: "10px",

                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <PrimarySchool />
              </Card>
              <Card style={{ width: "48%" }}>
                <PrePrimarySchool />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <HighSchool />
              </Card>
              <Card style={{ width: "48%" }}>
                <SecondarySchool />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <IndSchool />
              </Card>
              <Card style={{ width: "48%" }}>
                <AgriSchool />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommericalSchool />
              </Card>
              <Card style={{ width: "48%" }}>
                <HotelSchool />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommunitySchool />
              </Card>

              <Card style={{ width: "48%" }}>
                <SpecialSchool />
              </Card>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <div>
          <div
            style={{
              fontWeight: "bold",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",

                marginBottom: "10px",

                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <PrimaryStudents />
              </Card>
              <Card style={{ width: "48%" }}>
                <PrePrimaryStudents />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <HighStudents />
              </Card>
              <Card style={{ width: "48%" }}>
                <SecondaryStudents />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <IndStudents />
              </Card>
              <Card style={{ width: "48%" }}>
                <AgriStudents />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommericalStudents />
              </Card>
              <Card style={{ width: "48%" }}>
                <CommunityStudents />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}></Card>

              <Card style={{ width: "48%" }}>
                <SpecialStudents />
              </Card>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <div>
          <div
            style={{
              fontWeight: "bold",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",

                marginBottom: "10px",

                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <PrimaryTeachers />
              </Card>
              <Card style={{ width: "48%" }}>
                <PrePrimaryTeachers />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <HighTeachers />
              </Card>
              <Card style={{ width: "48%" }}>
                <SecondaryTeachers />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <IndTeachers />
              </Card>
              <Card style={{ width: "48%" }}>
                <AgriTeachers />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <CommericalTeachers />
              </Card>
              <Card style={{ width: "48%" }}>
                <CommunityTeachers />
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%",
                marginBottom: "10px",
                gap: "10px",
              }}
            >
              <Card style={{ width: "48%" }}>
                <HotelTeachers />
              </Card>

              <Card style={{ width: "48%" }}>
                <SpecialTeachers />
              </Card>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};

export default Education;
