import styles from "./CustomSelect.module.css";

export default function CustomSelect({ value, onChange }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        Choose sort method
      </option>
      <option value="title">Sort by title</option>
      <option value="body">Sort by text</option>
    </select>
  );
}
