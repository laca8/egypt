import React from "react";
import { Typography } from "@mui/material";
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

const labels = [
  "0-1",
  "0-2",
  "0-3",
  "0-4",
  "0-5",
  "0-6",
  "0-7",
  "0-8",
  "0-9",
  "0-10",
  "0-11",
  "0-12",
  "0-13",
  "0-14",
  "0-15",
  "0-16",
  "0-17",
  "0-18",
];

const ChartPyramid = ({ data1 }) => {
  let arr1 = data1?.filter(
    (c) =>
      c._id.النوع == "ذكور" && c?._id?.السنة == Number(Math.max(c?._id.السنة))
  );
  let arr2 = data1?.filter(
    (c) =>
      c._id.النوع == "إناث" && c?._id?.السنة == Number(Math.max(c?._id.السنة))
  );
  const labels = [...new Set(arr1?.map((x) => x?._id?.فئات))];
  const arrLabels = labels?.filter((x) => x !== "فئات");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    const total2 = arr2
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    console.log(total1, total2, x);
    arr4.push({ total1: total1, total2: total2, year: x });
  });
  const options = {
    indexAxis: "y",
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 8,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 0,
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "الفئات العمرية",
      },
    },
  };
  const data = {
    labels: arr4.map((x) => x.year),
    datasets: [
      {
        label: "ذكور",
        data: arr4?.map((x) => -x.total1),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "اناث",
        data: arr4?.map((x) => x.total2),
        backgroundColor: "rgba(255, 99, 132, 0.5) ",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartPyramid;
