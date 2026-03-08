"use client";

import HeroAnimation from "@/components/common/LottieAnimation";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="overflow-hidden py-6 px-4  sm:grid sm:grid-cols-2   ">
      {/* Content */}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            ابدأ في إدارة أعمالك بكفاءة واحترافية
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            نظام متكامل لإدارة الحسابات والعمليات المالية، مع تقارير فورية ولوحة
            تحكم سهلة الاستخدام تساعدك على اتخاذ قرارات دقيقة.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/register"
              className="inline-block rounded-sm bg-violet-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-violet-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              ابدأ الآن
            </Link>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-full lg:h-56 w-full sm:h-full">
        <HeroAnimation />
      </div>
    </section>
  );
}
