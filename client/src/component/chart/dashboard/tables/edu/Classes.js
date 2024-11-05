import React from "react";
import DataTable from "react-data-table-component";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Typography } from "@mui/material";

const classes = () => {
  const arr = [
    {
      year: "2021",
      stage: "قبل ابتدائية",
      teachers: 39371,
      students: 1270516,
      avg: `1 To ${Math.round(1270516 / 39371)}`,
    },

    {
      year: "2021",
      stage: "الابتدائية",
      teachers: 257500,
      students: 13678021,
      avg: `1 To ${Math.round(13678021 / 257500)}`,
    },

    {
      year: "2021",
      stage: "الاعدادية",
      teachers: 102176,
      students: 5829775,
      avg: `1 To ${Math.round(5829775 / 102176)}`,
    },

    {
      year: "2021",
      stage: "الثانوية العامة",
      teachers: 46238,
      students: 2008664,
      avg: `1 To ${Math.round(2008664 / 46238)}`,
    },
  ];

  const columnsDefs = [
    {
      headerName: "فصل لكل طلاب",
      field: "avg",
      sortable: true,
      filter: true,
      width: 170,
    },
    {
      headerName: "عدد الطلاب",
      field: "students",
      sortable: true,
      filter: true,
      width: 100,
    },
    {
      headerName: "عدد الفصول",
      field: "teachers",
      sortable: true,
      filter: true,
      width: 100,
    },
    {
      headerName: "العام",
      field: "year",
      sortable: true,
      filter: true,
      width: 100,
    },

    {
      headerName: "المرحلة",
      field: "stage",
      sortable: true,
      filter: true,
      width: 100,
    },
  ];
  return (
    <>
      <Typography variant="h6" style={{ textAlign: "right" }}>
        2021 عدد الطلاب لكل فصل
      </Typography>
      <div className="ag-theme-alpine" style={{ height: 200 }}>
        <AgGridReact
          rowData={arr}
          columnDefs={columnsDefs}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </>
  );
};

export default classes;
