"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  FileText,
  TrendingUp,
  Shield,
  RefreshCw,
} from "lucide-react";

interface AIInsightsMainProps {
  treasuryId?: string;
}

const dummyData = {
  generatedAt: new Date().toISOString(),
  executiveSummary:
    "الوضع المالي مستقر بشكل عام مع وجود بعض التحديات في السيولة قصيرة الأجل. الإيرادات مستقرة ولكن المصروفات التشغيلية تحتاج إلى مراجعة.",
  risks: [
    "ارتفاع المصروفات التشغيلية مقارنة بالإيرادات الشهرية",
    "انخفاض السيولة المتاحة في الخزينة",
    "الاعتماد على مصدر دخل واحد",
  ],
  recommendations: [
    "تقليل المصروفات غير الأساسية خلال الربع القادم",
    "تحسين إدارة التدفقات النقدية",
    "تنويع مصادر الإيرادات",
  ],
  fullReport: `
تحليل مالي شامل:

1. الإيرادات مستقرة خلال الفترة الماضية.
2. المصروفات التشغيلية شهدت زيادة بنسبة 12%.
3. السيولة الحالية تكفي لتغطية الالتزامات قصيرة الأجل ولكن بهامش أمان محدود.

التوصية العامة:
تحسين إدارة التدفقات النقدية ومراجعة المصروفات غير الضرورية.
`,
};

export default function AiInsightsMain({ treasuryId }: AIInsightsMainProps) {
  const parsedAdvice = dummyData;

  return (
    <main className="min-h-screen p-4 md:p-8 space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-lg shadow-violet-200">
              <Brain className="h-8 w-8 text-white" />
            </div>
            تحليلات الذكاء الاصطناعي
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">
            احصل على نصائح مالية احترافية مدعومة بالذكاء الاصطناعي
          </p>
        </div>

        <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 gap-2 h-12 px-6 text-lg font-bold shadow-lg shadow-violet-200">
          <RefreshCw className="h-5 w-5" />
          تحديث التحليل
        </Button>
      </div>

      {!treasuryId && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="flex items-center gap-3 py-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
            <p className="text-amber-800 font-medium">
              لا يوجد خزينة متاحة. يرجى إنشاء خزينة أولاً للحصول على التحليلات.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Sparkles className="h-4 w-4 text-violet-500" />
          <span>
            تم إنشاء التقرير في:{" "}
            {new Date(parsedAdvice.generatedAt).toLocaleString("ar-EG", {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </span>
        </div>

        <Card className="border-none shadow-xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6" />
              الملخص التنفيذي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-violet-100">
              {parsedAdvice.executiveSummary}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-none shadow-xl bg-white">
            <CardHeader className="border-b bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-xl font-bold text-amber-700 flex items-center gap-2">
                <Shield className="h-6 w-6" />
                المخاطر المالية
              </CardTitle>
              <CardDescription className="text-amber-600">
                النقاط التي تحتاج إلى اهتمام
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <ul className="space-y-3">
                {parsedAdvice.risks.map((risk, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100"
                  >
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <span className="text-slate-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-white">
            <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardTitle className="text-xl font-bold text-emerald-700 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                التوصيات المحاسبية
              </CardTitle>
              <CardDescription className="text-emerald-600">
                خطوات لتحسين الأداء المالي
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <ul className="space-y-3">
                {parsedAdvice.recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-none shadow-lg bg-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-slate-400" />
              التقرير الكامل
            </CardTitle>
          </CardHeader>

          <CardContent>
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300 font-sans">
              {parsedAdvice.fullReport}
            </pre>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
