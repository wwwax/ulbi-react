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
    <div className="h-screen bg-black flex justify-center items-center relative">
      <CustsomButton onClick={login} primary={true}>
        Login
      </CustsomButton>

      <span className="text-white font-consolas absolute bottom-4 right-4">www4x</span>
    </div>
  );
}
