import { StatCardProps } from "@/types/common";
import {
  ArrowDownLeft,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  Wallet,
  History,
  User,
  CreditCard,
  AlertCircle,
  Building,
  Users,
  Building2,
  GitBranch,
  Briefcase,
  Activity,
} from "lucide-react";

export const TransactionStats: StatCardProps[] = [
  {
    title: "إجمالي المقبوضات",
    value: 20000,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    Icon: TrendingUp,
    badgeText: "+12.5% منذ الشهر الماضي",
    BadgeIcon: ArrowUpRight,
    badgeTextColor: "text-emerald-100",
  },
  {
    title: "إجمالي المدفوعات",
    value: 1000,
    gradient: "bg-gradient-to-br from-rose-500 to-red-600",
    Icon: TrendingDown,
    badgeText: "تحت الميزانية المقدرة",
    BadgeIcon: ArrowDownLeft,
    badgeTextColor: "text-rose-100",
  },
  {
    title: "رصيد الخزينة المتوفر",
    value: 20000,
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
    Icon: Wallet,
    badgeText: "تحديث فوري عبر السحابة",
    BadgeIcon: History,
    badgeTextColor: "text-violet-100",
  },
];

export const CustomersInfo: StatCardProps[] = [
  {
    title: "إجمالي العملاء",
    value: 245,
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    Icon: User,
    badgeText: "180 عميل نشط",
    BadgeIcon: User,
    badgeTextColor: "text-blue-100",
  },

  {
    title: "إجمالي المديونيات",
    value: 125000,
    currency: "USD",
    gradient: "bg-gradient-to-br from-rose-500 to-red-600",
    Icon: CreditCard,
    badgeText: "آخر تحديث اليوم",
    BadgeIcon: AlertCircle,
    badgeTextColor: "text-rose-100",
  },

  {
    title: "إجمالي الأرصدة",
    value: 210000,
    currency: "USD",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    Icon: TrendingUp,
    badgeText: "زيادة 8% هذا الشهر",
    BadgeIcon: TrendingUp,
    badgeTextColor: "text-emerald-100",
  },

  {
    title: "عملاء VIP",
    value: 32,
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    Icon: Building,
    badgeText: "أفضل العملاء",
    BadgeIcon: Building,
    badgeTextColor: "text-amber-100",
  },
];

export const OrganizationOverviewStats: StatCardProps[] = [
  {
    title: "عدد الموظفين",
    value: 128,
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    Icon: Users,
    badgeText: "+5 موظفين هذا الشهر",
    BadgeIcon: ArrowUpRight,
    badgeTextColor: "text-blue-100",
  },

  {
    title: "عدد الفروع",
    value: 6,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    Icon: Building2,
    badgeText: "3 مدن مختلفة",
    BadgeIcon: GitBranch,
    badgeTextColor: "text-emerald-100",
  },

  {
    title: "الأقسام",
    value: 12,
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-700",
    Icon: Briefcase,
    badgeText: "هيكل تنظيمي نشط",
    BadgeIcon: Activity,
    badgeTextColor: "text-violet-100",
  },

  {
    title: "المستخدمون النشطون",
    value: 94,
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    Icon: Users,
    badgeText: "نشاط مرتفع اليوم",
    BadgeIcon: Activity,
    badgeTextColor: "text-amber-100",
  },
];
