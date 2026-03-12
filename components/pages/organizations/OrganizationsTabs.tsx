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

export default function OrganizationsTabs() {
  const tabs = [
    {
      value: "overview",
      label: "نظرة عامة",
      icon: Building2,
      description: "معلومات عامة عن المؤسسة",
    },
    {
      value: "employees",
      label: "الموظفين",
      icon: Users,
      description: "إدارة الموظفين والفريق",
    },
    {
      value: "reports",
      label: "التقارير",
      icon: BarChart3,
      description: "التقارير والإحصائيات",
    },
    {
      value: "branches",
      label: "الفروع",
      icon: MapPin,
      description: "إدارة الفروع والمقرات",
    },
    {
      value: "departments",
      label: "الأقسام",
      icon: FolderOpen,
      description: "إدارة الأقسام التنظيمية",
    },
    {
      value: "subscription",
      label: "الاشتراك",
      icon: CreditCard,
      description: "تفاصيل الاشتراك والدفع",
    },
    {
      value: "settings",
      label: "الإعدادات",
      icon: Settings,
      description: "إعدادات المؤسسة",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="w-full">
          {/* Modern Tab Navigation */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                  إدارة المؤسسة
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                  إدارة شاملة لجميع عمليات مؤسستك وإدارة الموارد
                </p>
              </div>
            </div>

            {/* Tabs List with Modern Design */}
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 bg-transparent p-0 h-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="group flex flex-col items-center gap-2 px-3 py-3 rounded-xl border-2 border-transparent bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 data-[state=active]:border-blue-500 data-[state=active]:bg-blue-50 data-[state=active]:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <IconComponent className="w-5 h-5 text-slate-600 group-data-[state=active]:text-blue-600 transition-colors" />
                    <span className="text-xs font-semibold text-slate-700 group-data-[state=active]:text-blue-700 text-center leading-tight">
                      {tab.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Tab Content with Professional Styling */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <TabsContent value="overview" className="p-0">
              <div className="p-6 sm:p-8">
                <OverviewTab />
              </div>
            </TabsContent>

            <TabsContent value="employees" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      الموظفين
                    </h2>
                    <p className="text-slate-600">
                      قم بإدارة جميع موظفيك وتعيينهم إلى الأقسام والفروع المختلفة.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض قائمة الموظفين هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      التقارير والإحصائيات
                    </h2>
                    <p className="text-slate-600">
                      عرض تحليلي شامل لأداء مؤسستك والإحصائيات المهمة.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 text-center">
                    <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض التقارير والإحصائيات هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="branches" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      الفروع والمقرات
                    </h2>
                    <p className="text-slate-600">
                      إدارة جميع فروع ومقرات مؤسستك الجغرافية.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-8 text-center">
                    <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض الفروع والمقرات هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="departments" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      الأقسام التنظيمية
                    </h2>
                    <p className="text-slate-600">
                      تنظيم وإدارة أقسام مؤسستك الداخلية.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8 text-center">
                    <FolderOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض الأقسام هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subscription" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      خطة الاشتراك والدفع
                    </h2>
                    <p className="text-slate-600">
                      إدارة اشتراكك والفواتير والدفع.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
                    <CreditCard className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض تفاصيل الاشتراك هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="p-0">
              <div className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      إعدادات المؤسسة
                    </h2>
                    <p className="text-slate-600">
                      قم بتعديل إعدادات مؤسستك والتفضيلات العامة.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-8 text-center">
                    <Settings className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <p className="text-slate-600">
                      سيتم عرض الإعدادات هنا قريباً
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
