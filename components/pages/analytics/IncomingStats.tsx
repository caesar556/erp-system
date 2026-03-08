import ChartCard from "@/components/charts/Chart-card";
import ExpenseChart from "@/components/charts/Expense-chart";
import RevenueChart from "@/components/charts/Revenue-chart";

export default function IncomingStats() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          تحليل الإيرادات والنفقات
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          الاتجاهات والتوزيع التفصيلي
        </p>
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
  );
}
