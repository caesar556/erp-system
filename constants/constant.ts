import EmployeesTab from "@/components/pages/organizations/tabs/EmployeesTab";
import OverviewTab from "@/components/pages/organizations/tabs/OverviewTab";
import {
  BarChart3,
  Users,
  ShieldCheck,
  Building2,
  MapPin,
  FolderOpen,
  CreditCard,
  Settings,
} from "lucide-react";

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
export const tabs = [
  {
    value: "overview",
    label: "نظرة عامة",
    icon: Building2,
    color: "text-blue-600",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    iconColor: "text-blue-500",
    component: OverviewTab,
  },
  {
    value: "employees",
    label: "الموظفين",
    icon: Users,
    color: "text-violet-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-200",
    iconColor: "text-violet-500",
    component: EmployeesTab,
  },
  {
    value: "reports",
    label: "التقارير",
    icon: BarChart3,
    color: "text-emerald-600",
    bg: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    iconColor: "text-emerald-500",
    component: EmployeesTab,
  },
  {
    value: "branches",
    label: "الفروع",
    icon: MapPin,
    color: "text-orange-600",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    iconColor: "text-orange-500",
    component: EmployeesTab,
  },
  {
    value: "departments",
    label: "الأقسام",
    icon: FolderOpen,
    color: "text-pink-600",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    iconColor: "text-pink-500",
    component: EmployeesTab,
  },
  {
    value: "subscription",
    label: "الاشتراك",
    icon: CreditCard,
    color: "text-cyan-600",
    bg: "from-cyan-50 to-sky-50",
    border: "border-cyan-200",
    iconColor: "text-cyan-500",
    component: EmployeesTab,
  },
  {
    value: "settings",
    label: "الإعدادات",
    icon: Settings,
    color: "text-slate-600",
    bg: "from-slate-50 to-gray-50",
    border: "border-slate-200",
    iconColor: "text-slate-500",
    component: EmployeesTab,
  },
];
