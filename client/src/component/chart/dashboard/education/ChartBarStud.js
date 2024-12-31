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
import ReactApexChart from "react-apexcharts";

import axios from "axios";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartBarStud = ({ arr, colors }) => {
  const options = {
    responsive: true,
    type: "bar",
    scales: {
      x: {
        ticks: {
          color: "#111",
          font: {
            size: 10,
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
            size: 14,
            weight: "bold",
          },
        },
        position: "top",
      },
      title: {
        display: true,
        color: "#111",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "التعليم قبل الجامعي",
      },
    },
  };

  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "الفصول",
        backgroundColor: colors[1],

        borderWidth: 1,
        stack: 1,

        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      {
        label: "مدارس",
        backgroundColor: colors[0],
        borderWidth: 1,
        stack: 1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["مدارس"].replace(",", ""))),
      },

      // {
      //   label: "التلاميذ",
      //   backgroundColor: colors[2],

      //   borderWidth: 1,
      //   stack: 1,

      //   data:
      //     arr &&
      //     JSON.parse(arr)?.map((x) => Number(x["تلاميذ"].replace(",", ""))),
      // },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "الفصول",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      {
        name: "مدارس",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["مدارس"].replace(",", ""))),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      colors: [colors[3], colors[2]],
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          // borderRadiusWhenStacked: "last", // 'all', 'last'
          columnWidth: "70%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#111"],
      },
      xaxis: {
        type: "المحافظات",
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
        labels: {
          rotate: -90,
          style: {
            colors: "#111",
            fontSize: "14px",
            tickPlacement: "on",
          },
        },
      },
      title: {
        text: "التعليم قبل الجامعي",

        style: {
          color: "#111",
          fontSize: "16px",
        },
      },

      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <div style={{ width: "99%" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={400}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ChartBarStud;
