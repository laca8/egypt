import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPopAgeAll } from "../../../../redux/actions/populationAction/population";
import { Typography } from "@mui/material";
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

const labels = [
  "0-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
  "6-7",
  "7-8",
  "8-9",
  "9-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "16-17",
  "17-18",
];

const ChartPyramid = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        if (city == "Egypt") {
          const res = await axios.get("/api/total/ages");
          //console.log(res);
          setArr(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);

  const arrFemales = arr?.filter((p) => p._id.sex == "اناث");

  const arrMales = arr?.filter((p) => p._id.sex == "ذكور");
  const totalFemale1 = arrFemales
    ?.filter((p) => p._id.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalMale1 = arrMales
    ?.filter((p) => p._id.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);
  // const totalMale1 = (1.3622 * Number(ind)) / 100;

  const totalFemale2 = arrFemales
    ?.filter((p) => p._id.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale2 = arrMales
    ?.filter((p) => p._id.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale3 = arrFemales
    ?.filter((p) => p._id.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale3 = arrMales
    ?.filter((p) => p._id.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale4 = arrFemales
    ?.filter((p) => p._id.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale4 = arrMales
    ?.filter((p) => p._id.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale5 = arrFemales
    ?.filter((p) => p._id.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale5 = arrMales
    ?.filter((p) => p._id.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale6 = arrFemales
    ?.filter((p) => p._id.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale6 = arrMales
    ?.filter((p) => p._id.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale7 = arrFemales
    ?.filter((p) => p._id.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale7 = arrMales
    ?.filter((p) => p._id.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale8 = arrFemales
    ?.filter((p) => p._id.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale8 = arrMales
    ?.filter((p) => p._id.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale9 = arrFemales
    ?.filter((p) => p._id.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale9 = arrMales
    ?.filter((p) => p._id.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale10 = arrFemales
    ?.filter((p) => p._id.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale10 = arrMales
    ?.filter((p) => p._id.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale11 = arrFemales
    ?.filter((p) => p._id.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale11 = arrMales
    ?.filter((p) => p._id.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale12 = arrFemales
    ?.filter((p) => p._id.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale12 = arrMales
    ?.filter((p) => p._id.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale13 = arrFemales
    ?.filter((p) => p._id.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale13 = arrMales
    ?.filter((p) => p._id.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale14 = arrFemales
    ?.filter((p) => p._id.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale14 = arrMales
    ?.filter((p) => p._id.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale15 = arrFemales
    ?.filter((p) => p._id.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale15 = arrMales
    ?.filter((p) => p._id.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale16 = arrFemales
    ?.filter((p) => p._id.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale16 = arrMales
    ?.filter((p) => p._id.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale17 = arrFemales
    ?.filter((p) => p._id.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale17 = arrMales
    ?.filter((p) => p._id.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale18 = arrFemales
    ?.filter((p) => p._id.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale18 = arrMales
    ?.filter((p) => p._id.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);

  let arr1 = [
    -Math.round(totalMale1 * ind),
    -totalMale2 * ind,
    -totalMale3 * ind,
    -totalMale4 * ind,
    -totalMale5 * ind,
    -totalMale6 * ind,
    -totalMale7 * ind,
    -totalMale8 * ind,
    -totalMale9 * ind,
    -totalMale10 * ind,
    -totalMale11 * ind,
    -totalMale12 * ind,
    -totalMale13 * ind,
    -totalMale14 * ind,
    -totalMale15 * ind,
    -totalMale16 * ind,
    -totalMale17 * ind,
    -totalMale18 * ind,
  ];
  let arr2 = [
    Math.round(totalFemale1 * ind),
    Math.round(totalFemale2 * ind),
    Math.round(totalFemale3 * ind),
    Math.round(totalFemale4 * ind),
    Math.round(totalFemale5 * ind),
    Math.round(totalFemale6 * ind),
    Math.round(totalFemale7 * ind),
    Math.round(totalFemale8 * ind),
    totalFemale9 * ind,
    totalFemale10 * ind,
    totalFemale11 * ind,
    totalFemale12 * ind,
    totalFemale13 * ind,
    totalFemale14 * ind,
    totalFemale15 * ind,
    totalFemale16 * ind,
    totalFemale17 * ind,
    totalFemale18 * ind,
  ];
  const options = {
    indexAxis: "y",
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 8,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 0,
          },
        },
      },
    },

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

  const data1 = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr1?.map((x) => Math.round(x)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => Math.round(x)),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data1} />
    </div>
  );
};
export default ChartPyramid;
