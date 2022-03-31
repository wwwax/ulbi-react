import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <div className="container">
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/posts" exact component={Posts} />
          <Redirect to="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
