import type { ComponentType } from "react";
import { ArrowDownRight, ArrowUpRight, LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfileOverview from "@/pages/ProfileOverview";
import QuantitativeAnalysis from "@/pages/QuantitativeAnalysis";
import QualitativeAnalysis from "@/pages/QualitativeAnalysis";
import FinancialProtection from "@/pages/FinancialProtection";
import FinancialMindset from "@/pages/FinancialMindset";
import ActionPlan from "@/pages/ActionPlan";
import {
  profileData,
  financialGoals,
  riskTolerance,
  insuranceCoverage,
  actionPlan,
} from "@/lib/dummyData";

const highPriorityGoals = financialGoals.filter((goal) => goal.priority === "High");
const protectionGaps = insuranceCoverage.filter((policy) => policy.status !== "Adequate");

const highlightCards = [
  {
    title: "Net Worth",
    value: `£${profileData.netWorth.toLocaleString()}`,
    helper: "Combined assets after liabilities",
  },
  {
    title: "Monthly Income",
    value: `£${profileData.monthlyIncome.toLocaleString()}`,
    helper: "Household take-home estimate",
  },
  {
    title: "Savings Rate",
    value: `${profileData.savingsRate}%`,
    helper: "Portion of income saved",
  },
  {
    title: "High-priority Goals",
    value: `${highPriorityGoals.length}`,
    helper: "Targets needing immediate focus",
  },
  {
    title: "Protection gaps",
    value: `${protectionGaps.length}`,
    helper: "Policies to review soon",
  },
  {
    title: "Risk tolerance",
    value: riskTolerance.level,
    helper: riskTolerance.description,
  },
  {
    title: "Action items",
    value: `${actionPlan.length}`,
    helper: "Steps tracked in your plan",
  },
];

const summarySections: Array<{
  id: string;
  title: string;
  description: string;
  href: string;
  Component: ComponentType<{ showTitle?: boolean }>;
}> = [
  {
    id: "profile",
    title: "Profile overview",
    description: "Household demographics and core financial stats.",
    href: "/profile",
    Component: ProfileOverview,
  },
  {
    id: "quantitative",
    title: "Quantitative analysis",
    description: "Income, expenditure, savings, and education planning.",
    href: "/quantitative",
    Component: QuantitativeAnalysis,
  },
  {
    id: "qualitative",
    title: "Qualitative analysis",
    description: "Goals, risk appetite, and lifestyle drivers.",
    href: "/qualitative",
    Component: QualitativeAnalysis,
  },
  {
    id: "protection",
    title: "Financial protection",
    description: "Insurance cover levels and emergency readiness.",
    href: "/protection",
    Component: FinancialProtection,
  },
  {
    id: "mindset",
    title: "Financial mindset",
    description: "Behaviours and confidence across money domains.",
    href: "/mindset",
    Component: FinancialMindset,
  },
  {
    id: "action-plan",
    title: "Action plan",
    description: "Prioritised steps to advance your objectives.",
    href: "/action-plan",
    Component: ActionPlan,
  },
];

export default function FinancialBlueprintSummary() {
  return (
    <div className="space-y-12" id="top">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <LayoutDashboard className="h-4 w-4" />
          Unified dashboard overview
        </div>
        <div>
          <h1 className="text-4xl font-bold">Financial Blueprint summary</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            Review every dimension of your financial plan on a single page. Jump directly to the
            section you need or open the full detailed views for deeper analysis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {highlightCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className="text-2xl font-bold font-mono text-foreground">{card.value}</div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {card.helper}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {summarySections.map((section) => (
          <Card key={section.id} className="hover:border-primary transition-colors" id={`link-${section.id}`}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <ArrowDownRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <a href={`#${section.id}`}>Jump to section</a>
                </Button>
                <Button asChild size="sm" variant="ghost" className="gap-1">
                  <a href={section.href}>
                    View full page
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-16">
        {summarySections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
              <Button asChild size="sm" variant="outline" className="gap-1">
                <a href={section.href}>
                  Open detailed view
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <section.Component showTitle={false} />
            <div className="text-right">
              <a
                className="text-sm text-muted-foreground hover:text-primary"
                href="#top"
              >
                Back to top
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
