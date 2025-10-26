import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Clock, TrendingUp } from "lucide-react";
import { actionPlan } from "@/lib/dummyData";
import { useState } from "react";

type ActionPlanProps = {
  showTitle?: boolean;
};

export default function ActionPlan({ showTitle = true }: ActionPlanProps) {
  const [completedItems, setCompletedItems] = useState<number[]>([]);

  const toggleComplete = (id: number) => {
    setCompletedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const categories = ["Immediate", "Short-term", "Medium-term", "Long-term"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Immediate":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      case "Short-term":
        return <Clock className="h-5 w-5 text-chart-4" />;
      case "Medium-term":
        return <Clock className="h-5 w-5 text-chart-1" />;
      case "Long-term":
        return <TrendingUp className="h-5 w-5 text-chart-2" />;
      default:
        return null;
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "Immediate":
        return "Next 0-3 months";
      case "Short-term":
        return "3-6 months";
      case "Medium-term":
        return "6-12 months";
      case "Long-term":
        return "12+ months";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      {showTitle && (
        <div>
          <h1 className="text-4xl font-bold">Action Plan</h1>
          <p className="text-muted-foreground mt-2">
            Prioritized steps to achieve your financial goals
          </p>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Progress Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Actions</p>
              <p className="text-3xl font-bold font-mono">{actionPlan.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-3xl font-bold font-mono text-chart-2">{completedItems.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-3xl font-bold font-mono text-chart-4">
                {actionPlan.length - completedItems.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completion</p>
              <p className="text-3xl font-bold font-mono">
                {Math.round((completedItems.length / actionPlan.length) * 100)}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {categories.map((category) => {
        const items = actionPlan.filter(item => item.category === category);
        if (items.length === 0) return null;

        return (
          <div key={category}>
            <div className="flex items-center gap-3 mb-4">
              {getCategoryIcon(category)}
              <div>
                <h2 className="text-2xl font-semibold">{category}</h2>
                <p className="text-sm text-muted-foreground">{getCategoryDescription(category)}</p>
              </div>
            </div>

            <div className="space-y-4">
              {items.map((action) => (
                <Card
                  key={action.id}
                  className={completedItems.includes(action.id) ? "opacity-60" : ""}
                  data-testid={`card-action-${action.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={completedItems.includes(action.id)}
                        onCheckedChange={() => toggleComplete(action.id)}
                        data-testid={`checkbox-action-${action.id}`}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3
                              className={`font-semibold text-lg ${completedItems.includes(action.id) ? 'line-through' : ''}`}
                              data-testid={`text-action-title-${action.id}`}
                            >
                              {action.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {action.description}
                            </p>
                          </div>
                          <Badge
                            variant={
                              action.priority === "High"
                                ? "default"
                                : action.priority === "Medium"
                                ? "secondary"
                                : "outline"
                            }
                            data-testid={`badge-action-priority-${action.id}`}
                          >
                            {action.priority}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{action.timeframe}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <TrendingUp className="h-4 w-4" />
                            <span>{action.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">This Week</h4>
              <p className="text-sm text-muted-foreground">
                Focus on getting quotes for income protection insurance and reviewing your emergency fund progress.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">This Month</h4>
              <p className="text-sm text-muted-foreground">
                Complete emergency fund target and research ISA providers for maximizing your allowance.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">This Quarter</h4>
              <p className="text-sm text-muted-foreground">
                Review all insurance policies, increase life insurance coverage, and optimize pension contributions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
