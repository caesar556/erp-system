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
} from "@/components/ui/table";
import CustomerRow from "./Table-row";
import { useCustomers } from "@/hooks/data/useCustomers";

export default function TableLayout() {
  const { customers } = useCustomers();
  return (
    <Card className="shadow-sm border">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>قائمة العملاء</CardTitle>
          <CardDescription>
            إدارة جميع العملاء المسجلين في النظام
          </CardDescription>
        </div>

        <Badge variant="secondary" className="px-3 py-1 text-sm">
          {customers.length} عميل
        </Badge>
      </CardHeader>

      <CardContent className="p-0">
        <div className="border-t">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">التواصل</TableHead>
                <TableHead className="text-right">الفئة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-left w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.length === 0 ? (
                <p>لا يوجد عملاء </p>
              ) : (
                customers.map((customer) => (
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
