import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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

const labels = ["2021"];

const ChartBarMiddle = ({ city }) => {
  const dispatch = useDispatch();

  //console.log(popAge);
  const totalFemale = []
    ?.filter((p) => p._id.Sex == "اناث")
    .reduce((acc, val) => acc + val.total, 0);
  const totalMale = []
    ?.filter((p) => p._id.Sex == "ذكور")
    .reduce((acc, val) => acc + val.total, 0);
  const arrGirl = [totalFemale];
  const arrBoy = [totalMale];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Children Under 18 Years",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arrBoy?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arrGirl?.map((x) => x),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default ChartBarMiddle;
