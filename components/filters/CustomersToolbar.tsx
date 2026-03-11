import {
  CustomerActiveFilter,
  CustomerDebtFilter,
  CustomerDateFilter,
} from "../pages/customers/CustomersFilters";

interface Props {
  active: string;
  setActive: (v: string) => void;

  debit: string;
  setDebit: (v: string) => void;

  customerDate: string;
  setCustomerDate: (v: string) => void;
}

export default function TransactionsToolbar({
  active,
  setActive,
  debit,
  setDebit,
  customerDate,
  setCustomerDate,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <CustomerActiveFilter value={active} onChange={setActive} />
      <CustomerDebtFilter value={debit} onChange={setDebit} />
      <CustomerDateFilter value={customerDate} onChange={setCustomerDate} />
    </div>
  );
}
