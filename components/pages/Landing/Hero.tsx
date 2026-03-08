"use client";

import VisualChart from "@/components/common/VisualChart";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Shield } from "lucide-react";

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
      className="relative overflow-hidden pt-20 pb-16 lg:pt-24  lg:pb-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-50 via-white to-white"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-200/30 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-right max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-violet-100 bg-white/80 backdrop-blur-sm text-sm font-semibold text-violet-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              الجيل القادم من أنظمة ERP
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight text-slate-900">
              أدر أعمالك
              <span className="relative inline-block px-2 mr-2">
                <span className="relative z-10 text-violet-600 italic">
                  بذكاء
                </span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-violet-100 -z-10 rounded-sm" />
              </span>
              <span className="block mt-2">من منصة واحدة</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
              حلول سحابية متكاملة للمحاسبة والمخازن وإدارة الموارد البشرية. صُمم
              خصيصاً لنمو الشركات المتوسطة والصغيرة.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 rounded-xl bg-violet-50 p-2 group-hover:bg-violet-600 transition-colors duration-300">
                    <Check className="h-4 w-4 text-violet-600 group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold rounded-2xl bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all hover:-translate-y-1 active:scale-95"
              >
                ابدأ تجربة مجانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg font-bold rounded-2xl border-2 hover:bg-slate-50 transition-all"
              >
                المزيد من التفاصيل
              </Button>
            </div>
          </div>

          <div className="relative group lg:ml-auto w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500 to-blue-500 rounded-[2.5rem] opacity-10 blur-2xl group-hover:opacity-20 transition duration-1000" />

            <VisualChart />
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white border border-slate-100 shadow-xl rounded-2xl p-4 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">
                    التقييم
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    4.9/5 ممتاز
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-12 bg-violet-700 text-white shadow-2xl rounded-2xl px-6 py-3 text-sm font-bold flex items-center gap-2">
              <Shield className="text-emerald-400 animate-pulse" />
              أمان بياناتك أولويتنا
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
