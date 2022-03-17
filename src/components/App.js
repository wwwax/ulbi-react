import { useState } from "react";
import PostList from "./PostList";
import styles from "./App.module.css";

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

  return (
    <div className={styles.app}>
      <PostList posts={posts} title={"Frontend"} />
    </div>
  );
}
