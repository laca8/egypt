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
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

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
    scales: {
      x: {
        ticks: {
          color: "#fff",
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
          color: "#fff",
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
        labels: {
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        text: "التسرب من التعليم المرحلة الأبتدائية",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "ذكور",
        fill: false,
        borderColor: "#008FFB",
        tension: 0.1,
        backgroundColor: "#008FFB",
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"].replace(",", "")),
      },

      {
        label: "إناث",
        backgroundColor: "#FF4560",
        fill: false,
        borderColor: "#FF4560",
        tension: 0.1,
        data: arr && JSON.parse(arr)?.map((x) => -x["إناث"].replace(",", "")),
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "ذكور",
        data: arr && JSON.parse(arr)?.map((x) => x["ذكور"].replace(",", "")),
      },
      {
        name: "إناث",
        data: arr && JSON.parse(arr)?.map((x) => -x["إناث"].replace(",", "")),
      },
    ],
    options: {
      chart: {
        type: "bar",
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
      colors: ["#008FFB", colors[3]],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "all", // 'all', 'last'
          horizontal: false,
          barHeight: "80%",
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

      title: {
        text: "التسرب من التعليم المرحلة الأبتدائية",
        style: {
          color: "#fff",
          fontSize: "16px",
        },
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
            fontSize: "10px",
            tickPlacement: "on",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.2,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100],
        },
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
