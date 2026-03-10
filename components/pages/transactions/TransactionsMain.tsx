import HeaderBox from "@/components/common/HeaderBox";
import Status from "@/components/pages/transactions/Status";
import TransactionsTable from "@/components/pages/transactions/TransactionsTable";

export default function TransactionsMain() {
  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <HeaderBox
        title="نظام إدارة المعاملات المالية"
        subtext="هنا يمكنك رؤية وإدارة جميع المعاملات المالية الخاصة بك"
        user="بلال"
      />

      <Status />
      <h2>Form </h2>
      <TransactionsTable />
    </div>
  );
}
