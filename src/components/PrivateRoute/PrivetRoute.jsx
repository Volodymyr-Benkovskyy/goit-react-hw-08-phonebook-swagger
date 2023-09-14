import { selectIsAuth } from "components/redux/auth/authselector";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({component, redirectTo = "/login"}) => {
  const isAuth = useSelector(selectIsAuth)
  return isAuth ? component : <Navigate to={redirectTo}/>
}


export default PrivateRoute;