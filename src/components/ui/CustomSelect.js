export default function CustomSelect({
  defaultValue,
  value,
  options,
  onSelectChange,
}) {
  return (
    <select value={value} onChange={(e) => onSelectChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>

      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
