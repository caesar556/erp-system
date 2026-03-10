import {
  DateFilter,
  PaymentMethodFilter,
  TransactionTypeFilter,
} from "../pages/transactions/TransactionsFilters";

interface Props {
  type: string;
  setType: (v: string) => void;

  payment: string;
  setPayment: (v: string) => void;

  date: string;
  setDate: (v: string) => void;
}

export default function TransactionsToolbar({
  type,
  setType,
  payment,
  setPayment,
  date,
  setDate,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <TransactionTypeFilter value={type} onChange={setType} />
      <PaymentMethodFilter value={payment} onChange={setPayment} />
      <DateFilter value={date} onChange={setDate} />
    </div>
  );
}
