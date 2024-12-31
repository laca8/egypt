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
        text: "  اعداد مستخدمين الانترنت",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: " لايستخدم الانترنت",
        backgroundColor: colors[2],
        data:
          arr && JSON.parse(arr)?.map((x) => Number(x[" لايستخدم الانترنت"])),
      },

      {
        label: "يستخدم  الانترنت",
        backgroundColor: colors[3],

        data: arr && JSON.parse(arr)?.map((x) => Number(x["يستخدم  الانترنت"])),
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: " لايستخدم الانترنت",

        data:
          arr && JSON.parse(arr)?.map((x) => Number(x[" لايستخدم الانترنت"])),
      },
      {
        name: "يستخدم  الانترنت",

        data: arr && JSON.parse(arr)?.map((x) => Number(x["يستخدم  الانترنت"])),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: [colors[0], colors[4]],
      legend: {
        show: true,
        position: "top",
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 600,
        labels: {
          colors: "#fff",
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
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
          columnWidth: "90%",
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
        text: "  اعداد مستخدمين الانترنت",

        style: {
          color: "#fff",
          fontSize: "16px",
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
