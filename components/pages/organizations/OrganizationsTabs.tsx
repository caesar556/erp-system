"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import {
  Users,
  BarChart3,
  MapPin,
  FolderOpen,
  CreditCard,
  Settings,
  Building2,
} from "lucide-react";

const tabs = [
  { value: "overview",      label: "نظرة عامة",         icon: Building2, color: "text-blue-600",   bg: "from-blue-50 to-indigo-50",   border: "border-blue-200",   iconColor: "text-blue-500"   },
  { value: "employees",     label: "الموظفين",           icon: Users,     color: "text-violet-600", bg: "from-violet-50 to-purple-50", border: "border-violet-200", iconColor: "text-violet-500" },
  { value: "reports",       label: "التقارير",           icon: BarChart3, color: "text-emerald-600",bg: "from-emerald-50 to-green-50", border: "border-emerald-200",iconColor: "text-emerald-500"},
  { value: "branches",      label: "الفروع",             icon: MapPin,    color: "text-orange-600", bg: "from-orange-50 to-amber-50",  border: "border-orange-200", iconColor: "text-orange-500" },
  { value: "departments",   label: "الأقسام",            icon: FolderOpen,color: "text-pink-600",   bg: "from-pink-50 to-rose-50",     border: "border-pink-200",   iconColor: "text-pink-500"   },
  { value: "subscription",  label: "الاشتراك",           icon: CreditCard,color: "text-cyan-600",   bg: "from-cyan-50 to-sky-50",      border: "border-cyan-200",   iconColor: "text-cyan-500"   },
  { value: "settings",      label: "الإعدادات",          icon: Settings,  color: "text-slate-600",  bg: "from-slate-50 to-gray-50",    border: "border-slate-200",  iconColor: "text-slate-500"  },
];

function PlaceholderContent({
  icon: Icon,
  title,
  description,
  bg,
  border,
  iconColor,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bg: string;
  border: string;
  iconColor: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{title}</h2>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <div
        className={`bg-gradient-to-br ${bg} border ${border} rounded-2xl p-12 flex flex-col items-center justify-center gap-4`}
      >
        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <p className="text-slate-500 text-sm font-medium">
          سيتم عرض المحتوى هنا قريباً
        </p>
      </div>
    </div>
  );
}

export default function OrganizationsTabs() {
  return (
    <div className="w-full min-h-screen bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            إدارة المؤسسة
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            إدارة شاملة لجميع عمليات مؤسستك
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full space-y-6">

          {/* ── Horizontal scrollable tab bar ── */}
          <div className="overflow-x-auto pb-1">
            <TabsList className="inline-flex flex-row items-center gap-1 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm min-w-max h-auto w-auto">
              {tabs.map(({ value, label, icon: Icon, color }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={`
                    group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                    text-slate-500 bg-transparent border border-transparent
                    hover:bg-slate-100 hover:text-slate-700
                    transition-all duration-150
                    data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:border-slate-900 data-[state=active]:shadow-md
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1
                    whitespace-nowrap
                  `}
                >
                  <Icon className={`w-4 h-4 transition-colors group-data-[state=active]:text-white ${color}`} />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* ── Tab Content Panel ── */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

            <TabsContent value="overview" className="m-0 p-0">
              <div className="p-6 sm:p-8">
                <OverviewTab />
              </div>
            </TabsContent>

            {tabs.slice(1).map(({ value, label, icon, bg, border, iconColor }) => (
              <TabsContent key={value} value={value} className="m-0 p-0">
                <div className="p-6 sm:p-8">
                  <PlaceholderContent
                    icon={icon}
                    title={label}
                    description={`إدارة ${label} الخاصة بمؤسستك`}
                    bg={bg}
                    border={border}
                    iconColor={iconColor}
                  />
                </div>
              </TabsContent>
            ))}

          </div>
        </Tabs>
      </div>
    </div>
  );
}
