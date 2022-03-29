import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Link className={styles.navigation__item} to="/about">
        About
      </Link>

      <Link className={styles.navigation__item} to="/articles">
        Articles
      </Link>
    </div>
  );
}
