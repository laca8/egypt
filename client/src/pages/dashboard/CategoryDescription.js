import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../component/features/Loader";
import Error from "../../component/features/Error";
import { Container, Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

import {
  getSubCategory,
  listCategoryByTitle,
} from "../../redux/actions/category/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AgGridReact } from "ag-grid-react";

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

const CategoryDescription = () => {
  const [cho, setCho] = useState("");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const { category, idResults } = useParams();

  useEffect(() => {
    dispatch(getSubCategory(category, idResults));
  }, [category]);

  const getSubCategoryReducer = useSelector(
    (state) => state.getSubCategoryReducer
  );
  const { loading, error, category: dataCat } = getSubCategoryReducer;

  const [data, setData] = useState(dataCat);
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      sortable: true,
      filter: true,
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
    }),
    []
  );
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <div>
        {dataCat?.map((x, index) => (
          <div style={{ margin: "10px 0" }}>
            {x?.title && (
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  backgroundColor: "#496580",
                  color: "#fff",
                  width: "auto",
                  borderRadius: "5px",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              >
                {x?.title}
              </Typography>
            )}
            <Box sx={{ width: "100%", backgroundColor: "#807040" }} dir="ltr">
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
                  {x?.image_line && (
                    <Tab
                      label="Line"
                      {...a11yProps(1)}
                      style={{ color: "#fff" }}
                    />
                  )}

                  {x?.image_bar && (
                    <Tab
                      label="Bar"
                      {...a11yProps(2)}
                      style={{ color: "#fff" }}
                    />
                  )}
                  {x?.image_pie && (
                    <Tab
                      label="Pie"
                      {...a11yProps(3)}
                      style={{ color: "#fff" }}
                    />
                  )}
                  {x?.image_pyramid && (
                    <Tab
                      label="Pyramid"
                      {...a11yProps(4)}
                      style={{ color: "#fff" }}
                    />
                  )}
                  {/* <Tab label="Pie" {...a11yProps(2)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0} dir="rtl">
                <Form.Select
                  aria-label="Default select example"
                  value={cho}
                  onChange={(e) => setCho(e.target.value)}
                >
                  <option value={""}>اختر</option>
                  {x?.results
                    .filter(
                      (obj, index, self) =>
                        index ===
                        self.findIndex((t) => t["المحافظة"] === obj["المحافظة"])
                    )
                    ?.map((z) => (
                      <option>{z["المحافظة"]}</option>
                    ))}
                </Form.Select>
                <div
                  className={"ag-theme-alpine"}
                  style={{ height: 500, marginTop: "5px" }}
                >
                  <AgGridReact
                    rowData={
                      cho == ""
                        ? x?.results
                        : x?.results.filter((y) => y["المحافظة"] == cho)
                    }
                    columnDefs={[
                      ...new Set(
                        [].concat(...x?.results?.map((e) => Object.keys(e)))
                      ),
                    ]?.map((val, index) => {
                      return {
                        field: val,
                      };
                    })}
                    sideBar={"columns"}
                    autoGroupColumnDef={autoGroupColumnDef}
                    defaultColDef={defaultColDef}
                    rowSelection="multiple"
                    animateRows={true}
                    pagination={true}
                    paginationPageSize={500}
                    paginationPageSizeSelector={[200, 500, 1000]}
                  />
                </div>
              </TabPanel>
              {x?.image_line && (
                <TabPanel value={value} index={1}>
                  <div style={{ backgroundColor: "#fff" }}>
                    <img
                      style={{ width: "100%" }}
                      alt=""
                      src={`/uploads/${x?.image_line}`}
                    />
                  </div>
                </TabPanel>
              )}
              {x?.image_bar && (
                <TabPanel value={value} index={2}>
                  <div style={{ backgroundColor: "#fff" }}>
                    <img
                      style={{ width: "100%" }}
                      alt=""
                      src={`/uploads/${x?.image_bar}`}
                    />
                  </div>
                </TabPanel>
              )}
              {x?.image_pie && (
                <TabPanel value={value} index={3}>
                  <div style={{ backgroundColor: "#fff" }}>
                    <img
                      style={{ width: "100%" }}
                      alt=""
                      src={`/uploads/${x?.image_pie}`}
                    />
                  </div>
                </TabPanel>
              )}
              {x?.image_pyramid && (
                <TabPanel value={value} index={4}>
                  <div style={{ backgroundColor: "#fff" }}>
                    <img
                      style={{ width: "100%" }}
                      alt=""
                      src={`/uploads/${x?.image_pyramid}`}
                    />
                  </div>
                </TabPanel>
              )}
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryDescription;
