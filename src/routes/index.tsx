import { useRoutes } from "react-router-dom";

import Login from "../layouts/auth/login/Login";
import Dashboard from "@/layouts/dashboard/Sidebar";

export function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
}
