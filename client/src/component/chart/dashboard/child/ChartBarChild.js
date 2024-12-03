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

const ChartBar = ({ arr }) => {
  // console.log(
  //   arr &&
  //     JSON.parse(arr).map((x) =>
  //       Number(x["العدد"].replace(",", "").replace(",", ""))
  //     )
  // );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "الأطفال",
      },
    },
   config: {
  scales: {
    xAxes: [{
      ticks: {
        maxRotation: 0 // angle in degrees
      }
    }]
  }
}
  };

  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
    datasets: [
      {
        label: "اجمالي اعداد الأطفال",
        data:
          arr &&
          JSON.parse(arr).map((x) =>
            Number(x["العدد"].replace(",", "").replace(",", ""))
          ),
        backgroundColor: "#496580",
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
