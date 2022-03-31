import { useContext } from "react";
import { AuthContext } from "../context";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import styles from "./Login.module.css";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }

  return (
    <div className={styles.login}>
      <h2 className={styles.login__title}>Login</h2>

      <form onSubmit={login}>
        <CustomInput
          type="text"
          placeholder="login"
          onChange={(t) => console.log("t :>> ", t)}
        />

        <CustomInput
          type="password"
          placeholder="password"
          onChange={(t) => console.log("t :>> ", t)}
        />

        <CustomButton>Login</CustomButton>
      </form>
    </div>
  );
}
