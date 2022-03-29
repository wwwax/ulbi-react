import { Routes, Route, Navigate } from "react-router-dom";
import Error from "./Error";
import About from "../pages/About";
import Articles from "../pages/Articles";

export default function AppRouter(params) {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/" element={<Navigate replace to="/articles" />} />
      <Route path="*" element={<Error msg="Not found" />} />
    </Routes>
  );
}
