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
  "aswan",
  "sohag",
  "assiut",
  "beni suef",
  "fayoum",
  "alexandria",
  "portsaid",
  "suez",
  "matrouh",
  "red sea",
  "dakahlia",
  "ismailia",
  "luxor",
  "cairo",
  "giza",
  "sharkia",
  "gharbiya",
  "menoufia",
  "minya",
  "south sinai",
  "north sinai",
  "damieeeta",
  "qena",
  "kafr al-sheikh",
  "al-Qalubiah",
  "new valley",
  "beheira",
];

const ChartBar = ({ data1 }) => {
  const labels = [...new Set(data1?.map((x) => x?._id?.المحافظة))];
  const arrLabels = labels.filter((x) => x !== "المحافظة");
  const labels2 = [...new Set(data1?.map((x) => x?._id?.السنة))];
  const arrLabels2 = labels2.filter((x) => x !== "السنة");
  //console.log(arrLabels2);

  const arr4 = [];
  arrLabels.map((x) => {
    arrLabels2.map((y) => {
      const total = data1
        .filter((c) => c._id.المحافظة == x && c._id.السنة == y)
        .reduce((acc, val) => acc + val.العدد, 0);
      console.log(total, x, y);
      arr4.push({ total: total, city: x, year: y });
    });
  });

  const arr17 = [];
  const arr18 = [];
  const arr19 = [];
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
    labels: arr4.map((x) => x.city),
    datasets: [
      {
        label: arr4.map((x) => x.year),
        data: arr4?.map((x) => x.total),
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "green",
          "gray",
          "brown",
          "lightblue",
          "orange",
          "pink",
          "darkblue",
          "lightbrown",
        ],
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
