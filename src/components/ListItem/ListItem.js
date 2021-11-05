import CustomButton from "../UI/CustomButton";
import style from "./ListItem.module.css";

const ListItem = ({ item }) => {
  return (
    <li className={style.listItem}>
      <h3 className={style.listItemTitle}>{item.title}</h3>
      <p className={style.listItemDesc}>{item.description}</p>
      <CustomButton>delete</CustomButton>
    </li>
  );
};

export default ListItem;
