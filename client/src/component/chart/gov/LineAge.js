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

const ChartLine = ({
  data1,
  filter1,
  filter2,
  color1,
  color2,
  text,
  label,
}) => {
  let arr1 = data1?.filter((c) => c._id.النوع == filter1);
  let arr2 = data1?.filter((c) => c._id.النوع == filter2);
  const labels = [...new Set(arr1?.map((x) => x?._id?.فئات))];
  const arrLabels = labels?.filter((x) => x !== label);
  // console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    const total2 = arr2
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
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
        fill: false,
        lineTension: 0.4,
        borderWidth: 1,
        pointRadius: 10,
        pointHoverRadius: 10,
        pointBackgroundColor: color1,
        pointBorderWidth: 0,
        spanGaps: false,
        dragData: false,
      },
      {
        label: filter2,
        data: arr4?.map((x) => x.total2),
        borderColor: color2,
        backgroundColor: color2,
        fill: false,
        lineTension: 0.4,
        borderWidth: 1,
        pointRadius: 10,
        pointHoverRadius: 10,
        pointBackgroundColor: color2,
        pointBorderWidth: 0,
        spanGaps: false,
        dragData: false,
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
