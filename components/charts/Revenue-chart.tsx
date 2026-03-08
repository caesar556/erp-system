"use client";

import "./chart-config";
import { Line } from "react-chartjs-2";

export default function RevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],

    datasets: [
      {
        label: "Revenue",

        data: [12000, 15000, 11000, 18000, 21000],

        borderColor: "#6366f1",

        backgroundColor: "rgba(99,102,241,0.15)",

        fill: true,

        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        grid: {
          color: "rgba(200,200,200,0.08)",
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
