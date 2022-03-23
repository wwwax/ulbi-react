import CustomInput from "./ui/CustomInput";
import CustomSelect from "./ui/CustomSelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <CustomInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) =>
          setFilter({
            ...filter,
            query: e.target.value,
          })
        }
      />

      <CustomSelect
        defaultValue="Sorting"
        value={filter.sort}
        options={[
          {
            name: "Sort by name",
            value: "title",
          },
          {
            name: "Sort by description",
            value: "body",
          },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}
