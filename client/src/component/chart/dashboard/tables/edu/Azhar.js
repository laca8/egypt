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
import axios from "axios";
import { Typography } from "@mui/material";

const Azhar = () => {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [high, setHigh] = useState("");

  const [primary1, setPrimary1] = useState("");
  const [secondary1, setSecondary1] = useState("");
  const [high1, setHigh1] = useState("");

  const [primary2, setPrimary2] = useState("");
  const [secondary2, setSecondary2] = useState("");
  const [high2, setHigh2] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/azhar/total/stu");

        console.log(res);
        setPrimary(res?.data?.studentsPrimary[0]?.total_students_primary);
        setSecondary(res?.data?.studentsSecondary[0]?.total_students_secondary);
        setHigh(res?.data?.studentsHigh[0]?.total_students_high);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/azhar/total/tea");

        // console.log(res);
        setPrimary1(res?.data?.teachersPrimary[0]?.total_teachers);
        setSecondary1(res?.data?.teachersSecondary[0]?.total_teachers);
        setHigh1(res?.data?.teachersHigh[0]?.total_teachers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/azhar/total/scl");

        // console.log(res);
        setPrimary2(res?.data?.PrimarySchools[0]?.total_institute);
        setSecondary2(res?.data?.SecondarySchools[0]?.total_institute);
        setHigh2(res?.data?.HighSchools[0]?.total_institute);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const data = [
    {
      sex: " الابتدائية",
      total1: primary2?.toLocaleString(),
      total2: primary1?.toLocaleString(),
      total3: primary?.toLocaleString(),
    },
    {
      sex: " الاعدادية",
      total1: secondary2?.toLocaleString(),
      total2: secondary1?.toLocaleString(),
      total3: secondary?.toLocaleString(),
    },
    {
      sex: " الثانوية",
      total1: high2?.toLocaleString(),
      total2: high1?.toLocaleString(),
      total3: high?.toLocaleString(),
    },
  ];
  const columnsDefs = [
    {
      headerName: "طلاب",
      field: "total3",
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      headerName: "مدرسين",
      field: "total2",
      sortable: true,
      filter: true,
      width: 100,
    },
    {
      headerName: "معاهد",
      field: "total1",
      sortable: true,
      filter: true,
      width: 100,
    },

    {
      headerName: "المرحلة",
      field: "sex",
      sortable: true,
      filter: true,
      width: 100,
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
        2022 تعليم الازهر
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

export default Azhar;
