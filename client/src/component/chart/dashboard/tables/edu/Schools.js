import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Typography } from "@mui/material";
import axios from "axios";
const Schools = () => {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [high, setHigh] = useState("");

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
            //  res?.data?.schoolsComm[0]?.total_schools +
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

  const arr = [
    {
      year: "2021",
      stage: "الابتدائية",
      schools: primary2,
      students: primary,
      avg: `1 To ${Math.round(primary / primary2)}`,
    },

    {
      year: "2021",
      stage: "الاعدادية",
      schools: secondary2,
      students: secondary,
      avg: `1 To ${Math.round(secondary / secondary2)}`,
    },

    {
      year: "2021",
      stage: "الثانوية العامة",
      schools: high2,
      students: high,
      avg: `1 To ${Math.round(high / high2)}`,
    },
  ];

  const columnsDefs = [
    {
      headerName: "مدرسة لكل طلاب",
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
      headerName: "عدد المدارس",
      field: "schools",
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
        2021 عدد الطلاب لكل مدرسة
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

export default Schools;
