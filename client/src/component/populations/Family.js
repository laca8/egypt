import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listFamilies } from "../../redux/actions/populationAction/population";
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
import Error from "../features/Error";
import Loader from "../features/Loader";
import { Typography } from "@mui/material";
const Family = ({ setFamilyMale, setFamilyFemale }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFamilies());
  }, []);
  const listFamilyReducer = useSelector((state) => state.listFamilyReducer);
  const { families, error, loading } = listFamilyReducer;
  const data = families
    .sort((a, b) => a._id.head.localeCompare(b._id.head))
    .sort((a, b) => a._id.city.localeCompare(b._id.city));

  const columnsDefs = [
    {
      headerName: "المحافظة",
      field: "_id.city",
      sortable: true,
      filter: true,
      width: 400,
    },
    {
      headerName: "رب الاسرة",
      field: "_id.head",
      sortable: true,
      filter: true,
      width: 400,
    },
    {
      headerName: "عدد الاسر",
      field: `total_family`,
      sortable: true,
      filter: true,
      width: 400,
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
  const females = families.filter((f) => f._id.head == "اناث");
  const males = families.filter((f) => f._id.head == "ذكور");
  const totalMales = males.reduce((acc, val) => acc + val.total_family, 0);
  const totalFemales = females.reduce((acc, val) => acc + val.total_family, 0);
  console.log(totalMales, totalFemales);
  setFamilyMale(totalMales);
  setFamilyFemale(totalFemales);
  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : families ? (
        <>
          <Typography
            variant="h4"
            style={{ textAlign: "right", marginBottom: "10px" }}
          >
            الاسر التي لديها اطفال اقل من 18 سنة من تعداد 2017 حسب رب المنزل
          </Typography>
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

export default Family;
