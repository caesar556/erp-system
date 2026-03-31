import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: number;
  currency?: string;
  gradient: string;
  Icon: LucideIcon;
  badgeText: string;
  BadgeIcon: LucideIcon;
  badgeTextColor: string;
}