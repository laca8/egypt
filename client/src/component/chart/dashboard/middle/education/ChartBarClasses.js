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
        const res = await axios.get(`/api/edu/total/cla/${city}`);
        // console.log(res);
        setPrimary(
          res?.data?.classesPrimary[0]?.total_classes_private +
            res?.data?.classesPrimary[0]?.total_classes_public +
            res?.data?.classesPrimary[0]?.total_classes_rural +
            res?.data?.classesPrimary[0]?.total_classes_urban
        );
        setSecondary(
          res?.data?.classesSecondary[0]?.total_classes_private +
            res?.data?.classesSecondary[0]?.total_classes_public +
            res?.data?.classesSecondary[0]?.total_classes_rural +
            res?.data?.classesSecondary[0]?.total_classes_urban
        );

        setHigh(
          res?.data?.classesAgri[0]?.total_classes_private +
            res?.data?.classesAgri[0]?.total_classes_public +
            res?.data?.classesAgri[0]?.total_classes_rural +
            res?.data?.classesAgri[0]?.total_classes_urban +
            res?.data?.classesHigh[0]?.total_classes_private +
            res?.data?.classesHigh[0]?.total_classes_public +
            res?.data?.classesHigh[0]?.total_classes_rural +
            res?.data?.classesHigh[0]?.total_classes_urban +
            res?.data?.classesComm[0]?.total_classes_private +
            res?.data?.classesComm[0]?.total_classes_public +
            res?.data?.classesComm[0]?.total_classes_rural +
            res?.data?.classesComm[0]?.total_classes_urban +
            //res?.data?.classesHotel[0]?.total_classes_private +
            //res?.data?.classesHotel[0]?.total_classes_public +
            //res?.data?.classesHotel[0]?.total_classes_rural +
            // res?.data?.classesHotel[0]?.total_classes_urban +
            res?.data?.classesInd[0]?.total_classes_private +
            res?.data?.classesInd[0]?.total_classes_public +
            res?.data?.classesInd[0]?.total_classes_rural +
            res?.data?.classesInd[0]?.total_classes_urban
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
        const res = await axios.get(`/api/azhar/total/cla/${city}`);

        console.log(res);
        setPrimary1(res?.data?.classesPrimary[0]?.total_classes);
        setSecondary1(res?.data?.classesSecondary[0]?.total_classes);
        setHigh1(res?.data?.classesHigh[0]?.total_classes);
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
        text: "Total Classes 2021",
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
