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
const Culture = ({ arr, colors }) => {
  //   console.log(arr && JSON.parse(arr)?.map((x) => x["المحافظة"]));

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

    type: "bar",
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
        text: "عدد المصريين  في الفئة العمريه (5 - 17) طبقاً لوجود صعوبة ونوعهـا  من تعداد 2017",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة "]),

    datasets: [
      {
        label: "الرؤية ( حتى لوكـان مرتديــاً نظارة )",
        backgroundColor: colors[0],
        data: arr && JSON.parse(arr)?.map((x) => Number(x["see"])),
      },

      {
        label: "الفهم والتواصل مــع الآخرين_ صعوبة من الكبيرة إلى المطلقة",
        backgroundColor: colors[1],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["undrstand"])),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default Culture;