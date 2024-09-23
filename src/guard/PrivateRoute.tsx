import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import routes from "../constants/routes";

const PrivatRoute = () => {
  const { token } = useAuth();

  return token === null ? <Navigate to={routes.HOME} /> : <Outlet />;
};

export default PrivatRoute;
