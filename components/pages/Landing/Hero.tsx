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
      className="relative overflow-hidden py-6 bg-gradient-to-b from-background via-background to-muted/30 border-2 border-green-700"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-right max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border bg-background/60 backdrop-blur text-sm font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              منصة ERP سحابية متكاملة
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              إدارة مالية ذكية
              <span className="block text-primary mt-3">
                لشركتك في مكان واحد
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              نظام ERP احترافي لإدارة الحسابات، العملاء، الموردين، والخزينة مع
              تقارير مالية فورية تساعدك على اتخاذ قرارات دقيقة مبنية على بيانات
              حقيقية.
            </p>

            {/* Features */}
            <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-muted-foreground">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 bg-background/60 backdrop-blur p-3 rounded-xl border hover:shadow-md transition"
                >
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group px-8 text-base shadow-md">
                ابدأ مجانًا
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>

              <Button size="lg" variant="outline" className="px-8 text-base">
                عرض توضيحي
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - DASHBOARD MOCKUP */}
          <div className="relative">
            <div className="rounded-3xl border bg-background/70 backdrop-blur-xl shadow-2xl p-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div className="text-sm font-semibold">لوحة التحكم المالية</div>
                <div className="text-xs text-muted-foreground">تحديث مباشر</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/40 p-4 rounded-2xl border">
                  <p className="text-xs text-muted-foreground">
                    إجمالي الإيرادات
                  </p>
                  <p className="text-xl font-bold mt-2">245,000 ج.م</p>
                </div>

                <div className="bg-muted/40 p-4 rounded-2xl border">
                  <p className="text-xs text-muted-foreground">صافي الربح</p>
                  <p className="text-xl font-bold mt-2 text-emerald-600">
                    82,300 ج.م
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="h-36 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border flex items-end p-4">
                <div className="w-full grid grid-cols-7 gap-2 items-end">
                  {[40, 60, 35, 70, 55, 80, 65].map((h, i) => (
                    <div
                      key={i}
                      className="bg-primary/40 rounded-md"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>دفعة من عميل</span>
                  <span className="text-emerald-600">+12,000 ج.م</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>مصروف تشغيل</span>
                  <span className="text-red-500">-4,500 ج.م</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>تحصيل فاتورة</span>
                  <span className="text-emerald-600">+8,200 ج.م</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-full px-5 py-2 text-sm backdrop-blur">
              🔒 أمان عالي وتشفير كامل
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
