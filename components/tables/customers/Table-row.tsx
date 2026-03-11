import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { Customer } from "@/types/customers";
import { FileText, MapPin, MoreHorizontal, Phone, Trash2, Edit3 } from "lucide-react";
import Link from "next/link";

export default function CustomerRow({ customer }: { customer: Customer }) {
  const initials = customer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const getCategoryBadgeColor = () => {
    switch (customer.category) {
      case "vip":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "wholesale":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getAvatarColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
    ];
    return colors[customer.name.charCodeAt(0) % colors.length];
  };

  return (
    <TableRow
      key={customer.id}
      className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
    >
      {/* Customer */}
      <TableCell className="py-4">
        <div className="flex items-center gap-3">
          <Avatar className={`h-10 w-10 ${getAvatarColor()}`}>
            <AvatarFallback className="font-semibold text-white">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium text-slate-900">{customer.name}</span>
          </div>
        </div>
      </TableCell>

      {/* Contact */}
      <TableCell className="py-4">
        <div className="flex flex-col text-sm gap-2">
          <div className="flex items-center gap-2 text-slate-700">
            <Phone className="h-3.5 w-3.5 text-slate-400" />
            <span>{customer.phone}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <MapPin className="h-3.5 w-3.5 text-slate-400" />
            <span className="line-clamp-1">{customer.address}</span>
          </div>
        </div>
      </TableCell>

      {/* Category */}
      <TableCell className="py-4">
        <Badge variant="outline" className={`border ${getCategoryBadgeColor()} font-medium`}>
          {customer.category === "vip" && "VIP"}
          {customer.category === "wholesale" && "جملة"}
          {customer.category === "regular" && "عادي"}
        </Badge>
      </TableCell>

      {/* Status */}
      <TableCell className="py-4">
        {customer.isActive ? (
          <Badge className="bg-green-100 text-green-700 border border-green-200 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2"></span>
            نشط
          </Badge>
        ) : (
          <Badge className="bg-slate-100 text-slate-700 border border-slate-200 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mr-2"></span>
            معطل
          </Badge>
        )}
      </TableCell>

      {/* Balance */}
      <TableCell className="py-4 text-right">
        <span className="text-slate-900 font-semibold">
          {customer.balance.toLocaleString("ar-SA")}
        </span>
      </TableCell>

      {/* Actions */}
      <TableCell className="py-4">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link
                  href={`/customers/${customer.id}/statement`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  كشف الحساب
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-blue-600">
                <Edit3 className="h-4 w-4" />
                تعديل
              </DropdownMenuItem>

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
