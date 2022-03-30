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
