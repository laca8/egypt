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
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Sport = ({ arr }) => {
  const options = {
    scales: {
    x: {
      ticks: {
        minRotation: 90, // This rotates the labels 90 degrees
        maxRotation: 90  // This ensures they don't rotate beyond 90 degrees
      }
    }
  },
  maintainAspectRatio: false,
    responsive: true,
      
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "الرياضة",
      },
    },
  };

  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
    datasets: [
      {
        label: "اجمالى الاندیه",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى الاندیه"])),
        backgroundColor: "#807040",
      },
      {
        label: "اجمالى مراكز الشباب",
        data:
          arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى مراكز الشباب"])),
        backgroundColor: "#496580",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default Sport;
