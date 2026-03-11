import HeaderBox from "@/components/common/HeaderBox";
import CustomerStats from "./CustomersStats";
import TableLayout from "@/components/tables/customers/Table-layout";

export default function CustomersMain() {
  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen">
      <HeaderBox
        title="نظام إدارة العملاء"
        subtext="هنا يمكنك رؤية وإدارة جميع العملاء"
        user="بلال"
      />
      <CustomerStats />
      <TableLayout />
    </div>
  );
}
