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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = ({ arr, colors }) => {
  // console.log(
  //   arr &&
  //     JSON.parse(arr).map((x) =>
  //       Number(x["العدد"].replace(",", "").replace(",", ""))
  //     )
  // );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        bodyFont: {
          weight: "bold",
        },
      },
      title: {
        display: true,
        text: "الأطفال",
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
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
  };

  const data = {
    labels: arr && JSON?.parse(arr)?.map((x) => x["المحافظة"]),
    datasets: [
      {
        label: "اجمالي اعداد الأطفال",
        data:
          arr &&
          JSON.parse(arr).map((x) =>
            Number(x["العدد"].replace(",", "").replace(",", ""))
          ),
        backgroundColor: colors[0],
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartBar;
