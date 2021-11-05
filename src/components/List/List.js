import ListItem from "../ListItem";
import style from "./List.module.css";

const List = ({ title, items }) => {
  return (
    <div className={style.listContainer}>
      <h2 className={style.listTitle}>{title}</h2>
      <ul className={style.list}>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
