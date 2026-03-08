"use client";

import { features } from "@/constants/constant";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-background via-violet-50/40 to-background dark:via-violet-950/20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">
          المميزات
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          نظام متكامل لإدارة أعمالك المالية بكفاءة واحترافية مع تقارير دقيقة
          وتحكم كامل في العمليات.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.id}
              className="group relative overflow-hidden border border-violet-100 dark:border-violet-900/40 bg-background/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              <CardHeader className="space-y-5 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>

                <CardTitle className="text-xl font-semibold tracking-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 cursor-pointer group-hover:gap-3 transition-all duration-300">
                  <span>اعرف المزيد</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
