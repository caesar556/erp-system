"use client";

import { useState } from "react";
import { transactions } from "@/constants/constant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import SearchInp from "@/components/common/SearchInp";
import TransactionsToolbar from "@/components/filters/TransactionsToolbar";

const PAGE_SIZE = 5;

export default function TransactionsTable() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const data = transactions.slice(start, start + PAGE_SIZE);

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
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-sm font-bold text-slate-500 uppercase">
              <tr>
                <th className="px-8 py-4">النوع</th>
                <th className="px-8 py-4">المبلغ</th>
                <th className="px-8 py-4">الوصف</th>
                <th className="px-8 py-4">طريقة الدفع</th>
                <th className="px-8 py-4 ">التاريخ</th>
                <th className="px-8 py-4 text-left">العمليات</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {data.map((t) => (
                <tr key={t._id} className="hover:bg-slate-50 transition">
                  <td className="px-8 py-5">
                    <Badge
                      variant="outline"
                      className={
                        t.type === "CREDIT"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-rose-50 text-rose-700 border-rose-200"
                      }
                    >
                      {t.type === "CREDIT" ? "مقبوضات" : "مدفوعات"}
                    </Badge>
                  </td>

                  <td
                    className={`px-8 py-5 text-lg font-bold ${
                      t.type === "CREDIT" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    {t.type === "CREDIT" ? "+" : "-"}
                    {t.amount.toLocaleString()} EGP
                  </td>

                  <td className="text-sm lg:text-md px-8 py-5 font-bold text-slate-700">
                    {t.description}
                  </td>

                  <td className="px-8 py-5  text-slate-600 font-semibold">
                    {t.paymentMethod === "CASH"
                      ? "نقدي"
                      : t.paymentMethod === "TRANSFER"
                        ? "تحويل"
                        : "شيك"}
                  </td>

                  <td className="px-8 py-5 text-right text-sm text-slate-400 font-mono">
                    {new Date(t.createdAt).toLocaleDateString("ar-EG")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="flex items-center justify-between px-6 py-4 border-t">
          <span className="text-sm text-slate-500">
            الصفحة {page} من {totalPages}
          </span>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              السابق
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              التالي
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
