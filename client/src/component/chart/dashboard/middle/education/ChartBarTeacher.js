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
const ChartBarStud = ({ city }) => {
  const [result, setResult] = useState([]);
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [high, setHigh] = useState("");

  const [primary1, setPrimary1] = useState("");
  const [secondary1, setSecondary1] = useState("");
  const [high1, setHigh1] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/edu/total/tea/${city}`);
        //console.log(res);
        setPrimary(
          res?.data?.teachersPrimary[0]?.total_teachers_female +
            res?.data?.teachersPrimary[0]?.total_teachers_female_private +
            res?.data?.teachersPrimary[0]?.total_teachers_female_public +
            res?.data?.teachersPrimary[0]?.total_teachers_female_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_female_urban +
            res?.data?.teachersPrimary[0]?.total_teachers_male +
            res?.data?.teachersPrimary[0]?.total_teachers_male_private +
            res?.data?.teachersPrimary[0]?.total_teachers_male_public +
            res?.data?.teachersPrimary[0]?.total_teachers_male_rural +
            res?.data?.teachersPrimary[0]?.total_teachers_male_urban
        );
        setSecondary(
          res?.data?.teachersSecondary[0]?.total_teachers_female +
            res?.data?.teachersSecondary[0]?.total_teachers_female_private +
            res?.data?.teachersSecondary[0]?.total_teachers_female_public +
            res?.data?.teachersSecondary[0]?.total_teachers_female_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_female_urban +
            res?.data?.teachersSecondary[0]?.total_teachers_male +
            res?.data?.teachersSecondary[0]?.total_teachers_male_private +
            res?.data?.teachersSecondary[0]?.total_teachers_male_public +
            res?.data?.teachersSecondary[0]?.total_teachers_male_rural +
            res?.data?.teachersSecondary[0]?.total_teachers_male_urban
        );

        setHigh(
          res?.data?.teachersHigh[0]?.total_teachers_female +
            res?.data?.teachersHigh[0]?.total_teachers_female_private +
            res?.data?.teachersHigh[0]?.total_teachers_female_public +
            res?.data?.teachersHigh[0]?.total_teachers_female_rural +
            res?.data?.teachersHigh[0]?.total_teachers_female_urban +
            res?.data?.teachersHigh[0]?.total_teachers_male +
            res?.data?.teachersHigh[0]?.total_teachers_male_private +
            res?.data?.teachersHigh[0]?.total_teachers_male_public +
            res?.data?.teachersHigh[0]?.total_teachers_male_rural +
            res?.data?.teachersHigh[0]?.total_teachers_male_urban
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [city]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/azhar/total/tea/${city}`);

        // console.log(res);
        setPrimary1(res?.data?.teachersPrimary[0]?.total_teachers);
        setSecondary1(res?.data?.teachersSecondary[0]?.total_teachers);
        setHigh1(res?.data?.teachersHigh[0]?.total_teachers);

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
        text: "Total Teachers 2021",
      },
    },
  };
  const data = {
    labels: ["Primary School", "Preparatory School", "Secondary School"],
    datasets: [
      {
        label: "Azhar",
        backgroundColor: "brown",

        borderWidth: 1,
        stack: 1,

        data: [primary1, secondary1, high1],
      },
      {
        label: "Education",
        backgroundColor: "rgba(53, 162, 235, 0.5)",

        borderWidth: 1,
        stack: 1,

        data: [primary, secondary, high],
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default ChartBarStud;
