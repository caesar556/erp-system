"use client";

import "../charts/chart-config";
import { Line } from "react-chartjs-2";

export default function AnnualProfitLossChart() {
  const data = {
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"],

    datasets: [
      {
        label: "Profit",

        data: [12000, 18000, 15000, 22000, 27000, 31000],

        borderColor: "#22c55e",

        backgroundColor: "rgba(34,197,94,0.15)",

        fill: true,

        tension: 0.4,

        pointRadius: 4,
      },

      {
        label: "Loss",

        data: [8000, 9000, 6000, 7000, 5000, 4500],

        borderColor: "#ef4444",

        backgroundColor: "rgba(239,68,68,0.15)",

        fill: true,

        tension: 0.4,

        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top" as const,
      },

      tooltip: {
        mode: "index" as const,
        intersect: false,
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
