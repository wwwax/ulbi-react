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
      <CustsomButton onClick={login} buttonType="bg-primary">
        Login
      </CustsomButton>

      <span className="text-white absolute bottom-4 right-4 font-beau text-4xl">
        www4x
      </span>
    </div>
  );
}
