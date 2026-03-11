"use client"; 
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import CustomerRow from "./Table-row";
import { useCustomers } from "@/hooks/data/useCustomers";
import { Search } from "lucide-react";
import { useState } from "react";

export default function TableLayout() {
  const { customers } = useCustomers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="shadow-lg border-0 bg-white rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 border-b px-6 py-5">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold text-slate-900">قائمة العملاء</CardTitle>
          <CardDescription className="text-slate-600">
            إدارة جميع العملاء المسجلين في النظام
          </CardDescription>
        </div>

        <Badge className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-100">
          {filteredCustomers.length} / {customers.length} عميل
        </Badge>
      </CardHeader>

      <CardContent className="p-0">
        <div className="px-6 py-4 border-b bg-white">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="ابحث عن عميل..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 rounded-lg border-slate-200 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 border-b-2 border-slate-200 hover:bg-slate-50">
                <TableHead className="text-right text-slate-700 font-semibold">العميل</TableHead>
                <TableHead className="text-right text-slate-700 font-semibold">التواصل</TableHead>
                <TableHead className="text-right text-slate-700 font-semibold">الفئة</TableHead>
                <TableHead className="text-right text-slate-700 font-semibold">الحالة</TableHead>
                <TableHead className="text-right text-slate-700 font-semibold">الرصيد</TableHead>
                <TableHead className="text-left w-[80px] text-slate-700 font-semibold">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-slate-500">
                    {searchTerm ? "لم يتم العثور على عملاء" : "لا يوجد عملاء"}
                  </TableCell>
                </TableRow>
              ) : (
                filteredCustomers.map((customer) => (
                  <CustomerRow key={customer.id} customer={customer} />
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
