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
import { listPopTotal } from "../../../../../redux/actions/populationAction/population";
import { listTotalAge } from "../../../../../redux/actions/populationAction/population";

const Population = () => {
  const dispatch = useDispatch();
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);
  const arr1 = popTotalAge.filter((pop) => pop.sex == "إناث");
  console.log(arr1);
  const arr2 = popTotalAge.filter((pop) => pop.sex == "ذكور");

  const listPopTotalReducer = useSelector((state) => state.listPopTotalReducer);
  const { popTotal } = listPopTotalReducer;
  useEffect(() => {
    dispatch(listPopTotal());
  }, []);
  console.log(popTotal);
  const females = popTotal?.filter((x) => x.sex == "إناث");
  const males = popTotal?.filter((x) => x.sex == "ذكور");
  const total = popTotal?.filter((x) => x.sex == "الجملة");

  const data = [
    {
      sex: "ذكور",
      total1: males[0]?.total_2022?.toLocaleString(),
      total2: arr2[0]?.total_2022?.toLocaleString(),
    },
    {
      sex: "اناث",
      total1: females[0]?.total_2022?.toLocaleString(),
      total2: arr1[0]?.total_2022?.toLocaleString(),
    },
    {
      sex: "الجملة",
      total1: total[0]?.total_2022?.toLocaleString(),
      total2: (arr2[0]?.total_2022 + arr1[0]?.total_2022)?.toLocaleString(),
    },
  ];
  const columnsDefs = [
    {
      headerName: "الاطفال",
      field: "total2",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "السكان",
      field: "total1",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "النوع",
      field: "sex",
      sortable: true,
      filter: true,
      width: 120,
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
        2022 السكان
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

export default Population;
