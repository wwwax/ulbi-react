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
    <div className="bg-black py-5">
      <div className="container mx-auto flex justify-between items-center">
        <Navigation />

        <Link to="/">
          <CustsomButton onClick={logout} addStyles='bg-secondary'>
            Logout
          </CustsomButton>
        </Link>
      </div>
    </div>
  );
}
