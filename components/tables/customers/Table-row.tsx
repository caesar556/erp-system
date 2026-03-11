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
        return "bg-sky-100 text-indigo-700 border-indigo-200";
      case "wholesale":
        return "bg-violet-100 text-violet-700 border-violet-200";
      default:
        return "bg-green-100 text-slate-700 border-slate-200";
    }
  };

  const getAvatarColor = () => {
    const colors = [
      "bg-violet-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-violet-600",
      "bg-indigo-600",
      "bg-purple-600",
    ];
    return colors[customer.name.charCodeAt(0) % colors.length];
  };

  const formatBalance = (balance: number) => {
    return balance.toLocaleString("en-US");
  };

  return (
    <TableRow
      key={customer.id}
      className="border-b border-violet-100 hover:bg-violet-50/50 transition-colors duration-200 "
    >
      {/* Customer */}
      <TableCell className="py-4">
        <div className="flex items-center gap-3">
          <Avatar className={` hidden md:flex h-12 w-12 ring-2 ring-violet-200 ${getAvatarColor()}`}>
            <AvatarFallback className="font-bold  text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-semibold text-slate-900">{customer.name}</span>
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
      <TableCell className="py-4 ">
        <Badge variant="outline" className={`border ${getCategoryBadgeColor()} font-medium`}>
          {customer.category === "vip" && "VIP"}
          {customer.category === "wholesale" && "جملة"}
          {customer.category === "regular" && "عادي"}
        </Badge>
      </TableCell>

      {/* Status */}
      <TableCell className="py-4">
        {customer.isActive ? (
          <Badge className="bg-violet-100 text-violet-700 border border-violet-200 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-violet-600 mr-2"></span>
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
        <Badge className=" bg-gray-300 text-black border border-violet-200 font-semibold text-sm px-3 py-1.5">
          ${formatBalance(customer.balance)}
        </Badge>
      </TableCell>

      {/* Actions */}
      <TableCell className="py-4">
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
              <DropdownMenuItem asChild>
                <Link
                  href={`/customers/${customer.id}/statement`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  كشف الحساب
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-violet-600">
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
