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
import { Trash2, Eye, Edit2 } from "lucide-react";

const PAGE_SIZE = 4;

export default function TransactionsTable() {
  const [page, setPage] = useState(1);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const visibleTransactions = transactions.filter(
    (t) => !deletedIds.includes(t._id)
  );
  const totalPages = Math.ceil(visibleTransactions.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const data = visibleTransactions.slice(start, start + PAGE_SIZE);

  const handleDelete = (id: string) => {
    setDeletedIds([...deletedIds, id]);
    if (data.length === 1 && page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Card className="shadow-xl border-none bg-white/80 backdrop-blur mt-6 ring-1 ring-slate-100/50">
      <CardHeader className="flex flex-col gap-2 border-b border-slate-100 mx-6 px-0 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              سجل المعاملات المالية
            </CardTitle>
            <CardDescription className="text-sm font-medium text-slate-600 mt-2">
              هنا يمكنك رؤية وإدارة جميع المعاملات المالية داخل الخزينة
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead className="bg-gradient-to-r from-slate-50 to-slate-100 text-xs font-bold text-slate-600 uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-right">النوع</th>
                <th className="px-6 py-4 text-right">المبلغ</th>
                <th className="px-6 py-4 text-right">الوصف</th>
                <th className="px-6 py-4 text-right">طريقة الدفع</th>
                <th className="px-6 py-4 text-right">التاريخ</th>
                <th className="px-6 py-4 text-center">الإجراءات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {data.map((t) => (
                <tr
                  key={t._id}
                  className="hover:bg-gradient-to-r hover:from-violet-50/50 hover:to-transparent transition-all duration-200 group"
                >
                  <td className="px-6 py-5">
                    <Badge
                      variant="outline"
                      className={`font-semibold rounded-full px-3 py-1 text-xs font-bold ${
                        t.type === "CREDIT"
                          ? "bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 border-emerald-200/80 shadow-sm"
                          : "bg-gradient-to-r from-rose-50 to-rose-100/50 text-rose-700 border-rose-200/80 shadow-sm"
                      }`}
                    >
                      {t.type === "CREDIT" ? "مقبوضات" : "مدفوعات"}
                    </Badge>
                  </td>

                  <td
                    className={`px-6 py-5 text-lg font-bold tracking-tight ${
                      t.type === "CREDIT" ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    <span className="font-mono">
                      {t.type === "CREDIT" ? "+" : "-"}
                      {t.amount.toLocaleString()}
                    </span>
                    <span className="text-sm ml-1 opacity-70">EGP</span>
                  </td>

                  <td className="px-6 py-5 font-medium text-slate-700 max-w-xs truncate">
                    {t.description}
                  </td>

                  <td className="px-6 py-5 text-slate-600 font-medium">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        t.paymentMethod === "CASH"
                          ? "bg-blue-100 text-blue-700"
                          : t.paymentMethod === "TRANSFER"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {t.paymentMethod === "CASH"
                        ? "نقدي"
                        : t.paymentMethod === "TRANSFER"
                          ? "تحويل"
                          : "شيك"}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-500 font-mono font-medium">
                    {new Date(t.createdAt).toLocaleDateString("ar-EG", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        title="عرض التفاصيل"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                        title="تعديل"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 transition-colors"
                        onClick={() => handleDelete(t._id)}
                        title="حذف"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {data.length === 0 && deletedIds.length > 0 && (
          <div className="flex items-center justify-center py-16 px-6">
            <div className="text-center">
              <p className="text-slate-500 text-lg font-medium">
                لا توجد معاملات مالية لعرضها
              </p>
            </div>
          </div>
        )}

        {/* Pagination */}
        {data.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-100 bg-slate-50/50">
            <span className="text-sm font-medium text-slate-600">
              الصفحة <span className="font-bold text-slate-900">{page}</span> من{" "}
              <span className="font-bold text-slate-900">{totalPages}</span> (
              <span className="text-slate-500">
                {visibleTransactions.length} معاملة
              </span>
              )
            </span>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="font-medium"
              >
                السابق
              </Button>

              <Button
                variant="outline"
                size="sm"
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="font-medium"
              >
                التالي
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
