import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, deleteArticle }) {
  return articles.length ? (
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          deleteArticle={deleteArticle}
        />
      ))}
    </div>
  ) : (
    <h1
      style={{
        textAlign: "center",
        fontFamily: "consolas",
      }}
    >
      Empty List
    </h1>
  );
}
