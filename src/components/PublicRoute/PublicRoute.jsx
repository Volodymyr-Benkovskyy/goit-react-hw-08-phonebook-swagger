import { selectIsAuth } from "components/redux/auth/authselector";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component, redirectTo = "/" }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? component : <Navigate to={redirectTo} />;
};
export default PublicRoute;