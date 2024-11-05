import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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
import { listTotalAge } from "../../../../redux/actions/populationAction/population";
import { listDeathKidsFrom1to5years } from "../../../../redux/actions/health/healthAction";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["1 To 5 Years ", "- 1 Year", "- 28 Days", "- 7 Days"];

const males = [4943, 19187, 10006, 3835];
const females = [4160, 16010, 7197, 2673];

const ChartBar = () => {
  const options = {
    responsive: true,

    scales: {
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
        labels: {
          fontSize: 8,
        },
      },
      title: {
        display: true,
        text: "Children Mortality",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: males?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: females?.map((x) => x),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} style={{ fontSize: "5px" }} />
    </>
  );
};
export default ChartBar;
