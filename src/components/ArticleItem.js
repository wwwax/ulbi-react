import styles from "./ArticleItem.module.css";
import CustomButton from "../ui/CustomButton";
import { useHistory } from "react-router-dom";

export default function ArticleItem({ article, deleteArticle }) {
  const router = useHistory();

  return (
    <div className={styles.item}>
      <span className={styles.itemId}>{article.id}</span>
      <h2 className={styles.title}>{article.title}</h2>
      <p>{article.body}</p>

      <div className={styles.btn__wrapper}>
        <CustomButton onClick={() => router.push(`/articles/${article.id}`)}>
          Open
        </CustomButton>

        <CustomButton onClick={() => deleteArticle(article.id)}>
          Delete
        </CustomButton>
      </div>
    </div>
  );
}
