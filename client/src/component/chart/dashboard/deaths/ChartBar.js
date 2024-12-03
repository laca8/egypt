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
const ChartBarStud = ({ arr }) => {
  console.log(arr && JSON.parse(arr)?.map((x) => x["الوفيات"]));
  const options = {
    responsive: true,
    legend: {
      display: false,
    },

    type: "bar",
    scales: {
    x: {
      ticks: {
        minRotation: 90, // This rotates the labels 90 degrees
        maxRotation: 90  // This ensures they don't rotate beyond 90 degrees
      }
    }
  },
  maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "المواليد والوفيات",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "المواليد",
        backgroundColor: "#807040",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["المواليد"])),
      },

      {
        label: "الوفيات",
        backgroundColor: "#496580",

        data: arr && JSON.parse(arr)?.map((x) => Number(x["الوفيات"])),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default ChartBarStud;
