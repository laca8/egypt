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
import axios from "axios";
const Deaths = () => {
  const [kids1, setKids1] = useState("");
  const [kids2, setKids2] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/health/total/kids");
        //console.log(res);
        setKids1(res?.data?.kidsLess1[0]?.total);
        setKids2(res?.data?.kidsLess5[0]?.total);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const data = [
    {
      total1: kids1,
      total2: kids2,
    },
  ];
  const columnsDefs = [
    {
      headerName: "اكبر من سنة واقل من 5 سنوات",
      field: "total2",
      sortable: true,
      filter: true,
    },
    {
      headerName: "اقل من سنة",
      field: "total1",
      sortable: true,
      filter: true,
      width: 150,
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
        2020 وفيات الاطفال
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

export default Deaths;
