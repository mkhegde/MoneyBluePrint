import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { insuranceCoverage, emergencyFundData } from "@/lib/dummyData";

export default function FinancialProtection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Adequate":
        return "text-chart-2";
      case "Underinsured":
        return "text-chart-4";
      case "Not Covered":
        return "text-destructive";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Adequate":
        return <CheckCircle2 className="h-5 w-5 text-chart-2" />;
      case "Underinsured":
        return <AlertCircle className="h-5 w-5 text-chart-4" />;
      case "Not Covered":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Financial Protection</h1>
        <p className="text-muted-foreground mt-2">
          Insurance coverage and emergency preparedness
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Emergency Fund Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Current Balance</p>
              <p className="text-3xl font-bold font-mono">
                £{emergencyFundData.current.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Monthly Expenses</p>
              <p className="text-3xl font-bold font-mono">
                £{emergencyFundData.monthlyExpenses.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Months Covered</p>
              <p className="text-3xl font-bold font-mono text-chart-4">
                {emergencyFundData.monthsCovered}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress to {emergencyFundData.targetMonths}-month target</span>
              <span className="font-mono">
                {Math.round((emergencyFundData.current / emergencyFundData.target) * 100)}%
              </span>
            </div>
            <Progress
              value={(emergencyFundData.current / emergencyFundData.target) * 100}
              className="h-2"
            />
            <p className="text-sm text-muted-foreground">
              £{(emergencyFundData.target - emergencyFundData.current).toLocaleString()} remaining to reach target
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Insurance Coverage Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {insuranceCoverage.map((insurance, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border"
              data-testid={`card-insurance-${insurance.type.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  {getStatusIcon(insurance.status)}
                  <div>
                    <h3 className="font-semibold text-lg">{insurance.type}</h3>
                    <p className={`text-sm font-medium ${getStatusColor(insurance.status)}`}>
                      {insurance.status}
                    </p>
                  </div>
                </div>
                {insurance.premium > 0 && (
                  <Badge variant="secondary">
                    £{insurance.premium}/month
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Coverage</p>
                  <p className="text-2xl font-bold font-mono">
                    {insurance.coverage === 0 ? "None" : `£${insurance.coverage.toLocaleString()}`}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Recommended Coverage</p>
                  <p className="text-2xl font-bold font-mono">
                    £{insurance.recommended.toLocaleString()}
                  </p>
                </div>
              </div>

              {insurance.coverage < insurance.recommended && (
                <div className="mt-4 p-3 rounded-lg bg-muted/50">
                  <p className="text-sm font-medium">
                    Gap: £{(insurance.recommended - insurance.coverage).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insurance.status === "Not Covered"
                      ? "Consider obtaining coverage to protect against financial risk"
                      : "Consider increasing coverage to meet recommended levels"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Protection Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Coverage Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Adequate Protection</span>
                  <span className="font-mono font-semibold text-chart-2">
                    {insuranceCoverage.filter(i => i.status === "Adequate").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Underinsured</span>
                  <span className="font-mono font-semibold text-chart-4">
                    {insuranceCoverage.filter(i => i.status === "Underinsured").length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Not Covered</span>
                  <span className="font-mono font-semibold text-destructive">
                    {insuranceCoverage.filter(i => i.status === "Not Covered").length}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Total Premiums</h4>
              <p className="text-3xl font-bold font-mono mb-2">
                £{insuranceCoverage.reduce((sum, i) => sum + i.premium, 0).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">per month</p>
              <p className="text-sm text-muted-foreground mt-2">
                £{(insuranceCoverage.reduce((sum, i) => sum + i.premium, 0) * 12).toLocaleString()} annually
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
