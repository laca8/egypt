import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { avgGirls } from "../../../../redux/actions/educationsAction/avg";
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
import Error from "../../../features/Error";
import Loader from "../../../features/Loader";
import { Typography } from "@mui/material";

const TotalGirls = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(avgGirls());
  }, []);
  const avgReducer = useSelector((state) => state.avgReducer);
  const { data, error, loading } = avgReducer;
  const data1 = data
    .sort((a, b) => a._id.city.localeCompare(b._id.city))
    .sort((a, b) => a._id.year - b._id.year)
    .sort((a, b) => a._id.stage.localeCompare(b._id.stage));
  const columnsDefs = [
    {
      headerName: "City",
      field: "_id.city",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Year",
      field: "_id.year",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "Stage",
      field: "_id.stage",
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: " نسب قيد البنات",
      field: `total_avg`,
      sortable: true,
      filter: true,
      width: 350,
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
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <div style={{ textAlign: "right" }}>
            <Typography variant="h4" style={{ textAlign: "right" }}>
              نسب قيد البنات
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

export default TotalGirls;
