import React, { useEffect, useState } from "react";
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

const ChartBarStud = () => {
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
        const res = await axios.get("/api/edu/total/stu");
        setResult(res?.data);
        setPrimary(res?.data?.studentsPrimary[0]?.total_students_primary);
        setSecondary(res?.data?.studentsSecondary[0]?.total_students_secondary);
        let ind = res?.data?.studentsInd[0]?.total_students_ind;
        let com = res?.data?.studentsCom[0]?.total_students_com;
        let agr = res?.data?.studentsArg[0]?.total_students_arg;
        let h = res?.data?.studentsHigh[0].total_students_high;
        let total = ind + com + agr + h;
        console.log(ind);
        console.log(com);
        console.log(agr);
        console.log(h);
        console.log(total);

        setHigh(total);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/azhar/total/stu");

        console.log(res);
        setPrimary1(res?.data?.studentsPrimary[0]?.total_students_primary);
        setSecondary1(
          res?.data?.studentsSecondary[0]?.total_students_secondary
        );
        setHigh1(res?.data?.studentsHigh[0]?.total_students_high);

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
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
        text: "Total Students 2021",
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
