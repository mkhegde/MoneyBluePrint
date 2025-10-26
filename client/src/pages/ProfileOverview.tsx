import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/StatCard";
import { PoundSterling, TrendingUp, PiggyBank, Receipt, Users, GraduationCap, AlertCircle } from "lucide-react";
import { profileData, dependantsData } from "@/lib/dummyData";

type ProfileOverviewProps = {
  showTitle?: boolean;
};

export default function ProfileOverview({ showTitle = true }: ProfileOverviewProps) {
  return (
    <div className="space-y-8">
      {showTitle && (
        <div>
          <h1 className="text-4xl font-bold">Profile Overview</h1>
          <p className="text-muted-foreground mt-2">
            Your comprehensive financial snapshot
          </p>
        </div>
      )}

      <Card data-testid="card-profile-details">
        <CardContent className="p-8">
          <div className="flex flex-wrap items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl font-semibold">
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold" data-testid="text-profile-name">{profileData.name}</h2>
              <p className="text-muted-foreground">{profileData.employment}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <span data-testid="text-age">{profileData.age} years old</span>
                <span>•</span>
                <span data-testid="text-location">{profileData.location}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Annual Income"
          value={`£${profileData.annualIncome.toLocaleString()}`}
          icon={PoundSterling}
          subtitle={`£${profileData.monthlyIncome.toLocaleString()}/month`}
        />
        <StatCard
          title="Net Worth"
          value={`£${profileData.netWorth.toLocaleString()}`}
          icon={TrendingUp}
          trend={{ value: "+12% YoY", positive: true }}
        />
        <StatCard
          title="Savings Rate"
          value={`${profileData.savingsRate}%`}
          icon={PiggyBank}
          subtitle="Of gross income"
        />
        <StatCard
          title="Tax Paid (Annual)"
          value={`£${profileData.taxPaid.toLocaleString()}`}
          icon={Receipt}
          subtitle="Inc. NI contributions"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Dependants
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{dependantsData.spouse.name}</h4>
                <Badge variant="secondary">{dependantsData.spouse.age} years</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{dependantsData.spouse.employment}</p>
              <p className="text-sm font-mono mt-1">Income: £{dependantsData.spouse.income.toLocaleString()}/year</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Children</h4>
              <div className="space-y-3">
                {dependantsData.children.map((child, index) => (
                  <div key={index} className="p-4 rounded-lg border" data-testid={`card-child-${index + 1}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <h5 className="font-medium">{child.name}</h5>
                          <p className="text-sm text-muted-foreground">{child.age} years old</p>
                        </div>
                      </div>
                      {child.specialNeeds && (
                        <Badge variant="outline" className="gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Special Needs
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{child.education}</p>
                    {child.specialNeeds && child.specialNeedsDetails && (
                      <p className="text-sm text-muted-foreground mt-2 italic">
                        {child.specialNeedsDetails}
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
            <CardTitle>Financial Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Household Income</p>
                <p className="text-2xl font-bold font-mono">
                  £{(profileData.annualIncome + dependantsData.spouse.income).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Combined annual</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Savings</p>
                <p className="text-2xl font-bold font-mono text-chart-2">
                  £{Math.round(profileData.monthlyIncome * (profileData.savingsRate / 100)).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Annual Tax Burden</p>
                <p className="text-2xl font-bold font-mono">
                  {((profileData.taxPaid / profileData.annualIncome) * 100).toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Take Home</p>
                <p className="text-2xl font-bold font-mono">
                  £{(profileData.annualIncome - profileData.taxPaid).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
