import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import ProfileOverview from "@/pages/ProfileOverview";
import QuantitativeAnalysis from "@/pages/QuantitativeAnalysis";
import QualitativeAnalysis from "@/pages/QualitativeAnalysis";
import FinancialProtection from "@/pages/FinancialProtection";
import FinancialMindset from "@/pages/FinancialMindset";
import ActionPlan from "@/pages/ActionPlan";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ProfileOverview} />
      <Route path="/quantitative" component={QuantitativeAnalysis} />
      <Route path="/qualitative" component={QualitativeAnalysis} />
      <Route path="/protection" component={FinancialProtection} />
      <Route path="/mindset" component={FinancialMindset} />
      <Route path="/action-plan" component={ActionPlan} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <header className="flex items-center justify-between p-4 border-b border-border">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto p-8">
                <div className="max-w-7xl mx-auto">
                  <Router />
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
