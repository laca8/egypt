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
import { Bar, Line, Pie } from "react-chartjs-2";
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

const ChartPie = ({ data1, filter1, filter2, color1, color2, text, label }) => {
  let arr1 = data1?.filter((c) => c._id.النوع == filter1);
  let arr2 = data1?.filter((c) => c._id.النوع == filter2);
  const labels = [...new Set(arr1?.map((x) => x?._id?.فئات))];
  const arrLabels = labels?.filter((x) => x !== label);
  //console.log(arrLabels);

  const arr4 = [];
  arrLabels.map((x) => {
    const total1 = arr1
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    const total2 = arr2
      .filter((c) => c._id.فئات == x)
      .reduce((acc, val) => acc + val.العدد, 0);
    // console.log(total1, total2, x);
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
        label: filter2,
        data: arr4?.map((x) => x.total2),
        borderColor: color2,
        backgroundColor: [
          "#FF6633",
          "#FFB399",
          "#FF33FF",
          "#FFFF99",
          "#00B3E6",
          "#E6B333",
          "#3366E6",
          "#999966",
          "#809980",
          "#E6FF80",
          "#1AFF33",
          "#999933",
          "#FF3380",
          "#CCCC00",
          "#66E64D",
          "#4D80CC",
          "#FF4D4D",
          "#99E6E6",
          "#6666FF",
        ],
        fill: true,
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
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Pie options={options} data={data} />
    </div>
  );
};

export default ChartPie;
