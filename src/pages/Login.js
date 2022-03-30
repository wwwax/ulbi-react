import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.login}>
      <h2 className={styles.login__title}>Login</h2>

      <form>
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
