"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Faqs() {
  const faqs = [
    {
      question: "ما هو نظام إدارة الأعمال؟",
      answer:
        "هو نظام متكامل لإدارة العمليات المحاسبية والمالية، مع دعم كامل لإدارة العملاء والموردين والخزينة والتقارير المالية الفورية.",
    },
    {
      question: "هل يدعم النظام تعدد الفروع والصلاحيات؟",
      answer:
        "نعم، يدعم النظام إدارة عدة فروع مع نظام صلاحيات متقدم يسمح بالتحكم الكامل في أدوار المستخدمين.",
    },
    {
      question: "هل يمكن استخراج تقارير مالية دقيقة؟",
      answer:
        "يوفر النظام تقارير احترافية مثل الميزانية العمومية، الأرباح والخسائر، والتدفقات النقدية بدقة عالية وفي الوقت الفعلي.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            كل ما تحتاج معرفته قبل استخدام النظام
          </p>
        </div>

        {/* Card Container */}
        <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6 transition-all duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-right">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-right">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
