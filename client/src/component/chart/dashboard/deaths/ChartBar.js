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
  console.log(arr && JSON.parse(arr)?.map((x) => x["الوفيات"]));
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
        position: "top",
      },
      title: {
        display: true,
        color: "white",
        font: {
          size: 14,
          weight: "bold",
          color: "white",
        },
        text: "المواليد والوفيات",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "المواليد",
        backgroundColor: colors[3],
        data: arr && JSON.parse(arr)?.map((x) => Number(x["المواليد"])),
      },

      {
        label: "الوفيات",
        backgroundColor: colors[2],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["الوفيات"])),
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "المواليد",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["المواليد"])),
      },
      {
        name: "الوفيات",

        data: arr && JSON.parse(arr)?.map((x) => -Number(x["الوفيات"])),
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 440,
        stacked: true,
      },
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
      colors: [colors[1], colors[4]],
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
      yaxis: {
        title: {
          text: "المحافظات",
        },
      },

      title: {
        display: true,
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "المواليد والوفيات",
      },
      xaxis: {
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
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
    },
  });

  return (
    <div style={{ width: "97%" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={440}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ChartBarStud;
