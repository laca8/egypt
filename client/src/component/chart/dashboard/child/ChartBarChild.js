import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";

import ReactApexChart from "react-apexcharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement
);
const ChartBar = ({ arr, colors, chartTypes }) => {
  //       data:
  //         arr &&
  //         JSON.parse(arr)
  //           ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

  //           ?.map((x) => Number(x["العدد"].replace(",", "").replace(",", ""))),

  //   labels:
  //     arr &&
  //     JSON?.parse(arr)
  //       ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))
  const [state, setState] = React.useState({
    series: [
      {
        data:
          arr &&
          JSON.parse(arr)
            ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

            ?.map((x) => Number(x["العدد"].replace(",", "").replace(",", ""))),
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "80%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories:
          arr &&
          JSON?.parse(arr)
            ?.sort((x, y) => x["المحافظة"].localeCompare(y["المحافظة"], "ar"))

            ?.map((x) => x["المحافظة"]),

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
        text: "أعداد الأطفال",
      },
      yaxis: {
        labels: {
          style: {
            colors: "#111",
            fontSize: "9px",
          },
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
    <>
      <div>
        <div id="chart" style={{ padding: "2px" }}>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={400}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </>
  );
};
export default ChartBar;
