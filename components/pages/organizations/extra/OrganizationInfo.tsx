"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Building2,
  Users,
  MapPin,
  CalendarDays,
  Crown,
  Briefcase,
} from "lucide-react";
import { OrganizationsInfoProps } from "@/types/organizations";

export default function OrganizationInformation({
  name,
  industry,
  employees,
  location,
  createdAt,
  plan,
}: OrganizationsInfoProps) {
  return (
    <Card className=" shadow-sm ring-1 ring-slate-200 bg-white/80 backdrop-blur-sm border-none mt-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">معلومات المؤسسة</CardTitle>

        <Badge variant="secondary" className="text-xs">
          {plan}
        </Badge>
      </CardHeader>

      <CardContent className="grid gap-4 flex-wrap grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <InfoBlock
          icon={<Building2 size={18} />}
          label="اسم المؤسسة"
          value={name}
        />

        <InfoBlock
          icon={<Briefcase size={18} />}
          label="نوع النشاط"
          value={industry}
        />

        <InfoBlock
          icon={<Users size={18} />}
          label="عدد الموظفين"
          value={employees.toString()}
        />

        <InfoBlock
          icon={<MapPin size={18} />}
          label="الموقع"
          value={location}
        />

        <InfoBlock
          icon={<CalendarDays size={18} />}
          label="تاريخ الإنشاء"
          value={createdAt}
        />

        <InfoBlock icon={<Crown size={18} />} label="الخطة" value={plan} />
      </CardContent>
    </Card>
  );
}

function InfoBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start shadow-md gap-3 rounded-lg border border-slate-100 bg-purple-50/80 p-4 transition hover:bg-slate-100/60">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm text-slate-600">
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>

        <span className="text-sm font-semibold text-slate-900">{value}</span>
      </div>
    </div>
  );
}
