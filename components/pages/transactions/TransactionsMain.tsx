import HeaderBox from "@/components/common/HeaderBox";
import TransactionsTable from "@/components/pages/transactions/TransactionsTable";
import TransactionsStatus from "./TransactionsStatus";

export default function TransactionsMain() {
  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-slate-50 to-purple-100 min-h-screen">
      <HeaderBox
        title="نظام إدارة المعاملات المالية"
        subtext="هنا يمكنك رؤية وإدارة جميع المعاملات المالية الخاصة بك"
        user="بلال"
      />

      <TransactionsStatus />
      <h2>Form </h2>
      <TransactionsTable />
    </div>
  );
}
