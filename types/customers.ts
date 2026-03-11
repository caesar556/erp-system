export interface Customer {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  balance: number | 0;
  category: "vip" | "regular" | "wholesale";
  isActive: boolean;
}
