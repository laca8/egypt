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
import {
  listDeathKidsRate,
  listDeathMotherResidence,
} from "../../../redux/actions/health/healthAction";
const KidsRate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeathKidsRate());
  }, []);
  const listDeathRed = useSelector((state) => state.listDeathRed);
  const { data, error, loading } = listDeathRed;
  const data1 = data.sort((a, b) => a._id.city?.localeCompare(b._id.city));
  const columnsDefs = [
    {
      headerName: "City",
      field: "_id.city",
      sortable: true,
      filter: true,
    },
    {
      headerName: "معدل الوفيات النفاسية لكل 100.000 مولود 2018",
      field: "death_rate_per_100000",
      sortable: true,
      filter: true,
      width: 300,
    },

    {
      headerName: "معدل وفيات الاطفال حديثى الولادة لكل 1000 مولود 2018",
      field: `death_rate_new_porn_per_1000`,
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName: "معدل وفيات الاطفال دون الخامسة لكل 1000 طفل 2018",
      field: `death_rate_under_5years_per_1000`,
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
  return (
    <Container style={{ marginTop: "20px" }}>
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
              معدل الوفيات الاطفال
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

export default KidsRate;
