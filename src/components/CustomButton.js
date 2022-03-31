import styles from "./CustomButton.module.css";

export default function CustomButton({ children, customOnClick }) {
  return (
    <button className={styles.btn} onClick={customOnClick}>
      {children}
    </button>
  );
}
