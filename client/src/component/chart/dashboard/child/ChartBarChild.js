import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "chart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement
);

const ChartBar = ({ arr, colors, chartTypes }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const options = {
    // indexAxis: "y",
    elements: {
      bar: {
        // borderWidth: 2,
        // borderWidth: 0,
        barPercentage: 0.5,
        barThickness: 6,
      },
    },
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
        position: "top",
      },
      title: {
        display: true,
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
          },
        },
      },
    },
  };
  const data = {
    labels:
      arr &&
      JSON?.parse(arr)
        ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

        ?.map((x) => x["المحافظة"]),
    datasets: [
      {
        label: "اجمالي اعداد الأطفال",
        data:
          arr &&
          JSON.parse(arr)
            ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

            ?.map((x) => Number(x["العدد"].replace(",", "").replace(",", ""))),
        backgroundColor: colors[0],
      },
    ],
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};
export default ChartBar;
