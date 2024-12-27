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
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: 14,
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
            size: 10,
            weight: "bold",
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
            size: 14,
            weight: "bold",
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
        text: "المدارس التجريبي",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "مدرسون",
        backgroundColor: colors[3],

        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[3],
        tension: 0.1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => -Number(x["مدرسون"].replace(",", ""))),
      },
      {
        label: "الفصول",
        backgroundColor: colors[1],

        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[1],
        tension: 0.1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      {
        label: "مدارس",
        backgroundColor: colors[0],
        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[0],
        tension: 0.1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["مدارس"].replace(",", ""))),
      },

      // {
      //   label: "التلاميذ",
      //   backgroundColor: colors[2],

      //   borderWidth: 1,
      //   stack: 1,

      //   data:
      //     arr &&
      //     JSON.parse(arr)?.map((x) => Number(x["تلاميذ"].replace(",", ""))),
      // },
    ],
  };
  return <Line data={data} options={options} />;
};

export default ChartBarStud;
