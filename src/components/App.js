import "./App.module.css";
import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleList from "./ArticleList";
import FilterForm from "./FilterForm";
import Modal from "./Modal";
import CustomButton from "../ui/CustomButton";
import { useArticles } from "../hooks/useArticles";

export default function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Tortor",
      text: "Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.",
    },
    {
      id: 2,
      title: "Malasuada",
      text: "Tulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    },
    {
      id: 3,
      title: "Malosuade",
      text: "Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

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

  function addArticle(article) {
    setArticles((articles) => [article, ...articles]);
    setShowModal(false);
  }

  function deleteArticle(id) {
    setArticles((articles) => articles.filter((article) => article.id !== id));
  }

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ArticleForm addArticle={addArticle} />
      </Modal>

      <CustomButton onClick={() => setShowModal(true)}>
        Create article
      </CustomButton>

      <FilterForm filter={filter} setFilter={setFilter} />

      <ArticleList
        articles={sortedAndFilteredArticles}
        deleteArticle={deleteArticle}
      />
    </div>
  );
}
