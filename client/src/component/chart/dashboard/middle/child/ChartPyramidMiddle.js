import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "0-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
  "6-7",
  "7-8",
  "8-9",
  "9-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "16-17",
  "17-18",
];

const ChartPyramid = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  const options = {
    indexAxis: "y",
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 8,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 0,
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Children Under 18 Years",
      },
    },
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr,
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data1} />
    </div>
  );
};
export default ChartPyramid;
