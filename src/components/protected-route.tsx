import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  children?: ReactElement;
  isAuthenticated: boolean;
  isAdmin?: boolean;
  admin?: boolean;
  redirect?: string;
}
const ProtectedRoute = ({
  children,
  isAuthenticated,
  isAdmin,
  admin,
  redirect = "/",
}: Props) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;
  if (isAdmin && !admin) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
