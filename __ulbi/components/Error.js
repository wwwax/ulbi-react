import styles from "./Error.module.css";

export default function Error({ msg }) {
  return (
    <div className={styles.error}>
      <h2>{`Error: ${msg}`}</h2>
    </div>
  );
}
