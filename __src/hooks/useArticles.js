import { useMemo } from "react";

export function useSortedArticles(articles, method) {
  const sortedArticles = useMemo(() => {
    return method
      ? [...articles].sort((a, b) => a[method].localeCompare(b[method]))
      : articles;
  }, [method, articles]);

  return sortedArticles;
}

export function useArticles(articles, method, query) {
  const sortedArticles = useSortedArticles(articles, method);

  const sortedAndFilteredArticles = useMemo(() => {
    return sortedArticles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedArticles]);

  return sortedAndFilteredArticles;
}
