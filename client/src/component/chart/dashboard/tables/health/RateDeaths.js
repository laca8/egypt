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

import { Typography } from "@mui/material";

const RateDeaths = () => {
  const data = [
    {
      sex: "وفيات نتيجة اصابات",
      total1: (1952).toLocaleString(),
      total2: (628).toLocaleString(),
    },
    {
      sex: "وفيات حوادث طرق",
      total1: (1764).toLocaleString(),
      total2: (418).toLocaleString(),
    },
  ];
  const columnsDefs = [
    {
      headerName: "من 5 الي 15 سنة",
      field: "total2",
      sortable: true,
      filter: true,
      width: 130,
    },
    {
      headerName: "اقل من 5 سنوات",
      field: "total1",
      sortable: true,
      filter: true,
      width: 125,
    },
    {
      headerName: "سبب الوفاة",
      field: "sex",
      sortable: true,
      filter: true,
      width: 130,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "right" }}>
        2020 وفيات الاطفال مع سبب الوفاة
      </Typography>
      <div className="ag-theme-alpine" style={{ height: 100 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnsDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </>
  );
};

export default RateDeaths;
