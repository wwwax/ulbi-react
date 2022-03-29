import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import AppRouter from "./AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}

/*
<Routes>
  <Route path="" element={<Main />}></Route>
  <Route path="/about" element={<About />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/posts/:id" element={<PostIdPage />} />
  <Route path="/404" element={<Error />} />
  <Route path="*" element={<Navigate replace to="/404" />} />
</Routes>

Или последний роут
  <Route path="*" element={<Error />} />
чтоб не перекидывало, а просто показывало ошибку.
*/
