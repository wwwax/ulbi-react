import { useContext } from "react";
import CustsomButton from "../components/CustsomButton";
import { AuthContext } from "../context";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);

  function login() {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  }

  return (
    <div className="login">
      <CustsomButton onClick={login} primary>
        Login
      </CustsomButton>

      <span className="logo">www4x</span>
    </div>
  );
}
