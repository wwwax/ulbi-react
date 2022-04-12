import { useContext } from "react";
import { AuthContext } from "../context";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Header from "./Header";
import Posts from "../pages/Posts";
import Albums from "../pages/Albums";
import Photos from "../pages/Photos";
import Todos from "../pages/Todos";

export default function Auth() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/albums" component={Albums} exact />
          <Route path="/photos" component={Photos} exact />
          <Route path="/todos" component={Todos} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  ) : (
    <Login />
  );
}
