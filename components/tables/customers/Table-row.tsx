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
import { FileText, MapPin, MoreHorizontal, Phone } from "lucide-react";
import Link from "next/link";

export default function CustomerRow({ customer }: { customer: Customer }) {
  const initials = customer.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <TableRow key={customer.id} className="hover:bg-muted/30 transition-colors ">
      {/* Customer */}
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium">{customer.name}</span>
          </div>
        </div>
      </TableCell>

      {/* Contact */}
      <TableCell>
        <div className="flex flex-col text-sm gap-1 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            {customer.phone}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <MapPin className="h-3 w-3" />
            {customer.address}
          </div>
        </div>
      </TableCell>

      {/* Category */}
      <TableCell>
        <Badge variant="outline">
          {customer.category === "vip" && "VIP"}
          {customer.category === "wholesale" && "جملة"}
          {customer.category === "regular" && "عادي"}
        </Badge>
      </TableCell>

      {/* Status */}
      <TableCell>
        {customer.isActive ? (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
            نشط
          </Badge>
        ) : (
          <Badge variant="secondary">معطل</Badge>
        )}
      </TableCell>

      <TableCell>
        {customer.balance}
      </TableCell>

      {/* Actions */}
      <TableCell>
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link
                  href={`/customers/${customer.id}/statement`}
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  كشف الحساب
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>تعديل</DropdownMenuItem>

              <DropdownMenuItem className="text-red-600">حذف</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TableCell>
    </TableRow>
  );
}
