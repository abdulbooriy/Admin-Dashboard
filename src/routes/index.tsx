import { Navigate, useRoutes } from "react-router-dom";

import Login from "../layouts/auth/login/Login";
import Dashboard from "@/layouts/dashboard/Sidebar";
import Products from "@/pages/Products/Products";
import Brands from "@/pages/Brands/Brands";
import Employees from "@/pages/Employees/Employees";

import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { GuestRoute } from "./GuestRoute/GuestRoute";

export function Router() {
  return useRoutes([
    { path: "/", element: <Navigate to="/login" replace /> },
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Navigate to="products" replace /> },
        { path: "products", element: <Products /> },
        { path: "brands", element: <Brands /> },
        { path: "employees", element: <Employees /> },
      ],
    },
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);
}
