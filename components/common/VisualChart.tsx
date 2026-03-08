export default function VisualChart() {
  return (
    <div className="relative rounded-[2.5rem] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
      <div className="flex gap-2 mb-8">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-emerald-400" />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 group/stat hover:border-violet-200 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            المبيعات الشهرية
          </p>
          <p className="text-2xl font-black text-slate-900">
            45,280 <span className="text-sm font-medium opacity-50">ج.م</span>
          </p>
          <div className="mt-2 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
            +12.5% نمو
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 hover:border-violet-200 transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            صافي الأرباح
          </p>
          <p className="text-2xl font-black text-violet-600">
            12,400 <span className="text-sm font-medium opacity-50">ج.م</span>
          </p>
          <div className="mt-2 text-[10px] font-bold text-violet-500 bg-violet-50 px-2 py-0.5 rounded-full inline-block">
            مستقر
          </div>
        </div>
      </div>

      {/* Visual Chart Area */}
      <div className="relative h-48 w-full bg-slate-50/50 rounded-[2rem] border border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 p-6 flex items-end justify-between gap-3">
          {[35, 65, 45, 90, 55, 75, 50, 85].map((h, i) => (
            <div
              key={i}
              className="w-full bg-gradient-to-t from-violet-600 to-violet-400 rounded-xl transition-all duration-700 hover:scale-x-110"
              style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }}
            />
          ))}
        </div>
        <div className="relative z-10 text-slate-400 font-bold text-sm bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-100">
          تحليلات البيانات الذكية
        </div>
      </div>

      {/* Transaction List */}
      <div className="mt-8 space-y-4">
        {[
          {
            name: "شركة الأمل للتوريدات",
            amount: "+ 5,200",
            color: "text-emerald-500",
          },
          {
            name: "فاتورة إيجار المكتب",
            amount: "- 1,500",
            color: "text-slate-400",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 rounded-2xl hover:bg-white transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                {idx + 1}
              </div>
              <span className="text-sm font-bold text-slate-700">
                {item.name}
              </span>
            </div>
            <span className={`text-sm font-black ${item.color}`}>
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
