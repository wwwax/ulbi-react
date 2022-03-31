import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li className={styles.navigation__item}>
        <Link className={styles.navigation__link} to="/about">
          About
        </Link>
      </li>

      <li className={styles.navigation__item}>
        <Link className={styles.navigation__link} to="/posts">
          Posts
        </Link>
      </li>
    </ul>
  );
}
