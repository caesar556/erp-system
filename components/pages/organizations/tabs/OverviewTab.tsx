import HeaderBox from "@/components/common/HeaderBox";
import StatusCard from "@/components/common/StatusCard";
import { OrganizationOverviewStats } from "@/constants/stats";
import OrganizationInformation from "../extra/OrganizationInfo";

export default function OverviewTab() {
  return (
    <section>
      <HeaderBox
        title="نظام إدارة المؤسسات والشركات "
        subtext="هنا يمكنك إدارة جميع العمليات الخاصة داخل شركتك أو مؤسستك "
        user="بلال"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {OrganizationOverviewStats.map((stat, index) => (
          <StatusCard key={index} {...stat} />
        ))}
      </div>
      <OrganizationInformation
        name="Tech Solutions"
        industry="Software Development"
        employees={42}
        location="Cairo, Egypt"
        createdAt="Jan 2024"
        plan="Pro"
      />
    </section>
  );
}
