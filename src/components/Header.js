import CustsomButton from "./CustsomButton";
import Navigation from "./Navigation";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Link } from "react-router-dom";

export default function Header() {
  const { setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <Navigation />

          <Link to="/">
            <CustsomButton onClick={logout}>Logout</CustsomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
