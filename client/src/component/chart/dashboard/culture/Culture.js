import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Culture = ({ arr }) => {
  const options = {
    responsive: true,
    legend: {
      display: false,
    },

    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "عدد الوفيات دون الخامسة",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "ذكور",
        backgroundColor: "#807040",
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"]),
      },

      {
        label: "إناث",
        backgroundColor: "#496580",

        data: arr && JSON.parse(arr)?.map((x) => x["إناث"]),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default Culture;
