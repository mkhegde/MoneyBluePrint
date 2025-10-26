import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";
import { mindsetScores } from "@/lib/dummyData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

type FinancialMindsetProps = {
  showTitle?: boolean;
};

export default function FinancialMindset({ showTitle = true }: FinancialMindsetProps) {
  const radarData = [
    { category: "Spending Habits", score: mindsetScores.spendingHabits, fullMark: 10 },
    { category: "Saving Discipline", score: mindsetScores.savingDiscipline, fullMark: 10 },
    { category: "Investment Confidence", score: mindsetScores.investmentConfidence, fullMark: 10 },
    { category: "Financial Literacy", score: mindsetScores.financialLiteracy, fullMark: 10 },
  ];

  const getScoreLevel = (score: number) => {
    if (score >= 8) return { label: "Excellent", color: "text-chart-2", icon: TrendingUp };
    if (score >= 6) return { label: "Good", color: "text-chart-1", icon: Minus };
    return { label: "Needs Improvement", color: "text-chart-4", icon: TrendingDown };
  };

  const overallScore = Object.values(mindsetScores).reduce((a, b) => a + b, 0) / 4;

  return (
    <div className="space-y-8">
      {showTitle && (
        <div>
          <h1 className="text-4xl font-bold">Financial Mindset</h1>
          <p className="text-muted-foreground mt-2">
            Assessment of your financial behaviors and attitudes
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Financial Mindset</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                <span className="text-5xl font-bold font-mono text-primary">
                  {overallScore.toFixed(1)}
                </span>
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-overall-score">
                {getScoreLevel(overallScore).label}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Out of 10.0
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: 'hsl(var(--foreground))' }} />
                <Radar
                  name="Your Score"
                  dataKey="score"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(mindsetScores).map(([key, score]) => {
              const level = getScoreLevel(score);
              const Icon = level.icon;
              const label = key
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());

              return (
                <div key={key} data-testid={`mindset-${key}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${level.color}`}>
                        {level.label}
                      </span>
                      <Icon className={`h-4 w-4 ${level.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${score * 10}%` }}
                      />
                    </div>
                    <span className="text-sm font-mono font-bold w-12 text-right">
                      {score}/10
                    </span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                <div>
                  <p className="font-medium">Strong Saving Discipline</p>
                  <p className="text-sm text-muted-foreground">
                    Consistently saves 28% of gross income, well above UK average
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                <div>
                  <p className="font-medium">Good Spending Habits</p>
                  <p className="text-sm text-muted-foreground">
                    Maintains balanced budget with controlled discretionary spending
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2 mt-2" />
                <div>
                  <p className="font-medium">Financial Awareness</p>
                  <p className="text-sm text-muted-foreground">
                    Actively tracks finances and understands UK tax system
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Areas for Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-4 mt-2" />
                <div>
                  <p className="font-medium">Investment Confidence</p>
                  <p className="text-sm text-muted-foreground">
                    Consider learning more about investment options beyond ISAs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-4 mt-2" />
                <div>
                  <p className="font-medium">Diversification</p>
                  <p className="text-sm text-muted-foreground">
                    Explore broader range of investment vehicles and strategies
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-4 mt-2" />
                <div>
                  <p className="font-medium">Risk Management</p>
                  <p className="text-sm text-muted-foreground">
                    Address insurance gaps for comprehensive protection
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Behavioral Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Continue Doing</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-chart-2">✓</span>
                  Maintain high savings rate
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-chart-2">✓</span>
                  Regular financial review and planning
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-chart-2">✓</span>
                  Clear goal-setting with deadlines
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Start Doing</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-chart-1">→</span>
                  Research investment education resources
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-chart-1">→</span>
                  Consider fee-based financial advice
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-chart-1">→</span>
                  Join financial planning communities
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
