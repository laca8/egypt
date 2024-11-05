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

const labels = ["2017", "2018", "2019", "2020", "2021"];

const ChartBar = ({ data1 }) => {
  let arr1 = data1.filter((c) => c._id.تبعية == "خاص");
  let arr2 = data1.filter((c) => c._id.تبعية == "حكومى");
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
    labels: arr4.map((x) => x.year),
    datasets: [
      {
        label: "خاص",
        data: arr4?.map((x) => x.total1),
        backgroundColor: "darkslategray",
      },

      {
        label: "حكومي",
        data: arr4?.map((x) => x.total2),
        backgroundColor: "lightblue",
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
