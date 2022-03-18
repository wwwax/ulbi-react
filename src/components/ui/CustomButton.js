import styles from "./CustomButton.module.css";

export default function CustomButton({ children, ...props }) {
  return <button className={styles.customButton} {...props}>{children}</button>;
}
