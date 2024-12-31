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
    responsive: true,
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
        text: "المدارس التجريبي",
      },
    },
  };
  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label: "مدرسون",
        backgroundColor: colors[3],

        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[3],
        tension: 0.1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => -Number(x["مدرسون"].replace(",", ""))),
      },
      {
        label: "الفصول",
        backgroundColor: colors[1],

        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[1],
        tension: 0.1,
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["فصول"].replace(",", ""))),
      },
      {
        label: "مدارس",
        backgroundColor: colors[0],
        // borderWidth: 1,
        // stack: 1,
        fill: false,
        borderColor: colors[0],
        tension: 0.1,
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
        name: "مدرسون",
        data:
          arr &&
          JSON.parse(arr)?.map((x) => Number(x["مدرسون"].replace(",", ""))),
      },
      {
        name: "فصول",
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
      colors: [colors[2], colors[3], colors[4], colors[5]],
      plotOptions: {
        bar: {
          borderRadius: 3,
          // borderRadiusApplication: "end", // 'around', 'end'
          // borderRadiusWhenStacked: "all", // 'all', 'last'
          horizontal: true,
          barHeight: "90%",
          barWidth: "90%",
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
        stepSize: 1,
        labels: {
          style: {
            colors: "#111",
            fontSize: "12px",
            tickPlacement: "on",
          },
        },
      },

      title: {
        text: "التعليم التجريبي",
        labels: {
          style: {
            colors: "#111",
            fontSize: "16px",
            tickPlacement: "on",
          },
        },
      },
      xaxis: {
        categories: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
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
  // <Line data={data} options={options} />;
};

export default ChartBarStud;
