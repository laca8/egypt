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

const labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const ChartBar = ({ data1 }) => {
  let arr1 = data1?.filter((c) => c._id.النوع == "ذكور");
  let arr2 = data1?.filter((c) => c._id.النوع == "إناث");
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
        label: "ذكور",
        data: arr4?.map((x) => x.total1),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "اناث",
        data: arr4?.map((x) => x.total2),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
