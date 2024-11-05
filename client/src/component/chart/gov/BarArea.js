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
  Filler,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartLine = ({
  data1,
  filter1,
  filter2,
  color1,
  color2,
  text,
  label,
}) => {
  const labels = [...new Set(data1?.map((x) => x?._id?.السنة))];
  const arrLabels = labels?.filter((x) => x !== label);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = data1
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => Number(acc) + parseInt(val?._id[filter1], 10), 0);
    const total2 = data1
      .filter((c) => c._id.السنة == x)
      .reduce((acc, val) => acc + parseInt(val._id[filter2], 10), 0);
    //console.log(total1, total2, x);
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
        text: text,
      },
    },
  };

  const data = {
    labels: arr4.sort((a, b) => a.year - b.year).map((x) => x.year),
    datasets: [
      {
        label: filter1,
        data: arr4?.map((x) => x.total1),
        borderColor: color1,
        backgroundColor: color1,
        pointBackgroundColor: color1,
        fill: {
          target: "origin", // Set the fill options
          above: color1,
        },
      },
      {
        label: filter2,
        data: arr4?.map((x) => x.total2),
        borderColor: color2,
        backgroundColor: color2,

        pointBackgroundColor: color2,

        fill: {
          target: "origin", // Set the fill options
          above: color2,
        },
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default ChartLine;
