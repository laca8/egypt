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
const Services = () => {
  const data = [
    {
      serv: "طفل لكل نادي",
      total: (57108).toLocaleString(),
    },
    {
      serv: "طفل لكل مركز شباب",
      total: (9297).toLocaleString(),
    },
    {
      serv: "طفل لكل سينما",
      total: (606350).toLocaleString(),
    },
    {
      serv: "طفل لكل مسرح",
      total: (1057226).toLocaleString(),
    },
    {
      serv: "طفل لكل وحده صحية",
      total: (22932).toLocaleString(),
    },
  ];
  const columnsDefs = [
    {
      headerName: "طفل",
      field: "total",
      sortable: true,
      filter: true,
      width: 200,
    },
    {
      headerName: "الخدمة",
      field: "serv",
      sortable: true,
      filter: true,
      width: 235,
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
        الخدمات
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

export default Services;
