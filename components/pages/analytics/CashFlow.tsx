import CashflowChart from "@/components/charts/Cashflow-chart";
import ChartCard from "@/components/charts/Chart-card";

export default function CashFlow() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          تحليل التدفقات النقدية
        </h2>
        <p className="text-sm text-slate-500 mt-1">المقبوضات مقابل المدفوعات</p>
      </div>
      <ChartCard
        title="التدفقات النقدية"
        description="تحليل الواردات والصادرات"
      >
        <CashflowChart />
      </ChartCard>
    </div>
  );
}
