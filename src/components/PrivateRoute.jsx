import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.isAuthenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
