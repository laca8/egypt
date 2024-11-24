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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Males", "Females"];

const International = () => {
  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 10,
      },
    },
    title: {
      display: true,
      text: "Percentage of children (aged 1-14 years) who experienced any physical punishment and/or psychological aggression by caregivers",
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Children (aged 1-14 years) physical punishment",
        data: [93.4, 92.6]?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default International;
