import React, { useState, useEffect, useMemo, useCallback } from "react";

import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

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
  Alert,
} from "react-bootstrap";
import Error from "../../../component/features/Error";
import Loader from "../../../component/features/Loader";
import { Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import {
  listDeathChildsUnder28days,
  addDeathChildsUnder28days,
} from "../../../redux/actions/health/healthAction";
const ChildsUnder28Days = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeathChildsUnder28days());
  }, []);
  const listDeathRed = useSelector((state) => state.listDeathRed);
  const { data, error, loading } = listDeathRed;
  const data1 = data
    .sort((a, b) => a._id.year - b._id.year)
    .sort((a, b) => a._id.residence?.localeCompare(b._id.residence));
  const columnsDefs = [
    {
      headerName: "Year",
      field: "_id.year",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Sex",
      field: "_id.sex",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Residence",
      field: "_id.residence",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Total Childs",
      field: `total`,
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

  const addDeathRed = useSelector((state) => state.addDeathRed);
  const { loading: loadingAdd, error: errorAdd, success } = addDeathRed;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addDeathChildsUnder28days(data));
    setJson("");
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
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Alert variant="secondary" style={{ width: "300px" }}>
              Note: Click To Filter,Sort
            </Alert>
            <Typography
              variant="h4"
              style={{ textAlign: "right", marginBottom: "20px" }}
            >
              وفيات الاطفال الولادة المبكرة ( أقل من 28 يوم )
            </Typography>
          </div>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data1}
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

export default ChildsUnder28Days;
