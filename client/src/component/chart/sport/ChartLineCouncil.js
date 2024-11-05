import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["2014", "2018", "2019"];

const ChartLine = ({ data1 }) => {
  const labels = [...new Set(data1?.map((x) => x?._id?.الصالات))];
  const arrLabels = labels.filter((x) => x !== "الصالات");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = data1
      .filter((c) => c._id.الصالات == x)
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
      },
    },
  };

  const data = {
    labels: arr4.sort((a, b) => a.year - b.year).map((x) => x.year),
    datasets: [
      {
        label: "المنشاءات",
        data: arr4?.map((x) => x.total1),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
