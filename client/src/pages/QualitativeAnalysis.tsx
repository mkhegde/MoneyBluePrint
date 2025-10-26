import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "@/components/ProgressBar";
import { Target, Calendar, TrendingUp } from "lucide-react";
import { financialGoals, riskTolerance, lifestylePriorities } from "@/lib/dummyData";

type QualitativeAnalysisProps = {
  showTitle?: boolean;
};

export default function QualitativeAnalysis({ showTitle = true }: QualitativeAnalysisProps) {
  return (
    <div className="space-y-8">
      {showTitle && (
        <div>
          <h1 className="text-4xl font-bold">Qualitative Analysis</h1>
          <p className="text-muted-foreground mt-2">
            Your financial goals, risk profile, and lifestyle priorities
          </p>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Financial Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {financialGoals.map((goal) => (
            <div key={goal.id} className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold" data-testid={`text-goal-${goal.id}`}>{goal.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      {goal.deadline}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={goal.priority === "High" ? "default" : goal.priority === "Medium" ? "secondary" : "outline"}
                  data-testid={`badge-priority-${goal.id}`}
                >
                  {goal.priority} Priority
                </Badge>
              </div>
              <ProgressBar
                label={`Progress: £${goal.current.toLocaleString()} of £${goal.target.toLocaleString()}`}
                current={goal.current}
                target={goal.target}
                showAmount={false}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Risk Tolerance Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                <span className="text-5xl font-bold font-mono text-primary">
                  {riskTolerance.score}/10
                </span>
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-risk-level">{riskTolerance.level}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {riskTolerance.description}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${riskTolerance.score * 10}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lifestyle Priorities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lifestylePriorities.map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                  data-testid={`priority-${item.rank}`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <span className="font-bold text-primary">{item.rank}</span>
                  </div>
                  <span className="flex-1 font-medium">{item.priority}</span>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Goal Achievement Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Short-term Focus (0-2 years)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-chart-2">•</span>
                  <span>Complete emergency fund to 6 months expenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-2">•</span>
                  <span>Continue house deposit savings at £900/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-2">•</span>
                  <span>Maximize ISA allowance annually</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Long-term Focus (2+ years)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">•</span>
                  <span>Purchase first property in 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">•</span>
                  <span>Build retirement fund to £500k by 2055</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">•</span>
                  <span>Maintain balanced lifestyle while growing wealth</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
