import styles from "./App.module.css";
import { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "HTML",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "CSS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis quia nihil animi illum cum neque nesciunt maiores ducimus nam!",
    },
    {
      id: 3,
      title: "JavaScript",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis!",
    },
  ]);

  const addNewPost = (post) => setPosts((posts) => [...posts, post]);

  const deletePost = (id) =>
    setPosts((posts) => posts.filter((post) => post.id !== id));

  return (
    <div className={styles.app}>
      <PostForm addNewPost={addNewPost} />
      {posts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Empty List</h2>
      ) : (
        <PostList posts={posts} title={"Posts"} deletePost={deletePost} />
      )}
    </div>
  );
}
