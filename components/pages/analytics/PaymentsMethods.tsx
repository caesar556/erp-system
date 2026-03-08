import ChartCard from "@/components/charts/Chart-card";
import PaymentMethodsChart from "@/components/charts/PaymentMethods-chart";

export default function PaymentsMethods() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800">
          طرق الدفع المستخدمة
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          توزيع استخدام طرق الدفع المختلفة
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <ChartCard
          title="توزيع طرق الدفع"
          description="نسبة استخدام كل طريقة دفع"
        >
          <PaymentMethodsChart />
        </ChartCard>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">
              ملخص طرق الدفع
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-slate-700 font-medium">
                    بطاقة ائتمان
                  </span>
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
                  <span className="text-slate-700 font-medium">
                    محفظة رقمية
                  </span>
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
            <h3 className="font-semibold text-indigo-900 mb-3">
              إحصائيات سريعة
            </h3>
            <div className="space-y-2 text-sm text-indigo-800">
              <p>
                • إجمالي المعاملات: <strong>87,324</strong>
              </p>
              <p>
                • متوسط قيمة المعاملة: <strong>2,850 جنيه</strong>
              </p>
              <p>
                • أعلى طريقة استخدام: <strong>بطاقة ائتمان</strong>
              </p>
              <p>
                • معدل النجاح: <strong>99.8%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
