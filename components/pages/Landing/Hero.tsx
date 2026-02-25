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
      className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32 bg-white"
    >
      {/* Static soft background blobs (no animation) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CONTENT */}
          <div className="text-right max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              منصة ERP سحابية متكاملة
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight text-slate-900">
              أدر أعمالك
              <span className="text-violet-600 block sm:inline sm:mr-3">بذكاء وكفاءة</span>
              <span className="block mt-1 sm:mt-2 text-slate-800">من مكان واحد</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
              نظام متكامل لإدارة الحسابات، المستودعات، والموارد البشرية. صُمم ليوفر لك الوقت والجهد في إدارة مؤسستك.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100 hover:border-violet-200 hover:bg-white transition-colors duration-200"
                >
                  <div className="flex-shrink-0 rounded-lg bg-violet-100 p-1.5">
                    <Check className="h-4 w-4 text-violet-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-100">
                ابدأ الآن مجاناً
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl border-slate-200 hover:bg-slate-50">
                مشاهدة فيديو الشرح
              </Button>
            </div>
          </div>

          {/* DASHBOARD VISUAL */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-3xl border border-slate-200 bg-white shadow-2xl p-4 sm:p-6 overflow-hidden">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-slate-100" />
                  <div className="h-3 w-24 bg-slate-100 rounded" />
                </div>
                <div className="h-3 w-16 bg-slate-50 rounded" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">المبيعات</p>
                  <p className="text-xl font-black text-slate-900">45,280 <span className="text-[10px] font-medium">ج.م</span></p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">الأرباح</p>
                  <p className="text-xl font-black text-violet-600">12,400 <span className="text-[10px] font-medium">ج.م</span></p>
                </div>
              </div>

              {/* Static Bar Chart */}
              <div className="h-40 w-full bg-slate-50 rounded-2xl p-4 flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 60, 80, 55].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-violet-200 rounded-t-lg"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Recent Entries */}
              <div className="mt-6 space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex justify-between items-center p-2 rounded-lg bg-white border border-slate-50">
                    <div className="h-2 w-24 bg-slate-100 rounded" />
                    <div className="h-2 w-12 bg-slate-50 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 right-8 bg-slate-900 text-white rounded-xl px-4 py-2 text-xs font-bold shadow-xl">
              دقة 100% في التقارير
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
