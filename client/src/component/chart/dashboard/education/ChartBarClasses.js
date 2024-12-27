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
import { Bar, Line } from "react-chartjs-2";

import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartBarStud = ({ arr, colors }) => {
  const options = {
    indexAxis: "y",

    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: 10,
            weight: "bold",
          },

          minRotation: 90, // This rotates the labels 90 degrees
          maxRotation: 90, // This ensures they don't rotate beyond 90 degrees
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 10,
          },
        },
        position: "top",
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "الأزهر",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "المعاهد",
        backgroundColor: colors[3],

        type: "bar",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(-x["معاهد"].replace(",", ""))),
      },
      {
        label: "الفصول",
        backgroundColor: colors[2],
        fill: false,
        borderColor: colors[2],
        tension: 0.1,
        type: "bar",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      // {
      //   label: "التلاميذ",
      //   backgroundColor: colors[2],
      //   fill: false,
      //   borderColor: colors[2],
      //   tension: 0.1,
      //   type: "line",

      //   data:
      //     arr &&
      //     JSON.parse(arr)?.map((x) => Number(x["تلاميذ"].replace(",", ""))),
      // },
    ],
  };
  return <Line data={data} options={options} />;
};

export default ChartBarStud;
