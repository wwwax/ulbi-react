import ListItem from "../ListItem";
import style from "./List.module.css";

const List = ({ items }) => {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
