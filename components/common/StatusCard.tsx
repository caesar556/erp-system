"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  currency?: string;
  gradient: string;
  Icon: LucideIcon;
  badgeText: string;
  BadgeIcon: LucideIcon;
  badgeTextColor: string;
}

export default function StatusCard({
  title,
  value,
  currency,
  gradient,
  Icon,
  badgeText,
  BadgeIcon,
  badgeTextColor,
}: StatCardProps) {
  return (
    <Card
      className={`border-none shadow-xl ${gradient} text-white overflow-hidden relative group transition-all hover:translate-y-[-4px]`}
    >
      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
        <Icon className="h-24 w-24" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium opacity-90">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-black tracking-tight flex items-baseline gap-2">
          {value}
          <span className="text-md font-bold opacity-80 font-sans">
            {currency}
          </span>
        </div>

        <div
          className={`flex items-center gap-1 mt-4 ${badgeTextColor} bg-white/10 w-fit px-3 py-1 rounded-full text-sm font-medium`}
        >
          <BadgeIcon className="h-4 w-4" />
          <span>{badgeText}</span>
        </div>
      </CardContent>
    </Card>
  );
}
