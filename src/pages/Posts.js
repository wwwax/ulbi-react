import styles from "./Posts.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PostForm from "../components/PostForm";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function addPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function deletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  async function getPosts() {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (error) return <Error msg={error.message} />;

  if (loading) return <Loader />;

  return (
    <div className={styles.posts}>
      <h1 className={styles.posts__title}>Posts</h1>

      <PostForm addPost={addPost} />

      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}
