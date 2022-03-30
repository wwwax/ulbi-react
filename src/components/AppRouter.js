import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "../ui/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}

      <Redirect to="/articles" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
}
