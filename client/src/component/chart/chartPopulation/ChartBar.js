import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);
const Chart = ({ data1, color, label, filter }) => {
  let arr1 = data1?.filter((c) => c._id.النوع == filter);
  const labels = [...new Set(arr1?.map((x) => x?._id?.السنة))];
  const arrLabels = labels?.filter((x) => x !== "السنة");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    console.log(total1, x);
    arr4.push({ total1: total1, year: x });
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Populations",
      },
    },
  };
  const data = {
    labels: arr4.sort((a, b) => a.year - b.year).map((x) => x.year),
    datasets: [
      {
        label: label,
        data: arr4?.map((x) => x.total1),
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
