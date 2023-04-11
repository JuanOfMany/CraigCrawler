import React from "react";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import MiataData from "./MiataData";

import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import faker from "faker";

Chart.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function App() {
  const options = {
    maintainAspectRatio: true,
    aspectRatio: 1,
    display: true,
    responsive: true,
    radius: 5,
    borderWidth: 1,
    hoverBorderWidth: 5,
    hoverRadius: 10,
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        max: 2023,
        ticks: {
          callback: function (label, index, labels) {
            return label;
          },
        },
      },
      y: {
        type: "linear",
        position: "bottom",
        min: 5000,
        ticks: {
          callback: function (label, index, labels) {
            return "$" + label / 1000 + "k";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
        titleAlign: "center",
        bodyAlign: "center",
        callbacks: {
          title: function (TooltipItem, data) {
            return "Year / Price";
          },
          label: function (TooltipItem) {
            let coordinates = TooltipItem.parsed;
            return `${coordinates.x}, $${coordinates.y}`;
          },
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Miata Prices by Year",
        data: MiataData,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return (
    <div className="App">
      <div
        style={{
          width: "40vw",
          position: "relative",
          margin: "auto",
          padding: "1%",
        }}
      >
        <Scatter options={options} data={data} />;
      </div>
    </div>
  );
}
