import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { Card } from "react-bootstrap";
import { Button, CardContent, CardHeader, Input } from "@mui/material";

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [data, setData] = useState([
    { month: "يناير", value: 400 },
    { month: "فبراير", value: 300 },
    { month: "مارس", value: 600 },
    { month: "ابريل", value: 800 },
  ]);

  const [chartType, setChartType] = useState("line");
  const [chartColor, setChartColor] = useState("#8884d8");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const chartTypes = [
    { value: "line", label: "خط" },
    { value: "bar", label: "أعمدة" },
    { value: "radar", label: "رادار" },
    { value: "pie", label: "دائري" },
    { value: "polarArea", label: "مساحة قطبية" },
    { value: "doughnut", label: "حلقي" },
  ];

  const colors = [
    { value: "#8884d8", label: "بنفسجي" },
    { value: "#82ca9d", label: "أخضر" },
    { value: "#ffc658", label: "أصفر" },
    { value: "#ff7300", label: "برتقالي" },
    { value: "#ff0000", label: "أحمر" },
  ];

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const newChartInstance = new Chart(ctx, {
      type: chartType,
      data: {
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: "البيانات",
            data: data.map((item) => item.value),
            backgroundColor: chartColor + "40", // إضافة شفافية للخلفية
            borderColor: chartColor,
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            rtl: true,
            labels: {
              font: {
                family: "Arial",
              },
            },
          },
        },
        scales:
          chartType === "line" || chartType === "bar"
            ? {
                y: {
                  beginAtZero: true,
                  position: "right",
                },
                x: {
                  reverse: true,
                },
              }
            : undefined,
      },
    });

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [data, chartType, chartColor]);

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditValue(data[index].value.toString());
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <h1>رسم بياني تفاعلي</h1>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex space-x-4 space-x-reverse">
          <div className="flex flex-col space-y-2">
            <label className="text-sm">نوع الرسم البياني</label>
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="p-2 border rounded">
              {chartTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm">اللون</label>
            <select
              value={chartColor}
              onChange={(e) => setChartColor(e.target.value)}
              className="p-2 border rounded">
              {colors.map((color) => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
