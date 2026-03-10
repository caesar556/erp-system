import HeaderBox from "@/components/common/HeaderBox";
import Status from "@/components/pages/transactions/Status";
import TransactionsTable from "@/components/pages/transactions/TransactionsTable";

export default function TransactionsPage() {
  return (
    <section className="px-4 md:px-6 py-6 w-full">
      <HeaderBox
        title="نظام إدارة المعاملات المالية"
        subtext="هنا يمكنك رؤية وإدارة جميع المعاملات المالية الخاصة بك"
        user="بلال"
      />

      <Status />
      <TransactionsTable />
    </section>
  );
}
