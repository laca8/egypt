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
const Females = () => {
  const data = [
    {
      total1: (50626).toLocaleString(),
      pre: 17.2,
    },
  ];
  const columnsDefs = [
    {
      headerName: "النسبة",
      field: "pre",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "العدد بالالف",
      field: "total1",
      sortable: true,
      filter: true,
      width: 125,
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
        تقدير الاناث في قوة العمل 2021
      </Typography>
      <div className="ag-theme-alpine" style={{ height: 200 }}>
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

export default Females;
