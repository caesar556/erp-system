"use client";

import CashflowChart from "@/components/charts/Cashflow-chart";
import ChartCard from "@/components/charts/Chart-card";
import ExpenseChart from "@/components/charts/Expense-chart";
import PaymentMethodsChart from "@/components/charts/PaymentMethods-chart";
import RevenueChart from "@/components/charts/Revenue-chart";
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
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">لوحة التحكم المالية</h1>
        <p className="text-slate-600">مرحباً بك في نظام إدارة المالية الشامل</p>
      </div>

      {/* Primary Financial Metrics */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">المقاييس المالية الرئيسية</h2>
          <p className="text-sm text-slate-500 mt-1">نظرة عامة على الوضع المالي الحالي</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatusCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Revenue and Expenses Grid */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">تحليل الإيرادات والنفقات</h2>
          <p className="text-sm text-slate-500 mt-1">الاتجاهات والتوزيع التفصيلي</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <ChartCard title="اتجاه الإيرادات" description="نمو الإيرادات الشهرية">
            <RevenueChart />
          </ChartCard>

          <ChartCard title="توزيع النفقات" description="توزيع النفقات حسب الفئات">
            <ExpenseChart />
          </ChartCard>
        </div>
      </div>

      {/* Cashflow Analysis */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">تحليل التدفقات النقدية</h2>
          <p className="text-sm text-slate-500 mt-1">المقبوضات مقابل المدفوعات</p>
        </div>
        <ChartCard title="التدفقات النقدية" description="تحليل الواردات والصادرات">
          <CashflowChart />
        </ChartCard>
      </div>

      {/* Additional Metrics Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">مقاييس العمليات والعملاء</h2>
          <p className="text-sm text-slate-500 mt-1">تفاصيل شاملة عن العملاء والعمليات وطرق الدفع</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {additionalStats.map((stat, index) => (
            <StatusCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Payment Methods Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-800">طرق الدفع المستخدمة</h2>
          <p className="text-sm text-slate-500 mt-1">توزيع استخدام طرق الدفع المختلفة</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <ChartCard title="توزيع طرق الدفع" description="نسبة استخدام كل طريقة دفع">
            <PaymentMethodsChart />
          </ChartCard>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">ملخص طرق الدفع</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 font-medium">بطاقة ائتمان</span>
                  </div>
                  <span className="text-slate-900 font-bold">35%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-700 font-medium">تحويل بنكي</span>
                  </div>
                  <span className="text-slate-900 font-bold">28%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span className="text-slate-700 font-medium">محفظة رقمية</span>
                  </div>
                  <span className="text-slate-900 font-bold">22%</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-slate-700 font-medium">نقداً</span>
                  </div>
                  <span className="text-slate-900 font-bold">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-3">إحصائيات سريعة</h3>
              <div className="space-y-2 text-sm text-indigo-800">
                <p>• إجمالي المعاملات: <strong>87,324</strong></p>
                <p>• متوسط قيمة المعاملة: <strong>2,850 جنيه</strong></p>
                <p>• أعلى طريقة استخدام: <strong>بطاقة ائتمان</strong></p>
                <p>• معدل النجاح: <strong>99.8%</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
