import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";

export default function AppRouter() {
  const isAuth = false;

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} />
      ))}

      <Redirect to="/articles" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
}
