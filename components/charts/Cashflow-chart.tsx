"use client"

import "./chart-config"
import { Bar } from "react-chartjs-2"

export default function CashflowChart() {

  const data = {

    labels: ["Jan", "Feb", "Mar", "Apr", "May"],

    datasets: [
      {
        label: "Inflow",
        data: [12000, 15000, 11000, 18000, 21000],
        backgroundColor: "#22c55e",
        borderRadius: 6,
      },

      {
        label: "Outflow",
        data: [8000, 7000, 9000, 10000, 11000],
        backgroundColor: "#ef4444",
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  }

  return <Bar data={data} options={options} />
}