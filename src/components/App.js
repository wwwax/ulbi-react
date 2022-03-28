import "./App.module.css";
import { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList";
import FilterForm from "./FilterForm";
import Modal from "./Modal";
import CustomButton from "../ui/CustomButton";
import { useArticles } from "../hooks/useArticles";
import ArticleService from "../API/ArticleService";
import Loader from "../ui/Loader";
import useFetching from "../hooks/useFetching";
import Error from "./Error";

export default function App() {
  const [articles, setArticles] = useState([]);

  const [filter, setFilter] = useState({
    method: "",
    query: "",
  });

  const [showModal, setShowModal] = useState(false);

  const sortedAndFilteredArticles = useArticles(
    articles,
    filter.method,
    filter.query
  );

  const [fetchArticles, isArticlesLoading, articlesError] = useFetching(
    async () => {
      const articles = await ArticleService.getAll();
      setArticles(articles);
    }
  );

  function addArticle(article) {
    setArticles((articles) => [article, ...articles]);
    setShowModal(false);
  }

  function deleteArticle(id) {
    setArticles((articles) => articles.filter((article) => article.id !== id));
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ArticleForm addArticle={addArticle} />
      </Modal>

      <CustomButton onClick={() => setShowModal(true)}>
        Create article
      </CustomButton>

      <CustomButton onClick={fetchArticles}>Fetch data</CustomButton>

      <FilterForm filter={filter} setFilter={setFilter} />

      {articlesError && <Error msg={articlesError} />}

      {isArticlesLoading ? (
        <Loader />
      ) : (
        <ArticleList
          articles={sortedAndFilteredArticles}
          deleteArticle={deleteArticle}
        />
      )}
    </div>
  );
}
