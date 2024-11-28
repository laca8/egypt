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
import { Bar } from "react-chartjs-2";
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "التسرب من التعليم المرحلة الأبتدائية",
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

export default ChartBarStud;
