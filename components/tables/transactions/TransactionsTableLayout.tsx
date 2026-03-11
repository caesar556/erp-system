"use client";

import { transactions } from "@/constants/constant";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
} from "@/components/ui/table";

import TransactionsRow from "./TransactionsRow";
import PaginationData from "@/components/common/PaginationData";

export default function TransactionsTableLayout() {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full text-right">
        <TableHeader className="bg-slate-50 text-sm font-bold text-slate-500 uppercase">
          <TableRow>
            <TableHead className="px-8 py-4 text-right">النوع</TableHead>
            <TableHead className="px-8 py-4 text-right">المبلغ</TableHead>
            <TableHead className="px-8 py-4 text-right">الوصف</TableHead>
            <TableHead className="px-8 py-4 text-right">طريقة الدفع</TableHead>
            <TableHead className="px-8 py-4 text-right">التاريخ</TableHead>
            <TableHead className="px-8 py-4 text-center">العمليات</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="divide-y">
          {transactions.map((t) => (
            <TransactionsRow key={t._id} transaction={t} />
          ))}
        </TableBody>
      </Table>
      <div className="px-6 py-4 border-t">
        <PaginationData page={1} totalPages={10} />
      </div>
    </div>
  );
}
