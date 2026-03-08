import HeaderBox from "@/components/common/HeaderBox";
import Status from "@/components/pages/transactions/Status";

export default function TransactionsPage() {
  return (
    <section className="px-6">
      <HeaderBox />
      <Status />
      <h2>Form </h2>
    </section>
  );
}
