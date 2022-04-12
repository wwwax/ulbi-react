import { useState, useEffect } from "react";
import ArticleForm from "../components/ArticleForm";
import ArticleList from "../components/ArticleList";
import FilterForm from "../components/FilterForm";
import Modal from "../components/Modal";
import CustomButton from "../ui/CustomButton";
import { useArticles } from "../hooks/useArticles";
import ArticleService from "../api/ArticleService";
import Loader from "../ui/Loader";
import useFetching from "../hooks/useFetching";
import Error from "../components/Error";
import { getPagesCount } from "../utils/pages";
import Pagination from "../ui/Pagination";

export default function Articles() {
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

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchArticles, isArticlesLoading, articlesError] = useFetching(
    async (limit, page) => {
      const response = await ArticleService.getAll(limit, page);
      setArticles(response.data);

      const totalArticlesCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalArticlesCount, limit));
    }
  );

  function addArticle(article) {
    setArticles((articles) => [article, ...articles]);
    setShowModal(false);
  }

  function deleteArticle(id) {
    setArticles((articles) => articles.filter((article) => article.id !== id));
  }

  function changePage(page) {
    setPage(page);
    fetchArticles(limit, page);
  }

  useEffect(() => {
    fetchArticles(limit, page);
  }, []);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ArticleForm addArticle={addArticle} />
      </Modal>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <CustomButton onClick={() => setShowModal(true)}>
          Create article
        </CustomButton>
      </div>

      <FilterForm filter={filter} setFilter={setFilter} />

      <Pagination totalPages={totalPages} changePage={changePage} page={page} />

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
