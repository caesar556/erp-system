"use client";

import StatusCard from "@/components/common/StatusCard";
import {
  User,
  CreditCard,
  TrendingUp,
  Building,
  AlertCircle,
} from "lucide-react";

export default function CustomerStats() {
  const stats = [
    {
      title: "إجمالي العملاء",
      value: 245,
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      Icon: User,
      badgeText: "180 عميل نشط",
      BadgeIcon: User,
      badgeTextColor: "text-blue-100",
    },

    {
      title: "إجمالي المديونيات",
      value: 125000,
      currency: "USD",
      gradient: "bg-gradient-to-br from-rose-500 to-red-600",
      Icon: CreditCard,
      badgeText: "آخر تحديث اليوم",
      BadgeIcon: AlertCircle,
      badgeTextColor: "text-rose-100",
    },

    {
      title: "إجمالي الأرصدة",
      value: 210000,
      currency: "USD",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      Icon: TrendingUp,
      badgeText: "زيادة 8% هذا الشهر",
      BadgeIcon: TrendingUp,
      badgeTextColor: "text-emerald-100",
    },

    {
      title: "عملاء VIP",
      value: 32,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      Icon: Building,
      badgeText: "أفضل العملاء",
      BadgeIcon: Building,
      badgeTextColor: "text-amber-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatusCard key={index} {...stat} />
      ))}
    </div>
  );
}
