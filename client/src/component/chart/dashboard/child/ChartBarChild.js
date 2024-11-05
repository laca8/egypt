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
import { listTotalAge } from "../../../../redux/actions/populationAction/population";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const ChartBar = () => {
  const dispatch = useDispatch();
  const listPopTotalAgeReducer = useSelector(
    (state) => state.listPopTotalAgeReducer
  );
  const { popTotalAge, loading, error } = listPopTotalAgeReducer;
  useEffect(() => {
    dispatch(listTotalAge());
  }, []);
  const arr1 = popTotalAge.filter((pop) => pop.sex == "إناث");
  console.log(arr1);
  const arr2 = popTotalAge.filter((pop) => pop.sex == "ذكور");
  console.log(arr2);
  const arrGirl = [
    arr1[0]?.total_2016,
    arr1[0]?.total_2017,
    arr1[0]?.total_2018,
    arr1[0]?.total_2019,
    arr1[0]?.total_2020,
    arr1[0]?.total_2021,
    arr1[0]?.total_2022,
  ];
  const arrBoy = [
    arr2[0]?.total_2016,
    arr2[0]?.total_2017,
    arr2[0]?.total_2018,
    arr2[0]?.total_2019,
    arr2[0]?.total_2020,
    arr2[0]?.total_2021,
    arr2[0]?.total_2022,
  ];
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
export default ChartBar;
