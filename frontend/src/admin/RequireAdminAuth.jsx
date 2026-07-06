import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "./auth";

export default function RequireAdminAuth({ children, roles }) {
  if (!isAuthenticated()) return <Navigate to="/admin/login" replace />;
  if (roles && !roles.includes(getRole())) return <Navigate to="/admin/doctors" replace />;
  return children;
}
