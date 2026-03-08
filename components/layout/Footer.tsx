"use client";

import { Brain, Facebook, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-violet-50/40 dark:to-violet-950/20 border-t border-violet-100 dark:border-violet-900/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400">
              <Brain className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight">
                نظام إدارة الأعمال
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              منصة متكاملة لإدارة الحسابات والتقارير المالية باحترافية، تمنحك
              رؤية دقيقة وتحكم كامل في عملياتك اليومية.
            </p>

            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 hover:scale-110 hover:bg-violet-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">روابط سريعة</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    المميزات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">الدعم</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-violet-600 transition">
                    الشروط والأحكام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-violet-100 dark:border-violet-900/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} جميع الحقوق محفوظة — نظام إدارة الأعمال
        </div>
      </div>
    </footer>
  );
}
