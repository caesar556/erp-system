export type TransactionType = "CREDIT" | "DEBIT";
export type PaymentMethod = "CASH" | "TRANSFER" | "CHECK";

export interface Transaction {
  _id: string;
  type: TransactionType;
  amount: number;
  description: string;
  paymentMethod: PaymentMethod;
  createdAt: string;
}