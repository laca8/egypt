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
import { Bar, Line } from "react-chartjs-2";
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
    indexAxis: "y",

    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "white",
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
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 10,
          },
        },
        position: "top",
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "الأزهر",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "المعاهد",
        backgroundColor: colors[3],

        type: "bar",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(-x["معاهد"].replace(",", ""))),
      },
      {
        label: "الفصول",
        backgroundColor: colors[2],
        fill: false,
        borderColor: colors[2],
        tension: 0.1,
        type: "bar",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      // {
      //   label: "التلاميذ",
      //   backgroundColor: colors[2],
      //   fill: false,
      //   borderColor: colors[2],
      //   tension: 0.1,
      //   type: "line",

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
        name: "المعاهد",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(-x["معاهد"].replace(",", ""))),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 440,
        stacked: true,
      },
      colors: [colors[0], colors[1]],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "all", // 'all', 'last'
          horizontal: true,
          barHeight: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      // xaxis: {
      //   rotate: -90,

      //   labels: {
      //     style: {
      //       colors: "#fff",
      //       fontSize: "14px",
      //       tickPlacement: "on",
      //     },
      //   },
      // },

      title: {
        text: "الازهر",

        style: {
          color: "#fff",
          fontSize: "14px",
        },
      },
      xaxis: {
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            tickPlacement: "on",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "14px",
            tickPlacement: "on",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  });

  return (
    <div style={{ width: "97%" }}>
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
  // <Line data={data} options={options} />;
};

export default ChartBarStud;
