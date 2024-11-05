import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const Chart = ({ data1, data2 }) => {
  const arr = [data1, data2];
  //console.log(arr);

  const sex = ["Male", "Female"];
  let fields = {
    labels: sex.map((s) => s),
    datasets: [
      {
        label: "The number of families with the head of the family",
        data: arr?.map((x) => x),
        backgroundColor: [
          "rgba(53, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5) ",
        ],
      },
    ],
  };
  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  };
  return (
    <div>
      <Bar data={fields} options={options} />
    </div>
  );
};

export default Chart;
