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
import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Sport"];

const Sport = () => {
  const dispatch = useDispatch();
  const [clubs, setClubs] = useState([]);
  const [councils, setCouncils] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/total/sport");
        setClubs(res?.data?.club[0]?.total_clubs);
        setCouncils(res?.data.council[0]?.total_counil);
        console.log(res?.data?.club[0]?.total_clubs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sport",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Clubs",
        data: [clubs]?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Young`s Centers",
        data: [councils]?.map((x) => x),
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
export default Sport;
