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
const labels = ["2017", "2018", "2019", "2020"];

const ChartLine = ({ data1 }) => {
  //console.log(arr1);
  let arr1 = data1
    .filter((c) => c._id.النوع == "ذكور")
    .sort((a, b) => a._id.السنة - b._id.السنة);
  let arr2 = data1
    .filter((c) => c._id.النوع == "إناث")
    .sort((a, b) => a._id.السنة - b._id.السنة);

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
        data: arr2?.map((x) => x.total2),
        borderColor: "red",
        backgroundColor: "red",
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
