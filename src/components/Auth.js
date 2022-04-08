import { useContext } from "react";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Posts from "../pages/Posts";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";

export default function Auth() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/albums" component={Albums} exact />
        <Route path="/photos" component={Photos} exact />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  ) : (
    <Login />
  );
}
