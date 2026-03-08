import { BarChart3, Users, ShieldCheck } from "lucide-react";

export const navLinks = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
  },
  {
    id: "features",
    label: "المميزات",
    href: "#features",
  },
  {
    id: "faqs",
    label: "الأسئلة الشائعة",
    href: "#faqs",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "تقارير مالية متقدمة",
    description:
      "احصل على تقارير لحظية مثل الميزانية العمومية، الأرباح والخسائر، والتدفقات النقدية بدقة ووضوح.",
    icon: BarChart3,
  },
  {
    id: "feature-2",
    title: "إدارة العملاء والموردين",
    description:
      "نظام متكامل لإدارة حسابات العملاء والموردين وتتبع الأرصدة والمعاملات بسهولة.",
    icon: Users,
  },
  {
    id: "feature-3",
    title: "نظام صلاحيات آمن",
    description:
      "تحكم كامل في صلاحيات المستخدمين مع دعم تعدد الفروع ومستويات الوصول المختلفة.",
    icon: ShieldCheck,
  },
];
