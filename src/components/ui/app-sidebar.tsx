import * as React from "react";

import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  LayoutDashboardIcon,
  ChartAreaIcon,
  UsersRoundIcon,
} from "lucide-react";

import { useAuth } from "@/api/features/hooks/useAuth";

const navItems = [
  {
    title: "Products",
    url: "/dashboard/products",
    icon: <LayoutDashboardIcon />,
  },
  {
    title: "Brands",
    url: "/dashboard/brands",
    icon: <ChartAreaIcon />,
  },
  {
    title: "Employees",
    url: "/dashboard/employees",
    icon: <UsersRoundIcon />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { getMyProfile } = useAuth();

  const user = {
    name: getMyProfile.data?.name ?? "...",
    email: getMyProfile.data?.email ?? "...",
    avatar: "",
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="#">
                <LayoutDashboardIcon className="size-5!" />
                <span className="text-base font-semibold">Admin Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
