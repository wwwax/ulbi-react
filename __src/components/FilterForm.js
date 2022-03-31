import styles from "./FilterForm.module.css";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";

export default function FilterForm({ filter, setFilter }) {
  return (
    <form className={styles.form}>
      <CustomInput
        type="text"
        placeholder="filter"
        value={filter.query}
        onChange={(query) => setFilter((filter) => ({ ...filter, query }))}
      />

      <CustomSelect
        value={filter.method}
        onChange={(method) => setFilter((filter) => ({ ...filter, method }))}
      />
    </form>
  );
}
