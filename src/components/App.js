import { AuthContext } from "../context";
import Auth from "./Auth";
import { useState, useEffect } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}
