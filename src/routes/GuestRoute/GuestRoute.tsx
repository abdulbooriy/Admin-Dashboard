import { Navigate } from "react-router-dom";

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const user = localStorage.getItem("user");
  if (user) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}
