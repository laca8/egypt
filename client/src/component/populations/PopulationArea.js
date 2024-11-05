import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../features/Loader";
import Error from "../features/Error";
import { listPop } from "../../redux/actions/populationAction/population";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
ChartJS.register(ArcElement, Tooltip, Legend);
const PopulationArea = () => {
  const dispatch = useDispatch();
  /*const listPopReducer = useSelector((state) => state.listPopReducer);
  const { populations, error, loading } = listPopReducer;
  useEffect(() => {
    dispatch(listPop());
  }, []);
*/
  const labels = [
    "Unpopulated Area for Total Area%",
    "Populated Area for Total Area%",
  ];
  const data = [93.2, 6.8];

  let fields = {
    labels: labels.map((x) => x),
    datasets: [
      {
        label: "# of Votes",
        data: data.map((x) => x),
        backgroundColor: ["#505050", "Pink"],
      },
    ],
  };
  const columnsDefs = [
    {
      headerName: "Country",
      field: "gov",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Area Km2",
      field: "area",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Populated Area Km2",
      field: "popArea",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Populated Density Km",
      field: "popDensity",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Population Per Thousand",
      field: "pop",
      sortable: true,
      filter: true,
    },
    {
      headerName: "percentage",
      field: "pop",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Total Children Under 18 Years",
      field: "child",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Denisty km/in2",
      field: "density",
      sortable: true,
      filter: true,
    },
  ];
  const arr = [
    {
      gov: "Egypt",
      pop: 102061,
      popArea: 68303,
      popDensity: 1494.2,
      density: 633.4,
      child: 43263,
      percentage: 6.8,
      area: 1010408,
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
      <Row style={{ marginTop: "40px" }}>
        <h4>Total Area For Egypt</h4>
        <Col>
          <div
            className="ag-theme-alpine"
            style={{ height: 100, width: "100%" }}
          >
            <AgGridReact
              rowData={arr}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
        </Col>
      </Row>
      <Row className="row-col-pie-can">
        <Col style={{ width: "50%" }} className="col-pie-can">
          <Pie
            data={fields}
            className="pie-can"
            style={{
              display: "block",
              height: "500px",
              width: "500px",
              margin: "auto",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default PopulationArea;
