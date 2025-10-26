import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color?: string;
}

export default function MetricCard({ icon: Icon, label, value, color }: MetricCardProps) {
  return (
    <Card data-testid={`card-metric-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="flex items-center gap-4 p-6">
        <div className={`p-3 rounded-lg ${color || 'bg-primary/10'}`}>
          <Icon className={`h-6 w-6 ${color ? '' : 'text-primary'}`} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-xl font-semibold font-mono" data-testid={`text-metric-${label.toLowerCase().replace(/\s+/g, '-')}`}>
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
