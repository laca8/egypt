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
        style: {
          colors: "#fff",
        },
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
      colors: [colors[4], colors[5]],
      plotOptions: {
        series: {
          name: {
            show: true,
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            color: "#fff",
            offsetY: 0,
          },
        },
        bar: {
          distributed: false,
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "all", // 'all', 'last'

          columnWidth: "70%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      title: {
        text: "الازهر",

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
          rotateAlways: false,
          hideOverlappingLabels: true,
          // Increase spacing between labels
          offsetX: 2,
          // Adjust distance between label and axis
          offsetY: 5,
          style: {
            colors: "#fff",
            fontSize: "14px",
            // Add padding between labels
            padding: 5,
          },
        },
        // Increase tick amount to create more space
        tickAmount: 6,
        // Add padding to axis
        axisBorder: {
          offsetX: 0,
          offsetY: 0,
        },
        // Adjust axis padding
        axisTicks: {
          offsetX: 0,
          offsetY: 0,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
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
  // <Line data={data} options={options} />;
};

export default ChartBarStud;
