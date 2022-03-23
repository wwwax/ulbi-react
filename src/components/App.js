import "./App.module.css";
import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList";

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Tortor",
      text: "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.",
    },
    {
      id: 2,
      title: "Malesuada",
      text: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

  function addArticle(article) {
    setArticles((articles) => [...articles, article]);
  }

  function deleteArticle(id) {
    setArticles((articles) => articles.filter((article) => article.id !== id));
  }

  return (
    <div>
      <ArticleForm addArticle={addArticle} />
      <ArticleList articles={articles} deleteArticle={deleteArticle} />
    </div>
  );
}
