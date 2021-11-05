import CustomButton from "../UI/CustomButton";
import style from "./ListItem.module.css";

const ListItem = ({ item, deletePost }) => {
  const onDeleteButtonClick = (id) => {
    deletePost(id);
  };

  return (
    <li className={style.listItem}>
      <h3 className={style.listItemTitle}>{item.title}</h3>
      <p className={style.listItemDesc}>{item.description}</p>
      <CustomButton onClick={() => onDeleteButtonClick(item.id)}>
        delete
      </CustomButton>
    </li>
  );
};

export default ListItem;
