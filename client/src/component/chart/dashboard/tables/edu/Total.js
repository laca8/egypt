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
const Total = () => {
  const [Aprimary, setAPrimary] = useState("");
  const [Asecondary, setASecondary] = useState("");
  const [Ahigh, setAHigh] = useState("");

  const [Aprimary1, setAPrimary1] = useState("");
  const [Asecondary1, setASecondary1] = useState("");
  const [Ahigh1, setAHigh1] = useState("");

  const [Aprimary2, setAPrimary2] = useState("");
  const [Asecondary2, setASecondary2] = useState("");
  const [Ahigh2, setAHigh2] = useState("");
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
        const res = await axios.get("/api/edu/total/stu");

        setPrimary(res?.data?.studentsPrimary[0]?.total_students_primary);
        setSecondary(res?.data?.studentsSecondary[0]?.total_students_secondary);
        let ind = res?.data?.studentsInd[0]?.total_students_ind;
        let com = res?.data?.studentsCom[0]?.total_students_com;
        let agr = res?.data?.studentsArg[0]?.total_students_arg;
        let h = res?.data?.studentsHigh[0].total_students_high;
        let total = ind + com + agr + h;
        console.log(ind);
        console.log(com);
        console.log(agr);
        console.log(h);
        console.log(total);

        setHigh(total);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/edu/total/tea");
        //console.log(res);
        setPrimary1(
          res?.data?.teachersPrimary[0]?.total_teachers_female +
            res?.data?.teachersPrimary[0]?.total_teachers_female_private +
            res?.data?.teachersPrimary[0]?.total_teachers_female_public +
            res?.data?.teachersPrimary[0]?.total_teachers_female_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_female_urban +
            res?.data?.teachersPrimary[0]?.total_teachers_male +
            res?.data?.teachersPrimary[0]?.total_teachers_male_private +
            res?.data?.teachersPrimary[0]?.total_teachers_male_public +
            res?.data?.teachersPrimary[0]?.total_teachers_male_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_male_urban
        );
        setSecondary1(
          res?.data?.teachersSecondary[0]?.total_teachers_female +
            res?.data?.teachersSecondary[0]?.total_teachers_female_private +
            res?.data?.teachersSecondary[0]?.total_teachers_female_public +
            res?.data?.teachersSecondary[0]?.total_teachers_female_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_female_urban +
            res?.data?.teachersSecondary[0]?.total_teachers_male +
            res?.data?.teachersSecondary[0]?.total_teachers_male_private +
            res?.data?.teachersSecondary[0]?.total_teachers_male_public +
            res?.data?.teachersSecondary[0]?.total_teachers_male_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_male_urban
        );

        setHigh1(
          res?.data?.teachersHigh[0]?.total_teachers_female +
            res?.data?.teachersHigh[0]?.total_teachers_female_private +
            res?.data?.teachersHigh[0]?.total_teachers_female_public +
            res?.data?.teachersHigh[0]?.total_teachers_female_rural +
            res?.data?.teachersHigh[0]?.total_teachers_female_urban +
            res?.data?.teachersHigh[0]?.total_teachers_male +
            res?.data?.teachersHigh[0]?.total_teachers_male_private +
            res?.data?.teachersHigh[0]?.total_teachers_male_public +
            res?.data?.teachersHigh[0]?.total_teachers_male_rural +
            res?.data?.teachersHigh[0]?.total_teachers_male_urban
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/edu/total/scl");
        console.log(res);
        setPrimary2(
          res?.data?.schoolsPrimary[0]?.total_schools_private +
            res?.data?.schoolsPrimary[0]?.total_schools_public +
            res?.data?.schoolsPrimary[0]?.total_schools_rural +
            res?.data?.schoolsPrimary[0]?.total_schools_urban
        );
        setSecondary2(
          res?.data?.schoolsSecondary[0]?.total_schools_private +
            res?.data?.schoolsSecondary[0]?.total_schools_public +
            res?.data?.schoolsSecondary[0]?.total_schools_rural +
            res?.data?.schoolsSecondary[0]?.total_schools_urban
        );

        setHigh2(
          res?.data?.schoolsAgri[0]?.total_schools_private +
            res?.data?.schoolsAgri[0]?.total_schools_public +
            res?.data?.schoolsAgri[0]?.total_schools_rural +
            res?.data?.schoolsAgri[0]?.total_schools_urban +
            // res?.data?.schoolsComm[0]?.total_schools +
            res?.data?.schoolsHotel[0]?.total_schools_private +
            res?.data?.schoolsHotel[0]?.total_schools_public +
            res?.data?.schoolsHotel[0]?.total_schools_rural +
            res?.data?.schoolsHotel[0]?.total_schools_urban +
            res?.data?.schoolsInd[0]?.total_schools_private +
            res?.data?.schoolsInd[0]?.total_schools_public +
            res?.data?.schoolsInd[0]?.total_schools_rural +
            res?.data?.schoolsInd[0]?.total_schools_urban +
            res?.data?.schoolsHigh[0]?.total_schools
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/azhar/total/stu");

        console.log(res);
        setAPrimary(res?.data?.studentsPrimary[0]?.total_students_primary);
        setASecondary(
          res?.data?.studentsSecondary[0]?.total_students_secondary
        );
        setAHigh(res?.data?.studentsHigh[0]?.total_students_high);
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
        setAPrimary1(res?.data?.teachersPrimary[0]?.total_teachers);
        setASecondary1(res?.data?.teachersSecondary[0]?.total_teachers);
        setAHigh1(res?.data?.teachersHigh[0]?.total_teachers);
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
        setAPrimary2(res?.data?.PrimarySchools[0]?.total_institute);
        setASecondary2(res?.data?.SecondarySchools[0]?.total_institute);
        setAHigh2(res?.data?.HighSchools[0]?.total_institute);

        // console.log(res);
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
      total4: Aprimary2?.toLocaleString(),
      total5: Aprimary1?.toLocaleString(),
      total6: Aprimary?.toLocaleString(),
    },
    {
      sex: " الاعدادية",
      total1: secondary2?.toLocaleString(),
      total2: secondary1?.toLocaleString(),
      total3: secondary?.toLocaleString(),
      total4: Asecondary2?.toLocaleString(),
      total5: Asecondary1?.toLocaleString(),
      total6: Asecondary?.toLocaleString(),
    },
    {
      sex: " الثانوية",
      total1: high2?.toLocaleString(),
      total2: high1?.toLocaleString(),
      total3: high?.toLocaleString(),
      total4: Ahigh2?.toLocaleString(),
      total5: Ahigh1?.toLocaleString(),
      total6: Ahigh?.toLocaleString(),
    },
  ];

  const columnDefs = [
    {
      headerName: "Education",
      children: [
        {
          headerName: "طلاب",
          field: "total3",
          sortable: true,
          filter: true,
          width: 155,
        },
        {
          headerName: "مدرسين",
          field: "total2",
          sortable: true,
          filter: true,
          width: 155,
        },
        {
          headerName: "مدارس",
          field: "total1",
          sortable: true,
          filter: true,
          width: 155,
        },

        {
          headerName: "المرحلة",
          field: "sex",
          sortable: true,
          filter: true,
          width: 155,
        },
      ],
    },
    {
      headerName: "Azhar",
      children: [
        {
          headerName: "طلاب",
          field: "total6",
          sortable: true,
          filter: true,
          width: 155,
        },
        {
          headerName: "مدرسين",
          field: "total5",
          sortable: true,
          filter: true,
          width: 155,
        },
        {
          headerName: "معاهد",
          field: "total4",
          sortable: true,
          filter: true,
          width: 155,
        },

        {
          headerName: "المرحلة",
          field: "sex",
          sortable: true,
          filter: true,
          width: 155,
        },
      ],
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
        2021 التعليم
      </Typography>
      <div className="ag-theme-alpine" style={{ height: 200 }}>
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          animateRows={true}
        />
      </div>
    </>
  );
};

export default Total;
