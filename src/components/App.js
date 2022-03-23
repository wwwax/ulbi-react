import styles from "./App.module.css";
import { useState, useMemo } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      body: "abcd",
    },
    {
      id: 2,
      title: "CSS",
      body: "cdef",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "bcde",
    },
  ]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  function addNewPost(post) {
    setPosts((posts) => [...posts, post]);
  }

  function deletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  return (
    <div className={styles.app}>
      <PostForm addNewPost={addNewPost} />

      <hr style={{ margin: "20px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        posts={sortedAndFilteredPosts}
        title={"Posts"}
        deletePost={deletePost}
      />
    </div>
  );
}
