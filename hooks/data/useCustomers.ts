"use client"; 
import { Customer } from "@/types/customers";
import { useEffect, useState } from "react";
import { customersData } from "@/constants/dummy";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCustomers(customersData);

    setLoading(false);
  }, []);

  return { customers, loading };
}
