"use client";

import StatusCard from "@/components/common/StatusCard";
import {
  ArrowDownLeft,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  Wallet,
  History,
} from "lucide-react";

export default function TransactionsStatus() {
  const stats = [
    {
      title: "إجمالي المقبوضات",
      value: 20000,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      Icon: TrendingUp,
      badgeText: "+12.5% منذ الشهر الماضي",
      BadgeIcon: ArrowUpRight,
      badgeTextColor: "text-emerald-100",
    },
    {
      title: "إجمالي المدفوعات",
      value: 1000,
      gradient: "bg-gradient-to-br from-rose-500 to-red-600",
      Icon: TrendingDown,
      badgeText: "تحت الميزانية المقدرة",
      BadgeIcon: ArrowDownLeft,
      badgeTextColor: "text-rose-100",
    },
    {
      title: "رصيد الخزينة المتوفر",
      value: 20000,
      gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
      Icon: Wallet,
      badgeText: "تحديث فوري عبر السحابة",
      BadgeIcon: History,
      badgeTextColor: "text-violet-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
      {stats.map((stat, index) => (
        <StatusCard key={index} {...stat} />
      ))}
    </div>
  );
}
