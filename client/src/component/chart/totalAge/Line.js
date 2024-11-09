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
const labels = ["2018", "2019", "2020", "2021", "2022"];

const ChartLine = ({ data1 }) => {
  let arr1 = data1?.filter((c) => c._id.الإقامة == "حضر");
  let arr2 = data1?.filter((c) => c._id.الإقامة == "ريف");
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
        label: "حضر",
        data: arr4?.map((x) => x.total1),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "ريف",
        data: arr4?.map((x) => x.total2),
        borderColor: "brown",
        backgroundColor: "brown",
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
