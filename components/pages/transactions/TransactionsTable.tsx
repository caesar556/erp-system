"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import SearchInp from "@/components/common/SearchInp";
import TransactionsToolbar from "@/components/filters/TransactionsToolbar";
import TransactionsTableLayout from "@/components/tables/transactions/TransactionsTableLayout";

export default function TransactionsTable() {
  return (
    <Card className="shadow-lg border-none ring-1 ring-slate-200 mt-8 ">
      <CardHeader className="flex flex-col items-center justify-between border-b mx-6 px-0 pb-3">
        <CardTitle className="text-2xl lg:text-4xl font-black text-slate-900">
          سجل المعاملات المالية
        </CardTitle>
        <CardDescription className="text-sm lg:text-md font-medium text-md text-slate-600">
          {" "}
          هنا يمكنك رؤية كل المعاملات المالية داخل الخزينة{" "}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex gap-6 justify-between items-center mb-4 px-8 w-full flex-wrap">
          <SearchInp value="" onChange={() => console.log("click")} />

          <TransactionsToolbar
            type=""
            setType={() => ""}
            payment=""
            setPayment={() => ""}
            date=""
            setDate={() => ""}
          />
        </div>
        <TransactionsTableLayout />
      </CardContent>
    </Card>
  );
}
