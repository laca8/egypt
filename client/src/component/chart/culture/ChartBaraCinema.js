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

const labels = ["2014", "2018", "2019"];

const ChartBar = ({ data1 }) => {
  const labels = [...new Set(data1?.map((x) => x?._id?.العام))];
  const arrLabels = labels.filter((x) => x !== "العام");
  console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = data1
      .filter((c) => c._id.العام == x)
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
        label: "عدد السينمات",
        data: arr4?.map((x) => x.total1),
        borderColor: "rgba(53, 162, 235, 0.5)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
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
