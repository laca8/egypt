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

const ChartLine = ({ data1 }) => {
  let arr1 = data1?.filter((c) => c._id.النوع == "ذكور");
  let arr2 = data1?.filter((c) => c._id.النوع == "إناث");
  const labels = [...new Set(arr1?.map((x) => x?._id?.السنة))];
  const arrLabels = labels?.filter((x) => x !== "السنة");
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
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Males & Females",
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
        data: arr4?.map((x) => x.total1),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      {/*  <Typography variant="h4" style={{ marginTop: "40px" }}>
        Population Growth Rate
      </Typography>
      <hr style={{ width: "160px" }} />
      <Typography variant="p">
        Annual population growth rate from 1996 to 2022 is the exponential rate
        of growth of midyear , expressed as a percentage . Population is based
        on the de facto definition of population, which counts all residents
        regardless of legal status or citizenship--except for refugees not
        permanently settled in the country of asylum, who are generally
        considered part of the population of the country of origin.
  </Typography>*/}
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
