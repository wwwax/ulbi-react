import { Link } from "react-router-dom";
import { useContext } from "react";
import CustomButton from "../ui/CustomButton";
import styles from "./Navigation.module.css";
import { AuthContext } from "../context";

export default function Navigation() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <>
      <div className={styles.navigation}>
        <Link className={styles.navigation__item} to="/about">
          About
        </Link>

        <Link className={styles.navigation__item} to="/articles">
          Articles
        </Link>

        {isAuth ? (
          <div>
            <CustomButton className={styles.navigation__item} onClick={logout}>
              Logout
            </CustomButton>
          </div>
        ) : null}
      </div>
    </>
  );
}
