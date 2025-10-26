import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  label: string;
  current: number;
  target: number;
  showAmount?: boolean;
  color?: "primary" | "success" | "warning";
}

export default function ProgressBar({ 
  label, 
  current, 
  target, 
  showAmount = true,
  color = "primary" 
}: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const remaining = Math.max(target - current, 0);

  return (
    <div className="space-y-2" data-testid={`progress-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        {showAmount && (
          <span className="text-sm font-mono text-muted-foreground">
            £{current.toLocaleString()} / £{target.toLocaleString()}
          </span>
        )}
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{percentage.toFixed(0)}% complete</span>
        {remaining > 0 && <span>£{remaining.toLocaleString()} remaining</span>}
      </div>
    </div>
  );
}
