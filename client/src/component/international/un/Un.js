import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
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
import {
  listUn,
  addUn,
} from "../../../redux/actions/international/internationalAction";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const Child = () => {
  const internationalReducer = useSelector(
    (state) => state.internationalReducer
  );
  const { data, error, loading } = internationalReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUn());
  }, []);

  const columnsDefs = [
    {
      headerName: "Variant",
      field: "Variant",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Year",
      field: "Year",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Population, as of 1 January (thousands)",
      field: "Total Population, as of 1 January (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "World Population Prospects 2022",
      field: "World Population Prospects 2022",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Population, as of 1 July (thousands)",
      field: "Male Population, as of 1 July (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },

    {
      headerName: "Female Population, as of 1 July (thousands)",
      field: "Female Population, as of 1 July (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Population Density, as of 1 July (persons per square km)",
      field: "Population Density, as of 1 July (persons per square km)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName: "Population Sex Ratio, as of 1 July (males per 100 females)",
      field: "Population Sex Ratio, as of 1 July (males per 100 females)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName: "Median Age, as of 1 July (years)",
      field: "Median Age, as of 1 July (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Natural Change, Births minus Deaths (thousands)",
      field: "Natural Change, Births minus Deaths (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Rate of Natural Change (per 1,000 population)",
      field: "Rate of Natural Change (per 1,000 population)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Population Change (thousands)",
      field: "Population Change (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Population Growth Rate (percentage)",
      field: "Population Growth Rate (percentage)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Births (thousands)",
      field: "Births (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Births by women aged 15 to 19 (thousands)",
      field: "Births by women aged 15 to 19 (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Crude Birth Rate (births per 1,000 population)",
      field: "Crude Birth Rate (births per 1,000 population)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Total Fertility Rate (live births per woman)",
      field: "Total Fertility Rate (live births per woman)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Net Reproduction Rate (surviving daughters per woman)",
      field: "Net Reproduction Rate (surviving daughters per woman)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Mean Age Childbearing (years)",
      field: "Mean Age Childbearing (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Sex Ratio at Birth (males per 100 female births)",
      field: "Sex Ratio at Birth (males per 100 female births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Total Deaths (thousands)",
      field: "Total Deaths (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Deaths (thousands)",
      field: "Male Deaths (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Female Deaths (thousands)",
      field: "Female Deaths (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Crude Death Rate (deaths per 1,000 population)",
      field: "Crude Death Rate (deaths per 1,000 population)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Life Expectancy at Birth, both sexes (years)",
      field: "Life Expectancy at Birth, both sexes (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Life Expectancy at Birth (years)",
      field: "Male Life Expectancy at Birth (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Female Life Expectancy at Birth (years)",
      field: "Female Life Expectancy at Birth (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Life Expectancy at Age 15, both sexes (years)",
      field: "Life Expectancy at Age 15, both sexes (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Life Expectancy at Age 15 (years)",
      field: "Male Life Expectancy at Age 15 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Female Life Expectancy at Age 15 (years)",
      field: "Female Life Expectancy at Age 15 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Life Expectancy at Age 65, both sexes (years)",
      field: "Life Expectancy at Age 65, both sexes (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Life Expectancy at Age 65 (years)",
      field: "Male Life Expectancy at Age 65 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Female Life Expectancy at Age 65 (years)",
      field: "Female Life Expectancy at Age 65 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Life Expectancy at Age 80, both sexes (years)",
      field: "Life Expectancy at Age 80, both sexes (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Male Life Expectancy at Age 80 (years)",
      field: "Male Life Expectancy at Age 80 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Female Life Expectancy at Age 80 (years)",
      field: "Female Life Expectancy at Age 80 (years)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Infant Deaths, under age 1 (thousands)",
      field: "Infant Deaths, under age 1 (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Infant Mortality Rate (infant deaths per 1,000 live births)",
      field: "Infant Mortality Rate (infant deaths per 1,000 live births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Live Births Surviving to Age 1 (thousands)",
      field: "Live Births Surviving to Age 1 (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Under-Five Deaths, under age 5 (thousands)",
      field: "Under-Five Deaths, under age 5 (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Under-Five Mortality (deaths under age 5 per 1,000 live births)",
      field: "Under-Five Mortality (deaths under age 5 per 1,000 live births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Mortality before Age 40, both sexes (deaths under age 40 per 1,000 live births)",
      field:
        "Mortality before Age 40, both sexes (deaths under age 40 per 1,000 live births)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Male Mortality before Age 40 (deaths under age 40 per 1,000 male live births)",
      field:
        "Male Mortality before Age 40 (deaths under age 40 per 1,000 male live births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Female Mortality before Age 40 (deaths under age 40 per 1,000 female live births)",
      field:
        "Female Mortality before Age 40 (deaths under age 40 per 1,000 female live births)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Mortality before Age 60, both sexes (deaths under age 60 per 1,000 live births)",
      field:
        "Mortality before Age 60, both sexes (deaths under age 60 per 1,000 live births)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Male Mortality before Age 60 (deaths under age 60 per 1,000 male live births)",
      field:
        "Male Mortality before Age 60 (deaths under age 60 per 1,000 male live births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Female Mortality before Age 60 (deaths under age 60 per 1,000 female live births)",
      field:
        "Female Mortality before Age 60 (deaths under age 60 per 1,000 female live births)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Mortality between Age 15 and 50, both sexes (deaths under age 50 per 1,000 alive at age 15)",
      field:
        "Mortality between Age 15 and 50, both sexes (deaths under age 50 per 1,000 alive at age 15)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Male Mortality between Age 15 and 50 (deaths under age 50 per 1,000 males alive at age 15)",
      field:
        "Male Mortality between Age 15 and 50 (deaths under age 50 per 1,000 males alive at age 15)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Female Mortality between Age 15 and 50 (deaths under age 50 per 1,000 females alive at age 15",
      field:
        "Female Mortality between Age 15 and 50 (deaths under age 50 per 1,000 females alive at age 15",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Mortality between Age 15 and 60, both sexes (deaths under age 60 per 1,000 alive at age 15)",
      field:
        "Mortality between Age 15 and 60, both sexes (deaths under age 60 per 1,000 alive at age 15)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName:
        "Male Mortality between Age 15 and 60 (deaths under age 60 per 1,000 males alive at age 15)",
      field:
        "Male Mortality between Age 15 and 60 (deaths under age 60 per 1,000 males alive at age 15)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "Female Mortality between Age 15 and 60 (deaths under age 60 per 1,000 females alive at age 15)",
      field:
        "Female Mortality between Age 15 and 60 (deaths under age 60 per 1,000 females alive at age 15)",
      sortable: true,
      filter: true,
      width: 320,
    },
    {
      headerName: "Net Number of Migrants (thousands)",
      field: "Net Number of Migrants (thousands)",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Net Migration Rate (per 1,000 population",
      field: "Net Migration Rate (per 1,000 population",
      sortable: true,
      filter: true,
      width: 300,
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
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file.size > 20000000) {
      setErr("file size must less than 20MB");
    } else {
      setLoad(true);
      const dataRef = ref(storage, `/files/${file.name}`);
      uploadBytes(dataRef, file).then(() => {
        getDownloadURL(dataRef).then((url) => {
          setLoad(true);
          console.log(url);
          if (url) {
            setLoad(false);
            setJson(url);
            console.log(file);
            setLoad(false);
          }
        });
      });
    }
  };

  const addWorldReducer = useSelector((state) => state.addWorldReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addWorldReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addUn(data));
    setJson("");
    //dispatch(listPrimryStuAzhar());
  };
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  useEffect(() => {
    if (success) {
      alert("import data successed");
    }
  }, [success]);
  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Egypt Un
          </Typography>
          <>
            {userInfo?.user?.isAdmin ? (
              <div style={{ marginBottom: "10px" }}>
                <ButtonMaterial variant="contained" component="label">
                  <UploadFileIcon />
                  <input hidden onChange={uploadFileHandler} type="file" />
                </ButtonMaterial>
                <ButtonMaterial
                  onClick={handleSubmit}
                  variant="outlined"
                  disabled={load || json == ""}
                  style={{ marginLeft: "10px" }}
                >
                  import
                </ButtonMaterial>
                {load ? <p>loading....</p> : err ? <Error error={err} /> : null}
                {loadingAdd ? (
                  <Loader />
                ) : errorAdd ? (
                  <Error error={errorAdd} />
                ) : null}
              </div>
            ) : null}
          </>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default Child;
