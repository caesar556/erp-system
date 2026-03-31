import { Customer } from "@/types/customers";
import { Transaction } from "@/types/transactions";

export const customersData: Customer[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    phone: "01011223344",
    address: "Cairo",
    category: "vip",
    balance: 1000,
    isActive: true,
  },
  {
    id: "2",
    name: "Mohamed Ali",
    phone: "01055667788",
    address: "Alexandria",
    category: "regular",
    balance: 500,
    isActive: true,
  },
  {
    id: "3",
    name: "Mahmoud Salah",
    phone: "01122334455",
    address: "Giza",
    balance: 0,
    category: "wholesale",
    isActive: false,
  },
];

export const transactions: Transaction[] = [
  {
    _id: "1",
    type: "CREDIT",
    amount: 12000,
    description: "تحصيل فاتورة شركة النور",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-08",
  },
  {
    _id: "2",
    type: "DEBIT",
    amount: 3500,
    description: "دفع إيجار المكتب",
    paymentMethod: "CASH",
    createdAt: "2026-03-07",
  },
  {
    _id: "3",
    type: "CREDIT",
    amount: 5400,
    description: "تحصيل خدمات استشارية",
    paymentMethod: "CHECK",
    createdAt: "2026-03-07",
  },
  {
    _id: "4",
    type: "DEBIT",
    amount: 2200,
    description: "شراء أدوات مكتبية",
    paymentMethod: "CASH",
    createdAt: "2026-03-06",
  },
  {
    _id: "5",
    type: "CREDIT",
    amount: 9000,
    description: "دفعة مشروع تطوير",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-05",
  },
  {
    _id: "6",
    type: "DEBIT",
    amount: 1800,
    description: "فاتورة الإنترنت",
    paymentMethod: "TRANSFER",
    createdAt: "2026-03-05",
  },
];
