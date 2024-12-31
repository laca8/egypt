import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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

const Sport = ({ arr, colors }) => {
  const options = {
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
    responsive: true,

    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "الرياضة",
        color: "white",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  };

  const data = {
    labels: arr && JSON.parse(arr)?.map((x) => x["المحافظة"]),
    datasets: [
      {
        label: "اجمالى الاندیه",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى الاندیه"])),
        backgroundColor: colors[0],
      },
      {
        label: "اجمالى مراكز الشباب",
        data:
          arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى مراكز الشباب"])),
        backgroundColor: colors[1],
      },
    ],
  };
  const [state, setState] = React.useState({
    series: [
      {
        style: {
          color: "#fff",
        },

        name: "اجمالى الاندیه",
        data: arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى الاندیه"])),
      },
      {
        name: "اجمالى مراكز الشباب",
        data:
          arr && JSON.parse(arr)?.map((x) => Number(x["اجمالى مراكز الشباب"])),
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
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "90%",
          distributed: true,
          borderRadius: 5,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "all", // 'all', 'last'
        },
      },
      dataLabels: {
        enabled: false,
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
            colors: "#fff",
            fontSize: "14px",
            tickPlacement: "on",
          },
        },
      },

      title: {
        text: "الرياضة",
        style: {
          color: "#fff",
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "9px",
          },
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
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
      <div style={{ width: "97%" }}>
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
export default Sport;
