import styles from "./CustomInput.module.css";

export default function CustomInput(params) {
  return (
    <input
      className={styles.input}
      {...params}
      onChange={(e) => params.onChange(e.target.value, params.name)}
    />
  );
}
