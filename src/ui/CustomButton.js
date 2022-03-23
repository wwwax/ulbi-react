import styles from "./CustomButton.module.css";

export default function CustomButton(params) {
  return (
    <button className={styles.btn} onClick={params.onClick}>
      {params.children}
    </button>
  );
}
