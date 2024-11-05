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
  listUnicefData,
  addUnicefData,
} from "../../../redux/actions/international/internationalAction";
import { ListGroup } from "react-bootstrap";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Unicef = () => {
  const [indicator, setIndicator] = useState("Choose Indicator");
  const indicators = [
    "Choose Indicator",
    "Annual Rate of Reduction in Mortality Rate Age 10-19",
    "Annual rate of reduction in stillbirth rate (over previous 20 years)",
    "Neonatal mortality rate",
    "Infant mortality rate",
    "Under-five mortality rate",
    "Mortality rate age 10-14",
    "Mortality rate age 15-19",
    "Mortality rate age 15-24",
    "Child mortality rate (aged 1-4 years)",
    "Mortality rate age 20-24",
    "Mortality rate (children aged 5 to 14 years)",
    "Mortality rate age 5-24",
    "Mortality rate age 5-9",
    "Neonatal deaths as a percentage of under-five deaths",
    "Stillbirths",
    "Stillbirth rate",
    "Neonatal deaths",
    "Infant deaths",
    "Under-five deaths",
    "Under-five deaths",
    "Deaths aged 10 to 14",
    "Deaths aged 15 to 19",
    "Deaths aged 15 to 24",
    "Child deaths (aged 1-4 years)",
    "Child deaths (aged 1-4 years)",
    "Deaths aged 20 to 24",
    "Deaths (children aged 5-14)",
    "Deaths aged 5 to 24",
    "Deaths aged 5 to 9",
  ];
  const internationalReducer = useSelector(
    (state) => state.internationalReducer
  );
  const { data, error, loading } = internationalReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUnicefData(indicator));
  }, [indicator]);

  const columnsDefs = [
    {
      headerName: "Indicator",
      field: "Indicator",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Sex",
      field: "Sex",
      sortable: true,
      filter: true,
    },
    {
      headerName: "TIME_PERIOD",
      field: "TIME_PERIOD",
      sortable: true,
      filter: true,
    },
    {
      headerName: "OBS_VALUE",
      field: "OBS_VALUE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Unit multiplier",
      field: "Unit multiplier",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Unit of measure",
      field: "Unit of measure",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Observation Status",
      field: "Observation Status",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Observation confidentaility",
      field: "Observation confidentaility",
      sortable: true,
      filter: true,
    },
    {
      headerName: "LOWER_BOUND",
      field: "LOWER_BOUND",
      sortable: true,
      filter: true,
    },
    {
      headerName: "UPPER_BOUND",
      field: "UPPER_BOUND",
      sortable: true,
      filter: true,
    },
    {
      headerName: "WGTD_SAMPL_SIZE",
      field: "WGTD_SAMPL_SIZE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "OBS_FOOTNOTE",
      field: "OBS_FOOTNOTE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "SERIES_FOOTNOTE",
      field: "SERIES_FOOTNOTE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "DATA_SOURCE",
      field: "DATA_SOURCE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "SOURCE_LINK",
      field: "SOURCE_LINK",
      sortable: true,
      filter: true,
    },
    {
      headerName: "CUSTODIAN",
      field: "CUSTODIAN",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Time period activity related to when the data are collected",
      field: "Time period activity related to when the data are collected",
      sortable: true,
      filter: true,
    },
    {
      headerName: "REF_PERIOD",
      field: "REF_PERIOD",
      sortable: true,
      filter: true,
    },
    {
      headerName: "COVERAGE_TIME",
      field: "COVERAGE_TIME",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Current age",
      field: "Current age",
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
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

  const addInternationalReducer = useSelector(
    (state) => state.addInternationalReducer
  );
  const {
    loading: loadingAdd,
    error: errorAdd,
    success,
  } = addInternationalReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addUnicefData(data));
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
          <Typography variant="h4" style={{ marginBottom: "10px" }}>
            Unicef Data
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Deathes
          </Typography>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "10px" }}
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicators.map((dep) => (
              <option value={dep}>{dep}</option>
            ))}
          </Form.Select>
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

export default Unicef;
