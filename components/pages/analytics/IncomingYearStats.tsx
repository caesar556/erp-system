import AnnualProfitLossChart from "@/components/charts/Annual-profit-loss-chart";
import ChartCard from "@/components/charts/Chart-card";

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
      <div className="grid lg:grid-cols-1">
        <ChartCard
          title="اتجاه الإيرادات السنوية"
          description="نمو الإيرادات السنوية"
        >
          <AnnualProfitLossChart />
        </ChartCard>
      </div>
    </div>
  );
}
