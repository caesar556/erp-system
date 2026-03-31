import HeaderBox from "@/components/common/HeaderBox";
import StatusCard from "@/components/common/StatusCard";
import EmployeesLayout from "@/components/tables/employees/EmployeesLayout";
import { OrganizationOverviewStats } from "@/constants/stats";

export default function EmployeesTab() {
  return (
    <section className="space-y-6">
      <HeaderBox
        title="نظام إدارة  الموظفين داخل الشركة "
        subtext="هنا يمكنك إدارة جميع الموظفين داخل الشركة "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {OrganizationOverviewStats.map((stat, index) => (
          <StatusCard key={index} {...stat} />
        ))}
      </div>
      <EmployeesLayout />
    </section>
  );
}
