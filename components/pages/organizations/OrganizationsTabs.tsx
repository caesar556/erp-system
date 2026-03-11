"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrganizationsTabs() {
  return (
    <div dir="rtl" className="w-full">
      <Tabs defaultValue="overview" className="w-full space-y-6">
        {/* Tabs Header */}
        <TabsList className="w-full flex flex-wrap gap-2 bg-muted/50 p-2 rounded-xl">
          <TabsTrigger
            value="overview"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            نظرة عامة
          </TabsTrigger>

          <TabsTrigger
            value="employees"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            الموظفين
          </TabsTrigger>

          <TabsTrigger
            value="reports"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            التقارير
          </TabsTrigger>

          <TabsTrigger
            value="branches"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            الفروع
          </TabsTrigger>

          <TabsTrigger
            value="departments"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            الأقسام
          </TabsTrigger>

          <TabsTrigger
            value="subscription"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            الاشتراك
          </TabsTrigger>

          <TabsTrigger
            value="settings"
            className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-white data-[state=active]:shadow"
          >
            الإعدادات
          </TabsTrigger>
        </TabsList>

        {/* Content */}
        <TabsContent value="overview">نظرة عامة</TabsContent>
        <TabsContent value="employees">الموظفين</TabsContent>
        <TabsContent value="reports">التقارير</TabsContent>
        <TabsContent value="branches">الفروع</TabsContent>
        <TabsContent value="departments">الأقسام</TabsContent>
        <TabsContent value="subscription">تفاصيل الاشتراك</TabsContent>
        <TabsContent value="settings">إعدادات المؤسسة</TabsContent>
      </Tabs>
    </div>
  );
}
