import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableRow, TableCell } from "@/components/ui/table";
import { MoreHorizontal, Trash2 } from "lucide-react";

export default function TransactionsRow({ transaction: t }: any) {
  const paymentBadge =
    t.paymentMethod === "CASH"
      ? "bg-blue-50 text-blue-700 border-blue-200"
      : t.paymentMethod === "TRANSFER"
        ? "bg-purple-50 text-purple-700 border-purple-200"
        : "bg-amber-50 text-amber-700 border-amber-200";

  const paymentLabel =
    t.paymentMethod === "CASH"
      ? "نقدي"
      : t.paymentMethod === "TRANSFER"
        ? "تحويل"
        : "شيك";

  return (
    <TableRow className="hover:bg-slate-50 transition">
      <TableCell className="px-8 py-5">
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
      </TableCell>

      <TableCell
        className={`px-8 py-5 text-lg font-bold ${
          t.type === "CREDIT" ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {t.type === "CREDIT" ? "+" : "-"}
        {t.amount.toLocaleString()} EGP
      </TableCell>

      <TableCell className="text-sm lg:text-md px-8 py-5 font-bold text-slate-700">
        {t.description}
      </TableCell>

      <TableCell className="px-8 py-5 font-semibold">
        <Badge variant="outline" className={paymentBadge}>
          {paymentLabel}
        </Badge>
      </TableCell>

      <TableCell className="px-8 py-5 text-right text-sm text-slate-400 font-mono">
        {new Date(t.createdAt).toLocaleDateString("ar-EG")}
      </TableCell>

      <TableCell className="px-8 py-5 text-left">
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-slate-500 hover:bg-violet-100 hover:text-violet-700 transition-colors"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-red-600">
                <Trash2 className="h-4 w-4" />
                حذف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
}
