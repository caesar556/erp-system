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

export type TransactionType = "CREDIT" | "DEBIT";
export type PaymentMethod = "CASH" | "TRANSFER" | "CHECK";

export interface Transaction {
  _id: string;
  type: TransactionType;
  amount: number;
  description: string;
  paymentMethod: PaymentMethod;
  createdAt: string;
}

export const transactions: Transaction[] = [
  {
    _id: "1",
    type: "CREDIT",
    amount: 12000,
    description: "تحصيل فاتورة شركة النور",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-08",
  },
  {
    _id: "2",
    type: "DEBIT",
    amount: 3500,
    description: "دفع إيجار المكتب",
    paymentMethod: "CASH",
    createdAt: "2026-03-07",
  },
  {
    _id: "3",
    type: "CREDIT",
    amount: 5400,
    description: "تحصيل خدمات استشارية",
    paymentMethod: "CHECK",
    createdAt: "2026-03-07",
  },
  {
    _id: "4",
    type: "DEBIT",
    amount: 2200,
    description: "شراء أدوات مكتبية",
    paymentMethod: "CASH",
    createdAt: "2026-03-06",
  },
  {
    _id: "5",
    type: "CREDIT",
    amount: 9000,
    description: "دفعة مشروع تطوير",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-05",
  },
  {
    _id: "6",
    type: "DEBIT",
    amount: 1800,
    description: "فاتورة الإنترنت",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-05",
  },
];
