import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Culture = ({ city }) => {
  const [cin18, setCin18] = useState("");
  const [cin19, setCin19] = useState("");
  const [th18, setTh18] = useState("");
  const [th19, setTh19] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/edu/total/cul/${city}`);
        setCin18(res?.data?.cinema18[0]?.total_cinema);
        setCin19(res?.data?.cinema19[0]?.total_cinema);
        setTh18(res?.data?.theater18[0]?.total_theaters);
        setTh19(res?.data?.theater19[0]?.total_theaters);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [city]);
  const options = {
    responsive: true,
    legend: {
      display: false,
    },

    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Culture",
      },
    },
  };
  const data = {
    labels: ["2018", "2019"],
    datasets: [
      {
        label: "Theaters",
        backgroundColor: "brown",

        borderWidth: 1,
        stack: 1,

        data: [th18, th19],
      },
      {
        label: "Cinema",
        backgroundColor: "rgba(53, 162, 235, 0.5)",

        borderWidth: 1,
        stack: 1,

        data: [cin18, cin19],
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default Culture;
