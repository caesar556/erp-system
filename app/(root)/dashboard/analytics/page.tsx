import CashflowChart from "@/components/charts/Cashflow-chart";
import ChartCard from "@/components/charts/Chart-card";
import ExpenseChart from "@/components/charts/Expense-chart";
import RevenueChart from "@/components/charts/Revenue-chart";
import StatusCard from "@/components/common/StatusCard";
import {
  ArrowDownLeft,
  ArrowUpRight,
  History,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

export default function AnalyticsPage() {
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
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Financial Dashboard</h1>

      {/* KPI */}

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatusCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8">
        <ChartCard title="Revenue Trend" description="Monthly revenue growth">
          <RevenueChart />
        </ChartCard>

        <ChartCard title="Expense Distribution">
          <ExpenseChart />
        </ChartCard>
      </div>

      <ChartCard title="Cashflow" description="Money inflow vs outflow">
        <CashflowChart />
      </ChartCard>
    </div>
  );
}
