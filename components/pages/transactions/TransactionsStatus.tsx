"use client";

import StatusCard from "@/components/common/StatusCard";
import { TransactionStats } from "@/constants/stats";


export default function TransactionsStatus() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
      {TransactionStats.map((stat, index) => (
        <StatusCard key={index} {...stat} />
      ))}
    </div>
  );
}
