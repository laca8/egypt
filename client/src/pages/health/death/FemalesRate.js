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
  listDeathMotherResidence,
  listFemaleRate,
} from "../../../redux/actions/health/healthAction";
const FemalesRate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFemaleRate());
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
      headerName:
        "نسبة السيدات فى الفئة العمرية (15-49) اللاتى سبق لهن الزواج وتعرضت لعنف بدنى (%) 2015",
      field: "females_rate1",
      sortable: true,
      filter: true,
      width: 300,
    },

    {
      headerName:
        "نسبة السيدات فى الفئة العمرية (10-18) اسنة ومتزوجات (%) 2017",
      field: `females_rate2`,
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "نسبة الأناث فى العمر(19-0) سنة اللاتى ستم ختانهن أو متوقع ختانهن (%) 2015",
      field: `females_rate3`,
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "نسبة المتزوجات (15-49) سنة ويتخذن القرارات الخاصة برعايتهن الصحية (%) 2015",
      field: `females_rate4`,
      sortable: true,
      filter: true,
      width: 300,
    },
    {
      headerName:
        "نسبة المتزوجات (15-49) سنة ويتخذن قرارات استخدام وسائل تنظيم الأسرة(%) 2015",
      field: `females_rate5`,
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
              معدل الاناث
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

export default FemalesRate;
