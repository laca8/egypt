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
  listWoman,
  addWoman,
} from "../../../redux/actions/international/internationalAction";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const WomanViolent = () => {
  const internationalDhsWomanReducer = useSelector(
    (state) => state.internationalDhsWomanReducer
  );
  const { data, error, loading } = internationalDhsWomanReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listWoman());
  }, []);

  const columnsDefs = [
    {
      headerName: "Indicator",
      field: "Indicator",
      sortable: true,
      filter: true,
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
      headerName: "VALUE",
      field: "VALUE",
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
      headerName: "DATA_SOURCE",
      field: "DATA_SOURCE",
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

  const addInternationalDhsWomanReducer = useSelector(
    (state) => state.addInternationalDhsWomanReducer
  );
  const {
    loading: loadingAdd,
    error: errorAdd,
    success,
  } = addInternationalDhsWomanReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addWoman(data));
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
            DHS
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            Woman Violent
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

export default WomanViolent;
