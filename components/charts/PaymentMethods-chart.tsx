"use client";

import "./chart-config";
import { Doughnut } from "react-chartjs-2";

export default function PaymentMethodsChart() {
  const data = {
    labels: ["Credit Card", "Bank Transfer", "Digital Wallet", "Cash"],

    datasets: [
      {
        data: [35, 28, 22, 15],

        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
        ],

        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          font: {
            size: 13,
            weight: "500" as const,
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return context.label + ": " + context.parsed + "%";
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
