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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Culture = ({ arr, colors }) => {
  const options = {
    responsive: true,
    legend: {
      labels: {
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },

    type: "bar",
    scales: {
      x: {
        ticks: {
          color: "white",
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
          color: "white",
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
          color: "white",
          font: {
            size: 14,
            weight: "bold",
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
        text: "عدد الوفيات دون الخامسة",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "ذكور",
        backgroundColor: colors[0],
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"]),
      },

      {
        label: "إناث",
        backgroundColor: colors[1],

        data: arr && JSON.parse(arr)?.map((x) => x["إناث"]),
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "ذكور",
        type: "area",
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"]),
      },

      {
        name: "إناث",
        type: "area",
        data: arr && JSON.parse(arr)?.map((x) => x["إناث"]),
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 430,
      },
      stroke: {
        width: [4, 4],
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      // plotOptions: {
      //   bar: {
      //     horizontal: false,
      //     columnWidth: "100%",
      //     borderRadius: 5,
      //     borderRadiusApplication: "end",
      //   },
      // },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      // stroke: {
      //   show: true,
      //   width: 2,
      //   colors: ["transparent"],
      // },
      xaxis: {
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
        labels: {
          rotate: -90,
          style: {
            colors: "#fff",
            fontSize: "14px",
            tickPlacement: "on",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "10px",
            tickPlacement: "on",
          },
        },
      },
      title: {
        text: "عدد الوفيات دون الخامسة",

        style: {
          color: "#fff",
          fontSize: "14px",
        },
      },
      colors: ["#008FFB", "#FF4560"],
      fill: {
        type: "solid",
        opacity: [0.5, 0.4],
        // type: "image",

        image: {
          src: [
            "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
            "https://cdn-icons-png.flaticon.com/512/fff71/fff71563.png",
          ],
          width: undefined,
          height: undefined,
        },
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 2,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + "";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div style={{ width: "98%", height: "100%" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={360}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Culture;
