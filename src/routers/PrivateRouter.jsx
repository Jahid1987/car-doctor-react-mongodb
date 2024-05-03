import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useAuth();

  const location = useLocation();

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
