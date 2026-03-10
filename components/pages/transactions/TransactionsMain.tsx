import HeaderBox from "@/components/common/HeaderBox";
import Status from "@/components/pages/transactions/Status";
import TransactionsTable from "@/components/pages/transactions/TransactionsTable";

export default function TransactionsMain() {
  return (
    <div className="overflow-hidden w-full">
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
