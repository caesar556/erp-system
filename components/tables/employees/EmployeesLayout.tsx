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
import { useCustomers } from "@/hooks/data/useCustomers";
import { useState } from "react";
import SearchInp from "@/components/common/SearchInp";
import PaginationData from "@/components/common/PaginationData";
import CustomersToolbar from "@/components/filters/CustomersToolbar";
import CustomerRow from "../customers/Table-row";

export default function TableLayout() {
  const { customers } = useCustomers();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer?.phone?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Card className="shadow-lg border-0 bg-white rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-violet-50 to-indigo-50 border-b border-violet-100 px-6 py-5">
        <div className="space-y-1">
          <CardTitle className="text-xl font-semibold text-violet-900">
            قائمة العملاء
          </CardTitle>
          <CardDescription className="text-violet-700">
            إدارة جميع العملاء المسجلين في النظام
          </CardDescription>
        </div>

        <Badge className="px-4 py-2 text-sm font-medium bg-violet-100 text-violet-700 hover:bg-violet-100">
          {filteredCustomers.length} / {customers.length} عميل
        </Badge>
      </CardHeader>

      <CardContent className="p-0">
        <div className=" flex gap-6 justify-between flex-wrap px-6 py-4 border-b border-violet-100 bg-white">
          <SearchInp value={searchTerm} onChange={setSearchTerm} />
          <CustomersToolbar
            active=""
            setActive={() => ""}
            debit=""
            setDebit={() => ""}
            customerDate=""
            setCustomerDate={() => ""}
          />
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-violet-50 border-b-2 border-violet-200 hover:bg-violet-50">
                <TableHead className="text-right text-violet-700 font-semibold">
                  العميل
                </TableHead>
                <TableHead className="text-right text-violet-700 font-semibold">
                  التواصل
                </TableHead>
                <TableHead className="text-right text-violet-700 font-semibold">
                  الفئة
                </TableHead>
                <TableHead className="text-right text-violet-700 font-semibold">
                  الحالة
                </TableHead>
                <TableHead className="text-right text-violet-700 font-semibold">
                  الرصيد
                </TableHead>
                <TableHead className="text-center w-[80px] text-violet-700 font-semibold">
                  الإجراءات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="h-24 text-center text-slate-500"
                  >
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
          <div className="px-6 py-4 border-t">
            <PaginationData page={1} totalPages={10} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
