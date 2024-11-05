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
const ChartBar = ({ data1 }) => {
  // console.log(data1);
  let arr = data1?.filter((c) => c._id.النوع == "ذكور");
  const labels = [...new Set(arr?.map((x) => x?._id?.السنة))];
  const arrLabels = labels.filter((x) => x !== "السنة");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total = arr
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    console.log(total, x);
    arr4.push({ total: total, year: x });
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
        label: "ذكور",
        data: arr4?.map((x) => x.total),
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
