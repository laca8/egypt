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
import { Bar, Line, Pie } from "react-chartjs-2";
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
          color: "#fff",
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
          color: "#fff",
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
        position: "top",
        labels: {
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "التسرب من التعليم المرحلة الأبتدائية",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "ذكور",
        fill: false,
        borderColor: "#008FFB",
        tension: 0.1,
        backgroundColor: "#008FFB",
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"].replace(",", "")),
      },

      {
        label: "إناث",
        backgroundColor: "#FF4560",
        fill: false,
        borderColor: "#FF4560",
        tension: 0.1,
        data: arr && JSON.parse(arr)?.map((x) => -x["إناث"].replace(",", "")),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default ChartBarStud;
