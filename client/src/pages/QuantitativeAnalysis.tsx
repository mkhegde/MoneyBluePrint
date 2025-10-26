import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ProgressBar from "@/components/ProgressBar";
import {
  incomeBreakdown,
  expenseBreakdown,
  savingsData,
  taxBreakdown,
  childrensEducation,
  specialLifeEvents,
} from "@/lib/dummyData";

type QuantitativeAnalysisProps = {
  showTitle?: boolean;
};

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

export default function QuantitativeAnalysis({ showTitle = true }: QuantitativeAnalysisProps) {
  return (
    <div className="space-y-8">
      {showTitle && (
        <div>
          <h1 className="text-4xl font-bold">Quantitative Analysis</h1>
          <p className="text-muted-foreground mt-2">
            Detailed breakdown of your income, expenses, and savings
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Income Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incomeBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percentage }) => `${source}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {incomeBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `£${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {incomeBreakdown.map((item, index) => (
                <div key={item.source} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span>{item.source}</span>
                  </div>
                  <span className="font-mono font-semibold">£{item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="category"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fill: 'hsl(var(--foreground))' }}
                />
                <YAxis tick={{ fill: 'hsl(var(--foreground))' }} />
                <Tooltip
                  formatter={(value: number) => `£${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Bar dataKey="amount" fill="hsl(var(--chart-1))" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Total Monthly Expenses:{" "}
                <span className="font-mono font-semibold text-foreground">
                  £{expenseBreakdown.reduce((sum, e) => sum + e.amount, 0).toLocaleString()}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Savings & Investments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressBar
            label="ISA Contributions (2024/25)"
            current={savingsData.isaContributions}
            target={savingsData.isaAllowance}
          />
          <ProgressBar
            label="Pension Contributions (Annual)"
            current={savingsData.pensionContributions}
            target={savingsData.pensionAllowance}
          />
          <ProgressBar
            label="Emergency Fund"
            current={savingsData.emergencyFund}
            target={savingsData.emergencyFundTarget}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Investments</p>
              <p className="text-2xl font-bold font-mono">£{savingsData.investments.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">ISA Remaining Allowance</p>
              <p className="text-2xl font-bold font-mono text-chart-1">
                £{(savingsData.isaAllowance - savingsData.isaContributions).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Children's Education Planning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">Current Education Costs</h4>
            <div className="space-y-3">
              {childrensEducation.currentCosts.map((cost, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{cost.child}</p>
                    <p className="text-sm text-muted-foreground">{cost.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-semibold">
                      {cost.monthlyCost > 0 ? `£${cost.monthlyCost.toLocaleString()}/mo` : 'Free'}
                    </p>
                    <p className="text-xs text-muted-foreground">{cost.stage}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg bg-primary/10">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total Monthly Education Cost</span>
                <span className="text-xl font-bold font-mono">£{childrensEducation.totalMonthlyCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Future Education Planning</h4>
            <div className="space-y-4">
              {childrensEducation.futurePlanning.map((plan, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium">{plan.child}</p>
                      <p className="text-sm text-muted-foreground">{plan.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold">£{plan.estimatedCost.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Estimated</p>
                    </div>
                  </div>
                  <ProgressBar
                    label="Savings Progress"
                    current={plan.currentSavings}
                    target={plan.estimatedCost}
                    showAmount={false}
                  />
                  {plan.additionalNeeds && (
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      Note: {plan.additionalNeeds}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Special Life Events Planning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {specialLifeEvents.map((event) => (
            <div key={event.id} className="p-4 rounded-lg border" data-testid={`card-event-${event.id}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold">{event.event}</h4>
                  <p className="text-sm text-muted-foreground mt-1">Target Date: {event.estimatedDate}</p>
                </div>
                <Badge variant={event.priority === "High" ? "default" : event.priority === "Medium" ? "secondary" : "outline"}>
                  {event.priority}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Cost</p>
                  <p className="text-xl font-bold font-mono">£{event.estimatedCost.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Savings</p>
                  <p className="text-xl font-bold font-mono text-chart-2">£{event.currentSavings.toLocaleString()}</p>
                </div>
              </div>
              <ProgressBar
                label="Progress"
                current={event.currentSavings}
                target={event.estimatedCost}
                showAmount={false}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tax Breakdown (2024/25)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Personal Allowance</span>
              <span className="font-mono font-semibold">£{taxBreakdown.personalAllowance.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Basic Rate Tax (20%)</span>
              <span className="font-mono font-semibold">£{taxBreakdown.basicRate.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Higher Rate Tax (40%)</span>
              <span className="font-mono font-semibold">£{taxBreakdown.higherRate.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">National Insurance</span>
              <span className="font-mono font-semibold">£{taxBreakdown.nationalInsurance.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="font-semibold">Total Tax & NI</span>
              <span className="font-mono font-bold text-xl">£{taxBreakdown.totalTax.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
