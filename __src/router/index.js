import About from "../pages/About";
import ArticleId from "../pages/ArticleId";
import Articles from "../pages/Articles";
import Login from "../pages/Login";

export const privateRoutes = [
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/articles",
    component: Articles,
    exact: true,
  },
  {
    path: "/articles/:id",
    component: ArticleId,
    exact: true,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
