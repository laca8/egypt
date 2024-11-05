import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Typography } from "@mui/material";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);
const ChartPie = ({ data1, data2, label1, label2, color1, color2 }) => {
  let arr1 = data1.filter((c) => c._id.النوع == label1);
  let arr2 = data1.filter((c) => c._id.النوع == label2);
  const labels = [...new Set(arr1?.map((x) => x?._id?.السنة))];
  const arrLabels = labels.filter((x) => x !== "السنة");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    const total2 = arr2
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    console.log(total1, total2, x);
    arr4.push({ total1: total1 + total2, year: x });
  });

  const options = {
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels: arr4?.sort((a, b) => a.year - b.year).map((x) => x.year),
    datasets: [
      {
        label: `جملة`,
        data: arr4?.map((x) => x.total1),
        backgroundColor: [
          "#FF6633",
          "#FFB399",
          "#FF33FF",
          "#FFFF99",
          "#00B3E6",
          "#E6B333",
          "#3366E6",
          "#999966",
          "#809980",
          "#E6FF80",
          "#1AFF33",
          "#999933",
          "#FF3380",
          "#CCCC00",
          "#66E64D",
          "#4D80CC",
          "#FF4D4D",
          "#99E6E6",
          "#6666FF",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "90%" }}>
      <Pie
        data={data}
        options={options}
        style={{ width: "100%", height: "100%", margin: "auto" }}
      />
    </div>
  );
};

export default ChartPie;
