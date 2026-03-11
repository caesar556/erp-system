import { Customer } from "@/types/customers";

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
