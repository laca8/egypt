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
  listUnicef2Data,
  addUnicefData,
} from "../../../redux/actions/international/internationalAction";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
const Unicef2 = () => {
  const international2Reducer = useSelector(
    (state) => state.international2Reducer
  );
  const { data, error, loading } = international2Reducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUnicef2Data());
  }, []);

  const columnsDefs = [
    {
      headerName: "Country",
      field: "Country",
      sortable: true,
      filter: true,
    },
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
      headerName: "Current age",
      field: "Current age",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Wealth Quintile",
      field: "Wealth Quintile",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Residence",
      field: "Residence",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Mother's Education Level",
      field: "Mother's Education Level",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Head of House",
      field: "Head of House",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Reporting level",
      field: "Reporting level",
      sortable: true,
      filter: true,
    },
    {
      headerName: "INDICATOR_METADATA",
      field: "INDICATOR_METADATA",
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
      headerName: "SOURCE_LINK",
      field: "SOURCE_LINK",
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
      headerName: "CUSTODIAN",
      field: "CUSTODIAN",
      sortable: true,
      filter: true,
    },
    {
      headerName: "PUBLICATION_DATE",
      field: "PUBLICATION_DATE",
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
      headerName: "DATA_SOURCE",
      field: "DATA_SOURCE",
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
      headerName: "STD_ERR",
      field: "STD_ERR",
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
      headerName: "Time period activity related to when the data are collected",
      field: "Time period activity related to when the data are collected",
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
      headerName: "Time interval at which the source data are collected",
      field: "Time interval at which the source data are collected",
      sortable: true,
      filter: true,
    },
    {
      headerName: "OBS_FOOTNOTE",
      field: "OBS_FOOTNOTE",
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
  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
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

export default Unicef2;
