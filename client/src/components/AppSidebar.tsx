import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LayoutDashboard, User, TrendingUp, Target, Shield, Brain, ListChecks } from "lucide-react";
import { useLocation } from "wouter";

const menuItems = [
  {
    title: "All-in-One Summary",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Profile Overview",
    url: "/profile",
    icon: User,
  },
  {
    title: "Quantitative Analysis",
    url: "/quantitative",
    icon: TrendingUp,
  },
  {
    title: "Qualitative Analysis",
    url: "/qualitative",
    icon: Target,
  },
  {
    title: "Financial Protection",
    url: "/protection",
    icon: Shield,
  },
  {
    title: "Financial Mindset",
    url: "/mindset",
    icon: Brain,
  },
  {
    title: "Action Plan",
    url: "/action-plan",
    icon: ListChecks,
  },
];

export default function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold">Financial Blueprint</h1>
        <p className="text-sm text-muted-foreground">UK Personal Finance</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <a href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
