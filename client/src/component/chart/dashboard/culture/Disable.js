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
import ReactApexChart from "react-apexcharts";
import { fabClasses } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Culture = ({ arr, colors }) => {
  //   console.log(arr && JSON.parse(arr)?.map((x) => x["المحافظة"]));

  const options = {
    responsive: true,
    legend: {
      labels: {
        color: "#111",
        font: {
          size: 10,
          weight: "bold",
        },
      },
    },

    type: "bar",
    scales: {
      x: {
        ticks: {
          color: "#111",
          font: {
            size: 14,
            weight: "bold",
          },
          minRotation: 90, // This rotates the labels 90 degrees
          maxRotation: 90, // This ensures they don't rotate beyond 90 degrees
        },
      },
      y: {
        ticks: {
          color: "#111",
          font: {
            size: 10,
            weight: "bold",
          },
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#111",
          font: {
            size: 12,
            weight: "bold",
          },
        },
        position: "top",
      },
      title: {
        display: true,
        color: "#111",
        font: {
          size: 10,
          weight: "bold",
        },
        text: "عدد المصريين  في الفئة العمريه (5 - 17) طبقاً لوجود صعوبة ونوعهـا  من تعداد 2017",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة "]),

    datasets: [
      {
        label: "الرؤية ( حتى لوكـان مرتديــاً نظارة )",

        data: arr && JSON.parse(arr)?.map((x) => Number(x["see"])),
      },

      {
        label: "الفهم والتواصل مــع الآخرين_ صعوبة من الكبيرة إلى المطلقة",

        data: arr && JSON.parse(arr)?.map((x) => Number(x["undrstand"])),
      },
      {
        label:
          "  السمــع ( حتى أثناء إستخدام سماعة أذن ) صعوبة من الكبيرة إلى المطلقة",
        backgroundColor: colors[2],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["hear"])),
      },
      {
        label: " التذكر أو التركيز_صعوبة من الكبيرة إلى المطلقة",
        backgroundColor: colors[3],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["rem"])),
      },
      {
        label:
          " رعاية نفسه ( الإستحمام ،اللبــس ، ... )_صعوبة من الكبيرة إلى المطلقة",
        backgroundColor: colors[4],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["him"])),
      },
      {
        label: "المشى أو صعود السلالم_ صعوبة من الكبيرة إلى المطلقة",
        backgroundColor: colors[5],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["walk"])),
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "الرؤية",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["see"])),
      },

      {
        name: "الفهم والتواصل",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["undrstand"])),
      },
      {
        name: "  السمــع",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["hear"])),
      },
      {
        name: " التذكر ",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["rem"])),
      },
      {
        name: " رعاية نفسه ",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["him"])),
      },
      {
        name: "المشى ",
        type: "bar",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["walk"])),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: [
        colors[0],
        colors[4],
        colors[1],
        colors[2],
        colors[3],
        colors[5],
        colors[6],
      ],
      legend: {
        show: true,
        position: "top",
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 600,
        labels: {
          colors: "#111",
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#111",
          radius: 12,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          borderRadius: 3,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },

      xaxis: {
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة "]),

        labels: {
          rotate: -90,
          style: {
            colors: "#111",
            fontSize: "14px",
            tickPlacement: "on",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#111",
            fontSize: "12px",
            tickPlacement: "on",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.01,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 50, 100],
        },
      },
      title: {
        text: "عدد المصريين  في الفئة العمريه (5 - 17) طبقاً لوجود صعوبة ونوعهـا  من تعداد 2017",

        style: {
          color: "#111",
          fontSize: "14px",
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "" + val + "";
          },
        },
      },
    },
  });

  return (
    <>
      <div style={{ width: "99%" }}>
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={430}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
};

export default Culture;
