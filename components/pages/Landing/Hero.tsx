"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

export default function Hero() {
  const features = [
    "إدارة القيود اليومية وسندات القبض والصرف",
    "تقارير مالية لحظية (ميزانية – أرباح وخسائر)",
    "إدارة العملاء والموردين والخزائن",
    "نظام صلاحيات متعدد الفروع والشركات",
  ];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-50 via-white to-white"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-200/30 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* RIGHT CONTENT (Arabic RTL) */}
          <div className="text-right max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-violet-100 bg-white/80 backdrop-blur-sm text-sm font-semibold text-violet-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              الجيل القادم من أنظمة ERP
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight text-slate-900">
              أدر أعمالك
              <span className="relative inline-block px-2 mr-2">
                <span className="relative z-10 text-violet-600 italic">بذكاء</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-violet-100 -z-10 rounded-sm" />
              </span>
              <span className="block mt-2">من منصة واحدة</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
              حلول سحابية متكاملة للمحاسبة والمخازن وإدارة الموارد البشرية. صُمم خصيصاً لنمو الشركات المتوسطة والصغيرة.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 rounded-xl bg-violet-50 p-2 group-hover:bg-violet-600 transition-colors duration-300">
                    <Check className="h-4 w-4 text-violet-600 group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all hover:-translate-y-1 active:scale-95">
                ابدأ تجربة مجانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl border-2 hover:bg-slate-50 transition-all">
                تحدث مع خبير
              </Button>
            </div>
          </div>

          {/* LEFT SIDE - DASHBOARD VISUAL */}
          <div className="relative group lg:ml-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-[2.5rem] opacity-10 blur-2xl group-hover:opacity-20 transition duration-1000" />
            
            <div className="relative rounded-[2.5rem] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
              {/* Decorative Window Controls */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 group/stat hover:border-violet-200 transition-colors">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    المبيعات الشهرية
                  </p>
                  <p className="text-2xl font-black text-slate-900">45,280 <span className="text-sm font-medium opacity-50">ج.م</span></p>
                  <div className="mt-2 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                    +12.5% نمو
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 hover:border-violet-200 transition-colors">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">صافي الأرباح</p>
                  <p className="text-2xl font-black text-violet-600">12,400 <span className="text-sm font-medium opacity-50">ج.م</span></p>
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
                      style={{ height: `${h}%`, opacity: 0.3 + (i * 0.1) }}
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
                  { name: "شركة الأمل للتوريدات", amount: "+ 5,200", color: "text-emerald-500" },
                  { name: "فاتورة إيجار المكتب", amount: "- 1,500", color: "text-slate-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-2xl hover:bg-white transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-bold text-slate-700">{item.name}</span>
                    </div>
                    <span className={`text-sm font-black ${item.color}`}>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">التقييم</p>
                  <p className="text-sm font-bold text-slate-900">4.9/5 ممتاز</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-12 bg-slate-900 text-white shadow-2xl rounded-2xl px-6 py-3 text-sm font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              أمان بياناتك أولويتنا
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
