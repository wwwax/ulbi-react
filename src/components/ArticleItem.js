import styles from "./ArticleItem.module.css";
import CustomButton from "../ui/CustomButton";

export default function ArticleItem({ article, deleteArticle }) {
  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{article.title}</h2>
      <p>{article.body}</p>
      <CustomButton onClick={() => deleteArticle(article.id)}>
        Delete
      </CustomButton>
    </div>
  );
}
