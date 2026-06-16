import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
interface IProtectedRoute {
  onlyUnAuth?: boolean;
}
export const ProtectedRoute = (props: IProtectedRoute) => {
  const { onlyUnAuth } = props;
  const { isAuth } = useContext(AuthContext)!;
  if (onlyUnAuth) {
    if (isAuth) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  }
  if (!isAuth) {
    return <Navigate to="/authorization" />;
  }

  return <Outlet />;
};
