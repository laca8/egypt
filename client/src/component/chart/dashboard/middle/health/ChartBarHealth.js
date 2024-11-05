import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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

const labels = ["1 To 5 Years ", "- 1 Year", "- 28 Days", "- 7 Days"];

const ChartBar = ({ city }) => {
  const [ress1, setRess1] = useState([]);
  const [ress2, setRess2] = useState([]);
  const [ress3, setRess3] = useState([]);
  const [ress4, setRess4] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res1 = await axios.get(
          `/api/health/death/kids/under7days/${city}`
        );
        const res2 = await axios.get(`/api/health/death/kids/under28/${city}`);
        const res3 = await axios.get(
          `/api/health/death/kids/from1to5years/${city}`
        );
        const res4 = await axios.get(
          `/api/health/death/kids/under1years/${city}`
        );
        setRess1(res1?.data);
        setRess2(res2?.data);
        setRess3(res3?.data);
        setRess4(res4?.data);
        //console.log(res1, res2, res3, res4);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city]);
  const males = [
    ress3?.filter((x) => x._id.sex == "ذكور")[0]?.total,
    ress4?.filter((x) => x._id.sex == "ذكور")[0]?.total,
    ress2?.filter((x) => x._id.sex == "ذكور")[0]?.total,

    ress1?.filter((x) => x._id.sex == "ذكور")[0]?.total,
  ];
  const females = [
    ress3?.filter((x) => x._id.sex == "إناث")[0]?.total,

    ress4?.filter((x) => x._id.sex == "إناث")[0]?.total,

    ress2?.filter((x) => x._id.sex == "إناث")[0]?.total,

    ress1?.filter((x) => x._id.sex == "إناث")[0]?.total,
  ];
  const options = {
    responsive: true,

    scales: {
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
        labels: {
          fontSize: 8,
        },
      },
      title: {
        display: true,
        text: "Children Mortality",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Males",
        data: males?.map((x) => x),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: females?.map((x) => x),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} style={{ fontSize: "5px" }} />
    </>
  );
};
export default ChartBar;
