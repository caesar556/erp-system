"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function CustomerActiveFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="الحالة" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ACTIVE">نشط</SelectItem>
        <SelectItem value="INACTIVE">غير نشط</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function CustomerDebtFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="الحسابات" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">كل العملاء</SelectItem>
        <SelectItem value="HAS_DEBT">عليه فلوس</SelectItem>
        <SelectItem value="CLEAR">مسدد</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function CustomerDateFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="تاريخ الإضافة" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="TODAY">اليوم</SelectItem>
        <SelectItem value="WEEK">هذا الأسبوع</SelectItem>
        <SelectItem value="MONTH">هذا الشهر</SelectItem>
      </SelectContent>
    </Select>
  );
}
