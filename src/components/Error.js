import styles from "./Error.module.css";

export default function Error({ msg }) {
  return <h1 className={styles.error}>Error: {msg}</h1>;
}
