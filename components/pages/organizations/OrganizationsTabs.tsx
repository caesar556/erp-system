"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/constants/constant";

export default function OrganizationsTabs() {
  return (
    <div className="w-full bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Tabs defaultValue={tabs[0].value} className="space-y-6">
          <div className="overflow-x-auto flex justify-center pb-1">
            <TabsList className="inline-flex items-center gap-1 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm min-w-max">
              {tabs.map(({ value, label, icon: Icon, color }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="
                    group inline-flex items-center gap-2 px-4 py-2.5
                    rounded-xl text-sm font-medium whitespace-nowrap
                    text-slate-500 border border-transparent
                    hover:bg-slate-100 hover:text-slate-700
                    transition-all duration-150
                    data-[state=active]:bg-violet-800
                    data-[state=active]:text-white
                    data-[state=active]:border-violet-800
                    data-[state=active]:shadow-md
                  "
                >
                  <Icon
                    className={`w-4 h-4 transition-colors group-data-[state=active]:text-white ${color}`}
                  />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="rounded-2xl bg-gray-200 shadow-sm overflow-hidden ">
            {tabs.map(({ value, component: Component }) => (
              <TabsContent key={value} value={value} className="m-0">
                <div className="p-6">
                  <Component />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
