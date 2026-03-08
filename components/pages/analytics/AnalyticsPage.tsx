"use client";

import StatusCard from "@/components/common/StatusCard";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
  ShoppingCart,
} from "lucide-react";
import PaymentsMethods from "./PaymentsMethods";
import HeaderBox from "@/components/common/HeaderBox";
import IncomingStats from "./IncomingStats";
import CashFlow from "./CashFlow";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "إجمالي المقبوضات",
      value: 250000,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      Icon: TrendingUp,
      badgeText: "+12.5% منذ الشهر الماضي",
      BadgeIcon: ArrowUpRight,
      badgeTextColor: "text-emerald-100",
    },
    {
      title: "إجمالي المدفوعات",
      value: 180000,
      gradient: "bg-gradient-to-br from-rose-500 to-red-600",
      Icon: TrendingDown,
      badgeText: "-5.2% أقل من الشهر الماضي",
      BadgeIcon: ArrowDownLeft,
      badgeTextColor: "text-rose-100",
    },
    {
      title: "رصيد الخزينة المتوفر",
      value: 520000,
      gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
      Icon: Wallet,
      badgeText: "تحديث فوري عبر السحابة",
      BadgeIcon: ArrowUpRight,
      badgeTextColor: "text-violet-100",
    },
  ];

  const additionalStats = [
    {
      title: "عدد العملاء",
      value: 1248,
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      Icon: Users,
      badgeText: "+8.3% منذ الشهر الماضي",
      BadgeIcon: ArrowUpRight,
      badgeTextColor: "text-blue-100",
    },
    {
      title: "عدد العمليات",
      value: 3842,
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      Icon: ShoppingCart,
      badgeText: "+15.6% منذ الشهر الماضي",
      BadgeIcon: ArrowUpRight,
      badgeTextColor: "text-orange-100",
    },
    {
      title: "طرق الدفع النشطة",
      value: 4,
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      Icon: CreditCard,
      badgeText: "بطاقة ائتمان، تحويل بنكي، محفظة رقمية، نقداً",
      BadgeIcon: ArrowDownLeft,
      badgeTextColor: "text-pink-100",
    },
  ];

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <HeaderBox />
      {/* Primary Financial Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">
            المقاييس المالية الرئيسية
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            نظرة عامة على الوضع المالي الحالي
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatusCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Revenue and Expenses Grid */}
      <IncomingStats />

      {/* Cashflow Analysis */}
      <CashFlow />

      {/* Additional Metrics Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">
            مقاييس العمليات والعملاء
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            تفاصيل شاملة عن العملاء والعمليات وطرق الدفع
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {additionalStats.map((stat, index) => (
            <StatusCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Payment Methods Section */}
      <PaymentsMethods />
    </div>
  );
}
