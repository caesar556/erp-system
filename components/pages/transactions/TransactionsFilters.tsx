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

export function TransactionTypeFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="نوع العملية" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">كل العمليات</SelectItem>
        <SelectItem value="IN">مقبوضات</SelectItem>
        <SelectItem value="OUT">مدفوعات</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function PaymentMethodFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="طريقة الدفع" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">كل الطرق</SelectItem>
        <SelectItem value="CASH">نقدي</SelectItem>
        <SelectItem value="TRANSFER">تحويل</SelectItem>
        <SelectItem value="CHECK">شيك</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function DateFilter({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[160px] bg-white border-slate-200">
        <SelectValue placeholder="التاريخ" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ALL">كل التواريخ</SelectItem>
        <SelectItem value="TODAY">اليوم</SelectItem>
        <SelectItem value="WEEK">هذا الأسبوع</SelectItem>
        <SelectItem value="MONTH">هذا الشهر</SelectItem>
      </SelectContent>
    </Select>
  );
}
