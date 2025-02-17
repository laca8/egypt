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
      {...other}>
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
  const [images, setImages] = useState([]);
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
  useEffect(() => {
    dataCat?.map((x) => {
      if (x?.image_line != null) {
        images.push({ image: x.image_line, title: "line" });
      }
      if (x?.image_bar != null) {
        images.push({ image: x.image_bar, title: "bar" });
      }
      if (x?.image_pie != null) {
        images.push({ image: x.image_pie, title: "pie" });
      }
      if (x?.image_pyramid != null) {
        images.push({ image: x.image_pyramid, title: "pyramid" });
      }
    });
    console.log(images);
  }, [dataCat?.length, loading]);

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

  // useEffect(() => {
  //   console.log(dataCat);
  // }, [cho]);
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
                }}>
                {x?.title}
              </Typography>
            )}
            <Box sx={{ width: "100%", backgroundColor: "#807040" }} dir="ltr">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example">
                  <Tab
                    label="Table"
                    {...a11yProps(0)}
                    style={{ color: "#fff" }}
                  />

                  {x?.images
                    // ?.filter(
                    //   (obj, index, self) =>
                    //     index ===
                    //     self.findIndex((t) => t["title"] === obj["title"])
                    // )
                    ?.filter(
                      (obj, index) => obj?.image != null && obj?.image !== ""
                    )
                    ?.map((z, i) => (
                      <Tab
                        label={z?.title}
                        {...a11yProps(i + 1)}
                        style={{ color: "#fff" }}
                      />
                    ))}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0} dir="rtl">
                {[
                  ...new Set(
                    [].concat(...x?.results?.map((e) => Object.keys(e)))
                  ),
                ]?.includes("المحافظة") ? (
                  <Form.Select
                    aria-label="Default select example"
                    value={cho}
                    onChange={(e) => setCho(e.target.value)}>
                    <option value={""}>اختر</option>
                    {x?.results
                      .filter(
                        (obj, index, self) =>
                          index ===
                          self.findIndex(
                            (t) => t["المحافظة"] === obj["المحافظة"]
                          )
                      )
                      ?.map((z) => (
                        <option value={z["المحافظة"]}>{z["المحافظة"]}</option>
                      ))}
                  </Form.Select>
                ) : [
                    ...new Set(
                      [].concat(...x?.results?.map((e) => Object.keys(e)))
                    ),
                  ]?.includes("المديرية") ? (
                  <Form.Select
                    aria-label="Default select example"
                    value={cho}
                    onChange={(e) => setCho(e.target.value)}>
                    <option value={""}>اختر</option>
                    {x?.results
                      .filter(
                        (obj, index, self) =>
                          index ===
                          self.findIndex(
                            (t) => t["المديرية"] === obj["المديرية"]
                          )
                      )
                      ?.map((z) => (
                        <option value={z["المديرية"]}>{z["المديرية"]}</option>
                      ))}
                  </Form.Select>
                ) : null}
                <div
                  className={"ag-theme-alpine"}
                  style={{ height: 500, marginTop: "5px" ,width: '100%',
        direction: 'rtl' }}>
                  <AgGridReact
                    rowData={
                      cho == ""
                        ? x?.results
                        : x?.results.filter(
                            (y) => y["المحافظة"] == cho || y["المديرية"] == cho
                          )
                    }
                    columnDefs={[
                      ...new Set(
                        [].concat(...x?.results?.map((e) => Object.keys(e)))
                      ),
                    ]
                      ?.filter((y) => !y.includes("__EMPTY"))
                      ?.map((val, index) => {
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
        // Enable RTL at the grid level
        enableRtl={true}
        // Show all columns by setting appropriate sizes
        domLayout="autoHeight"
                  />
                </div>
              </TabPanel>

              {x?.images
                ?.filter((obj, index) => obj?.image != "")
                ?.map((z, i) => (
                  <TabPanel value={value} index={1 + i}>
                    <div style={{ backgroundColor: "#fff" }}>
                      <img
                        style={{ width: "100%" }}
                        alt=""
                        src={`${z.image}`}
                      />
                    </div>
                  </TabPanel>
                ))}
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  // margin: "5px",
                  backgroundColor: "#111",
                  color: "#fff",
                  // width: "auto",
                  borderRadius: "5px",
                  padding: "3px",
                }}>
                {x?.src != "" ? `المصدر : ${x?.src} ` : ""}
              </Typography>
            </Box>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryDescription;
