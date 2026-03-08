"use client";

import "./chart-config";
import { Pie } from "react-chartjs-2";

export default function ExpenseChart() {
  const data = {
    labels: ["Salaries", "Marketing", "Infrastructure"],

    datasets: [
      {
        data: [12000, 4000, 2500, 1800],

        backgroundColor: ["#6366f1", "#22c55e", "#f59e0b"],

        borderWidth: 0,
      },
    ],
  };

  return <Pie data={data} />;
}
