import styles from "./ArticleList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, deleteArticle }) {
  return articles.length ? (
    <div>
      <TransitionGroup>
        {articles.map((article) => (
          <CSSTransition key={article.id} timeout={500} classNames="article">
            <ArticleItem article={article} deleteArticle={deleteArticle} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  ) : (
    <h1 className={styles.empty}>Empty List</h1>
  );
}
