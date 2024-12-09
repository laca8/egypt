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
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Culture = ({ arr, colors }) => {
  // console.log(arr);
  // console.log(JSON.parse(arr)?.map((x) => Number(x["النسب"].split("%")[0])));
  const options = {
    responsive: true,
    legend: {
      labels: {
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },

    type: "line",
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
        text: "نسب المصريين المستخدمين للانترنت",
      },
    },
  };
  const data = {
    labels:
      arr &&
      JSON.parse(arr)
        ?.sort((a, b) => a["المحافظة"] - b["المحافظة"])
        ?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label:
          "نسب المصريين من (17:4 سنة) طبقاً لإستخــدام الفرد للانترنت تعداد 2017",

        data:
          arr &&
          JSON.parse(arr)
            ?.sort((a, b) => -b["المحافظة"] - a["المحافظة"])

            ?.map((x) => Number(x["النسب"].split("%")[0])),
        borderColor: colors[2],
        backgroundColor: colors[2],
        pointBackgroundColor: colors[2],
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default Culture;
