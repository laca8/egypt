import React, { useState, useEffect } from "react";
import { Form, Button, Container, ListGroup } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { totalTeacher } from "../../../redux/actions/educationsAction/teacher";

const TeacherForStudents = () => {
  const arr = [
    {
      year: "2020",
      stage: "قبل ابتدائية",
      teachers: 59523,
      students: 1260643,
    },
    {
      year: "2021",
      stage: "قبل ابتدائية",
      teachers: 59208,
      students: 1270516,
    },
    {
      year: "2020",
      stage: "الابتدائية",
      teachers: 442303,
      students: 13370340,
    },
    {
      year: "2021",
      stage: "الابتدائية",
      teachers: 431430,
      students: 13678021,
    },
    {
      year: "2020",
      stage: "الاعدادية",
      teachers: 252338,
      students: 5544568,
    },
    {
      year: "2021",
      stage: "الاعدادية",
      teachers: 245516,
      students: 5829775,
    },
    {
      year: "2020",
      stage: "الثانوية العامة",
      teachers: 102870,
      students: 1915785,
    },
    {
      year: "2021",
      stage: "الثانوية العامة",
      teachers: 99454,
      students: 2008664,
    },
    {
      year: "2020",
      stage: "الثانوية الصناعي",
      teachers: 89273,
      students: 999231,
    },
    {
      year: "2021",
      stage: "الثانوية الصناعي",
      teachers: 86062,
      students: 1023763,
    },
    {
      year: "2020",
      stage: "الثانوية التجاري",
      teachers: 36435,
      students: 815416,
    },
    {
      year: "2021",
      stage: "الثانوية التجاري",
      teachers: 36672,
      students: 834082,
    },
    {
      year: "2020",
      stage: "الثانوية الزراعي",
      teachers: 12132,
      students: 247738,
    },
    {
      year: "2021",
      stage: "الثانوية الزراعي",
      teachers: 11208,
      students: 262023,
    },
    {
      year: "2020",
      stage: "التعليم المجتمعي",
      teachers: 7997,
      students: 136272,
    },
    {
      year: "2021",
      stage: "التعليم المجتمعي",
      teachers: 7549,
      students: 140224,
    },
    {
      year: "2020",
      stage: "التربية الخاصة",
      teachers: 9934,
      students: 43719,
    },
    {
      year: "2021",
      stage: "التربية الخاصة",
      teachers: 9762,
      students: 44373,
    },
  ];
  const [city, setCity] = useState("");
  const [stage, setStage] = useState("all");
  const [year, setYear] = useState("all");
  const [filterData, setFilterData] = useState(arr);
  const cities = [
    "damieeeta",
    "cairo",
    "alexandria",
    "luxor",
    "matrouh",
    "north sinai",
    "portsaid",
    "fayoum",
    "gharbiya",
    "red sea",
    "new valley",
    "qena",
    "dakahlia",
    "menoufia",
    "assiut",
    "sohag",
    "giza",
    "south sinai",
    "suez",
    "beheira",
    "sharkia",
    "minya",
    "gharbiya",
    "al-galubiah",
    "aswan",
    "kafr al-sheikh",
    "ismailia",
    "beni suef",
  ];
  const stages = [
    "all",
    "قبل ابتدائية",
    "الابتدائية",
    "الاعدادية",
    "الثانوية العامة",
    "الثانوية الصناعي",
    "الثانوية التجاري",
    "الثانوية الزراعي",
    "التعليم المجتمعي",
    "التربية الخاصة",
  ];
  const years = ["all", "2020", "2021"];
  // pre-primary => total students => 2020 => 1260643
  // pre-primary => total students => 2021 => 1270516
  // primary => total students => 2020 => 13370340
  // primary => total students => 2021 => 13678021
  // secondary => total students => 2020 => 5544568
  // secondary => total students => 2021 => 5829775

  // community => total students => 2020 => 136272
  // community => total students => 2021 => 140224

  // special => total students => 2020 => 43719
  // special => total students => 2021 => 44373

  // industrial => total students => 2020 => 999231
  // industrial => total students => 2021 => 1023763

  // commercial => total students => 2020 => 815416
  // commercial => total students => 2021 => 834082

  // high => total students => 2020 => 1915785
  // high => total students => 2021 => 2008664

  // agriculture => total students => 2020 => 247738
  // agriculture => total students => 2021 => 262023

  // pre-primary => total teachers => 2020 => 59523
  // pre-primary => total teachers => 2021 => 59208
  // primary => total tachers=> 2020 => 442303
  // primary => total tachers=> 2021 => 431430
  // secondary => total tachers=> 2020 => 252338
  // secondary => total tachers=> 2021 => 245516
  // industrial => ============> 2020 => 89273
  // industrial => ============> 2021 => 86062
  // commercial => ============> 2020 => 36435
  // commercial => ============> 2021 => 36672
  // agriculture => ============> 2020 => 12132
  // agriculture => ============> 2021 => 11208
  // hotel => ============> 2020 => 2895
  // hotel => ============> 2021 => 2795
  // high => ============> 2020 => 102870
  // high => ============> 2021 => 99454
  // community => ============> 2020 => 7997
  // community => ============> 2021 => 7549
  // special => ============> 2020 => 9934
  // special => ============> 2021 => 9762

  const columns = [
    {
      name: "Stage",
      selector: (row) => row?.stage,
      sortable: true,
      filter: true,
    },
    {
      name: "Year",
      selector: (row) => row?.year,
    },

    {
      name: "Total Teachers",
      selector: (row) => row?.teachers.toLocaleString(),
    },
    {
      name: "Total Student",
      selector: (row) => row?.students.toLocaleString(),
    },
    {
      name: "Teacher For Students",
      selector: (row) => `1 for ${Math.round(row.students / row.teachers)}`,
    },
  ];
  let result;
  useEffect(() => {
    if (stage !== "all" && year == "all") {
      result = arr.filter((a) => a.stage == stage);
      setFilterData(result);
    }
    if (year !== "all" && stage == "all") {
      result = arr.filter((a) => a.year == year);
      setFilterData(result);
    }
    if (stage !== "all" && year !== "all") {
      setFilterData(arr.filter((a) => a.stage == stage && a.year == year));
    }
    if (stage == "all" && year == "all") {
      setFilterData(arr);
    }
  }, [stage, year]);
  return (
    <Container style={{ marginTop: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/*
        <Form.Select
          aria-label="Default select example"
          style={{ marginBottom: "10px", marginRight: "10px" }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option>Select A Governate</option>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </Form.Select>
        
        */}
        <Form.Select
          aria-label="Default select example"
          style={{ marginBottom: "10px" }}
          value={stage}
          onChange={(e) => setStage(e.target.value)}
        >
          {stages.map((stage) => (
            <option value={stage}>{stage}</option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{ marginBottom: "10px", marginLeft: "10px" }}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </Form.Select>
      </div>
      <DataTable
        style={{ padding: "20px", marginTop: "30px" }}
        columns={columns}
        data={year || stage ? filterData : arr}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </Container>
  );
};

export default TeacherForStudents;
