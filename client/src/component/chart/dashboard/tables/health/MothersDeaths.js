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
      total1: 42.8,
    },
  ];
  const columnsDefs = [
    {
      headerName: "معدل وفيات الامهات لكل 1000000 مولود حي",
      field: "total1",
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

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "right" }}>
        2019 معدل وفيات الامهات
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
