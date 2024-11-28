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
        text: "الأزهر",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "المعاهد",
        backgroundColor: "#807040",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["معاهد"].replace(",", ""))),
      },
      {
        label: "الفصول",
        backgroundColor: "green",

        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      {
        label: "التلاميذ",
        backgroundColor: "#496580",

        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["تلاميذ"].replace(",", ""))),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default ChartBarStud;
