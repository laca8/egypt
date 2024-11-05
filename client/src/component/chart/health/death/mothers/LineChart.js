import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["2017", "2018", "2019"];

const ChartLine = ({ data1 }) => {
  //console.log(arr1);
  let arrAs = data1
    .filter((c) => c._id.city == "اسوان")
    .sort((a, b) => a._id.year - b._id.year);

  let arrSo = data1
    .filter((c) => c._id.city == "سوهاج ")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSuif = data1
    .filter((c) => c._id.city == "بنى سويف")
    .sort((a, b) => a._id.year - b._id.year);
  let arrFa = data1
    .filter((c) => c._id.city == "الفيوم")
    .sort((a, b) => a._id.year - b._id.year);
  let arrAlex = data1
    .filter((c) => c._id.city == "الاسكندرية")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSaid = data1
    .filter((c) => c._id.city == "بور سعيد ")
    .sort((a, b) => a._id.year - b._id.year);
  let arrSuiz = data1
    .filter((c) => c._id.city == "السويس")
    .sort((a, b) => a._id.year - b._id.year);
  let arrMat = data1
    .filter((c) => c._id.city == "مطروح")
    .sort((a, b) => a._id.year - b._id.year);
  let arrRed = data1
    .filter((c) => c._id.city == "البحر الاحمر")
    .sort((a, b) => a._id.year - b._id.year);
  let arrDa = data1
    .filter((c) => c._id.city == "الدقهلية")
    .sort((a, b) => a._id.year - b._id.year);
  //console.log(arrAs);
  //urban

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Aswan",
        data: arrAs?.map((x) => x.total),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "Sohag",
        data: arrSo?.map((x) => x.total),
        borderColor: "brown",
        backgroundColor: "brown",
      },
      {
        label: "Beni suef",
        data: arrSuif?.map((x) => x.total),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Fayoum",
        data: arrFa?.map((x) => x.total),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Red Sea",
        data: arrRed?.map((x) => x.total),
        borderColor: "gray",
        backgroundColor: "gray",
      },
      {
        label: "Alexandria",
        data: arrAlex?.map((x) => x.total),
        borderColor: "black",
        backgroundColor: "black",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default ChartLine;
