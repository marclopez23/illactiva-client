import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext.utils";

function PrivateRoute({ path, exact, children }) {
  const { user } = useAuth();
  if (!user.isLogged) {
    return <Redirect to="/iniciar-sesion" />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
