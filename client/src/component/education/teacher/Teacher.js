import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalTeacher } from "../../../redux/actions/educationsAction/teacher";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TotalTeachers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalTeacher());
  }, []);
  const teachersReducer = useSelector((state) => state.teachersReducer);
  const { teachers, error, loading } = teachersReducer;
  const data = teachers.sort((a, b) => a._id.year - b._id.year);
  const columnsDefs = [
    {
      headerName: "Year",
      field: "_id.year",
    },
    {
      headerName: "Stage",
      field: "_id.stage",
    },
    {
      headerName: "اناث",
      field: "total_teachers_female",
    },
    {
      headerName: "اناث حكومي",
      field: "total_teachers_female_public",
    },
    {
      headerName: "اناث خاص",
      field: "total_teachers_female_private",
    },
    {
      headerName: "اناث حضر",
      field: "total_teachers_female_urban",
    },
    {
      headerName: "اناث ريف",
      field: "total_teachers_female_rural",
    },

    {
      headerName: "ذكور",
      field: "total_teachers_male",
    },
    {
      headerName: "ذكور حكومي",
      field: "total_teachers_male_public",
    },
    {
      headerName: "ذكور خاص",
      field: "total_teachers_male_private",
    },
    {
      headerName: "ذكور حضر",
      field: "total_teachers_male_urban",
    },
    {
      headerName: "ذكور ريف",
      field: "total_teachers_male_rural",
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
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : teachers ? (
        <>
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

export default TotalTeachers;
