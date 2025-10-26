import StatCard from '../StatCard';
import { PoundSterling } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatCard
        title="Annual Income"
        value="£65,000"
        icon={PoundSterling}
        trend={{ value: "+8% from last year", positive: true }}
      />
      <StatCard
        title="Net Worth"
        value="£142,500"
        icon={PoundSterling}
        subtitle="As of June 2025"
      />
    </div>
  );
}
