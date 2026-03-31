"use client";

import StatusCard from "@/components/common/StatusCard";
import { CustomersInfo } from "@/constants/stats";

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CustomersInfo.map((stat, index) => (
        <StatusCard key={index} {...stat} />
      ))}
    </div>
  );
}
