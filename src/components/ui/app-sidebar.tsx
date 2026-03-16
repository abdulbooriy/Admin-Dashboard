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

const data = {
  user: {
    name: "Your Profile Name",
    email: "your-email-address",
    avatar: "Your Avatar",
  },
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Brends",
      url: "#",
      icon: <ChartAreaIcon />,
    },
    {
      title: "Employees",
      url: "#",
      icon: <UsersRoundIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavMain items={data.navMain} />
      </SidebarContent>
      <NavUser user={data.user} />
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
