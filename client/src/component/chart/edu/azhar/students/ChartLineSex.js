import React from "react";
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
const labels = ["2015", "2017", "2017", "2018", "2019", "2020", "2021"];

const ChartLine = ({ data1 }) => {
  let arr1 = data1.filter((c) => c._id.النوع == "بنون");
  let arr2 = data1.filter((c) => c._id.النوع == "بنات");
  const labels = [...new Set(arr1?.map((x) => x?._id?.العام))];
  const arrLabels = labels.filter((x) => x !== "العام");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.العام == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    const total2 = arr2
      .filter((c) => c._id.العام == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    console.log(total1, total2, x);
    arr4.push({ total1: total1, total2: total2, year: x });
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
    labels: arr4.map((x) => x.year),
    datasets: [
      {
        label: "ذكور",
        data: arr4?.map((x) => x.total1),
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "اناث",
        data: arr4?.map((x) => x.total2),
        borderColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
