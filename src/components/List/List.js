import ListItem from "../ListItem";
import style from "./List.module.css";

const List = ({ items, deletePost }) => {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <ListItem item={item} key={item.id} deletePost={deletePost} />
      ))}
    </ul>
  );
};

export default List;
