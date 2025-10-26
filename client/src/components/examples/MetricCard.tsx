import MetricCard from '../MetricCard';
import { TrendingUp, PiggyBank } from 'lucide-react';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <MetricCard
        icon={TrendingUp}
        label="Savings Rate"
        value="28%"
      />
      <MetricCard
        icon={PiggyBank}
        label="Emergency Fund"
        value="£18,000"
      />
    </div>
  );
}
