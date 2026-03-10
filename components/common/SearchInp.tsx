"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TransactionsSearch({ value, onChange }: SearchProps) {
  return (
    <div className="relative w-full md:w-80">
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ابحث عن معاملة..."
        className="pr-9 bg-white border-slate-200 focus:border-slate-300 focus:ring-0"
      />
    </div>
  );
}
