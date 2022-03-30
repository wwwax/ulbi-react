import styles from "./ArticleId.module.css";
import { useParams } from "react-router-dom";
import ArticleService from "../api/ArticleService";
import useFetching from "../hooks/useFetching";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import Error from "../components/Error";

export default function ArticleId() {
  const [article, setArticle] = useState({});

  const [comments, setComments] = useState([]);

  const params = useParams();

  const [fetchArticleById, isLoading, error] = useFetching(async (id) => {
    const response = await ArticleService.getArticle(id);
    setArticle(response.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await ArticleService.getComments(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchArticleById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <>
      {error && <Error msg={error} />}

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.article}>
          <div className={styles.article__header}>
            <div className={styles.article__id}>{params.id}</div>
            <div className={styles.article__title}>{article.title}</div>
          </div>

          <div>{article.body}</div>

          <h4>Comments</h4>

          {commentsError && <Error msg={commentsError} />}

          {isCommentsLoading ? (
            <Loader />
          ) : (
            <div>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <div>{comment.email}</div>
                  <div>{comment.body}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
