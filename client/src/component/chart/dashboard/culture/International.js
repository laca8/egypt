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
import { Bar, Line } from "react-chartjs-2";
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
  // console.log(arr);
  // console.log(JSON.parse(arr)?.map((x) => Number(x["النسب"].split("%")[0])));
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

    type: "line",
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
        text: "نسب المصريين المستخدمين للانترنت",
      },
    },
  };
  const data = {
    labels:
      arr &&
      JSON.parse(arr)
        ?.sort((a, b) => a["المحافظة"] - b["المحافظة"])
        ?.map((x) => x["المحافظة"]),

    datasets: [
      {
        label:
          "نسب المصريين من (17:4 سنة) طبقاً لإستخــدام الفرد للانترنت تعداد 2017",

        data:
          arr &&
          JSON.parse(arr)
            ?.sort((a, b) => -b["المحافظة"] - a["المحافظة"])

            ?.map((x) => Number(x["النسب"].split("%")[0])),
        borderColor: colors[2],
        backgroundColor: colors[2],
        pointBackgroundColor: colors[2],
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        name: "نسب المصريين من (17:4 سنة) طبقاً لإستخــدام الفرد للانترنت تعداد 2017",
        type: "line",

        data:
          arr &&
          JSON.parse(arr)
            ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

            ?.map((x) => Number(x["النسب"].split("%")[0])),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
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
      legend: {
        show: true,
        position: "top",
        fontSize: "12px",
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

      title: {
        text: "نسب المصريين المستخدمين للانترنت",

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
      // fill: {
      //   type: "solid",
      //   opacity: [0.5, 0.4],
      //   // type: "image",

      //   image: {
      //     src: [
      //       "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
      //       "https://cdn-icons-png.flaticon.com/512/fff71/fff71563.png",
      //     ],
      //     width: undefined,
      //     height: undefined,
      //   },
      //   pattern: {
      //     style: "verticalLines",
      //     width: 6,
      //     height: 6,
      //     strokeWidth: 2,
      //   },
      // },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + "%";
            }
            return y;
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
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

export default Culture;
